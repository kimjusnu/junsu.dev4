import Image from "next/image";
import type { LocaleContent } from "@/lib/types";
import { ArrowUpRight, GithubIcon, MailIcon, PenIcon } from "@/components/ui/Icons";

type Props = {
  hero: LocaleContent["hero"];
};

const buttonClass =
  "group inline-flex items-center gap-2 rounded-full border border-ink/80 px-5 py-3 text-[13px] font-medium text-ink transition hover:border-accent hover:text-accent";

const arrowClass =
  "h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

export function Hero({ hero }: Props) {
  return (
    <section id="top" className="pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)] md:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </div>

          <div className="space-y-6">
            <h1 className="display whitespace-pre-line text-[clamp(2.6rem,6.2vw,5.3rem)]">
              {hero.headline}
            </h1>
            <p className="max-w-[46ch] whitespace-pre-line text-[15px] leading-[1.75] text-ink-soft md:text-base">
              {hero.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="mailto:junsu4621@naver.com" className={buttonClass}>
              <MailIcon className="h-4 w-4" />
              {hero.ctaContact}
              <ArrowUpRight className={arrowClass} />
            </a>
            <a
              href="https://github.com/kimjusnu"
              target="_blank"
              rel="noreferrer"
              className={buttonClass}
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className={arrowClass} />
            </a>
            <a
              href="https://dietisdie.tistory.com/"
              target="_blank"
              rel="noreferrer"
              className={buttonClass}
            >
              <PenIcon className="h-4 w-4" />
              {hero.ctaResume}
              <ArrowUpRight className={arrowClass} />
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-end">
          <figure className="flex w-[220px] flex-col gap-2 md:w-[260px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-highlight">
              <Image
                src="/KakaoTalk_20260415_144305811.png"
                alt="Portrait of Junsu Kim"
                fill
                priority
                sizes="(min-width: 768px) 260px, 220px"
                className="object-cover object-center grayscale contrast-[0.96] opacity-95"
              />
            </div>
            <figcaption className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
              <span>{hero.name}</span>
              <span>2026 / SEOUL</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-hairline pt-8 sm:grid-cols-4 md:mt-16">
        {hero.facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1.5">
            <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              {fact.label}
            </dt>
            <dd className="text-[14px] font-medium text-ink md:text-[15px]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
