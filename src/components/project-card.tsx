import Image from "next/image";
import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const accentStyles = [
  {
    edge: "before:bg-accent",
    number: "text-accent",
    evidence: "border-accent/70",
    hover: "hover:border-accent/70",
  },
  {
    edge: "before:bg-accent-secondary",
    number: "text-accent-secondary",
    evidence: "border-accent-secondary/70",
    hover: "hover:border-accent-secondary/70",
  },
  {
    edge: "before:bg-accent-violet",
    number: "text-accent-violet",
    evidence: "border-accent-violet/70",
    hover: "hover:border-accent-violet/70",
  },
  {
    edge: "before:bg-[#8CC8FF]",
    number: "text-[#8CC8FF]",
    evidence: "border-[#8CC8FF]/70",
    hover: "hover:border-[#8CC8FF]/70",
  },
] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accentStyles[index % accentStyles.length];

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface before:absolute before:inset-x-0 before:top-0 before:h-0.5 ${accent.edge} ${accent.hover} transition-colors duration-200`}
    >
      {project.image ? (
        <div className="relative aspect-[16/8] border-b border-border bg-surface-elevated">
          <Image src={project.image} alt={`${project.title} project visual`} fill className="object-cover" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">{project.category}</p>
          <span className={`font-mono text-sm font-semibold ${accent.number}`} aria-label={`Project ${index + 1}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] text-text-strong sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-4 text-[15px] leading-7 text-text">{project.summary}</p>

        {project.result ? (
          <p className={`mt-6 border-l-2 ${accent.evidence} bg-surface-elevated/70 px-4 py-3 text-sm leading-6 text-text`}>
            <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">Evidence</span>
            {project.result}
          </p>
        ) : null}

        {project.technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="font-mono text-[11px] font-medium text-text-muted">
                {technology}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7 text-sm">
          <ExternalLink href={project.githubUrl} className="group no-underline">
            GitHub <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
          </ExternalLink>
          {project.demoUrl ? <ExternalLink href={project.demoUrl}>Demo</ExternalLink> : null}
          {project.documentationUrl ? (
            <ExternalLink href={project.documentationUrl} variant="secondary" className="no-underline">
              Documentation
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
