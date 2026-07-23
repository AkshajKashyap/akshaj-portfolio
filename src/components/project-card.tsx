import type { Project } from "@/types/project";
import { ExternalLink } from "@/components/external-link";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`rounded-lg border border-border bg-surface ${featured ? "grid overflow-hidden md:grid-cols-12" : "p-5"}`}>
      {featured ? (
        <div className="order-2 aspect-video bg-surface-subtle md:order-none md:col-span-5" aria-hidden="true" />
      ) : null}
      <div className={featured ? "p-5 md:col-span-7 md:p-8" : ""}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-text-strong">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-text">{project.summary}</p>
        {project.result ? <p className="mt-4 text-sm leading-6 text-text"><span className="font-semibold text-text-strong">Evidence: </span>{project.result}</p> : null}
        {project.technologies.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded bg-surface-subtle px-2 py-1 text-xs font-medium text-text-muted">{technology}</li>
            ))}
          </ul>
        ) : null}
        {project.githubUrl || project.demoUrl ? (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {project.githubUrl ? <ExternalLink href={project.githubUrl}>GitHub</ExternalLink> : null}
            {project.demoUrl ? <ExternalLink href={project.demoUrl}>Demo</ExternalLink> : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
