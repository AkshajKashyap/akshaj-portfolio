import { AdditionalProjectCard } from "@/components/additional-project-card";
import { ButtonLink } from "@/components/button-link";
import { ExternalLink } from "@/components/external-link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);
const focusAreas = ["Causal Inference", "Graph Learning", "Language Models", "Computer Vision"];

export default function Home() {
  return (
    <>
      <Section className="hero-atmosphere border-b border-border py-14 sm:py-16 lg:py-20">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Computer Science · UC Santa Barbara
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-text-strong sm:text-6xl lg:text-[72px]">
              Akshaj Kashyap
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.025em] text-text-strong sm:text-3xl">
              Models, experiments, and the software around them.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text sm:text-lg sm:leading-8">
              I work across causal inference, graph learning, language-model evaluation, computer vision, and research software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#work">
                Explore projects <span aria-hidden="true" className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </ButtonLink>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-text-strong transition-colors hover:border-text-muted hover:bg-surface"
              >
                View résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">Focus index</p>
            <ol className="mt-4 border-y border-border">
              {focusAreas.map((area, index) => (
                <li key={area} className="flex items-center gap-4 border-b border-border py-3.5 last:border-b-0">
                  <span className="font-mono text-[10px] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium text-text">{area}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="work" className="bg-surface-subtle">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="01"
            eyebrow="Selected work"
            title="Featured projects"
            description="Four technically distinct systems with documented evaluation evidence, source code, and explicit limitations."
          />
          <ButtonLink href="/projects" variant="secondary">
            All projects <span aria-hidden="true" className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          number="02"
          eyebrow="More work"
          title="Additional projects"
          description="Decisioning, monitoring, retrieval, recommendation, anomaly detection, and evaluation tooling."
        />
        <div className="mt-10 grid gap-x-10 lg:grid-cols-2">
          {additionalProjects.map((project) => (
            <AdditionalProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="experience" className="border-y border-border bg-surface-subtle">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              number="03"
              eyebrow="Background"
              title="Experience and research"
              description="Selected technical work across research, applied computer vision, model evaluation, and software workflows."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="relative border-l border-border">
              {experience.map((entry) => (
                <article key={`${entry.organization}-${entry.role}`} className="relative border-b border-border py-6 pl-6 first:pt-0 last:border-b-0 last:pb-0 sm:pl-8">
                  <span aria-hidden="true" className="absolute -left-[5px] top-7 size-2.5 rounded-full border-2 border-surface-subtle bg-accent first:top-1" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent-secondary">{entry.kind}</p>
                      <h3 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-text-strong">{entry.role}</h3>
                      <p className="mt-1 text-sm font-medium text-text">{entry.organization}</p>
                    </div>
                    <div className="shrink-0 text-sm leading-6 text-text-muted sm:text-right">
                      <p>{entry.dates}</p>
                      {entry.location ? <p>{entry.location}</p> : null}
                    </div>
                  </div>
                  <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-6 text-text">
                    {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  {entry.technologies ? (
                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2" aria-label={`${entry.organization} technologies`}>
                      {entry.technologies.map((technology) => <li key={technology} className="font-mono text-[11px] text-text-muted">{technology}</li>)}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="about">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading number="04" eyebrow="About" title="A project-first portfolio" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-text">
              Akshaj Kashyap is pursuing a B.S. in Computer Science at UC Santa Barbara, expected December 2028. His work combines applied machine learning with the surrounding engineering: reproducible experiments, evaluation protocols, local APIs, and monitoring. In the PLAXCO Lab, he processes electrochemical data for biosensor experiments; previously, he built computer-vision tooling for vegetation-risk screening at Techions. The projects here extend that approach across causal inference, graph learning, language-model workflows, computer vision, retrieval, and recommendation, with results tied to their documented datasets, protocols, and limitations.
            </p>
          </div>
          <div id="skills" className="scroll-mt-20 rounded-lg border border-border bg-surface p-6 lg:col-span-5 lg:p-7">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">Selected toolkit</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-text-strong">Tools and methods</h2>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-text-strong">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded border border-border bg-surface-elevated px-2.5 py-1.5 font-mono text-[11px] font-medium text-text">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="border-t border-border bg-surface-subtle">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading number="05" eyebrow="Contact" title="Let’s build something rigorous." />
            <p className="mt-5 max-w-2xl text-base leading-7 text-text">
              For research, software, and applied machine-learning opportunities, reach out by email or connect through LinkedIn and GitHub.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm lg:col-span-4 lg:justify-end">
            <a className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:text-accent-hover" href={`mailto:${profile.email}`}>Email Akshaj</a>
            <ExternalLink href={profile.linkedInUrl}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
            <ExternalLink href={profile.resumeUrl}>Résumé</ExternalLink>
          </div>
        </div>
      </Section>
    </>
  );
}
