"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/projects", label: "Projects" },
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
    <div className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border bg-transparent px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-text-strong transition-colors hover:border-accent hover:text-accent"
      >
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
        <span aria-hidden="true">{open ? "×" : "Menu"}</span>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+8px)] z-40 w-64 rounded-sm border border-border bg-surface p-2 shadow-[0_12px_28px_rgb(23_26_23_/_0.12)]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center border-b border-border px-3 text-sm font-medium text-text transition-colors last:border-b-0 hover:bg-accent-subtle hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="flex min-h-11 items-center px-3 text-sm font-medium text-text transition-colors hover:bg-accent-subtle hover:text-accent">
            Résumé
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
