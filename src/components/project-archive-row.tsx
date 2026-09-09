import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/project";

type ProjectArchiveRowProps = {
  project: Project;
};

export function ProjectArchiveRow({ project }: ProjectArchiveRowProps) {
  return (
    <article className="group grid gap-3 border-t border-border py-5 transition-colors hover:border-accent sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] sm:gap-6 lg:grid-cols-[minmax(12rem,0.8fr)_minmax(18rem,1.35fr)_minmax(16rem,1fr)_auto] lg:items-start">
      <div>
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">{project.category}</p>
        <h3 className="font-editorial mt-1.5 text-[22px] font-semibold leading-tight text-text-strong">{project.title}</h3>
      </div>
      <p className="text-sm leading-6 text-text">{project.summary}</p>
      {project.result ? <p className="text-xs leading-5 text-text-muted sm:col-span-2 lg:col-span-1">{project.result}</p> : <span />}
      <div className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col">
        {project.githubUrl ? (
          <ExternalLink href={project.githubUrl} className="self-start whitespace-nowrap no-underline">
            Source <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </ExternalLink>
        ) : null}
        {project.documentationUrl ? (
          <ExternalLink href={project.documentationUrl} variant="secondary" className="self-start whitespace-nowrap no-underline">
            {project.documentationLabel ?? "Documentation"}
          </ExternalLink>
        ) : null}
      </div>
    </article>
  );
}
