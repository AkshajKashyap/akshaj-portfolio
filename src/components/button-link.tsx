import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ children, href, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-accent bg-accent text-surface hover:border-accent-hover hover:bg-accent-hover"
      : "border-border bg-transparent text-text-strong hover:border-accent hover:text-accent";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center rounded-sm border px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
