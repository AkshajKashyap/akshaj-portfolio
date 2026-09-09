import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/project";

type CompactProjectArchiveRowProps = {
  project: Project;
};

export function CompactProjectArchiveRow({ project }: CompactProjectArchiveRowProps) {
  return (
    <article className="group grid gap-3 border-t border-border py-5 transition-colors hover:border-accent md:grid-cols-[minmax(13.75rem,1fr)_minmax(0,1.7fr)] md:gap-x-8 lg:grid-cols-[minmax(13.75rem,1fr)_minmax(20rem,1.7fr)_auto] lg:items-start">
      <div>
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">{project.category}</p>
        <h3 className="font-editorial mt-1.5 text-[22px] font-semibold leading-tight text-text-strong">{project.title}</h3>
      </div>
      <p className="text-sm leading-6 text-text">{project.shortSummary ?? project.summary}</p>
      {project.githubUrl ? (
        <ExternalLink href={project.githubUrl} className="self-start whitespace-nowrap no-underline md:col-start-1 lg:col-start-auto">
          Repository <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>
        </ExternalLink>
      ) : null}
    </article>
  );
}
