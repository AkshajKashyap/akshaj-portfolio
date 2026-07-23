import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <>
      <Section className="border-b border-border py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-text-strong md:text-5xl">UCSB computer science student building applied ML and software systems.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text">Projects and experience grounded in experimentation, evaluation, research data analysis, and reliable software workflows.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-strong transition-colors hover:bg-surface-subtle">View resume<span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Selected work" title="Featured projects" description="Four systems spanning causal inference, graph learning, language-model workflows, and computer vision." />
        <div className="mt-8 grid gap-6">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="More work" title="Additional projects" description="Additional local systems work in decisioning, monitoring, retrieval, recommendation, and evaluation tooling." />
          <ButtonLink href="/projects" variant="secondary">View all projects</ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Section>

      <Section id="experience" className="border-t border-border">
        <SectionHeading eyebrow="Background" title="Experience and research" />
        <div className="mt-8 divide-y divide-border border-y border-border">
          {experience.map((entry) => (
            <article key={`${entry.organization}-${entry.role}`} className="grid gap-3 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
              <div className="text-sm leading-6 text-text-muted"><p>{entry.dates}</p>{entry.location ? <p>{entry.location}</p> : null}</div>
              <div><p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">{entry.kind}</p><h3 className="mt-2 text-lg font-semibold text-text-strong">{entry.role}</h3><p className="mt-1 text-sm font-medium text-text">{entry.organization}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-text">{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{entry.technologies ? <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${entry.organization} technologies`}>{entry.technologies.map((technology) => <li key={technology} className="rounded bg-surface-subtle px-2 py-1 text-xs font-medium text-text-muted">{technology}</li>)}</ul> : null}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about" className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7"><SectionHeading eyebrow="About" title="A project-first portfolio" /><p className="mt-5 max-w-2xl text-base leading-7 text-text">Akshaj Kashyap is pursuing a B.S. in Computer Science at UC Santa Barbara, expected December 2028. His work combines applied machine learning with the surrounding engineering: reproducible experiments, evaluation protocols, local APIs, and monitoring. In the PLAXCO Lab, he processes electrochemical data for biosensor experiments; previously, he built computer-vision tooling for vegetation-risk screening at Techions. The projects here extend that approach across causal inference, graph learning, language-model workflows, computer vision, retrieval, and recommendation, with results tied to their documented datasets, protocols, and limitations.</p></div>
          <div id="skills" className="scroll-mt-20 lg:col-span-5"><SectionHeading eyebrow="Skills" title="Tools and methods" /><div className="mt-5 space-y-5">{skillGroups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold text-text-strong">{group.title}</h3><ul className="mt-2 flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded bg-surface-subtle px-2 py-1 text-xs font-medium text-text-muted">{skill}</li>)}</ul></div>)}</div></div>
        </div>
      </Section>

      <Section id="contact" className="border-t border-border">
        <SectionHeading eyebrow="Contact" title="Get in touch" />
        <p className="mt-5 max-w-2xl text-base leading-7 text-text">For research, software, and applied machine-learning opportunities, reach out by email or connect through LinkedIn and GitHub.</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a className="font-medium text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover" href={`mailto:${profile.email}`}>Email Akshaj</a>
          <a className="font-medium text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover" href={profile.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="font-medium text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="font-medium text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover" href={profile.resumeUrl} target="_blank" rel="noreferrer">View resume<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </Section>
    </>
  );
}
