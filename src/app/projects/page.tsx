import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { AnimateIn } from "@/components/animate-in";
import { caseStudies } from "@/content/data";

export const metadata: Metadata = {
  title: "Projects — Ashish Tirkey",
  description:
    "Three backend systems designed and built at Kore.ai — configuration management, production alerting, and LLM guardrail middleware.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">

        <AnimateIn>
          <p className="font-mono text-xs tracking-widest text-accent">Selected Work</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-lg text-muted">
            Three backend systems I designed and owned end to end at Kore.ai — each with a full
            case study covering architecture, engineering challenges, and measured results.
          </p>
        </AnimateIn>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {caseStudies.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 100}>
              <div className="group py-10">
                <div className="flex gap-6 sm:gap-12">
                  <span className="hidden shrink-0 select-none pt-1 font-mono text-5xl font-medium leading-none text-border sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h2 className="break-words font-display text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                        {project.name}
                      </h2>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="shrink-0 text-sm text-accent hover:underline"
                      >
                        View Case Study →
                      </Link>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-6">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="font-mono text-sm font-medium text-diff-add">
                            {m.after}
                          </span>
                          <span className="ml-1.5 text-xs text-muted">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </main>
    </>
  );
}
