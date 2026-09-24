// Minimal Markdown → HTML for resume/Sifat_Jasim_Resume.md.
//
// The résumé Markdown is the single source for both the "Full résumé" section
// of the site and the downloadable PDF (scripts/resume-pdf.mjs). The parser
// supports exactly what that file uses: #/##/### headings, **bold**, *italic*,
// [links](url), "- " lists and paragraphs. If you change the file's structure,
// rebuild and check the rendered résumé.

import { readFileSync } from "node:fs";
import { join } from "node:path";

export const RESUME_MD_PATH = join(process.cwd(), "resume", "Sifat_Jasim_Resume.md");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (s) =>
  esc(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
      const external = /^https?:/.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${text}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

/**
 * Headings shift down so the résumé nests under a page's own h1/h2:
 * "#" (name) → h3, "##" (section) → h4, "###" (role/project) → h5.
 * @param {string} md
 * @returns {string}
 */
export function renderResumeMarkdown(md) {
  const out = [];
  let para = [];
  let list = [];

  const flushPara = () => {
    if (para.length) out.push(`<p>${para.map(inline).join("<br>")}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list.length) out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
    list = [];
  };
  const flush = () => {
    flushPara();
    flushList();
  };

  for (const raw of md.replace(/\r\n/g, "\n").split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
    } else if (line.startsWith("### ")) {
      flush();
      out.push(`<h5>${inline(line.slice(4))}</h5>`);
    } else if (line.startsWith("## ")) {
      flush();
      out.push(`<h4>${inline(line.slice(3))}</h4>`);
    } else if (line.startsWith("# ")) {
      flush();
      out.push(`<h3 class="cv-name">${inline(line.slice(2))}</h3>`);
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flush();
  return out.join("\n");
}

/** @returns {string} */
export function loadResumeHtml() {
  return renderResumeMarkdown(readFileSync(RESUME_MD_PATH, "utf8"));
}
