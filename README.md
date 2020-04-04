<p align="center">
  <img width="150px" src="./src/images/bc.png">
</p>

<h1 align="center">
  <a href="https://full.stack.dev">full.stack.dev</a>
</h1>

<p align="center">
  <a href="https://www.ssllabs.com/ssltest/analyze.html?d=full.stack.dev">
    <img src="https://img.shields.io/badge/Qualys-A%2B-blue.svg?style=flat-square">
  </a>

   <a href="https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://hi.im.borja.and.im.a.full.stack.dev">
    <img src="https://img.shields.io/badge/Lighthouse-100%25-blue.svg?style=flat-square">
  </a>

  <a href="https://observatory.mozilla.org/analyze/full.stack.dev">
    <img src="https://img.shields.io/badge/Observatory-A%2B-blue.svg?style=flat-square">
  </a>
</p>

> The most over-engineered personal site on the internet.

## Getting started ☕

### Prerequisites 📝

* [mkcert](https://github.com/FiloSottile/mkcert)
* [node](https://nodejs.org)

### Setup 🛠

1. Install this project's dependencies:
   ```console
   $ npm install
   ```
1. Generate an SSL certificate for local development:
   ```console
   $ mkcert -install
   $ mkcert -cert-file cert/localhost.crt -key-file cert/localhost.key localhost 127.0.0.1 ::1
   ```

## Development 💻

### Running 👟

Use the command below to launch a development webserver on port 1337. It will hot reload on changes.

```console
$ npm start
```

### Debugging 🐞

If you prefer setting breakpoints and such in [VS Code](https://code.visualstudio.com), you can alternatively use the `Debug` launch configuration. This requires the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.

### Linting 🧹

```console
$ npm run lint
```

## Production 🏗

You can use the following command to build the site for production. Not only will it output static CDN-ready assets to the `dist/` folder, but it will also generate an NGINX configuration file!

```console
$ npm run build
```

## Contribute 👪

PRs are welcome! Please read the [contributing guide](.github/CONTRIBUTING.md). This project is [MIT](LICENSE) licensed.
