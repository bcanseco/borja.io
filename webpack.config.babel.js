import fs from 'fs';
import { resolve, join } from 'path';
import { NoEmitOnErrorsPlugin, HotModuleReplacementPlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import PwaManifestPlugin from 'webpack-pwa-manifest';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import { GenerateSW as WorkboxPlugin } from 'workbox-webpack-plugin';
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin';
import SitemapPlugin from 'sitemap-webpack-plugin';
import RobotsTxtPlugin from 'robotstxt-webpack-plugin';
import { routes, redirects } from './src/paths';
import { name as domain } from './package.json';
import { configurations as vsCodeDebugConfigs } from './.vscode/launch.json';

const { NODE_ENV, IS_VSCODE_TASK } = process.env;
const isDevBuild = NODE_ENV !== 'production';
const sourceDir = resolve(__dirname, 'src');
const buildDir = resolve(__dirname, 'dist');
const htmlPath = resolve(sourceDir, 'templates', 'index.html');

export default {
  mode: NODE_ENV,
  watch: isDevBuild,
  devtool: isDevBuild ? 'eval-source-map' : false,
  entry: {
    bundle: sourceDir,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: '@fullhuman/purgecss-loader',
            options: {
              content: [
                join(sourceDir, '/**/*.{js,jsx,html}'),
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(ico|jpe?g|png|gif|svg|eot|ttf|otf|woff2?)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: resolve(buildDir, 'public'),
    filename: isDevBuild ? '[name].[hash].js' : '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NoEmitOnErrorsPlugin(),
    new PreloadWebpackPlugin({ rel: 'prefetch' }),
  ].concat(isDevBuild ? [
    /* Development-only plugins */
    new HtmlWebpackPlugin({ template: htmlPath }),
    new HotModuleReplacementPlugin(),
  ] : [
    /* Production-only plugins */
    ...(Object.values(routes).concat('/404').map((path) => path.slice(1)).map((path) => new HtmlWebpackPlugin({
      template: `!!prerender-loader?${JSON.stringify({ string: true, documentUrl: `http://localhost/${path}`, params: true })}!${htmlPath}`,
      filename: [path, 'index.html'].filter((piece) => piece).join('/'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
      },
    }))),
    new PwaManifestPlugin({
      name: 'Borja Canseco',
      short_name: 'Borja',
      description: 'Borja Canseco\'s personal page.',
      background_color: '#ffffff',
      theme_color: '#008080',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: resolve(sourceDir, 'images', 'bc.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          ios: true,
        },
      ],
      ios: true,
    }),
    new WorkboxPlugin({ clientsClaim: true, skipWaiting: true }),
    new CspHtmlWebpackPlugin({
      'default-src': '\'none\'',
      'base-uri': '\'none\'',
      'form-action': '\'none\'',
      'frame-ancestors': '\'none\'',
      'object-src': '\'none\'',
      'manifest-src': '\'self\'',
      'prefetch-src': '\'self\'',
      'connect-src': '\'self\'',
      'img-src': '\'self\'',
      'script-src': '\'self\'',
      'style-src': '\'self\' https://fonts.googleapis.com https://fonts.gstatic.com',
      'font-src': 'https://fonts.googleapis.com https://fonts.gstatic.com;',
    }, {
      output: (policy) => {
        const redirectsString = Object.entries(redirects).map(([path, redirect]) => (
          `location ~* ^/${path} {
            return 301 ${redirect};
          }`
        )).join('\n');

        const headersConfig = fs.readFileSync(resolve(sourceDir, 'templates', 'nginx', 'headers.conf'), 'utf8')
          .replace('# {{WEBPACK_CSP_HEADER}}', `add_header Content-Security-Policy "${policy}" always;`);

        const mainConfig = fs.readFileSync(resolve(sourceDir, 'templates', 'nginx', 'main.conf'), 'utf8')
          .replace('# {{WEBPACK_REDIRECTS}}', redirectsString)
          .replace(/# {{WEBPACK_HEADERS}}/g, headersConfig);

        if (!fs.existsSync(buildDir)) {
          fs.mkdirSync(buildDir);
        }

        fs.writeFileSync(resolve(buildDir, 'nginx.conf'), mainConfig);
      },
    }),
    new SitemapPlugin(`https://${domain}`, Object.values(routes), { skipgzip: true }),
    new RobotsTxtPlugin({
      host: `https://${domain}`,
      sitemap: `https://${domain}/sitemap.xml`,
    }),
  ]),
  devServer: {
    historyApiFallback: true,
    port: vsCodeDebugConfigs.find(({ type }) => type === 'chrome').url.split(':').pop(),
    hot: true,
    open: !IS_VSCODE_TASK, // VS Code debugger opens its own window
    https: {
      cert: resolve(__dirname, 'cert', 'localhost.crt'),
      key: resolve(__dirname, 'cert', 'localhost.key'),
    },
  },
};
