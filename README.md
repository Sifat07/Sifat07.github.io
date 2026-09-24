# Sifat Jasim — Portfolio

Personal portfolio site built with Next.js (pages router), React, TypeScript, Sass modules and Framer Motion.

## Getting started

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Editing content

Skills, experience, education and projects live in `data/portfolio.ts`. Project screenshots go in `public/images/projects/`.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm format` — run Prettier

## Deployment

Pushes to `main` build a static export (`out/`) and publish it to https://sifat07.github.io via `.github/workflows/deploy.yml`. In the repo's Settings → Pages, the source must be set to "GitHub Actions".
