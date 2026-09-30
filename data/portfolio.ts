import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiFastify,
  SiPrisma,
  SiMysql,
  SiSupabase,
  SiDocker,
  SiGooglecloud,
} from "react-icons/si";

export const skillsData = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Sass", icon: SiSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Fastify", icon: SiFastify },
  { name: "Prisma", icon: SiPrisma },
  { name: "MySQL", icon: SiMysql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Docker", icon: SiDocker },
  { name: "GCP", icon: SiGooglecloud },
];

export const experienceData = [
  {
    company: "Stealth",
    period: "08/2026 - Present",
    role: "Co-founder & QA Engineer",
    description: "Test and harden a multi-tenant commerce platform built by fleets of AI coding agents. Fixed OAuth and credential-linking bugs blocking Meta/Instagram/WhatsApp messaging, a shipping-carrier webhook handshake for the Pathao integration, and a mobile SSE session bug. Wrote the payment-provider sandbox runbook and review checklist.",
  },
  {
    company: "Ngaze, Inc.",
    period: "12/2022 - 08/2026",
    role: "Software Engineer",
    description: "Collaborated on multi-tenant SaaS architecture implementing subdomain routing and tenant-aware UIs. Built core LMS features including classroom workflows and live interactions, and contributed to contest and practice features used by 1,700+ students across 12 countries (~20k solution submissions over 40 contests). Enhanced platform usability by migrating styles to Tailwind CSS and developing a Lexical-based editor. Improved engineering culture through code reviews and mentoring.",
  },
  {
    company: "Ngaze, Inc.",
    period: "09/2021 - 11/2022",
    role: "Junior Software Engineer",
    description: "Focused on frontend engineering, building admin dashboards and community features using React, Next.js, and SCSS. Translated Figma designs into responsive UIs and integrated REST APIs. Improved design consistency by scaling shared UI libraries across web and admin apps.",
  },
];

export const educationData = [
  {
    institute: "Institute Of Information Technology, University Of Dhaka",
    period: "2021",
    degree: "Master in Information Technology (MIT)",
    description: "Completed Master in Information Technology.",
  },
  {
    institute: "American International University-Bangladesh",
    period: "2018",
    degree: "B.Sc. in Computer Science & Engineering",
    description: "Completed Bachelor of Science in Computer Science & Engineering.",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    title: "Peña Madridista de Bangladesh",
    description: "The official website and central hub for the Real Madrid supporters' club in Bangladesh. Built and run end to end as a solo lead.",
    highlights: [
      "Membership system with 1,500+ registered users and ~970 memberships",
      "Event registration (800+ sign-ups) and ticket-request allocation with priority sorting",
      "Merch store with 380+ orders and online payments",
      "In-house analytics and notifications: 27k+ tracked events, 3,600+ notifications sent",
      "Data-integrity, security and CI hardening: audit trail, order-oversell prevention, log-retention crons",
    ],
    tech: ["Next.js", "TypeScript", "Fastify", "Prisma", "AWS S3", "Tailwind CSS"],
    link: "https://pmadridistabd.com/",
    image: "/images/projects/penya-madridista-bangladesh.png"
  },
  {
    title: "Madridismo Corner",
    description: "A specialized e-commerce platform built from the ground up for Real Madrid merchandise. Designed and engineered custom Admin Dashboards for seamless order processing and inventory management.",
    highlights: [
      "Storefront and checkout built on Next.js and Supabase",
      "Admin dashboards for order processing and inventory",
      "Delivery booking through Pathao, using my own open-source SDK",
    ],
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "Pathao SDK"],
    link: "https://www.madridismocorner.com/",
    image: "/images/projects/madridismo-corner.png"
  },
  {
    title: "Pathao Merchant SDK",
    description: "An open-source, type-safe Node.js and TypeScript SDK for the Pathao courier Merchant API, published on npm. Covers orders, stores, price calculation and locations, with webhook signature verification and automatic OAuth2 token refresh.",
    highlights: [
      "3,000+ npm downloads, currently at v2.3.2",
      "MIT licensed, with Jest tests and CI",
    ],
    tech: ["TypeScript", "Node.js", "Jest", "npm"],
    link: "https://github.com/Sifat07/pathao-merchant-sdk",
  },
];
