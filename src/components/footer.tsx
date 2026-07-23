import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-2 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Akshaj Kashyap · UCSB Computer Science</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="font-medium text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover" href={`mailto:${profile.email}`}>Email</a>
          <ExternalLink href={profile.linkedInUrl}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
