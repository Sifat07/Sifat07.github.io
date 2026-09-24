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

The résumé PDF is generated from `resume/Sifat_Jasim_Resume.md`: edit the Markdown, run `pnpm resume:pdf` (headless Chrome; set `CHROME_PATH` if it isn't found) and commit `public/Sifat Jasim - Resume.pdf`. Keep `data/portfolio.ts` in step with the résumé.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm resume:pdf` — regenerate the résumé PDF from the Markdown
- `pnpm format` — run Prettier

## Deployment

Pushes to `main` build a static export (`out/`) and publish it to the `gh-pages` branch via `.github/workflows/deploy.yml`. GitHub Pages serves that branch at https://sifat07.github.io (Settings → Pages → Deploy from a branch → `gh-pages` / root).
