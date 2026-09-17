import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { profile, education } from "@/content/data";

export const metadata: Metadata = {
  title: "About — Ashish Tirkey",
  description:
    "Backend software engineer with four years of experience building distributed systems and AI infrastructure at Kore.ai.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        <h1 className="text-3xl font-semibold tracking-tight">About</h1>

        {/* Background */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-accent">Background</h2>
          <div className="mt-4 max-w-[62ch] space-y-4">
            {profile.about.map((para) => (
              <p key={para} className="leading-relaxed text-foreground/90">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-accent">Core stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Currently exploring */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-accent">Currently exploring</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Production RAG pipelines", "Agentic AI systems"].map((area) => (
              <span
                key={area}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
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
