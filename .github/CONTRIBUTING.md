# Contributing guide

Thanks for considering a contribution to my website! 🙏

My main goal is to make sure the site maintains excellent scores across [Lighthouse][lighthouse], [Observatory][observatory], and other tools. Whenever a commit is made on `master` (whether directly or via merged PR), the live site will get updated and then these tools will perform scans automatically.

[lighthouse]: https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://hi.im.borja.and.im.a.full.stack.dev
[observatory]: https://observatory.mozilla.org/analyze/hi.im.borja.and.im.a.full.stack.dev

## PR Checklist

* [ ] Please make a pull request against the `master` branch.
* [ ] Please make sure your code passes all [linting](../README.md#linting-) checks.
* [ ] Please make sure your code passes an [`npm audit --audit-level=moderate`](https://docs.npmjs.com/cli/audit) check.
* [ ] Please use [conventional commit](https://www.conventionalcommits.org/) messages.

## Why not use Gatsby/Next.js/`x` framework?

I generally prefer Gatsby when building fast React-based apps. However, it doesn't yet support strong Content Security Policies. At least not easily. An issue tracking that is [here](https://github.com/gatsbyjs/gatsby/issues/10890).

Next.js is cool too, but my personal website is an opportunity to go crazy and roll a ["sensible setup"](../webpack.config.babel.js) myself. If anything, it's a good learning experience.

## What's up with the domain?

I bought **stack.dev** during the `.dev` [Landrush period](https://en.wikipedia.org/wiki/Landrush_period) in February 2019. Having previously used borja.io, I wanted to move away from `.io` (which was never obvious to non-technical folks) so I chose a [domain hack](https://en.wikipedia.org/wiki/Domain_hack) play on "full-stack developer."

The canonical URL I prefer is `hi.im.borja.and.im.a.full.stack.dev`, but I point to just `full.stack.dev` on social media sites for brevity. Thanks to multiple [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate) and [301 redirects](https://en.wikipedia.org/wiki/HTTP_301), all of the domain patterns below work:

* [`stack.dev`](https://stack.dev)
* [`*.stack.dev`](https://www.stack.dev)
* [`*.full.stack.dev`](https://www.full.stack.dev)
* [`*.a.full.stack.dev`](https://www.a.full.stack.dev)
* [`*.im.a.full.stack.dev`](https://www.im.a.full.stack.dev)
* [`*.and.im.a.full.stack.dev`](https://www.and.im.a.full.stack.dev)
* [`*.borja.and.im.a.full.stack.dev`](https://www.borja.and.im.a.full.stack.dev)
* [`*.im.borja.and.im.a.full.stack.dev`](https://www.im.borja.and.im.a.full.stack.dev)
* [`*.hi.im.borja.and.im.a.full.stack.dev`](https://www.hi.im.borja.and.im.a.full.stack.dev)

Note that the `.dev` gTLD is HTTPS-only.

## Why is the minimum Lighthouse score 0.93 instead of 0.95 for Best Practices?

Lighthouse is currently complaining about something in the Issues tab, despite nothing there.
