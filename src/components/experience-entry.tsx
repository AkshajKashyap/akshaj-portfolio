import type { Experience } from "@/data/experience";

type ExperienceEntryProps = {
  entry: Experience;
};

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  return (
    <article className="border-t border-border py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div>
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">{entry.kind}</p>
          <h3 className="font-editorial mt-2 text-[25px] font-semibold leading-tight text-text-strong">{entry.role}</h3>
          <p className="mt-1 text-sm font-semibold text-accent-hover">{entry.organization}</p>
        </div>
        <div className="shrink-0 text-xs leading-5 text-text-muted sm:text-right">
          <p>{entry.dates}</p>
          {entry.location ? <p>{entry.location}</p> : null}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-text">
        {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
      {entry.technologies ? (
        <p className="mt-4 font-mono text-[10px] leading-5 text-text-muted" aria-label={`${entry.organization} technologies`}>
          {entry.technologies.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}
