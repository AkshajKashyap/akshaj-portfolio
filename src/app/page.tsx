import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { ProjectCardSkeleton } from "@/components/project-card-skeleton";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <>
      <Section className="border-b border-border py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-text-strong md:text-5xl">Computer science student building machine-learning systems.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text">Focused on experimentation, evaluation, local serving, and the engineering controls around machine-learning workflows.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <span aria-disabled="true" className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-muted">Resume [pending]</span>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Selected work" title="Featured projects" description="Four systems spanning causal inference, graph learning, language-model workflows, and computer vision." />
        <div className="mt-8 grid gap-6">
          {featuredProjects.length > 0
            ? featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)
            : Array.from({ length: 4 }, (_, index) => <ProjectCardSkeleton key={index} index={index + 1} featured />)}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="More work" title="Additional projects" description="Additional local systems work in decisioning, monitoring, retrieval, recommendation, and evaluation tooling." />
          <ButtonLink href="/projects" variant="secondary">View all projects</ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.length > 0
            ? additionalProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
            : Array.from({ length: 3 }, (_, index) => <ProjectCardSkeleton key={index} index={index + 1} />)}
        </div>
      </Section>

      <Section id="experience" className="border-t border-border">
        <SectionHeading eyebrow="Background" title="Experience and research" />
        <p className="mt-6 max-w-2xl border-l-2 border-border pl-4 text-base leading-7 text-text-muted">[Experience details pending verification.]</p>
      </Section>

      <Section id="about" className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7"><SectionHeading eyebrow="About" title="A project-first portfolio" /><p className="mt-5 max-w-2xl text-base leading-7 text-text">Akshaj Kashyap is a computer science student at UCSB. This portfolio collects local, reproducible projects that make their assumptions and limitations explicit: synthetic causal and decision workflows stay labeled as synthetic, local services are not presented as production deployments, and evaluation reports remain tied to their documented datasets and protocols. The work spans graph learning, computer vision, language-model post-training, retrieval, recommendation, and developer tooling, with an emphasis on evidence that can be inspected in code and tracked reports.</p></div>
          <div id="skills" className="scroll-mt-20 lg:col-span-5"><SectionHeading eyebrow="Skills" title="Tools and methods" /><div className="mt-5 space-y-5">{skillGroups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold text-text-strong">{group.title}</h3><ul className="mt-2 flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded bg-surface-subtle px-2 py-1 text-xs font-medium text-text-muted">{skill}</li>)}</ul></div>)}</div></div>
        </div>
      </Section>

      <Section id="contact" className="border-t border-border">
        <SectionHeading eyebrow="Contact" title="Let&apos;s connect" />
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">[Verified contact details pending.]</p>
      </Section>
    </>
  );
}
