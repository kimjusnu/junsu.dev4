"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Locale = "ko" | "en";
type ResumeIconKind = "education" | "military" | "certificate";
type BlogPost = {
  title: string;
  date: string;
  category: string;
  href: string;
  image: string;
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kimjusnu" },
  { label: "Blog", href: "https://dietisdie.tistory.com/" },
  { label: "Email", href: "mailto:junsu4621@naver.com" },
] as const;

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "MUI"],
  },
  {
    title: "State / Data",
    items: ["Zustand", "TanStack Query", "Axios", "GA4", "Mixpanel"],
  },
  {
    title: "Infra / Ops",
    items: ["GitHub Actions", "AWS EC2", "PM2", "Jenkins", "Nginx"],
  },
  {
    title: "Backend / Tools",
    items: ["FastAPI", "Jinja2", "Figma", "Notion", "Jira", "AI Tools"],
  },
] as const;

const fallbackBlogPosts: BlogPost[] = [
  {
    title: "딥러닝 뜯어보기 (1) : ChatGPT는 어떻게 답변을 생성할까?",
    date: "2026.04.15",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0-1-ChatGPT%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8B%B5%EB%B3%80%EC%9D%84-%EC%83%9D%EC%84%B1%ED%95%A0%EA%B9%8C",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcAVEDe%2FdJMcaiQtnNR%2FAAAAAAAAAAAAAAAAAAAAAG9JHKsAh0qpDYBtO8IJ7CFvse1KFLwVeSQPS3TgwNE8%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DAzxZw0UGFsnz%252Bg0nR%252Fk3e%252BoqTYY%253D",
  },
  {
    title: "Working with AI: Measuring the Applicability of Generative AI to Occupations 논문 읽어봤습니다",
    date: "2025.12.23",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/Working-with-AI-Measuring-the-Applicability-of-Generative-AI-to-Occupations-%EB%85%BC%EB%AC%B8-%EC%9D%BD%EC%96%B4%EB%B4%A4%EC%8A%B5%EB%8B%88%EB%8B%A4",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FoBvYD%2FdJMcabiu7X4%2FAAAAAAAAAAAAAAAAAAAAAGcHJjzeoReEe6E9sIdYLhmbvwwAq7MA4-P4AByQludR%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DxUv%252BxwfQwQedth6q3qb6lfceq94%253D",
  },
  {
    title: "Jinja2는 모든 주석을 다 파싱해버림",
    date: "2025.12.19",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/Jinja2%EB%8A%94-%EB%AA%A8%EB%93%A0-%EC%A3%BC%EC%84%9D%EC%9D%84-%EB%8B%A4-%ED%8C%8C%EC%8B%B1%ED%95%B4%EB%B2%84%EB%A6%BC",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcZQhBG%2FdJMcac2HM1h%2FAAAAAAAAAAAAAAAAAAAAAPm4guOFf-znt1UmOIAocj_rnQbuGwkGAiv3wB3xZ6ip%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DHUX%252BQs2SXpqKb2GURIpIeeZdwKs%253D",
  },
  {
    title: "쿠키랑 세션",
    date: "2025.12.17",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/%EC%BF%A0%ED%82%A4%EB%9E%91-%EC%84%B8%EC%85%98",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FD0e33%2FdJMcabJxnhA%2FAAAAAAAAAAAAAAAAAAAAANoBFcPPC5i8hxascwoVS6eVBMniJ1fLIFIMSQaYzDUJ%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DrqZJa%252BBHcM%252FgvcfvBb7x4iaavB0%253D",
  },
  {
    title: "React의 리렌더링 과정",
    date: "2025.12.15",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/React%EC%9D%98-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbrJ4At%2FdJMcafynscm%2FAAAAAAAAAAAAAAAAAAAAAEPkVsluxvZb9_9tAqgKZ8-F8bd-Z8cgwbRJ5ZhaWhu0%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DJ63%252BBvNJqrmLjziTP%252BecYaT4whA%253D",
  },
] as const;

