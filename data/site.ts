// Curated copy for the home page. Keep it grounded in facts from
// resume/Sifat_Jasim_Resume.md; the full résumé renders from that file.

export const SITE_URL = "https://sifat07.github.io";
export const RESUME_PDF = "/Sifat%20Jasim%20-%20Resume.pdf";

export const profile = {
  name: "Sifat Jasim",
  role: "Software Engineer",
  eyebrow: "Software Engineer · Dhaka, Bangladesh",
  headline: "I build SaaS products end to end, from tenant-aware interfaces to the APIs behind them.",
  intro:
    "Five years on SaaS and EdTech platforms: at Ngaze I grew from junior frontend engineer to building a multi-tenant learning platform, and now I'm co-founding a stealth commerce venture. Outside work I build the platform behind Peña Madridista Bangladesh and maintain an open-source SDK for the Pathao courier API.",
};

export const links = [
  { label: "Email", href: "mailto:sifatjasim@gmail.com", text: "sifatjasim@gmail.com" },
  { label: "GitHub", href: "https://github.com/Sifat07", text: "github.com/Sifat07" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sifatjasim/", text: "linkedin.com/in/sifatjasim" },
];

// "How I work", drawn from the Skills section of the résumé.
export const method = [
  "UX comes before aesthetics. I design accessibility-first, with dark mode and animation (Framer Motion, Lottie) where they serve the user.",
  "I pick tools for the job they do: Fastify over Express for speed, Prisma for type safety and migrations, SCSS for styles that stay maintainable and Tailwind when a prototype needs to move fast. Monorepos with shared UI libraries let a small team iterate quickly without drifting apart.",
  "I value knowledge sharing for scalable teams: code reviews, mentoring junior developers and writing docs, in agile sprints and async teamwork.",
];

export interface WorkItem {
  org: string;
  role: string;
  when: string;
  note: string;
  href?: string;
}

export const work: WorkItem[] = [
  {
    org: "Stealth",
    role: "Co-founder",
    when: "2026 — Present",
    note: "Co-founding a multi-tenant commerce product, building it from zero.",
  },
  {
    org: "Ngaze",
    role: "Software Engineer",
    when: "2021 — 2026",
    note: "Multi-tenant learning platform: subdomain routing and tenant-aware UIs, classroom workflows and live interactions, subscriptions and payments, a Tailwind migration with dark mode and a Lexical-based editor. Started as a junior frontend engineer and went on to mentor juniors.",
  },
  {
    org: "Pathao Merchant SDK",
    role: "Open source · npm",
    when: "2025 — Present",
    note: "A type-safe Node.js and TypeScript SDK for the Pathao courier Merchant API, with webhook signature verification and automatic OAuth2 token refresh.",
    href: "https://github.com/Sifat07/pathao-merchant-sdk",
  },
  {
    org: "Peña Madridista Bangladesh",
    role: "Community platform",
    when: "Ongoing",
    note: "The hub for Real Madrid's supporters' club in Bangladesh, with a membership system for over 5,000 registered fans, articles, ticket allocation and events.",
    href: "https://pmadridistabd.com/",
  },
  {
    org: "Madridismo Corner",
    role: "E-commerce",
    when: "Ongoing",
    note: "A merchandise store built from the ground up, with custom admin dashboards for order processing and inventory.",
    href: "https://www.madridismocorner.com/",
  },
];

export const earlier =
  "Earlier: Dollabills (frontend for a social platform with real-time chat and video) and an inventory and HR system where I led the frontend from design to API integration.";
