type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">{eyebrow}</p> : null}
      <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-text-strong md:text-[30px]">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-text-muted">{description}</p> : null}
    </div>
  );
}
