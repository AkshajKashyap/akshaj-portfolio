import type { Metadata } from "next";
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
      <Section className="border-b border-border py-20 md:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">Project inventory</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-text-strong md:text-5xl">Projects</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-text">A selection of local repositories with tracked documentation, evaluation artifacts, and public source links.</p>
        <ButtonLink href="/" variant="secondary" className="mt-8">Back to home</ButtonLink>
      </Section>

      <Section>
        <SectionHeading eyebrow="Selected work" title="Featured projects" description="Detailed systems across causal inference, graph learning, language-model workflows, and computer vision." />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="All work" title="Additional projects" description="More verified local repository work, grouped as a compact inventory." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Section>
    </>
  );
}
