import type { LocaleContent, ResumeEntry } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDownIcon } from "@/components/ui/Icons";

type Props = {
  about: LocaleContent["about"];
};

function EntryRow({ entry, chevron }: { entry: ResumeEntry; chevron?: boolean }) {
  return (
    <>
      <div className="space-y-1">
        <p className="text-[14px] leading-[1.65] text-ink">{entry.title}</p>
        {entry.note ? (
          <p className="text-[12.5px] leading-[1.65] text-muted">{entry.note}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-1.5 font-mono text-[11.5px] text-muted md:justify-end">
        <span className="whitespace-nowrap">{entry.period}</span>
        {chevron ? (
          <ChevronDownIcon className="h-3 w-3 shrink-0 text-muted-soft transition group-open:rotate-180 group-hover:text-accent group-open:text-accent" />
        ) : null}
      </div>
    </>
  );
}

export function About({ about }: Props) {
  return (
    <section className="pb-16 md:pb-20">
      <SectionHeader id="about" label={about.label} />

      <div className="mt-8 md:mt-10 md:grid md:grid-cols-[minmax(0,200px)_1fr] md:gap-10">
        <div className="hidden md:block" aria-hidden />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
          <div className="flex max-w-[58ch] flex-col gap-5 text-[15px] leading-[1.9] text-ink-soft">
            {about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <dl className="grid divide-y divide-hairline border-y border-hairline lg:gap-3 lg:divide-y-0 lg:border-y-0">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[100px_1fr] items-baseline gap-4 py-2.5 text-[13px] lg:grid-cols-[110px_1fr] lg:py-0 lg:text-[13.5px]"
              >
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </dt>
                <dd className="text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10">
        <div className="section-label text-muted">Résumé</div>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {about.records.map((record) => {
            const [firstEntry, ...restEntries] = record.entries;
            if (!firstEntry) return null;
            const hasMore = restEntries.length > 0;

            return (
              <li key={record.label} className="py-5 md:py-6">
                <div className="grid gap-4 md:grid-cols-[160px_1fr] md:gap-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {record.label}
                  </div>

                  {hasMore ? (
                    <details className="group">
                      <summary className="transition hover:[&>div>div>p:first-child]:text-accent">
                        <div className="grid gap-1 md:grid-cols-[1fr_175px] md:items-start md:gap-6">
                          <EntryRow entry={firstEntry} chevron />
                        </div>
                      </summary>
                      <ul className="mt-4 divide-y divide-hairline border-t border-hairline">
                        {restEntries.map((entry, entryIdx) => (
                          <li
                            key={`${entry.title}-${entryIdx}`}
                            className="grid gap-1 py-4 md:grid-cols-[1fr_175px] md:items-start md:gap-6"
                          >
                            <EntryRow entry={entry} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <div className="grid gap-1 md:grid-cols-[1fr_175px] md:items-start md:gap-6">
                      <EntryRow entry={firstEntry} />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
