// Renders resume/Sifat_Jasim_Resume.md to "public/Sifat Jasim - Resume.pdf"
// with headless Chrome, so the PDF and the site's résumé come from one source.
//
// Run:  pnpm resume:pdf        (set CHROME_PATH if Chrome isn't found)
// Commit the regenerated PDF; CI doesn't rebuild it.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { RESUME_MD_PATH, renderResumeMarkdown } from "../lib/resume.mjs";

const OUT = join(process.cwd(), "public", "Sifat Jasim - Resume.pdf");

const CANDIDATES = [
  process.env.CHROME_PATH,
  "/opt/pw-browsers/chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
  process.exit(1);
}

const body = renderResumeMarkdown(readFileSync(RESUME_MD_PATH, "utf8"));

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Sifat Jasim — Résumé</title>
<style>
  @page { size: A4; margin: 14mm 16mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Calibri, Carlito, "Segoe UI", Roboto, Arial, sans-serif;
    font-size: 10.2pt; line-height: 1.38; color: #1c1b19;
  }
  a { color: #1c1b19; text-decoration: none; }
  h3.cv-name { font-size: 24pt; letter-spacing: 0.04em; color: #1e3a66; line-height: 1.1; }
  h3.cv-name + p { font-size: 11.5pt; margin-top: 2pt; }
  h3.cv-name + p + p { font-size: 9.2pt; color: #4a4740; margin-top: 3pt; }
  h4 {
    font-size: 10.5pt; letter-spacing: 0.08em; text-transform: uppercase; color: #1e3a66;
    border-bottom: 0.75pt solid #c9c3b6; padding-bottom: 2pt; margin: 12pt 0 5pt;
    break-after: avoid;
  }
  h5 { font-size: 10.6pt; margin-top: 7pt; break-after: avoid; }
  h5 + p { color: #4a4740; font-size: 9.4pt; }
  p { margin-top: 2pt; }
  ul { padding-left: 13pt; margin-top: 3pt; }
  li { margin-top: 1.5pt; break-inside: avoid; }
</style>
</head>
<body>
${body}
</body>
</html>`;

const dir = mkdtempSync(join(tmpdir(), "resume-"));
const htmlPath = join(dir, "resume.html");
writeFileSync(htmlPath, html);

execFileSync(
  chrome,
  [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${OUT}`,
    pathToFileURL(htmlPath).href,
  ],
  { stdio: "inherit" }
);

console.log(`Wrote ${OUT}`);
