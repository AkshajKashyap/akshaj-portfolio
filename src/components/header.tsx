import Link from "next/link";
import { Container } from "@/components/container";
import { MobileNavigation } from "@/components/mobile-navigation";
import { profile } from "@/data/profile";

const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Akshaj Kashyap, home" className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs font-semibold tracking-[-0.03em] text-text-strong transition-colors hover:border-accent hover:text-accent">
          AK
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text transition-colors hover:text-text-strong"
            >
              {item.label}
            </Link>
          ))}
          <Link href={profile.resumeUrl} target="_blank" rel="noreferrer" className="ml-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-text-strong transition-colors hover:border-accent hover:text-accent">
            Résumé
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </nav>
        <MobileNavigation />
      </Container>
    </header>
  );
}
