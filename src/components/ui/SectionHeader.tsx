type Props = {
  id: string;
  label: string;
  meta?: string;
  divider?: boolean;
};

export function SectionHeader({ id, label, meta, divider = true }: Props) {
  return (
    <div
      id={id}
      className={`flex scroll-mt-24 flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-8 md:pt-14 ${
        divider ? "border-t border-hairline" : ""
      }`}
    >
      <h2 className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.22em] text-ink md:text-[0.92rem]">
        <span className="mr-3 text-muted-soft">
          [{String(id).toUpperCase().slice(0, 2)}]
        </span>
        {label}
      </h2>
      {meta ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {meta}
        </p>
      ) : null}
    </div>
  );
}
