"use client";

import { useEffect, useState } from "react";
import type { Locale, LocaleContent } from "@/lib/types";

type Props = {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  nav: LocaleContent["nav"];
};

export function Header({ locale, onLocaleChange, nav }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 -mx-6 border-b border-hairline bg-paper/85 px-6 backdrop-blur sm:-mx-10 sm:px-10">
      <div className="mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between gap-4">
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

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
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

          <button
            type="button"
            className="-mr-1 flex h-9 w-9 items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 right-0 block h-0.5 bg-ink transition ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 block h-0.5 -translate-y-1/2 bg-ink transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 block h-0.5 bg-ink transition ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col border-t border-hairline md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 text-[15px] font-medium text-ink transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
