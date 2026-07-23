"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative sm:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-text-strong transition-colors hover:border-accent"
      >
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
        <span aria-hidden="true">{open ? "×" : "Menu"}</span>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+8px)] z-40 w-64 rounded-lg border border-border bg-surface-elevated p-2 shadow-[0_16px_40px_rgb(0_0_0_/_0.24)]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text hover:bg-surface hover:text-text-strong"
            >
              {link.label}
            </Link>
          ))}
          <Link href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text hover:bg-surface hover:text-text-strong">
            Résumé
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
