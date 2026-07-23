import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/project";

type AdditionalProjectCardProps = {
  project: Project;
};

export function AdditionalProjectCard({ project }: AdditionalProjectCardProps) {
  return (
    <article className="group grid gap-4 border-t border-border py-6 transition-colors hover:border-text-muted sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
      <div>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-text-strong">{project.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-text">{project.summary}</p>
        {project.result ? <p className="mt-3 text-xs leading-5 text-text-muted">{project.result}</p> : null}
      </div>
      <ExternalLink href={project.githubUrl} className="mt-1 whitespace-nowrap no-underline">
        Source <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
      </ExternalLink>
    </article>
  );
}
