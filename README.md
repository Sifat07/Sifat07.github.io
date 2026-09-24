# Sifat Jasim — Portfolio

Personal site built with Next.js (pages router, static export), React, TypeScript and Sass modules. One page, system fonts, light and dark themes.

## Getting started

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Editing content

- `resume/Sifat_Jasim_Resume.md` is the single source for the résumé. The "Full résumé" section of the site renders from it at build time, and `pnpm resume:pdf` renders it to `public/Sifat Jasim - Resume.pdf` with headless Chrome (set `CHROME_PATH` if Chrome isn't found). Regenerate and commit the PDF whenever the Markdown changes.
- `data/site.ts` holds the curated copy on the home page (headline, intro, How I work, Selected work). Keep it consistent with the résumé.
- `/work`, `/about` and `/contact` forward to the matching section of the home page so old links keep working.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm resume:pdf` — regenerate the résumé PDF from the Markdown
- `pnpm format` — run Prettier

## Deployment

Pushes to `main` build a static export (`out/`) and publish it to the `gh-pages` branch via `.github/workflows/deploy.yml`. GitHub Pages serves that branch at https://sifat07.github.io (Settings → Pages → Deploy from a branch → `gh-pages` / root).
