import Image from "next/image";
import type { LocaleContent } from "@/lib/types";
import { ArrowUpRight, GithubIcon, MailIcon, PenIcon } from "@/components/ui/Icons";

type Props = {
  hero: LocaleContent["hero"];
};

const buttonClass =
  "group inline-flex items-center gap-1.5 rounded-full border border-ink/80 px-3 py-2 text-[11.5px] font-medium text-ink transition hover:border-accent hover:text-accent md:gap-2 md:px-5 md:py-3 md:text-[13px]";

const buttonIconClass = "h-3.5 w-3.5 shrink-0 md:h-4 md:w-4";

const buttonArrowClass =
  "hidden h-3 w-3 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:inline-block md:h-3.5 md:w-3.5";

export function Hero({ hero }: Props) {
  return (
    <section id="top" className="pb-12 pt-6 md:pb-20 md:pt-12">
      <div className="flex items-center gap-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-accent md:text-[11px]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="truncate">{hero.eyebrow}</span>
      </div>

      <div className="mt-5 flex gap-4 sm:gap-8 md:mt-6 md:gap-14">
        <div className="flex min-w-0 flex-1 flex-col space-y-4 md:space-y-6">
          <h1 className="display whitespace-pre-line text-[clamp(1.85rem,6.2vw,5.3rem)]">
            {hero.headline}
          </h1>
          <p className="max-w-[46ch] whitespace-pre-line text-[13px] leading-[1.65] text-ink-soft md:text-base md:leading-[1.75]">
            {hero.summary}
          </p>
        </div>

        <div className="shrink-0">
          <figure className="flex w-[100px] flex-col gap-2 sm:w-[140px] md:w-[260px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-highlight">
              <Image
                src="/KakaoTalk_20260415_144305811.png"
                alt="Portrait of Junsu Kim"
                fill
                priority
                sizes="(min-width: 768px) 260px, (min-width: 640px) 140px, 100px"
                className="object-cover object-center grayscale contrast-[0.96] opacity-95"
              />
            </div>
            <figcaption className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-muted md:text-[10.5px]">
              <span>{hero.name}</span>
              <span className="hidden sm:inline">2026 / SEOUL</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 md:mt-10 md:gap-3">
        <a href="mailto:junsu4621@naver.com" className={buttonClass}>
          <MailIcon className={buttonIconClass} />
          {hero.ctaContact}
          <ArrowUpRight className={buttonArrowClass} />
        </a>
        <a
          href="https://github.com/kimjusnu"
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
        >
          <GithubIcon className={buttonIconClass} />
          GitHub
          <ArrowUpRight className={buttonArrowClass} />
        </a>
        <a
          href="https://dietisdie.tistory.com/"
          target="_blank"
          rel="noreferrer"
          className={buttonClass}
        >
          <PenIcon className={buttonIconClass} />
          {hero.ctaResume}
          <ArrowUpRight className={buttonArrowClass} />
        </a>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hairline pt-6 sm:grid-cols-4 sm:gap-x-8 md:mt-16 md:gap-y-5 md:pt-8">
        {hero.facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1.5">
            <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              {fact.label}
            </dt>
            <dd className="text-[13px] font-medium text-ink md:text-[15px]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
