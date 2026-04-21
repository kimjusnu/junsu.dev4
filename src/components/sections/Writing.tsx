import type { BlogPost, LocaleContent } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = {
  writing: LocaleContent["writing"];
  posts: readonly BlogPost[];
};

export function Writing({ writing, posts }: Props) {
  return (
    <section className="pb-16 md:pb-20">
      <SectionHeader id="writing" label={writing.label} divider={false} />

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10">
        <div className="flex max-w-[28ch] flex-col gap-4">
          <p className="text-[13.5px] leading-[1.7] text-muted md:text-[14px]">
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
                className="group grid gap-2 py-4 md:grid-cols-[50px_1fr_110px_auto] md:items-center md:gap-6 md:gap-y-2 md:py-5"
              >
                <div className="flex items-start gap-3 md:contents">
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:mt-0">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="min-w-0 flex-1 text-[14px] font-medium leading-[1.5] text-ink transition group-hover:text-accent md:text-[15.5px] md:leading-[1.55]">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:order-last md:mt-0" />
                </div>
                <span className="pl-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:pl-0">
                  {post.date}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