function ResumeIcon({ kind }: { kind: ResumeIconKind }) {
  if (kind === "education") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
        <path d="M7 10.5V15c0 1.2 2.2 3 5 3s5-1.8 5-3v-4.5" />
      </svg>
    );
  }

  if (kind === "military") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4.5 6v5.5c0 4.5 3.1 7.9 7.5 9.5 4.4-1.6 7.5-5 7.5-9.5V6L12 3Z" />
        <path d="M9.5 12.5 11 14l3.5-3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

const content = {
  ko: {
    nav: {
      resume: "이력",
      experience: "경력",
      projects: "프로젝트",
      blog: "블로그",
      skills: "기술",
      contact: "연락",
    },
    languageLabel: "언어",
    heroBadge: "Frontend Developer",
    heroName: "김준수",
    heroRole: "비즈니스를 구현하는 프론트엔드 개발자",
    heroSummary:
      "Next.js, React, TypeScript 기반으로 서비스 설계, 운영, 개선을 경험했습니다. 엑셀레이터부터 B2B/B2C 환경까지 다양한 서비스 맥락에서 실무를 수행했습니다.",
    heroMeta: [
      { label: "총 경력", value: "1년 1개월" },
      { label: "희망 직무", value: "Frontend / AI Engineer" },
      { label: "이메일", value: "junsu4621@naver.com" },
    ],
    profileBadge: "Open to Work",
    resume: {
      kicker: "Resume",
      title: "핵심 이력",
      headers: ["구분", "내용", "기간", "기타"],
      rows: [
        {
          kind: "education" as ResumeIconKind,
          label: "학력",
          content: ["한국공학대학교 컴퓨터공학부 소프트웨어전공", "졸업"],
          period: "2020.03 - 2026.02",
          extra: "학점 3.45 / 4.5 · 전공 평점 3.54 / 4.5 · 전공학점 141학점",
        },
        {
          kind: "military" as ResumeIconKind,
          label: "병역",
          content: ["대한민국 육군 병장 만기전역", "병역구분 군필 / 계급 병장"],
          period: "2021.06 - 2022.12",
          extra: "위성운용병 및 정보분석조 복무",
        },
        {
          kind: "certificate" as ResumeIconKind,
          label: "어학 / 자격",
          content: ["OPIc IM1 (2025.02.19)", "Google Analytics 4 Certified", "운전면허 1종 보통"],
          period: "2025.02 - 2025.09",
          extra: "실무 활용 자격 포함",
        },
      ],
      faqTitle: "궁금할 수 있는 질문",
      faqs: [
        {
          question: "학점이 왜 낮은가요?",
          answer:
            "1학년 학점은 4.1이었습니다. 2학년부터는 학교 수업 외에 프론트엔드 독학 비중을 크게 늘렸고, 3학년에는 백엔드 중심 팀프로젝트와 함께 외부 부트캠프 2개를 병행했습니다. 두 부트캠프 모두 팀프로젝트 2등으로 우수상을 받았고, 4학년에는 인턴과 취업으로 학점 제한을 받으며 실무를 시작해 현재의 학점이 형성됐습니다.",
        },
        {
          question: "군대에서는 어떤 일을 했나요?",
          answer:
            "위성운용병 및 정보분석조로 복무했습니다. 입대 전부터 군 네트워크 통신망 체계에 관심이 있어 준비했고, 선발 이후 후반기 교육을 거쳐 관련 보직으로 복무를 마쳤습니다.",
        },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "실무 경력",
      items: [
        {
          company: "에임비랩",
          logo: "/AimBeLab_Color.png",
          period: "2025.07 - 재직중",
          employment: "정규직",
          role: "대리",
          description: "웹 서비스 프론트엔드 개발 및 AI 서비스 기능 구현",
          highlights: [
            "회사 사이트 리빌딩 및 서비스 중심 구조 재설계",
            "운영 서비스 개선, 지도 기반 화면 개발, 데이터 수집 체계 정비",
            "GitHub Actions, Sentry 기반 운영 환경 개선",
          ],
        },
        {
          company: "더이노베이터스",
          logo: "/the_innovators_logo.png",
          period: "2025.03 - 2025.06",
          employment: "인턴",
          role: "TA기술연구부서",
          description: "자사 서비스 StartupQT 웹 프론트엔드 개발",
          highlights: [
            "Next.js 기반 신규 기능 설계 및 개발",
            "동적 입력 폼, 에디터 구조, 상태 관리 정비",
            "배포 자동화 및 SSR hydration 이슈 개선",
          ],
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "주요 프로젝트",
      items: [
        {
          name: "StartupQT",
          subtitle: "퀴즈 저작 · 검수 · 관리 시스템",
          description: "스타트업·창업 교육용 문제은행 플랫폼 프론트엔드 개발",
          stack: ["Next.js", "TypeScript", "Zustand", "Tiptap", "MUI"],
        },
        {
          name: "Componique",
          subtitle: "오픈소스 UI 라이브러리",
          description: "디자인 시스템 기반 30+ UI 컴포넌트 설계 및 npm 배포",
          stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Rollup"],
        },
        {
          name: "Wariri Migration",
          subtitle: "Vue -> Next.js 마이그레이션",
          description: "SEO 개선과 렌더링 성능 향상을 위한 구조 전환",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        },
        {
          name: "4094Fixer",
          subtitle: "Next.js 오류 자동 해결 CLI",
          description: "개발 중 반복되는 오류를 원클릭으로 복구하는 도구",
          stack: ["Node.js", "TypeScript", "Shell Script", "GitHub Actions"],
        },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "블로그 글",
      description: "기술 정리와 실무 경험을 기록한 글입니다.",
    },
    skills: {
      kicker: "Skills",
      title: "기술 스택",
    },
    contact: {
      kicker: "Contact",
      title: "연락",
      description:
        "프론트엔드 포지션을 중심으로 제품 품질과 사용자 경험을 함께 고민하는 팀에 관심이 있습니다.",
    },
  },
  en: {
    nav: {
      resume: "Resume",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      skills: "Skills",
      contact: "Contact",
    },
    languageLabel: "Language",
    heroBadge: "Frontend Developer",
    heroName: "Junsu Kim",
    heroRole: "Frontend developer for product execution",
    heroSummary:
      "I have built and improved services with Next.js, React, and TypeScript across accelerator, B2B, and B2C environments.",
    heroMeta: [
      { label: "Experience", value: "1 year 1 month" },
      { label: "Target Role", value: "Frontend / AI Engineer" },
      { label: "Email", value: "junsu4621@naver.com" },
    ],
    profileBadge: "Open to Work",
    resume: {
      kicker: "Resume",
      title: "Core Resume",
      headers: ["Type", "Details", "Period", "Extra"],
      rows: [
        {
          kind: "education" as ResumeIconKind,
          label: "Education",
          content: ["Korea Polytechnic University, Software Engineering", "Graduated"],
          period: "2020.03 - 2026.02",
          extra: "GPA 3.45 / 4.5 · Major GPA 3.54 / 4.5 · 141 major credits",
        },
        {
          kind: "military" as ResumeIconKind,
          label: "Military",
          content: ["Republic of Korea Army, Sergeant, honorable discharge", "Completed mandatory service"],
          period: "2021.06 - 2022.12",
          extra: "Satellite operations and intelligence support",
        },
        {
          kind: "certificate" as ResumeIconKind,
          label: "Language / Certificates",
          content: ["OPIc IM1 (2025.02.19)", "Google Analytics 4 Certified", "Class 1 Driver's License"],
          period: "2025.02 - 2025.09",
          extra: "Practical credentials included",
        },
      ],
      faqTitle: "Likely Questions",
      faqs: [
        {
          question: "Why is the GPA lower than expected?",
          answer:
            "My first-year GPA was 4.1. From the second year, I shifted more time into self-directed frontend study, and in the third year I combined coursework with two external bootcamps, both of which ended with second-place team awards. In the fourth year, internship and employment schedules with academic limits affected the final GPA.",
        },
        {
          question: "What did you do during military service?",
          answer:
            "I served as a satellite operations soldier and in intelligence analysis support. I had an early interest in military network and communication systems, prepared for the role, completed follow-up training, and finished service in that track.",
        },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Work Experience",
      items: [
        {
          company: "AimBe Lab",
          logo: "/AimBeLab_Color.png",
          period: "2025.07 - Present",
          employment: "Full-time",
          role: "Assistant Manager",
          description: "Frontend development for web services and AI-powered features",
          highlights: [
            "Rebuilt the company site and restructured service-oriented information architecture",
            "Improved production services, map-based screens, and analytics collection flows",
            "Enhanced operations with GitHub Actions and Sentry",
          ],
        },
        {
          company: "The Innovators",
          logo: "/the_innovators_logo.png",
          period: "2025.03 - 2025.06",
          employment: "Intern",
          role: "TA Technical Research",
          description: "Frontend development for the StartupQT web service",
          highlights: [
            "Designed and implemented new features with Next.js",
            "Built dynamic forms, editor flows, and state management structure",
            "Improved deployment automation and SSR hydration stability",
          ],
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Selected Projects",
      items: [
        {
          name: "StartupQT",
          subtitle: "Quiz Authoring / Review / Management System",
          description: "Frontend development for a question-bank platform for startup education",
          stack: ["Next.js", "TypeScript", "Zustand", "Tiptap", "MUI"],
        },
        {
          name: "Componique",
          subtitle: "Open-source UI Library",
          description: "Designed 30+ UI components and published them as an npm package",
          stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Rollup"],
        },
        {
          name: "Wariri Migration",
          subtitle: "Vue to Next.js Migration",
          description: "Rebuilt site architecture for SEO and rendering performance improvements",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        },
        {
          name: "4094Fixer",
          subtitle: "Next.js Error Recovery CLI",
          description: "CLI utility for recovering from recurring local development issues",
          stack: ["Node.js", "TypeScript", "Shell Script", "GitHub Actions"],
        },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "Writing",
      description: "Selected posts from my technical blog.",
    },
    skills: {
      kicker: "Skills",
      title: "Skill Set",
    },
    contact: {
      kicker: "Contact",
      title: "Contact",
      description:
        "I am interested in frontend roles where product quality and user experience are both important.",
    },
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const t = useMemo(() => content[locale], [locale]);

  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog-posts", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { posts?: BlogPost[] };
        if (!ignore && data.posts && data.posts.length > 0) {
          setBlogPosts(data.posts);
        }
      } catch {
        // Keep the fallback list when live fetching fails.
      }
    };

    void fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_28%),radial-gradient(circle_at_30%_30%,_rgba(34,197,94,0.10),_transparent_30%),linear-gradient(180deg,_#f5f7fb_0%,_#eef2f7_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-black/6 py-5">
          <a href="#top" className="text-sm font-semibold tracking-[0.26em] text-slate-900">
            JNS.KIM
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
              <a href="#resume" className="transition hover:text-slate-950">
                {t.nav.resume}
              </a>
              <a href="#experience" className="transition hover:text-slate-950">
                {t.nav.experience}
              </a>
              <a href="#projects" className="transition hover:text-slate-950">
                {t.nav.projects}
              </a>
              <a href="#blog" className="transition hover:text-slate-950">
                {t.nav.blog}
              </a>
              <a href="#skills" className="transition hover:text-slate-950">
                {t.nav.skills}
              </a>
              <a href="#contact" className="transition hover:text-slate-950">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center rounded-full border border-slate-200 bg-white/85 p-1">
              <span className="sr-only">{t.languageLabel}</span>
              <button
                type="button"
                onClick={() => setLocale("ko")}
                className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.16em] transition ${
                  locale === "ko" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                KO
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.16em] transition ${
                  locale === "en" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 lg:grid-cols-[1.25fr_0.78fr]"
        >
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-sm text-slate-700 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {t.heroBadge}
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-700">{t.heroName}</p>
              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
                {t.heroRole}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{t.heroSummary}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {t.heroMeta.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/70 bg-white/76 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-base font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -bottom-2 right-0 h-28 w-28 rounded-full bg-emerald-200/45 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/82 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Profile</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{t.heroName}</p>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-medium text-white">
                  {t.profileBadge}
                </span>
              </div>

              <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.4rem] border border-white/80 bg-slate-100 p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.05rem]">
                  <Image
                    src="/KakaoTalk_20260415_144305811.png"
                    alt="Portrait of Junsu Kim"
                    fill
                    priority
                    sizes="220px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="grid gap-8 border-t border-black/6 py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.resume.kicker}</p>
            <h2 className="section-title">{t.resume.title}</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/82">
            <div className="hidden border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 lg:grid lg:grid-cols-[220px_1.2fr_180px_1fr]">
              {t.resume.headers.map((header) => (
                <div key={header} className="px-6 py-4">
                  {header}
                </div>
              ))}
            </div>
            {t.resume.rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid text-sm leading-7 text-slate-600 lg:grid-cols-[220px_1.2fr_180px_1fr] ${
                  index !== t.resume.rows.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <div className="px-6 py-5">
                  <div className="flex items-center gap-3 font-semibold text-slate-950">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <ResumeIcon kind={row.kind} />
                    </span>
                    <span>{row.label}</span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <ul className="grid gap-2">
                    {row.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 font-medium text-slate-700">{row.period}</div>
                <div className="px-6 py-5">{row.extra}</div>
              </div>
            ))}
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {t.resume.faqs.map((faq) => (
              <article key={faq.question} className="grid gap-3 py-6 lg:grid-cols-[240px_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{t.resume.faqTitle}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">{faq.question}</h3>
                </div>
                <p className="text-sm leading-8 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-8 border-t border-black/6 py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.experience.kicker}</p>
            <h2 className="section-title">{t.experience.title}</h2>
          </div>

          <div className="border-t border-slate-200">
            {t.experience.items.map((item) => (
              <article key={item.company} className="grid gap-6 border-b border-slate-200 py-8 lg:grid-cols-[160px_180px_1fr]">
                <div className="pt-1 text-sm font-semibold text-slate-500">{item.period}</div>

                <div className="space-y-4">
                  <div className="flex h-12 w-36 items-center bg-slate-50 px-4">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={112}
                      height={24}
                      className="h-auto max-h-7 w-auto object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-900">{item.employment}</p>
                    <p className="text-sm text-sky-700">{item.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-base font-medium text-slate-900">{item.description}</p>
                  <ul className="grid gap-2 text-sm leading-7 text-slate-600">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="border-l border-slate-300 pl-4">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="grid gap-8 border-t border-black/6 py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.projects.kicker}</p>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {t.projects.items.map((project) => (
              <article key={project.name} className="grid gap-4 py-6 lg:grid-cols-[220px_1fr]">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{project.name}</h3>
                  <p className="text-sm font-medium text-sky-700">{project.subtitle}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-base leading-8 text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                      <span key={stack} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="grid gap-8 border-t border-black/6 py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.blog.kicker}</p>
            <h2 className="section-title">{t.blog.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{t.blog.description}</p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {blogPosts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="grid gap-4 py-5 transition hover:bg-white/30 lg:grid-cols-[112px_1fr_110px]"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="h-24 w-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-sky-700">{post.category}</p>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">{post.title}</h3>
                </div>
                <div className="text-sm text-slate-500 lg:text-right">{post.date}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-8 border-t border-black/6 py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">{t.skills.kicker}</p>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/82">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`grid gap-4 px-6 py-5 lg:grid-cols-[180px_1fr] ${
                  index !== skillGroups.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-8 grid gap-6 border-t border-black/6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-kicker">{t.contact.kicker}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{t.contact.description}</p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6">
            <div className="grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
