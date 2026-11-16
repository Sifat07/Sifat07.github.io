# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The GitHub **user page** repo (`Sifat07.github.io`), serving Sifat Jasim's personal page at
**https://sifat07.github.io**: a co-founder page for Sifat, co-founder of **Kichu** (kichu.dev).
Forked from Sabbir's `thesabbir/thesabbir.github.io` (ahmed.bio) with his OK; the two pages share a shape.
There is no `CNAME`: never add Sabbir's `ahmed.bio` back.

Sifat's older Next.js portfolio lives in `Sifat07/portfolio`, hosted on Vercel (sifatjasim.de5.net).

`site/build.mjs` renders `dist/` from the `content` object at its top. Hand-built, zero-dependency,
framework-free, no web fonts, **no client JS at all**. Don't introduce React/bundlers/CDN assets.
`404.html` is a static page.

Content rules:
- Every claim must be grounded in fact: Sifat's résumé, the "Sifat Jasim, start to finish" section of
  Peña Madridista Bangladesh's story document, or what Sifat has said. Describe Kichu the way kichu.dev does.
  Never upgrade a title.
- The page leads with Kichu and engineering; Peña Madridista Bangladesh is one strand, not the theme.
- Write the club's full name, Peña Madridista Bangladesh, never "PMBD". No Real Madrid or club crest on the page.
- No home address or phone number.

**Confidentiality.** Nothing from Kichu's private materials goes on this site: no raise, valuation, pricing,
runway, roadmap, traction numbers, customer names, or architecture/cost details. Don't name the other
co-founders without asking. Don't invite investment publicly.

`site/og.html` is the source for `og.png` (regeneration command in its header comment).

## Build & deploy

```bash
node site/build.mjs          # → dist/ (git-ignored; CI rebuilds it)
```

`.github/workflows/deploy.yml` builds and publishes `dist/` to Pages on every push to `main`.
Pages source must be **GitHub Actions** in repo settings, not "deploy from branch".
