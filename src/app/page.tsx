const socialLinks = [
  { label: "GitHub", href: "https://github.com/kimjusnu" },
  { label: "Blog", href: "https://dietisdie.tistory.com/" },
  { label: "Email", href: "mailto:junsu4621@naver.com" },
];

const strengths = [
  "Service design to operations across B2B and B2C products",
  "Complex UI architecture for editors, workflows, and large admin surfaces",
  "Data-driven improvement with GA4 and Mixpanel instrumentation",
  "AI-assisted workflow experimentation without sacrificing product quality",
];

const experiences = [
  {
    company: "AimBe Lab",
    period: "2025.07 - Present",
    role: "Frontend Developer",
    summary:
      "Developing product-facing web services and AI-powered features while stabilizing legacy operations for domain-heavy users.",
    highlights: [
      "Rebuilt the corporate site around service discovery, replacing an outsourced plan with an in-house implementation.",
      "Improved monitoring and deployment with GitHub Actions and Sentry-based operational visibility.",
      "Handled mixed legacy stacks, map-based interfaces, and analytics instrumentation for live production services.",
    ],
  },
  {
    company: "The Innovators",
    period: "2025.03 - 2025.06",
    role: "Frontend Engineer Intern",
    summary:
      "Built the StartupQT platform for quiz authoring, review, and management in a fast-moving accelerator environment.",
    highlights: [
      "Implemented dynamic forms and editor workflows with Next.js, Zustand, and Tiptap.",
      "Resolved hydration issues in SSR flows and improved rendering stability.",
      "Joined deployment automation work using GitHub Actions, EC2, and PM2.",
    ],
  },
];

const projects = [
  {
    name: "StartupQT",
    description:
      "Integrated quiz authoring, review, and analytics for startup education teams.",
    metric: "Structured editor and review flows for real production use",
    stack: ["Next.js", "TypeScript", "Zustand", "Tiptap", "MUI"],
  },
  {
    name: "Componique",
    description:
      "Open-source UI library built around reusable patterns and design-system thinking.",
    metric: "30+ components designed, npm distribution experience",
    stack: ["React", "TypeScript", "Tailwind CSS", "Rollup", "Storybook"],
  },
  {
    name: "Wariri Migration",
    description:
      "Migrated a Vue-based marketing site to Next.js with stronger SEO and faster rendering.",
    metric: "FCP improved from 1.8s to 0.9s and search inflow increased",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    name: "4094Fixer",
    description:
      "CLI utility that automates recovery from recurring Next.js local development errors.",
    metric: "Cross-platform npm package focused on workflow recovery",
    stack: ["Node.js", "TypeScript", "Shell Script", "GitHub Actions"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "MUI"],
  },
  {
    title: "State & Data",
    items: ["Zustand", "TanStack Query", "Axios", "GA4", "Mixpanel"],
  },
  {
    title: "Backend & Ops",
    items: ["FastAPI", "Jinja2", "GitHub Actions", "AWS EC2", "PM2", "Jenkins", "Nginx"],
  },
  {
    title: "Collaboration",
    items: ["Figma", "Notion", "Slack", "Jira", "AI Workflow Tools"],
  },
];

