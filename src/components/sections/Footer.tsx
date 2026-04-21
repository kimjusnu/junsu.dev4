import type { LocaleContent } from "@/lib/types";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = {
  footer: LocaleContent["footer"];
};

export function Footer({ footer }: Props) {
  return (
    <footer id="contact" className="scroll-mt-24 pb-14 pt-20">
      <div className="grid gap-10 border-t border-hairline pt-14 md:grid-cols-[minmax(0,200px)_1fr]">
        <div className="section-label text-muted">{footer.label}</div>

        <div className="flex flex-col gap-10">
          <p className="max-w-[32ch] text-[clamp(1.35rem,2.6vw,1.9rem)] font-medium leading-[1.35] tracking-[-0.02em] text-ink">
            {footer.description}
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {footer.socials.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="link-underline inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.2em] text-ink-soft transition hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row md:items-center">
        <span>{footer.copyright}</span>
        <span>Built with Next.js · Tailwind CSS</span>
      </div>
    </footer>
  );
}
