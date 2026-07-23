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
    <header className="bg-canvas">
      <Container>
        <div className="flex min-h-20 items-center justify-center border-b-[3px] border-accent py-3 sm:min-h-24">
          <Link
            href="/"
            aria-label="Akshaj Kashyap, home"
            className="font-editorial text-center text-[32px] font-semibold uppercase leading-none tracking-[0.045em] text-accent transition-colors hover:text-accent-hover sm:text-[42px] lg:text-[50px]"
          >
            Akshaj Kashyap
          </Link>
        </div>
        <div className="flex min-h-14 items-center justify-between gap-4 border-b border-border">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-text-muted sm:text-[10px]">
            Computer Science · UC Santa Barbara
          </p>
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 border-l border-border px-4 py-2 text-sm font-medium text-text-strong transition-colors hover:text-accent"
            >
              Résumé
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </nav>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
