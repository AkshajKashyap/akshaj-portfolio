import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function ExternalLink({ children, href, className = "", variant = "primary" }: ExternalLinkProps) {
  const styles = variant === "primary" ? "font-medium text-accent hover:text-accent-hover" : "text-text-muted hover:text-text";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`underline decoration-1 underline-offset-4 transition-colors ${styles} ${className}`}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
