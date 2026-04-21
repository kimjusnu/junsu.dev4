export type Locale = "ko" | "en";

export type BlogPost = {
  title: string;
  date: string;
  category: string;
  href: string;
  image: string;
};

export type ProjectItem = {
  name: string;
  subtitle: string;
  description: string;
  stack: readonly string[];
  href: string;
  icon?: string;
};

export type ExperienceItem = {
  company: string;
  logo: string;
  period: string;
  department: string;
  employment: string;
  role: string;
  description: string;
  highlights: readonly string[];
};


export type ResumeFact = {
  label: string;
  value: string;
};

export type ResumeEntry = {
  title: string;
  note?: string;
  period: string;
};

export type ResumeRecord = {
  label: string;
  entries: readonly ResumeEntry[];
};

export type SkillGroup = {
  title: string;
  items: readonly { name: string; icon?: string }[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HeroFact = {
  label: string;
  value: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type LocaleContent = {
  nav: readonly NavItem[];
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    summary: string;
    ctaContact: string;
    ctaResume: string;
    facts: readonly HeroFact[];
  };
  about: {
    label: string;
    title: string;
    intro: readonly string[];
    facts: readonly ResumeFact[];
    records: readonly ResumeRecord[];
  };
  experience: {
    label: string;
    title: string;
    total: string;
    items: readonly ExperienceItem[];
  };
  projects: {
    label: string;
    title: string;
    items: readonly ProjectItem[];
  };
  skills: {
    label: string;
    title: string;
    groups: readonly SkillGroup[];
  };
  writing: {
    label: string;
    title: string;
    description: string;
    viewAll: string;
  };
  footer: {
    label: string;
    title: string;
    description: string;
    email: string;
    socials: readonly SocialLink[];
    copyright: string;
  };
};
