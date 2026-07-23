import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-accent bg-canvas">
      <Container className="flex flex-col gap-5 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p><span className="font-editorial font-semibold text-text-strong">Akshaj Kashyap</span> · UC Santa Barbara</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:text-accent-hover" href={`mailto:${profile.email}`}>Email</a>
          <ExternalLink href={profile.linkedInUrl} variant="secondary">LinkedIn</ExternalLink>
          <ExternalLink href={profile.githubUrl} variant="secondary">GitHub</ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
