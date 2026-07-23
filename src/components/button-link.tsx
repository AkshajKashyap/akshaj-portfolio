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
      ? "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover"
      : "border-border bg-surface text-text-strong hover:bg-surface-subtle";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors duration-150 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
