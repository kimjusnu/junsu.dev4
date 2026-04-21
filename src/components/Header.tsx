"use client";

import type { Locale, LocaleContent } from "@/lib/types";

type Props = {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  nav: LocaleContent["nav"];
};

export function Header({ locale, onLocaleChange, nav }: Props) {
  return (
    <header className="sticky top-0 z-40 -mx-6 border-b border-hairline bg-paper/85 px-6 backdrop-blur sm:-mx-10 sm:px-10">
      <div className="mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[0.78rem] font-semibold tracking-[0.22em] text-ink"
        >
          JNS—KIM
        </a>

        <nav className="hidden items-center gap-7 text-[13px] font-medium text-ink-soft md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <button
            type="button"
            onClick={() => onLocaleChange("ko")}
            className={`transition ${locale === "ko" ? "text-ink" : "hover:text-ink"}`}
            aria-pressed={locale === "ko"}
          >
            KO
          </button>
          <span className="text-hairline-strong">/</span>
          <button
            type="button"
            onClick={() => onLocaleChange("en")}
            className={`transition ${locale === "en" ? "text-ink" : "hover:text-ink"}`}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
