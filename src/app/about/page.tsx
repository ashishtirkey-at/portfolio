import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { AnimateIn } from "@/components/animate-in";
import { profile, education, skills } from "@/content/data";

export const metadata: Metadata = {
  title: "About — Ashish Tirkey",
  description:
    "Backend software engineer with four years of experience building distributed systems and AI infrastructure at Kore.ai.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">

        <AnimateIn>
          <p className="font-mono text-xs tracking-widest text-accent">Background</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">About</h1>
        </AnimateIn>

        {/* About text + portrait placeholder */}
        <AnimateIn delay={80}>
          <div className="mt-10 flex flex-col gap-10 border-t border-border pt-10 sm:flex-row sm:items-start sm:gap-14">
            {/* Text content */}
            <div className="max-w-xl space-y-5">
              {profile.about.map((para) => (
                <p key={para} className="leading-relaxed text-foreground/90">
                  {para}
                </p>
              ))}
            </div>

            {/* Portrait placeholder — replace this div with <Image> when a photo is available */}
            <div
              className="shrink-0 self-start sm:sticky sm:top-24"
              aria-label="Profile portrait placeholder"
            >
              <div className="flex w-40 flex-col items-center overflow-hidden rounded border border-border bg-surface">
                {/* 3:4 portrait ratio */}
                <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3">
                  {/* Silhouette icon */}
                  <svg
                    width="40"
                    height="48"
                    viewBox="0 0 40 48"
                    fill="none"
                    aria-hidden="true"
                    className="text-border"
                  >
                    <circle cx="20" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M2 46c0-9.941 8.059-18 18-18s18 8.059 18 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-mono text-[9px] text-border/70 text-center leading-tight px-2">
                    Portrait<br />placeholder
                  </p>
                </div>
                {/* Name label strip */}
                <div className="w-full border-t border-border bg-background px-2 py-1.5 text-center">
                  <p className="font-mono text-[9px] text-muted">Ashish Tirkey</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Skills */}
        <AnimateIn delay={100}>
          <div className="mt-14 border-t border-border pt-10">
            <p className="font-mono text-xs tracking-widest text-accent">Skills</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Technical stack</h2>
          </div>
        </AnimateIn>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 60}>
              <p className="font-mono text-xs tracking-widest text-accent">{group.category}</p>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          ))}
        </div>

        {/* Currently exploring */}
        <AnimateIn delay={80}>
          <div className="mt-14 border-t border-border pt-10">
            <p className="font-mono text-xs tracking-widest text-accent">Currently exploring</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Production RAG pipelines", "Agentic AI systems"].map((area) => (
                <span
                  key={area}
                  className="rounded border border-border px-3 py-1 font-mono text-xs text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Education */}
        <AnimateIn delay={80}>
          <div className="mt-14 border-t border-border pt-10">
            <p className="font-mono text-xs tracking-widest text-accent">Education</p>
            <h2 className="mt-2 font-display text-2xl font-bold">{education.school}</h2>
            <p className="mt-1 text-foreground/80">{education.degree}</p>
            <p className="mt-0.5 font-mono text-sm text-muted">{education.dates}</p>
          </div>
        </AnimateIn>

      </main>
    </>
  );
}