const educationItems = [
  "Korea Polytechnic University, B.S. in Software Engineering (2020 - 2026)",
  "Sniper Factory Frontend Bootcamp, Excellence Award",
  "Woongjin ThinkBig x Udemy Next.js Bootcamp, 2nd Place Excellence Award",
  "Google Analytics 4 Certified, OPIc IM1",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_28%),radial-gradient(circle_at_30%_30%,_rgba(34,197,94,0.10),_transparent_30%),linear-gradient(180deg,_#f5f7fb_0%,_#eef2f7_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-black/6 py-5">
          <a href="#top" className="text-sm font-semibold tracking-[0.26em] text-slate-900">
            JNS.KIM
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-950">
              About
            </a>
            <a href="#experience" className="transition hover:text-slate-950">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-slate-950">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-sm text-slate-700 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.6)] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Frontend developer with product and operations perspective
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-700">
                Kim Junsu
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Building polished interfaces that translate business complexity into usable
                products.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I build modern frontend experiences with Next.js, React, and TypeScript,
                shaped by real product operations, analytics, and fast-changing business
                requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-[0_12px_35px_-24px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-3xl border border-white/70 bg-white/70 p-5 text-sm leading-7 text-slate-700 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.85)] backdrop-blur"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 h-28 w-28 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -bottom-4 right-6 h-36 w-36 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Profile</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">Junsu Kim</p>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                  Open to FE roles
                </span>
              </div>

              <div className="grid gap-6">
                <div className="aspect-[4/5] rounded-[1.75rem] bg-[linear-gradient(180deg,_rgba(226,232,240,0.95),_rgba(255,255,255,0.9))] p-4">
                  <div className="flex h-full items-end rounded-[1.4rem] border border-white/80 bg-[linear-gradient(135deg,_#f8fafc_0%,_#dbeafe_48%,_#ecfccb_100%)] p-6 shadow-inner">
                    <div className="w-full rounded-[1.5rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                        JK
                      </div>
                      <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Frontend
                      </p>
                      <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Developer
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        Replace this card with your portrait later. The layout is already sized
                        for a real profile image.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Current focus</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                    <p>Designing maintainable frontend structures for business-critical workflows.</p>
                    <p>Applying analytics and AI tooling to improve product quality and speed.</p>
                    <p>Bridging product, operations, and engineering with clear implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 border-t border-black/6 py-16 lg:grid-cols-[0.9fr_1.4fr]"
        >
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">A frontend engineer who thinks in product systems.</h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-600">
            <p>
              I started from backend-centered development during my computer science studies,
              but gradually found myself most engaged in the stage where user experience becomes
              tangible and complete. Since then, I have focused on frontend development while
              staying close to backend and AI collaboration.
            </p>
            <p>
              My work spans accelerator environments, B2B operations, and domain-specific
              services. That range taught me how to design screens that are not only visually
              polished, but also resilient to changing requirements, operational constraints,
              and non-technical end users.
            </p>
          </div>
        </section>

        <section id="experience" className="grid gap-8 border-t border-black/6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Experience</p>
              <h2 className="section-title">Professional work shaped by real service constraints.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              From early-stage product environments to domain-heavy production services, I focus
              on building interfaces that remain understandable, maintainable, and operationally
              sound.
            </p>
          </div>

          <div className="grid gap-6">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.55)] backdrop-blur lg:grid-cols-[0.42fr_1fr]"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                    {experience.period}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-sky-700">{experience.role}</p>
                </div>
                <div className="space-y-5">
                  <p className="text-base leading-8 text-slate-600">{experience.summary}</p>
                  <ul className="grid gap-3 text-sm leading-7 text-slate-700">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-2xl bg-slate-50 px-4 py-3">
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
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected work that reflects how I design and ship.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.55)] transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {project.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Case
                  </span>
                </div>
                <p className="mt-6 text-sm font-medium text-sky-800">{project.metric}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-black/6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">Technical breadth grounded in product delivery.</h2>
            <div className="mt-8 grid gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-white/70 bg-white/75 p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.6)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                    <div className="h-px flex-1 bg-slate-200 ml-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-start">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.75)]">
              <p className="section-kicker text-slate-400">Education</p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-200">
                {educationItems.map((item) => (
                  <p key={item} className="rounded-2xl bg-white/5 px-4 py-3">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6">
              <p className="section-kicker">Other Experience</p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-600">
                <p>Physics instructor for elementary to high school students since 2025.</p>
                <p>University field practice supporters program, including deputy lead work.</p>
                <p>Served in the Republic of Korea Army and completed full military service.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mb-8 grid gap-6 border-t border-black/6 py-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s build thoughtful products together.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              I am interested in frontend roles where product thinking, service quality, and
              implementation depth matter together. If that sounds close to what you are building,
              I would love to connect.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.55)]">
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
