import Image from "next/image";
import { ExternalLink } from "@/components/external-link";
import type { Project } from "@/types/project";

type FeaturedProjectStoryProps = {
  project: Project;
  prominence?: "lead" | "major" | "standard";
  className?: string;
};

const prominenceStyles = {
  lead: {
    article: "border-t-[3px] border-accent pt-5",
    title: "text-[36px] sm:text-[42px] lg:text-[48px]",
    summary: "text-base sm:text-lg",
    imageSizes: "(max-width: 1023px) calc(100vw - 40px), 776px",
  },
  major: {
    article: "border-t-2 border-accent pt-5",
    title: "text-[30px] sm:text-[34px]",
    summary: "text-[15px]",
    imageSizes: "(max-width: 1023px) calc(100vw - 40px), 360px",
  },
  standard: {
    article: "border-t border-accent pt-5",
    title: "text-[28px] sm:text-[32px]",
    summary: "text-[15px]",
    imageSizes: "(max-width: 767px) calc(100vw - 40px), 580px",
  },
} as const;

export function FeaturedProjectStory({ project, prominence = "standard", className = "" }: FeaturedProjectStoryProps) {
  const styles = prominenceStyles[prominence];

  return (
    <article className={`${styles.article} ${className}`}>
      {project.visual ? (
        <div className="relative mb-5 aspect-video overflow-hidden border border-border bg-surface">
          <Image
            src={project.visual.src}
            alt={project.visual.alt}
            fill
            sizes={styles.imageSizes}
            className="object-cover"
            style={{ objectPosition: project.visual.objectPosition ?? "center" }}
          />
        </div>
      ) : null}

      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
      <h3 className={`font-editorial mt-3 font-semibold leading-[1.02] tracking-[-0.025em] text-text-strong ${styles.title}`}>
        {project.title}
      </h3>
      <p className={`mt-4 leading-7 text-text ${styles.summary}`}>{project.summary}</p>

      {project.result ? (
        <div className="mt-5 border-l-[3px] border-accent bg-accent-subtle px-4 py-3">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">Key result</p>
          <p className="mt-1.5 text-sm leading-6 text-text-strong">{project.result}</p>
        </div>
      ) : null}

      {project.technologies.length > 0 ? (
        <p className="mt-5 font-mono text-[10px] leading-5 text-text-muted" aria-label={`${project.title} technologies`}>
          {project.technologies.join(" · ")}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
        {project.githubUrl ? (
          <ExternalLink href={project.githubUrl} className="group no-underline">
            Source <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </ExternalLink>
        ) : null}
        {project.demoUrl ? <ExternalLink href={project.demoUrl}>Demo</ExternalLink> : null}
        {project.documentationUrl ? (
          <ExternalLink href={project.documentationUrl} variant="secondary" className="no-underline">
            {project.documentationLabel ?? "Documentation"}
          </ExternalLink>
        ) : null}
      </div>
    </article>
  );
}
