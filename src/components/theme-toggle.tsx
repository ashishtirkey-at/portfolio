"use client";

import { useEffect, useState, startTransition } from "react";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  // Default "light" matches the SSR baseline — avoids hydration mismatch on initial render
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
    if (stored === "dark") startTransition(() => setTheme("dark"));
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    setTimeout(() => root.classList.remove("theme-transitioning"), 300);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`rounded p-1.5 text-muted transition-colors hover:text-foreground ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
