import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FeaturedProjectStory } from "@/components/featured-project-story";
import { ProjectArchiveRow } from "@/components/project-archive-row";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected machine-learning and software projects with tracked evaluation evidence and source links.",
};

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

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
              A selection of local repositories with tracked documentation, evaluation artifacts, and public source links.
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
          <SectionHeading eyebrow="Featured projects" title="Four core studies" />
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
            <SectionHeading eyebrow="Full archive" title="Additional repository work" description="Verified projects arranged as a compact index." />
          </div>
          <div className="lg:col-span-8">
            {additionalProjects.map((project) => (
              <ProjectArchiveRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
