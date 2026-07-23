"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
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
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-semibold text-text-strong transition-colors hover:bg-surface-subtle"
      >
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
        <span aria-hidden="true">{open ? "×" : "Menu"}</span>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+8px)] z-40 w-60 rounded-lg border border-border bg-surface p-2 shadow-[0_1px_2px_rgb(15_23_42_/_0.06)]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text hover:bg-surface-subtle hover:text-text-strong"
            >
              {link.label}
            </Link>
          ))}
          <Link href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text hover:bg-surface-subtle hover:text-text-strong">
            Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
