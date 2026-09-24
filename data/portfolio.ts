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
  { name: "React", icon: SiReact, level: 95 },
  { name: "Next.js", icon: SiNextdotjs, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "Sass", icon: SiSass, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
  { name: "Framer Motion", icon: SiFramer, level: 80 },
  { name: "Node.js", icon: SiNodedotjs, level: 85 },
  { name: "Fastify", icon: SiFastify, level: 80 },
  { name: "Prisma", icon: SiPrisma, level: 80 },
  { name: "MySQL", icon: SiMysql, level: 75 },
  { name: "Supabase", icon: SiSupabase, level: 85 },
  { name: "Docker", icon: SiDocker, level: 70 },
  { name: "GCP", icon: SiGooglecloud, level: 65 },
];

export const experienceData = [
  {
    company: "Stealth",
    period: "08/2026 - Present",
    role: "Co-founder",
    description: "Co-founding a multi-tenant commerce product, building it from zero.",
  },
  {
    company: "Ngaze, Inc.",
    period: "12/2022 - 07/2026",
    role: "Software Engineer",
    description: "Collaborated on multi-tenant SaaS architecture implementing subdomain routing and tenant-aware UIs. Built core LMS features including classroom workflows and live interactions. Enhanced platform usability by migrating styles to Tailwind CSS and developing a Lexical-based editor. Improved engineering culture through code reviews and mentoring.",
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
}

export const projectsData: Project[] = [
  {
    title: "Peña Madridista de Bangladesh",
    description: "The official website and central hub for the Real Madrid supporters' club in Bangladesh. Engineered a custom Membership System that supports over 5,000 registered fans.",
    tech: ["Next.js", "TypeScript", "Fastify", "Prisma", "AWS S3", "Tailwind CSS"],
    link: "https://pmadridistabd.com/",
    image: "/images/projects/penya-madridista-bangladesh.png"
  },
  {
    title: "Madridismo Corner",
    description: "A specialized e-commerce platform built from the ground up for Real Madrid merchandise. Designed and engineered custom Admin Dashboards for seamless order processing and inventory management.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "Pathao SDK"],
    link: "https://www.madridismocorner.com/",
    image: "/images/projects/madridismo-corner.png"
  },
  {
    title: "Pathao Merchant SDK",
    description: "An open-source, type-safe Node.js and TypeScript SDK for the Pathao courier Merchant API, published on npm. Covers orders, stores, price calculation and locations, with webhook signature verification and automatic OAuth2 token refresh.",
    tech: ["TypeScript", "Node.js", "Jest", "npm"],
    link: "https://github.com/Sifat07/pathao-merchant-sdk",
  },
  {
    title: "Dollabills",
    description: "A social platform with real-time chat and video conferencing. Contributed to frontend development: fixed broken UIs, improved responsiveness and refined user flows.",
    tech: ["PHP", "Laravel", "JavaScript", "AWS Chime", "AWS S3", "WebRTC", "WebSocket"],
    link: "https://dollabills.club/",
  },
  {
    title: "Inventory & HR Management System",
    description: "An inventory and HR solution with role-based access. Led the complete frontend implementation, from design to integration with the backend APIs.",
    tech: ["Next.js", "TypeScript", "Express.js", "TypeORM", "MySQL"],
  },
];
