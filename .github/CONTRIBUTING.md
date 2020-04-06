# Contributing guide

Thanks for considering a contribution to my website! 🙏

My main goal is to make sure the site maintains excellent scores across [Lighthouse][lighthouse], [Observatory][observatory], and other tools. Whenever a commit is made on `master` (whether directly or via merged PR), the live site will get updated and then these tools will perform scans automatically.

[lighthouse]: https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://hi.im.borja.and.im.a.full.stack.dev
[observatory]: https://observatory.mozilla.org/analyze/full.stack.dev

## PR Checklist

* [ ] Please make a pull request against the `master` branch.
* [ ] Please make sure your code passes all [linting](../README.md#linting-) checks.
* [ ] Please make sure your code passes an [`npm audit --audit-level=moderate`](https://docs.npmjs.com/cli/audit) check.
* [ ] Please use [conventional commit](https://www.conventionalcommits.org/) messages.

## Why not use Gatsby/Next.js/`x` framework?

I generally prefer Gatsby when building fast React-based apps. However, it doesn't yet support strong Content Security Policies. At least not easily. An issue tracking that is [here](https://github.com/gatsbyjs/gatsby/issues/10890).

Next.js is cool too, but my personal website is an opportunity to go crazy and roll a ["sensible setup"](../webpack.config.babel.js) myself. If anything, it's a good learning experience.
