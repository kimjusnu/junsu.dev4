import type { BlogPost, LocaleContent } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = {
  writing: LocaleContent["writing"];
  posts: readonly BlogPost[];
};

export function Writing({ writing, posts }: Props) {
  return (
    <section className="pb-20">
      <SectionHeader id="writing" label={writing.label} divider={false} />

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,200px)_1fr]">
        <div className="flex max-w-[28ch] flex-col gap-5">
          <p className="text-[14px] leading-[1.7] text-muted">
            {writing.description}
          </p>
          <a
            href="https://dietisdie.tistory.com/"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 self-start font-mono text-[11.5px] uppercase tracking-[0.2em] text-ink-soft transition hover:text-accent"
          >
            {writing.viewAll}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <ul className="border-t border-hairline">
          {posts.map((post, index) => (
            <li key={post.href} className="border-b border-hairline">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-4 py-5 md:grid-cols-[50px_1fr_110px_auto] md:items-center md:gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-[15.5px] font-medium leading-[1.55] text-ink transition group-hover:text-accent">
                  {post.title}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {post.date}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
