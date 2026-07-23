type SectionHeadingProps = {
  eyebrow?: string;
  number?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, number, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow || number ? (
        <div className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em]">
          {number ? <span className="text-accent">{number}</span> : null}
          {number && eyebrow ? <span aria-hidden="true" className="h-px w-8 bg-border" /> : null}
          {eyebrow ? <span className="text-text-muted">{eyebrow}</span> : null}
        </div>
      ) : null}
      <h2 className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-text-strong sm:text-[32px] lg:text-[36px]">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-text">{description}</p> : null}
    </div>
  );
}
