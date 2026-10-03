import { ButtonLink } from "@/components/button-link";
import { CompactProjectArchiveRow } from "@/components/compact-project-archive-row";
import { ExperienceEntry } from "@/components/experience-entry";
import { ExternalLink } from "@/components/external-link";
import { FeaturedProjectStory } from "@/components/featured-project-story";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const leadProject = publishedProjects.find((project) => project.homepagePlacement === "lead");
const majorProject = publishedProjects.find((project) => project.homepagePlacement === "major");
const standardProjects = publishedProjects.filter((project) => project.homepagePlacement === "standard");
const additionalProjects = publishedProjects.filter((project) => project.homepagePlacement === "additional");

export default function Home() {
  return (
    <>
      <Section className="border-b border-border !py-10 sm:!py-14 lg:!py-20">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="font-editorial max-w-4xl text-balance text-[46px] font-semibold leading-[0.98] tracking-[-0.035em] text-text-strong sm:text-[58px] lg:text-[68px]">
              Building models is only half the work.
            </h1>
          </div>
          <div className="border-t border-accent pt-5 lg:col-span-5">
            <p className="max-w-xl text-sm font-semibold leading-6 text-text-strong sm:text-base">
              Second-year Computer Science undergraduate at UC Santa Barbara.
            </p>
            <p className="mt-3 max-w-xl text-lg leading-8 text-text">
              I build machine-learning and software systems that connect rigorous experiments with efficient inference and reliable software. The projects emphasize evaluation, performance, and failure behavior, not just whether a system works on the happy path.
            </p>
            <p className="mt-5 font-mono text-[10px] font-medium leading-5 tracking-[0.08em] text-text-muted">
              Causal inference · Graph learning · GPU inference · Reliable systems
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/#work">
                Explore featured work <span aria-hidden="true" className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </ButtonLink>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-sm border border-border px-4 py-2.5 text-sm font-semibold text-text-strong transition-colors hover:border-accent hover:text-accent"
              >
                View résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="work">
        <div className="flex flex-col gap-5 border-b-[3px] border-accent pb-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected work" title="Featured projects" />
          <ButtonLink href="/projects" variant="secondary">
            Project archive <span aria-hidden="true" className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-0">
          {leadProject ? (
            <div className="lg:col-span-8 lg:pr-8">
              <FeaturedProjectStory project={leadProject} prominence="lead" />
            </div>
          ) : null}
          {majorProject ? (
            <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
              <FeaturedProjectStory project={majorProject} prominence="major" />
            </div>
          ) : null}
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-2 md:gap-8">
          {standardProjects.map((project) => (
            <FeaturedProjectStory key={project.slug} project={project} prominence="standard" />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-subtle">
        <div className="border-b-[3px] border-accent pb-5">
          <SectionHeading eyebrow="More work" title="Additional projects" description="Four more projects spanning ML systems, applied machine learning, research, and software systems." />
        </div>
        <div className="mt-3">
          {additionalProjects.map((project) => (
            <CompactProjectArchiveRow key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="experience">
        <div className="border-b-[3px] border-accent pb-5">
          <SectionHeading
            eyebrow="Experience"
            title="Research and technical work"
            description="Selected work across research data analysis, applied computer vision, AI evaluation, and reliable software workflows."
          />
        </div>
        <div className="mt-7 grid gap-x-10 md:grid-cols-2">
          {experience.map((entry) => <ExperienceEntry key={`${entry.organization}-${entry.role}`} entry={entry} />)}
        </div>
      </Section>

      <Section id="about" className="border-y border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="About" title="Clear systems, clearly explained." />
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-text">
              <p>
                Akshaj Kashyap is a second-year Computer Science undergraduate at UC Santa Barbara, with expected B.S. completion in June 2028. His work spans machine learning and software systems, with a focus on how experiments are designed, how models and systems execute, how performance is measured, and what happens when assumptions fail.
              </p>
              <p>
                He was admitted to UCSB&apos;s Early Research Scholars Program (ERSP) for 2026–27. In the PLAXCO Lab, he works with electrochemical data and reusable analysis tools for biosensor experiments. Before much of his technical work, he served as editor-in-chief of his high-school newspaper. That experience still shapes his approach: organize complex information, distinguish evidence from assertion, and explain technical decisions clearly.
              </p>
            </div>
          </div>

          <div id="skills" className="scroll-mt-24 lg:col-span-5">
            <div className="border-t-[3px] border-accent pt-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Selected toolkit</p>
              <h2 className="font-editorial mt-3 text-[34px] font-semibold leading-tight text-text-strong">Tools and methods</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-t border-border pt-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-accent-hover">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-8 border-t-[3px] border-accent pt-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2 className="font-editorial mt-3 text-[40px] font-semibold leading-none tracking-[-0.025em] text-text-strong sm:text-[50px]">
              Continue the conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text">
              Available for Summer 2027 software engineering and machine-learning internships; also interested in research opportunities. Reach out by email or connect through LinkedIn and GitHub.
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
