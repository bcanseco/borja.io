import {src, dest, parallel} from 'gulp';
import es from 'event-stream';
import rename from 'gulp-rename';
import pug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';
import image from 'gulp-image';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import named from 'vinyl-named';
import wp4 from 'webpack';
import webpack from 'webpack-stream';
import httpErrors from './src/statuses.json';

export const docs = () => src('src/docs/*')
  .pipe(dest('dist'));

export const images = () => src('src/images/*')
  .pipe(image({quiet: true}))
  .pipe(dest('dist/images'));

export const styles = () => src('src/scss/*')
  .pipe(sass())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist/css'));

export const scripts = () => src('src/js/*')
  .pipe(named())
  .pipe(webpack({mode: 'production', stats: 'errors-only'}, wp4))
  .pipe(dest('dist/js'));

export const views = () => src(['src/**/*.pug', '!src/error.pug'])
  .pipe(pug())
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(dest('dist'));

export const errors = (done) => {
  const task = (error) => src('src/error.pug')
    .pipe(pug({locals: error}))
    .pipe(rename(`${error.code}.html`))
    .pipe(dest('dist'));

  es.merge(httpErrors.map(task));
  done();
};

export const build = parallel(docs, images, styles, scripts, views, errors);
