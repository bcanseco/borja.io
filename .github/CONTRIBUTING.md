# Contributing guide

Thanks for considering a contribution to my website! 🙏

My main goal is to make sure the site maintains excellent scores across [Lighthouse][lighthouse], [Observatory][observatory], and other tools. Whenever a commit is made on `master` (whether directly or via merged PR), the live site will get updated and then these tools will perform scans automatically.

[lighthouse]: https://pagespeed.web.dev/analysis?url=https://borja.io
[observatory]: https://observatory.mozilla.org/analyze/borja.io

## PR Checklist

* [ ] Please make a pull request against the `master` branch.
* [ ] Please make sure your code passes all [linting](../README.md#linting-) checks.
* [ ] Please use [conventional commit](https://www.conventionalcommits.org/) messages.

## Why not use Gatsby/Next.js/`x` framework?

I generally prefer Gatsby when building fast React-based apps. However, it doesn't yet support strong Content Security Policies. At least not easily. An issue tracking that is [here](https://github.com/gatsbyjs/gatsby/issues/10890).

Next.js is cool too, but my personal website is an opportunity to go crazy and roll a ["sensible setup"](../webpack.config.babel.js) myself. If anything, it's a good learning experience.

## Why is the minimum Lighthouse score 0.93 instead of 0.95 for Best Practices?

Lighthouse is currently complaining about something in the Issues tab, despite nothing there.
