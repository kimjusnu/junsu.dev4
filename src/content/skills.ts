import type { SkillGroup } from "@/lib/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: "/Next.js.svg" },
      { name: "React", icon: "/React.svg" },
      { name: "TypeScript", icon: "/TypeScript.svg" },
      { name: "JavaScript", icon: "/JavaScript.svg" },
    ],
  },
  {
    title: "State · Data",
    items: [
      { name: "Zustand", icon: "/Zustand.svg" },
      { name: "TanStack Query", icon: "/reactquery.svg" },
      { name: "Redux", icon: "/Redux.svg" },
      { name: "Axios", icon: "/Azios.svg" },
      { name: "Firebase", icon: "/Firebase.svg" },
      { name: "jQuery", icon: "/jQuery.svg" },
    ],
  },
  {
    title: "UI",
    items: [
      { name: "Tailwind CSS", icon: "/Tailwind CSS.svg" },
      { name: "MUI", icon: "/Material UI.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", icon: "/FastAPI.svg" },
      { name: "Jinja2", icon: "/Jinja (1).svg" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "GitHub Actions", icon: "/GitHub Actions.svg" },
      { name: "Vercel", icon: "/vercel.svg" },
      { name: "AWS", icon: "/AWS.svg" },
      { name: "Jenkins", icon: "/Jenkins.svg" },
      { name: "NGINX", icon: "/NGINX.svg" },
      { name: "PM2", icon: "/pm2.svg" },
    ],
  },
  {
    title: "Analytics",
    items: [
      { name: "GA4", icon: "/googleanalytics.svg" },
      { name: "Mixpanel", icon: "/Mixpanel.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "/Git.svg" },
      { name: "Figma", icon: "/Figma.svg" },
      { name: "Notion", icon: "/notion.png" },
      { name: "Slack", icon: "/Slack.svg" },
      { name: "Jira", icon: "/Jira (1).svg" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Cursor", icon: "/cursor.png" },
      { name: "Antigravity", icon: "/anti.webp" },
      { name: "v0", icon: "/v0.png" },
      { name: "Pencil", icon: "/pencil.svg" },
      { name: "Figurelabs", icon: "/figurelabs.ico" },
    ],
  },
];
