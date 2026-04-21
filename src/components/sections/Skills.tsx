import Image from "next/image";
import type { LocaleContent } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = {
  skills: LocaleContent["skills"];
};

export function Skills({ skills }: Props) {
  return (
    <section className="pb-16 md:pb-20">
      <SectionHeader id="skills" label={skills.label} divider={false} />

      <ul className="mt-10 border-t border-hairline">
        {skills.groups.map((group) => (
          <li
            key={group.title}
            className="grid gap-5 border-b border-hairline py-6 md:grid-cols-[minmax(0,200px)_1fr] md:items-start md:gap-10"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-hairline bg-paper px-2.5 py-1.5 text-[12px] text-ink-soft"
                >
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt=""
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 object-contain"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-accent/70"
                    />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
