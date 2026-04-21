import Image from "next/image";
import type { LocaleContent } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = {
  experience: LocaleContent["experience"];
};

export function Experience({ experience }: Props) {
  return (
    <section className="pb-20">
      <SectionHeader
        id="work"
        label={experience.label}
        meta={`TOTAL · ${experience.total}`}
        divider={false}
      />

      <ol className="mt-10 grid gap-0 border-t border-hairline">
        {experience.items.map((item, index) => (
          <li
            key={item.company}
            className="grid gap-6 border-b border-hairline py-10 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10 md:py-12"
          >
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {`0${index + 1}`}
                <span className="mx-2 text-hairline-strong">/</span>
                {item.period}
              </span>
              <div className="flex h-10 w-[150px] items-center">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={150}
                  height={40}
                  className="h-auto max-h-9 w-auto object-contain object-left"
                />
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.employment}
                {item.role ? ` · ${item.role}` : ""}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.85rem]">
                  {item.company}
                </h3>
                <span className="text-[13px] text-muted">{item.department}</span>
              </div>
              <p className="max-w-[64ch] text-[15px] leading-[1.85] text-ink-soft">
                {item.description}
              </p>
              <ul className="grid gap-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-[14px] leading-[1.75] text-ink-soft"
                  >
                    <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-muted" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
