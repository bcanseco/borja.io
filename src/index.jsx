import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './app';

/**
 * The entry point for the app.
 * <div class="container"/> is defined within `templates/index.pug`.
 */
const mount = document.querySelector('div.container');

/**
 * Renders the app on the page.
 * We dynamically import CSS only during rendering because we don't want duplicate
 * CSS added to the DOM during hydration.
 */
async function render() {
  await import('./styles/all.scss');
  ReactDOM.render(<App />, mount);
}

/**
 * This exported async function is necessary rather than just doing this
 * at the top level because `prerender-loader` needs to know that resources
 * are being asynchronously loaded (like stylesheets).
 * @see https://github.com/GoogleChromeLabs/prerender-loader#dom-prerendering
 * @param {Boolean} isPrerender
 */
export default async function bootstrap(isPrerender) {
  if (process.env.NODE_ENV === 'development') {
    await render();
  } else if (isPrerender) {
    await render();

    /**
     * Additional steps are necessary for `react-helmet` in an SSR environment.
     * @see https://github.com/nfl/react-helmet#server-usage
     * @see https://github.com/nfl/react-helmet/issues/79
     */
    const helmet = Helmet.renderStatic();
    const headTags = (helmet.title + helmet.meta.toString() + helmet.link.toString())
      .replace(/ data-react-helmet="true"/g, '');
    document.head.innerHTML += headTags;
  } else if (mount.hasChildNodes()) {
    ReactDOM.hydrate(<App />, mount, () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));
      }
    });
  }
}

/**
 * There are three ways that this line of code is reached.
 * 1. When the app is being built and run in development (`npm start`).
 * 2. When the app is being built for production (`npm run build`).
 * 3. When the app is being executed in a browser in production.
 *
 * In 1, ReactDOM needs to render the app like usual, so we call bootstrap().
 * In 3, ReactDOM needs to hydrate the prerendered markup, so we call bootstrap().
 *
 * In 2, it's a bit more complex. As part of SSR, ReactDOM needs to render the app.
 * However, `prerender-loader` calls bootstrap(true) on its own automatically.
 * We don't want to call it redundantly, but we need to keep the call below for case 3.
 * Thus, we call it with `false` here so that it doesn't do anything during case 2.
 */
bootstrap(false);
