import { ButtonLink } from "@/components/button-link";
import { ExperienceEntry } from "@/components/experience-entry";
import { ExternalLink } from "@/components/external-link";
import { FeaturedProjectStory } from "@/components/featured-project-story";
import { ProjectArchiveRow } from "@/components/project-archive-row";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <>
      <Section className="border-b border-border py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="font-editorial max-w-4xl text-balance text-[46px] font-semibold leading-[0.98] tracking-[-0.035em] text-text-strong sm:text-[58px] lg:text-[68px]">
              Building models is only half the work.
            </h1>
          </div>
          <div className="border-t border-accent pt-5 lg:col-span-5">
            <p className="max-w-xl text-lg leading-8 text-text">
              My projects focus on how machine-learning systems are evaluated, tested, deployed, and improved—not just whether a model can produce a prediction.
            </p>
            <p className="mt-5 font-mono text-[10px] font-medium leading-5 tracking-[0.08em] text-text-muted">
              Causal inference · Graph learning · Language-model evaluation · Computer vision
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/#work">
                Read the projects <span aria-hidden="true" className="ml-2 transition-transform duration-150 group-hover:translate-x-0.5">→</span>
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
          {featuredProjects[0] ? (
            <div className="lg:col-span-8 lg:pr-8">
              <FeaturedProjectStory project={featuredProjects[0]} prominence="lead" />
            </div>
          ) : null}
          {featuredProjects[1] ? (
            <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
              <FeaturedProjectStory project={featuredProjects[1]} prominence="major" />
            </div>
          ) : null}
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-2 md:gap-8">
          {featuredProjects.slice(2).map((project) => (
            <FeaturedProjectStory key={project.slug} project={project} prominence="standard" />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-subtle">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Archive" title="Additional projects" description="A quieter index of systems work beyond the four lead projects." />
          </div>
          <div className="lg:col-span-8">
            {additionalProjects.map((project) => (
              <ProjectArchiveRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience">
        <div className="border-b-[3px] border-accent pb-5">
          <SectionHeading
            eyebrow="Experience"
            title="Research and technical work"
            description="Selected work across research, applied computer vision, model evaluation, and software workflows."
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
                Akshaj Kashyap is pursuing a B.S. in Computer Science at UC Santa Barbara, expected December 2028. His work combines applied machine learning with the surrounding engineering: reproducible experiments, evaluation protocols, local APIs, and monitoring.
              </p>
              <p>
                Before much of his technical work, he served as editor-in-chief of his high-school newspaper. That experience still shapes how he approaches projects: organize complicated information, question unsupported claims, and communicate results clearly.
              </p>
              <p>
                In the PLAXCO Lab, he processes electrochemical data for biosensor experiments; previously, he built computer-vision tooling for vegetation-risk screening at Techions. The projects here extend that approach across causal inference, graph learning, language-model workflows, computer vision, retrieval, and recommendation.
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
