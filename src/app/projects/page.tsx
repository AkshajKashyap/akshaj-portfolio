import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FeaturedProjectStory } from "@/components/featured-project-story";
import { ProjectArchiveRow } from "@/components/project-archive-row";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import type { ArchiveGroup } from "@/types/project";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work in causal and graph machine learning, CUDA inference, ML systems, and reliable software infrastructure, with source code and measured evidence.",
};

const featuredPlacements = new Set(["lead", "major", "standard"]);
const featuredProjects = projects.filter(
  (project) => project.homepagePlacement && featuredPlacements.has(project.homepagePlacement),
);

const archiveSections: { group: ArchiveGroup; title: string }[] = [
  { group: "machine-learning", title: "Machine learning and applied modeling" },
  { group: "ml-systems", title: "ML systems and evaluation" },
  { group: "software-systems", title: "Software systems" },
];

export default function ProjectsPage() {
  return (
    <>
      <Section className="border-b border-border py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Complete index</p>
            <h1 className="font-editorial mt-4 text-balance text-[48px] font-semibold leading-none tracking-[-0.035em] text-text-strong sm:text-[62px]">
              The project archive
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text sm:text-lg sm:leading-8">
              Selected work across machine learning, inference, data systems, and software engineering, with direct links to source code, documentation, and measured evidence.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href="/" variant="secondary">
              <span aria-hidden="true" className="mr-2 transition-transform duration-150 group-hover:-translate-x-0.5">←</span> Home
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <div className="border-b-[3px] border-accent pb-5">
          <SectionHeading eyebrow="Featured projects" title="Selected projects" />
        </div>
        {featuredProjects[0] ? (
          <div className="mt-8">
            <FeaturedProjectStory project={featuredProjects[0]} prominence="lead" />
          </div>
        ) : null}
        <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(1).map((project, index) => (
            <FeaturedProjectStory key={project.slug} project={project} prominence={index === 0 ? "major" : "standard"} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-subtle">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Full archive" title="More project work" description="Projects grouped by the kind of problem they address." />
          </div>
          <div className="space-y-12 lg:col-span-8">
            {archiveSections.map((section) => {
              const sectionProjects = projects.filter(
                (project) => project.archiveGroup === section.group && !featuredPlacements.has(project.homepagePlacement ?? ""),
              );

              return (
                <section key={section.group} aria-labelledby={`${section.group}-heading`}>
                  <h2 id={`${section.group}-heading`} className="font-editorial border-b border-border pb-4 text-2xl font-semibold tracking-[-0.02em] text-text-strong sm:text-3xl">
                    {section.title}
                  </h2>
                  {sectionProjects.map((project) => (
                    <ProjectArchiveRow key={project.slug} project={project} />
                  ))}
                </section>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
