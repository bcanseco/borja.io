# Contributing guide

Thanks for considering a contribution to my website! 🙏

The guiding principle behind this project is: **the less code, the better.**

## PR Checklist

* [ ] Please make a pull request against the `master` branch.
* [ ] Please make sure your code passes all [linting](../README.md#linting-) checks.
* [ ] Please make sure your code passes an [`npm audit --audit-level=moderate`](https://docs.npmjs.com/cli/audit) check.
* [ ] Please use [conventional commit](https://www.conventionalcommits.org/) messages.

## Why not use Gatsby/Next.js/`x` framework?

I generally prefer Gatsby when building fast React-based apps. However, it doesn't yet support strong Content Security Policies. At least not easily. An issue tracking that is [here](https://github.com/gatsbyjs/gatsby/issues/10890).

Next.js is cool too, but my personal website is an opportunity to go crazy and roll a ["sensible setup"](../webpack.config.babel.js) myself. If anything, it's a good learning experience.
