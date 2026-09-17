import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
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
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-[58ch] text-muted">
          Three backend systems I designed and owned end to end at Kore.ai — each with a full case
          study covering architecture, engineering challenges, and measured results.
        </p>

        <div className="mt-10 space-y-6">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </main>
    </>
  );
}
