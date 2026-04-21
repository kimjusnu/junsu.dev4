import type { LocaleContent } from "@/lib/types";
import { skillGroups } from "./skills";

export const en: LocaleContent = {
  nav: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "FE/AI ENGINEER · SEOUL",
    name: "JUNSU_KIM",
    headline: "FE/AI Engineer,\nJUNSU_KIM",
    summary:
      "I've led every stage — planning, design, implementation, deploy, operations —\nso I can drive a service from A to Z.",
    ctaContact: "Send Email",
    ctaResume: "Blog",
    facts: [
      { label: "Experience", value: "1Y 1M" },
      { label: "Focus", value: "Frontend · AI" },
      { label: "Based in", value: "Seoul, KR" },
      { label: "Status", value: "Open to Work" },
    ],
  },
  about: {
    label: "About",
    title: "About",
    intro: [
      "After my Computer Engineering degree, I've taken a product end to end at startups built around B2B/B2C products — Figma mockups, Next.js implementation, GitHub Actions deploys, Sentry observability. I use AI tools to cut repetitive work, and the real time goes elsewhere. I shape how the product is discovered through SEO · AEO · GEO architecture and legacy migration, tune performance with bundle splitting · Core Web Vitals, and wire stability through SSR hydration · recovery scenarios. Once it's live, I read the product through GA events · observability, and polish type safety · deployment automation.",
    ],
    facts: [
      { label: "Name", value: "Junsu Kim" },
      { label: "Email", value: "junsu4621@naver.com" },
      { label: "Experience", value: "1 year 1 month" },
      { label: "Target", value: "Frontend / AI Engineer" },
      { label: "Traits", value: "Soft in dialogue, logical in opinion" },
    ],
    records: [
      {
        label: "Education",
        entries: [
          {
            title: "Korea Polytechnic University, Software Engineering — Graduated",
            note: "GPA 3.45 / 4.5 · Major GPA 3.54 · 141 major credits",
            period: "2020.03 — 2026.02",
          },
          {
            title: "AI-based Data Analysis & Visualization — Completed",
            note: "Hosted by Korea Industry-Academy Collaboration Foundation",
            period: "2025.12.22",
          },
          {
            title: "SW Capstone Design — Excellence Award",
            note: "'Eat Fit' meal-tracking app · PWA frontend · paper writing",
            period: "2025.03 — 2025.09",
          },
          {
            title: "Sniper Factory Frontend — Cohort 3",
            note: "Excellence · team project lead · Wairi Vue → Next.js migration",
            period: "2024.10 — 2024.12",
          },
          {
            title: "Woongjin × Udemy Next.js Bootcamp — Cohort 3",
            note: "2nd place · outstanding participant · built Componique",
            period: "2024.04 — 2024.09",
          },
        ],
      },
      {
        label: "Military",
        entries: [
          {
            title: "ROK Army 53rd Div., 126th Brigade, 4th Battalion — Sergeant (honorable discharge)",
            note: "Communications · Intelligence analysis · Unit network maintenance · UFS / Busan Defense Exercise",
            period: "2021.06.07 — 2022.12.06",
          },
        ],
      },
      {
        label: "Language",
        entries: [
          {
            title: "OPIc IM1 (Intermediate Mid 1)",
            period: "2025.02.19",
          },
        ],
      },
      {
        label: "Certificates",
        entries: [
          {
            title: "Google Analytics 4 (GA4) Certified",
            period: "2025.09.19",
          },
          {
            title: "Class 1 Driver's License",
            period: "2020.01.29",
          },
          {
            title: "Taekwondo 4th Dan",
            period: "2016.12",
          },
        ],
      },
      {
        label: "Etc",
        entries: [
          {
            title: "TUK Field Training Supporters — 1st · 2nd · 3rd cohort",
            note: "Member (1st), Vice Leader (2nd · 3rd) · consultation sessions · partner interviews · promotional content",
            period: "2022.12 — 2025.02",
          },
          {
            title: "TUK GDSC Beginner",
            note: "React study group and team project",
            period: "2024.05 — 2024.08",
          },
          {
            title: "SPLing Presentation Club — 40th · 42nd cohort",
            note: "Member (40th, 2 presentation awards), Staff (42nd, Planning team lead)",
            period: "2020.03 — 2021.04",
          },
        ],
      },
    ],
  },
  experience: {
    label: "Work",
    title: "Experience",
    total: "1 year 1 month",
    items: [
      {
        company: "AimBe Lab",
        logo: "/AimBeLab_logo.png",
        period: "2025.07 — Present",
        department: "SW Development Team",
        employment: "Full-time",
        role: "Assistant Manager",
        description: "Frontend · backend and AI feature development for web services",
        highlights: [
          "Led MyFeed 1.0 maintenance and new 1.5 development.",
          "Migrated the company site from PHP to Next.js and restructured information architecture for SEO.",
          "Designed and implemented UI/UX for three AI admin tools.",
          "Built GA-based monitoring and analytics flows for product data.",
          "Introduced GitHub Actions and Sentry to improve operations.",
        ],
      },
      {
        company: "The Innovators",
        logo: "/the_innovators_logo.png",
        period: "2025.03 — 2025.06",
        department: "TA Technical Research",
        employment: "Intern",
        role: "",
        description: "Frontend development for StartupQT platform and back-office",
        highlights: [
          "Designed and implemented new Next.js features, dynamic forms, and editor flows.",
          "Built back-office screens and refined state management structure.",
          "Resolved SSR hydration issues and improved deployment automation.",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Selected Projects",
    items: [
      {
        name: "Kirok",
        subtitle: "Big Five Personality Test · AI Interpretation",
        description:
          "Goldberg IPIP-50 based personality test service. Delivers percentile scores for the five factors, Korean AI interpretation, and real-time academic citations from OpenAlex — in under 10 minutes. Anonymous, no signup.",
        stack: ["Next.js", "TypeScript", "Tailwind", "LLM", "OpenAlex"],
        href: "https://kirok-six.vercel.app/",
      },
      {
        name: "StartupQT",
        subtitle: "Quiz Authoring · Review · Management",
        description:
          "Frontend architecture and implementation for a question-bank platform for startup education.",
        stack: ["Next.js", "TypeScript", "Zustand", "Tiptap", "MUI"],
        href: "https://startupqt.com/start",
        icon: "/pavicon-startupqt.png",
      },
      {
        name: "Componique",
        subtitle: "Open-source UI library",
        description:
          "Designed 30+ UI components based on a design system and published them to npm.",
        stack: ["React", "TypeScript", "Tailwind", "Storybook", "Rollup"],
        href: "https://componique.vercel.app/",
        icon: "/pavicon-componique.png",
      },
      {
        name: "Wairi",
        subtitle: "Vue → Next.js migration",
        description:
          "Rebuilt service architecture with Next.js for SEO and rendering performance.",
        stack: ["Next.js", "TypeScript", "Tailwind", "SEO"],
        href: "https://www.wairi.co.kr/webapp",
        icon: "/pavicon-wiri.png",
      },
      {
        name: "Eat Fit",
        subtitle: "Personalized nutrition service",
        description:
          "SW Capstone Excellence Award — meal logging and reports based on dietary habit data.",
        stack: ["Next.js", "FastAPI", "AWS", "PWA"],
        href: "https://expo.tukorea.ac.kr/2025/work/87",
        icon: "/pavicon-tuk.png",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Skill Set",
    groups: skillGroups,
  },
  writing: {
    label: "Writing",
    title: "Writing",
    description: "Selected posts from my technical blog.",
    viewAll: "View all posts",
  },
  footer: {
    label: "Contact",
    title: "",
    description:
      "Proposals · Collaborations · Coffee chats — reach out anytime.",
    email: "junsu4621@naver.com",
    socials: [
      { label: "GitHub", href: "https://github.com/kimjusnu" },
      { label: "Blog", href: "https://dietisdie.tistory.com/" },
      { label: "Email", href: "mailto:junsu4621@naver.com" },
    ],
    copyright: "© 2026 Junsu Kim. All rights reserved.",
  },
};
