import type { LocaleContent } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = {
  projects: LocaleContent["projects"];
};

function getFaviconUrl(href: string, icon?: string): string | null {
  if (icon) return icon;
  try {
    const url = new URL(href);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
  } catch {
    return null;
  }
}

export function Projects({ projects }: Props) {
  return (
    <section className="pb-16 md:pb-20">
      <SectionHeader id="projects" label={projects.label} divider={false} />

      <ul className="mt-10 border-t border-hairline">
        {projects.items.map((project, index) => {
          const favicon = getFaviconUrl(project.href, project.icon);

          return (
            <li key={project.name} className="border-b border-hairline">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-7 md:grid md:grid-cols-[60px_minmax(0,0.9fr)_minmax(0,1.25fr)_auto] md:items-start md:gap-10 md:py-10"
              >
                <div className="flex items-start gap-3 md:contents">
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:mt-0">
                    {`0${index + 1}`}
                  </span>

                  <div className="min-w-0 flex-1 space-y-1.5 md:col-start-2 md:space-y-2">
                    <h3 className="flex items-center gap-2.5 text-[1.35rem] font-semibold tracking-[-0.02em] text-ink transition group-hover:text-accent md:gap-3 md:text-[1.65rem] lg:text-[2rem]">
                      {favicon ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={favicon}
                          alt=""
                          width={22}
                          height={22}
                          loading="lazy"
                          className="h-5 w-5 shrink-0 rounded-sm border border-hairline bg-paper object-contain p-[3px] md:h-6 md:w-6"
                        />
                      ) : null}
                      <span className="min-w-0 break-keep">{project.name}</span>
                    </h3>
                    <p className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-muted md:text-[12.5px]">
                      {project.subtitle}
                    </p>
                  </div>

                  <span className="mt-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-ink-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:text-accent md:hidden">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>

                <div className="mt-4 space-y-3.5 md:col-start-3 md:mt-0 md:space-y-4">
                  <p className="max-w-[56ch] text-[13.5px] leading-[1.7] text-ink-soft md:text-[14.5px] md:leading-[1.8]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-sm border border-hairline bg-highlight px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="mt-2 hidden h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:text-accent md:inline-flex">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
