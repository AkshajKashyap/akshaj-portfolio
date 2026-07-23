import type { Metadata } from "next";
import { AdditionalProjectCard } from "@/components/additional-project-card";
import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
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
      <Section className="hero-atmosphere border-b border-border py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Project index</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.05em] text-text-strong sm:text-6xl">Selected work</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text sm:text-lg sm:leading-8">
              Machine-learning and software systems with tracked evaluation evidence, explicit limitations, and public source links.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href="/" variant="secondary">
              <span aria-hidden="true" className="mr-2 transition-transform duration-150 group-hover:-translate-x-0.5">←</span> Home
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle">
        <SectionHeading number="01" eyebrow="Featured" title="Four core systems" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          number="02"
          eyebrow="Additional"
          title="More repository work"
          description="A compact inventory across decisioning, monitoring, retrieval, recommendation, anomaly detection, and evaluation tooling."
        />
        <div className="mt-10 grid gap-x-10 lg:grid-cols-2">
          {additionalProjects.map((project) => (
            <AdditionalProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
