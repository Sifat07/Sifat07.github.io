// Zero-dependency static-site build.
// Renders the founder page and measures its own output so the colophon
// never lies.
//
// Run:  node site/build.mjs   (from repo root)
// Out:  dist/index.html + og.png + the Pages root files
//
// No framework. No runtime JavaScript ships to the browser. No web fonts.

import { writeFileSync, copyFileSync, mkdirSync, rmSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

/* ----------------------------------------------------------------------------
   Editable content. This is the curated voice of the site.
   Keep it strictly grounded in fact (the résumé, and Kichu's own public copy
   on kichu.dev). This is the founder's own page; an invented specific would
   betray the brand it sells. Nothing from Kichu's private materials (raise,
   pricing, runway, roadmap, traction numbers, customers, architecture or
   cost structure) belongs here.
---------------------------------------------------------------------------- */

const SITE_URL = "https://sifat07.github.io/";
const KICHU_URL = "https://kichu.dev/";

const content = {
  name: "Sifat Jasim",
  tagline: "Co-founder, Kichu",
  role: "Co-founder",
  eyebrow: "Co-founder, Kichu · Dhaka, Bangladesh",
  headline: "I stay with things until they&nbsp;work.",
  ogLine: "I stay with things until they work.",
  intro: `I'm Sifat, a co-founder of <a class="u" href="${KICHU_URL}">Kichu</a>. I've spent five years building software for schools and shops, and at Kichu I work on making sure what we ship holds up.`,
  description:
    "Sifat Jasim is a co-founder of Kichu, where he works on making sure the software holds up. Five years building SaaS and learning platforms.",
  contactLine:
    "Email is the best way to reach me. I'm glad to hear from anyone building for small businesses, or anyone who wants to talk about testing software that AI agents write.",
  links: [
    { href: "mailto:sifatjasim@kichu.dev", text: "sifatjasim@kichu.dev" },
    { href: KICHU_URL, text: "kichu.dev" },
    { href: "https://www.linkedin.com/in/sifatjasim/", text: "linkedin.com/in/sifatjasim" },
    { href: "https://github.com/Sifat07", text: "github.com/Sifat07" },
  ],

  // "Now": the company, in kichu.dev's public terms only.
  now: [
    "The whole business in one place, for the people who run it alone. Kichu puts the storefront, the orders, the payments, the couriers and the books together, so a small, founder-led business can run all of it from a phone.",
    "We're headquartered in Philadelphia, and it's live.",
  ],

  // "How I work": grounded in the club history and the résumé.
  method: [
    "I like the unglamorous end of building: the edge case, the webhook that quietly fails, the button that works on my phone but not on yours. I'll stay with a problem long after it stops being interesting, because that's usually where the bug is.",
    "At Kichu, AI agents write most of our code. That makes code cheap and makes knowing whether it's right the hard part. My part is that question: I point agents at the work, check what they bring back, and keep at a problem until it really holds up on a merchant's phone, not just in a test.",
    "Side projects are different: those I built myself, start to finish.",
  ],

  offClock:
    "A Real Madrid fan since Zidane's volley in the 2002 final. That's how I ended up spending six years writing to the club until Bangladesh got its first official supporters' club, Peña Madridista Bangladesh, where I'm still Secretary. I play in our weekly football session too. And there's music on almost every day, any genre: Alvaro Soler and Juanes one minute, Arijit Singh or Skillet the next, plus a Spanish playlist I keep adding to.",

  work: [
    {
      org: "Ngaze",
      role: "Software engineer",
      when: "2021 — 2026",
      note: "Five years on a learning platform for schools. I helped build the multi-school setup, classrooms and live lessons, and the contest features used by 1,700+ students in 12 countries, about 20,000 submissions over 40 contests. I also mentored newer engineers.",
    },
    {
      org: "Peña Madridista Bangladesh",
      role: "Built and runs its platform, solo",
      when: "Side project",
      note: `The website of Bangladesh's official Real Madrid supporters' club: memberships for 1,500+ people, event sign-ups, ticket requests and a merch store. <a class="u" href="https://pmadridistabd.com/">pmadridistabd.com</a>`,
    },
    {
      org: "Madridismo Corner",
      role: "Built it",
      when: "Side project",
      note: `An online shop for Real Madrid merchandise, with the dashboards behind it for orders and stock. <a class="u" href="https://www.madridismocorner.com/">madridismocorner.com</a>`,
    },
    {
      org: "Pathao Merchant SDK",
      role: "Author",
      when: "Open source",
      note: `A typed toolkit for the Pathao courier's merchant API, on npm with 3,000+ downloads. <a class="u" href="https://github.com/Sifat07/pathao-merchant-sdk">GitHub</a>`,
    },
  ],
  earlier:
    "Education: Master's in Information Technology, University of Dhaka (2021); BSc in Computer Science &amp; Engineering, American International University–Bangladesh (2018).",
};

/* ---------------------------------------------------------------------------- */

const linkRow = content.links
  .map((l) => `<a class="u" href="${l.href}">${l.text}</a>`)
  // Zero-width space after each separator gives the row a break opportunity,
  // so on narrow screens links wrap (dot trailing its link) instead of overflowing.
  .join('<span class="dot">·</span>&#8203;');

const workRows = content.work
  .map(
    (w) => `
      <li class="work">
        <div class="work-head">
          <span class="work-org">${w.org}</span>
          <span class="work-when">${w.when}</span>
        </div>
        <div class="work-role">${w.role}</div>
        <p class="work-note">${w.note}</p>
      </li>`
  )
  .join("");

const paras = (ps) => ps.map((p) => `<p>${p}</p>`).join("\n        ");

// Inline SVG favicon — a navy monogram. Zero extra request.
const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="%231E3A66"/><text x="32" y="44" font-family="Georgia,serif" font-size="38" fill="%23F6F3EC" text-anchor="middle">S</text></svg>`
  ).replace(/%23/g, "%23");

const title = `${content.name} — ${content.tagline}`;
const ogLine = content.ogLine;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${content.description}">
<meta name="author" content="${content.name}">
<link rel="canonical" href="${SITE_URL}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${ogLine}">
<meta property="og:type" content="profile">
<meta property="og:url" content="${SITE_URL}">
<meta property="og:image" content="${SITE_URL}og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${ogLine}">
<meta name="twitter:image" content="${SITE_URL}og.png">
<link rel="icon" href="${favicon}">
<style>
  :root{
    --bg:#F6F3EC; --panel:#FBF9F3; --ink:#16181D; --muted:#5B6271;
    --accent:#1E3A66; --hair:rgba(20,22,29,.12); --max:46rem;
  }
  @media (prefers-color-scheme: dark){
    :root{
      --bg:#0B0E14; --panel:#10141C; --ink:#E9E6DD; --muted:#8B93A5;
      --accent:#9DB7EA; --hair:rgba(233,230,221,.14);
    }
  }
  *{box-sizing:border-box}
  html{-webkit-text-size-adjust:100%}
  body{
    margin:0; background:var(--bg); color:var(--ink);
    font-family:ui-serif,"Iowan Old Style","Palatino Linotype",Palatino,"Hoefler Text",Georgia,"Times New Roman",serif;
    font-size:18px; line-height:1.62; letter-spacing:.001em;
    -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
    font-feature-settings:"kern","liga","onum","pnum";
  }
  body{hanging-punctuation:first last}
  .wrap{max-width:var(--max); margin:0 auto; padding:0 clamp(1.25rem,5vw,2rem);
    counter-reset:section}
  a{color:inherit; text-decoration:none}
  /* links: a faint resting underline that an accent line wipes over on hover */
  .u{background-image:linear-gradient(var(--accent),var(--accent));
    background-repeat:no-repeat; background-position:0 100%; background-size:0 1px;
    padding-bottom:2px; border-bottom:1px solid var(--hair);
    transition:background-size .4s cubic-bezier(.2,.7,.2,1), color .3s, border-color .3s}
  .u:hover{color:var(--ink); background-size:100% 1px; border-color:transparent}

  /* ---- header ---- */
  header{display:flex; justify-content:space-between; align-items:baseline;
    padding:clamp(1.5rem,5vw,2.4rem) 0 0; gap:1rem}
  .brand{font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; color:var(--muted)}
  nav{font-size:.74rem; letter-spacing:.12em; text-transform:uppercase; color:var(--muted)}
  .brand, nav{white-space:nowrap}
  nav a{margin-left:1.1rem}
  @media (max-width:400px){ nav a{margin-left:.6rem} .brand{letter-spacing:.1em} nav{letter-spacing:.08em} }
  nav a:hover{color:var(--ink)}

  /* ---- hero ---- */
  .hero{padding:clamp(2.75rem,11vh,6rem) 0 clamp(2.5rem,8vh,4.5rem)}
  .eyebrow{font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    font-size:.72rem; letter-spacing:.16em; text-transform:uppercase;
    color:var(--accent); margin:0 0 1.5rem}
  h1{
    font-weight:540; font-size:clamp(2.2rem,6.4vw,4.15rem); line-height:1.04;
    letter-spacing:-.023em; margin:0 0 1.5rem; max-width:19ch;
    text-wrap:balance;
  }
  .intro{font-size:clamp(1.04rem,2.4vw,1.26rem); color:var(--muted);
    max-width:44ch; margin:0 0 2rem; line-height:1.5; text-wrap:pretty}
  .intro .u{color:var(--ink)}
  .links{font-size:.86rem; color:var(--muted)}
  .dot{margin:0 .55rem; opacity:.45}

  /* ---- sections ---- */
  section{padding:clamp(2.6rem,7vw,3.8rem) 0; border-top:1px solid var(--hair)}
  /* section titles are real <h2>, styled as numbered mono labels */
  h2.label{font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    font-size:.7rem; font-weight:400; letter-spacing:.2em; text-transform:uppercase;
    color:var(--accent); margin:0 0 1.7rem; display:flex; align-items:baseline; gap:.7rem}
  section > h2.label::before{counter-increment:section;
    content:counter(section,decimal-leading-zero);
    color:var(--muted); font-size:.78rem; letter-spacing:.08em}
  .prose p{margin:0 0 1.2rem; max-width:62ch; text-wrap:pretty}
  .prose p:last-child{margin-bottom:0}

  /* ---- now: the company card ---- */
  .venture{border:1px solid var(--hair); border-radius:.9rem; background:var(--panel);
    padding:clamp(1.4rem,4vw,2.2rem)}
  .venture-head{display:flex; justify-content:space-between; align-items:baseline;
    gap:1rem; margin:0 0 .3rem}
  .venture h3{font-size:clamp(1.6rem,4vw,2rem); font-weight:560; letter-spacing:-.015em;
    line-height:1.1; margin:0}
  .venture-when{font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    font-size:.72rem; letter-spacing:.06em; color:var(--muted); white-space:nowrap}
  .venture-role{color:var(--accent); font-size:.92rem; margin:0 0 1.2rem}
  .venture .prose p{font-size:.98rem; line-height:1.55}
  .actions{display:flex; gap:.7rem; flex-wrap:wrap; margin:1.6rem 0 0}
  .btn{display:inline-flex; align-items:center; gap:.5rem;
    font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    font-size:.74rem; letter-spacing:.08em; text-transform:uppercase;
    color:var(--bg); background:var(--accent); padding:.62rem 1rem; border-radius:.5rem;
    transition:transform .18s ease, opacity .18s ease}
  .btn:hover{transform:translateY(-1px); opacity:.92}

  /* ---- track record ---- */
  ul.work-list{list-style:none; margin:0; padding:0}
  li.work{padding:1.15rem 0; border-bottom:1px solid var(--hair)}
  li.work:first-child{padding-top:0}
  .work-head{display:flex; justify-content:space-between; align-items:baseline; gap:1rem}
  .work-org{font-size:1.18rem; font-weight:560; letter-spacing:-.01em}
  .work-when{font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    font-size:.72rem; letter-spacing:.06em; color:var(--muted); white-space:nowrap}
  .work-role{color:var(--accent); font-size:.92rem; margin:.1rem 0 .35rem}
  .work-note{margin:0; color:var(--ink); max-width:60ch; font-size:.98rem; line-height:1.5}
  .earlier{color:var(--muted); font-size:.92rem; margin:1.3rem 0 0; max-width:60ch}

  /* ---- contact + colophon ---- */
  .contact-line{margin:0 0 1.1rem; max-width:52ch}
  .contact .links{font-size:1rem}
  footer{border-top:1px solid var(--hair); padding:2.4rem 0 4rem;
    color:var(--muted); font-size:.82rem; line-height:1.7}
  footer .label{color:var(--muted)}
  footer code{font-family:ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace;
    color:var(--ink); font-size:.92em}

  /* ---- the one motion moment: a quiet load reveal ---- */
  @media (prefers-reduced-motion: no-preference){
    .reveal{opacity:0; transform:translateY(10px); animation:rise .8s cubic-bezier(.2,.7,.2,1) forwards}
    .reveal.d1{animation-delay:.04s}
    .reveal.d2{animation-delay:.14s}
    .reveal.d3{animation-delay:.26s}
    .reveal.d4{animation-delay:.38s}
    @keyframes rise{to{opacity:1; transform:none}}
  }
  ::selection{background:var(--accent); color:var(--bg)}

  @media print{
    :root{--bg:#fff; --panel:#fff; --ink:#000; --muted:#333; --accent:#1a3e6f; --hair:#ccc}
    header nav, .actions, footer{display:none}
    .reveal{opacity:1; transform:none; animation:none}
    section{border-top:1px solid #ccc; padding:1rem 0}
    a{color:#000}
  }
</style>
</head>
<body>
<div class="wrap">

  <header>
    <span class="brand">${content.name}</span>
    <nav>
      <a href="#now">Now</a>
      <a href="#record">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <div class="hero">
    <div class="eyebrow reveal d1">${content.eyebrow}</div>
    <h1 class="reveal d2">${content.headline}</h1>
    <p class="intro reveal d3">${content.intro}</p>
  </div>

  <section id="now">
    <h2 class="label">Now</h2>
    <article class="venture">
      <div class="venture-head">
        <h3>Kichu</h3>
        <span class="venture-when">2026 — Present</span>
      </div>
      <div class="venture-role">${content.role}</div>
      <div class="prose">
        ${paras(content.now)}
      </div>
      <div class="actions">
        <a class="btn" href="${KICHU_URL}">Visit kichu.dev →</a>
      </div>
    </article>
  </section>

  <section id="method">
    <h2 class="label">How I work</h2>
    <div class="prose">
        ${paras(content.method)}
    </div>
  </section>

  <section id="record">
    <h2 class="label">Work</h2>
    <ul class="work-list">${workRows}
    </ul>
    <p class="earlier">${content.earlier}</p>
  </section>

  <section id="off-clock">
    <h2 class="label">Off the clock</h2>
    <div class="prose">
        <p>${content.offClock}</p>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2 class="label">Contact</h2>
    <p class="contact-line">${content.contactLine}</p>
    <div class="links">${linkRow}</div>
  </section>

  <footer>
    <h2 class="label">Colophon</h2>
    This page is one hand-written HTML file. There's no framework, no JavaScript and
    no web fonts, so it uses whatever typefaces your system already has. A small script
    with no dependencies builds it; the result weighs <code>__PAGE_SIZE__</code> and
    arrives in a single request. Dark mode follows your system. The source is on
    <a class="u" href="https://github.com/Sifat07/Sifat07.github.io">GitHub</a>.
  </footer>

</div>
</body>
</html>`;

/* ---- self-measure to a fixed point: the printed size IS the file size ----
   The size string lives inside the file, so substituting it changes the byte
   count. Iterate until the figure stops moving (converges in 1–2 passes). */
// Start clean so a removed source file can't linger in dist/ across local builds.
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
const outFile = join(DIST, "index.html");
const fmt = (s) => (Buffer.byteLength(html.replace("__PAGE_SIZE__", s), "utf8") / 1024).toFixed(1) + " KB";
let kb = fmt("00.0 KB");
for (let i = 0; i < 5; i++) {
  const next = fmt(kb);
  if (next === kb) break;
  kb = next;
}
const finalHtml = html.replace("__PAGE_SIZE__", kb);
writeFileSync(outFile, finalHtml);
const trueBytes = statSync(outFile).size; // sanity: matches the printed figure

copyFileSync(join(ROOT, "og.png"), join(DIST, "og.png"));
writeFileSync(join(DIST, ".nojekyll"), "");

// Root files: the custom 404. (No CNAME: served at sifat07.github.io.)
const ROOT_FILES = ["404.html"];
for (const f of ROOT_FILES) copyFileSync(join(ROOT, f), join(DIST, f));

console.log(`built dist/index.html — colophon says ${kb}, file is ${trueBytes} bytes`);
console.log(`copied og.png, ${ROOT_FILES.join(", ")}`);
