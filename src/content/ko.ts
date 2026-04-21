import type { LocaleContent } from "@/lib/types";
import { skillGroups } from "./skills";

export const ko: LocaleContent = {
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
      "기획 · 설계 · 개발 · 배포 · 운영까지 모든 프로세스를 주도해봤기에,\n하나의 서비스를 A-Z까지 진행할 수 있습니다.",
    ctaContact: "이메일 보내기",
    ctaResume: "블로그",
    facts: [
      { label: "Experience", value: "1Y 1M" },
      { label: "Focus", value: "Frontend · AI" },
      { label: "Based in", value: "Seoul, KR" },
      { label: "Status", value: "Open to Work" },
    ],
  },
  about: {
    label: "About",
    title: "소개",
    intro: [
      "컴퓨터공학부 졸업 후, 스타트업과 B2B/B2C를 주력으로 하는 회사에서 Figma 시안부터 Next.js 구현, GitHub Actions 배포, Sentry 관측까지 한 제품을 끝까지 굴려봤습니다. AI 도구는 반복 작업을 덜어내는 수단으로 쓰고, 정작 시간은 다른 곳에 들입니다. SEO · AEO · GEO 구조와 레거시 이관으로 제품이 발견되는 흐름을 설계하고, 번들 분할 · Core Web Vitals로 성능을 맞추고, SSR hydration · 운영 복구 시나리오로 안정성을 챙깁니다. 운영에 들어가면 GA 이벤트와 관측 체계로 제품이 어떻게 쓰이는지 읽고, 타입 안전성 · 배포 자동화로 개발 경험을 다듬습니다.",
    ],
    facts: [
      { label: "Name", value: "김준수 · Junsu Kim" },
      { label: "Email", value: "junsu4621@naver.com" },
      { label: "Experience", value: "1년 1개월" },
      { label: "Target", value: "Frontend / AI Engineer" },
      { label: "Traits", value: "소통은 부드럽게, 의견은 논리적으로" },
    ],
    records: [
      {
        label: "Education",
        entries: [
          {
            title: "한국공학대학교 컴퓨터공학부 소프트웨어전공 졸업",
            note: "GPA 3.45 / 4.5 · 전공 평점 3.54 · 전공학점 141",
            period: "2020.03 — 2026.02",
          },
          {
            title: "AI 기반 데이터 분석 및 시각화 교육 수료",
            note: "한국산학연협회 주관",
            period: "2025.12.22",
          },
          {
            title: "SW캡스톤디자인 우수상",
            note: "식습관 관리 앱 '잇핏' · PWA 프론트엔드 · 논문 작성",
            period: "2025.03 — 2025.09",
          },
          {
            title: "스나이퍼팩토리 프론트엔드 3기",
            note: "우수상 · 팀 프로젝트 리더 · 와이리 Vue → Next.js 마이그레이션",
            period: "2024.10 — 2024.12",
          },
          {
            title: "웅진씽크빅 × Udemy Next.js 부트캠프 3기",
            note: "2등 · 우수 수강생 선발 · Componique 개발",
            period: "2024.04 — 2024.09",
          },
        ],
      },
      {
        label: "Military",
        entries: [
          {
            title: "대한민국 육군 53사단 126여단 4대대 병장 만기전역",
            note: "통신병 · 정보분석조 · 부대 통신망 유지보수 · UFS / 부산 호국훈련 참가",
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
            title: "운전면허 1종 보통",
            period: "2020.01.29",
          },
          {
            title: "태권도 4단",
            period: "2016.12",
          },
        ],
      },
      {
        label: "Etc",
        entries: [
          {
            title: "한국공학대학교 현장실습 서포터즈 드림온 1·2·3기",
            note: "1기 단원, 2·3기 부단장 · 현장실습 상담소 · 기업 인터뷰 · 홍보 콘텐츠 제작",
            period: "2022.12 — 2025.02",
          },
          {
            title: "TUK GDSC Beginner",
            note: "React 스터디 및 팀 프로젝트",
            period: "2024.05 — 2024.08",
          },
          {
            title: "대학생 발표연합동아리 SPLing 40·42기",
            note: "40기 기수 (발표 수상 2회), 42기 운영진 · 기획팀 팀장",
            period: "2020.03 — 2021.04",
          },
        ],
      },
    ],
  },
  experience: {
    label: "Work",
    title: "경력",
    total: "1년 1개월",
    items: [
      {
        company: "AimBe Lab",
        logo: "/AimBeLab_logo.png",
        period: "2025.07 — 재직중",
        department: "SW 개발팀",
        employment: "정규직",
        role: "대리",
        description: "웹 서비스 프론트엔드 · 백엔드 및 AI 기능 개발",
        highlights: [
          "마이피드 1.0 유지보수와 1.5 버전 신규 개발을 주도했습니다.",
          "회사 홈페이지를 PHP에서 Next.js로 마이그레이션하고 SEO 구조를 재설계했습니다.",
          "AI 기반 관리기 3종의 UI/UX를 설계하고 구현했습니다.",
          "GA 기반 모니터링 체계를 구축해 서비스 데이터 분석 플로우를 정비했습니다.",
          "GitHub Actions · Sentry를 도입해 운영 환경을 개선했습니다.",
        ],
      },
      {
        company: "The Innovators",
        logo: "/the_innovators_logo.png",
        period: "2025.03 — 2025.06",
        department: "TA 기술연구부서",
        employment: "인턴",
        role: "",
        description: "StartupQT 플랫폼 및 백오피스 프론트엔드 개발",
        highlights: [
          "Next.js 기반 신규 기능을 설계하고 동적 입력 폼·에디터 흐름을 개발했습니다.",
          "백오피스 화면을 구축하고 상태 관리 구조를 정비했습니다.",
          "SSR hydration 이슈를 해결하고 배포 자동화를 개선했습니다.",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "주요 프로젝트",
    items: [
      {
        name: "Kirok",
        subtitle: "Big Five 성격검사 · AI 해석",
        description:
          "Goldberg IPIP-50 기반 성격검사 서비스. 5요인 백분위와 AI 한국어 해석, OpenAlex 실시간 학술 인용을 10분 안에 제공합니다. 익명 · 회원가입 없음.",
        stack: ["Next.js", "TypeScript", "Tailwind", "LLM", "OpenAlex"],
        href: "https://kirok-six.vercel.app/",
      },
      {
        name: "StartupQT",
        subtitle: "퀴즈 저작 · 검수 · 관리 시스템",
        description:
          "스타트업 교육용 문제은행 플랫폼의 프론트엔드 설계 및 운영 구조 구축.",
        stack: ["Next.js", "TypeScript", "Zustand", "Tiptap", "MUI"],
        href: "https://startupqt.com/start",
        icon: "/pavicon-startupqt.png",
      },
      {
        name: "Componique",
        subtitle: "오픈소스 UI 라이브러리",
        description:
          "디자인 시스템 기반으로 30개 이상의 UI 컴포넌트를 설계하고 npm 배포.",
        stack: ["React", "TypeScript", "Tailwind", "Storybook", "Rollup"],
        href: "https://componique.vercel.app/",
        icon: "/pavicon-componique.png",
      },
      {
        name: "Wairi",
        subtitle: "Vue → Next.js 마이그레이션",
        description:
          "SEO와 렌더링 성능 개선을 위해 서비스 구조를 Next.js 기반으로 재구성.",
        stack: ["Next.js", "TypeScript", "Tailwind", "SEO"],
        href: "https://www.wairi.co.kr/webapp",
        icon: "/pavicon-wiri.png",
      },
      {
        name: "Eat Fit",
        subtitle: "맞춤형 영양관리 서비스",
        description:
          "사용자 식습관 데이터를 기반으로 식단 기록과 리포트를 제공하는 SW캡스톤디자인 우수상 작품.",
        stack: ["Next.js", "FastAPI", "AWS", "PWA"],
        href: "https://expo.tukorea.ac.kr/2025/work/87",
        icon: "/pavicon-tuk.png",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "기술 스택",
    groups: skillGroups,
  },
  writing: {
    label: "Writing",
    title: "블로그",
    description: "기술 탐구와 실무 경험을 정리한 글.",
    viewAll: "전체 글 보기",
  },
  footer: {
    label: "Contact",
    title: "",
    description: "제안 · 협업 · 커피챗 — 무엇이든 편하게 연락 주세요.",
    email: "junsu4621@naver.com",
    socials: [
      { label: "GitHub", href: "https://github.com/kimjusnu" },
      { label: "Blog", href: "https://dietisdie.tistory.com/" },
      { label: "Email", href: "mailto:junsu4621@naver.com" },
    ],
    copyright: "© 2026 Junsu Kim. All rights reserved.",
  },
};
