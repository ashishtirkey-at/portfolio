import type { Metadata } from "next";
import { Nav } from "@/components/nav";
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
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>

        {/* Roles */}
        <div className="mt-10 space-y-12">
          {experience.map((entry) => (
            <section key={`${entry.company}-${entry.dates}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="font-semibold">{entry.role}</h2>
                  <p className="text-sm text-accent">{entry.company}</p>
                </div>
                <p className="shrink-0 font-mono text-sm text-muted">{entry.dates}</p>
              </div>
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
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
            </section>
          ))}
        </div>

        {/* Education */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="text-sm font-semibold text-accent">Education</h2>
          <div className="mt-4">
            <p className="font-medium">{education.degree}</p>
            <div className="mt-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
              <p className="text-sm text-muted">{education.school}</p>
              <p className="font-mono text-sm text-muted">{education.dates}</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
