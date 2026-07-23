import Link from "next/link";
import { Container } from "@/components/container";
import { MobileNavigation } from "@/components/mobile-navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface">
      <Container className="flex h-15 items-center justify-between gap-4 md:h-16">
        <Link href="/" className="text-sm font-semibold tracking-tight text-text-strong">
          Akshaj Kashyap
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-surface-subtle hover:text-text-strong"
            >
              {item.label}
            </Link>
          ))}
          <span aria-disabled="true" className="ml-1 rounded-md px-3 py-2 text-sm font-medium text-text-muted">
            Resume [pending]
          </span>
        </nav>
        <MobileNavigation />
      </Container>
    </header>
  );
}
