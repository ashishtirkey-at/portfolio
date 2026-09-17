"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, startTransition } from "react";
import { profile } from "@/content/data";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    startTransition(() => setOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") startTransition(() => setOpen(false));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <header className="nav-backdrop sticky top-0 z-50 border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight transition-colors hover:text-accent"
          >
            Ashish Tirkey
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 sm:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={[
                  "relative py-0.5 text-sm transition-colors hover:text-foreground",
                  isActive(link.href) ? "text-foreground" : "text-muted",
                ].join(" ")}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop theme toggle */}
          <ThemeToggle className="hidden sm:inline-flex" />

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-0.5 sm:hidden">
            <ThemeToggle />
            <button
              className="p-1.5 text-muted transition-colors hover:text-foreground"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background sm:hidden">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <Link
              href="/"
              className="text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Ashish Tirkey
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="p-1.5 text-muted transition-colors hover:text-foreground"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col justify-center px-6"
            aria-label="Mobile navigation"
          >
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={[
                  "flex items-baseline gap-5 border-b border-border py-5 font-display text-3xl font-bold transition-colors hover:text-accent",
                  isActive(link.href) ? "text-accent" : "text-foreground",
                ].join(" ")}
              >
                <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-between border-t border-border px-6 py-5">
            <div className="flex gap-6 text-sm text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
