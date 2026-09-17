import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { AnimateIn } from "@/components/animate-in";
import { experience, education } from "@/content/data";

export const metadata: Metadata = {
  title: "Experience — Ashish Tirkey",
  description:
    "Professional experience as a backend software engineer at Kore.ai and Samsung Research Institute.",
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">

        <AnimateIn>
          <p className="font-mono text-xs tracking-widest text-accent">Career</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Experience</h1>
        </AnimateIn>

        {/* Roles */}
        <div className="mt-12 space-y-0 divide-y divide-border border-t border-border">
          {experience.map((entry, i) => (
            <AnimateIn key={`${entry.company}-${entry.dates}`} delay={i * 100}>
              <div className="py-10">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h2 className="font-display text-xl font-semibold sm:text-2xl">{entry.role}</h2>
                    <p className="mt-0.5 text-sm text-accent">{entry.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-sm text-muted">{entry.dates}</p>
                </div>

                {entry.bullets && entry.bullets.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Education */}
        <AnimateIn>
          <div className="mt-4 border-t border-border pt-10">
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
