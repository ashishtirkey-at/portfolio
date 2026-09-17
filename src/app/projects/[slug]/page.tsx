import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { DiffMetricRow } from "@/components/diff-metric";
import { caseStudies } from "@/content/data";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Ashish Tirkey`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — Ashish Tirkey`,
      description: project.summary,
      type: "article",
      url: `https://ashishtirkey.vercel.app/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Ashish Tirkey`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const project = caseStudies[currentIndex];
  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const sections: { title: string; body?: string }[] = [
    { title: "Problem", body: project.problem },
    { title: "Architecture", body: project.architecture },
    { title: "Reliability", body: project.reliability },
    { title: "Trade-off", body: project.tradeoff },
    { title: "Evaluation", body: project.evaluation },
  ];

  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground/70">{project.name}</span>
        </nav>

        {/* Header */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">{project.name}</h1>
        <p className="mt-3 max-w-[62ch] text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-8 rounded-lg border border-border p-5">
          {project.metrics.map((metric) => (
            <DiffMetricRow key={metric.label} metric={metric} />
          ))}
        </div>

        {/* My Role */}
        {project.myRole && (
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <h2 className="text-sm font-semibold text-accent">My Role</h2>
            <p className="mt-2 max-w-[62ch] leading-relaxed text-foreground/90">
              {project.myRole}
            </p>
          </div>
        )}

        {/* Prose sections: Problem, Architecture, Reliability, Trade-off, Evaluation */}
        <div className="mt-10 space-y-10">
          {sections
            .filter((s) => s.body)
            .map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-semibold text-accent">{section.title}</h2>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
                  {section.body}
                </p>
              </section>
            ))}

          {/* Engineering Challenge */}
          {project.incident && (
            <section>
              <h2 className="text-sm font-semibold text-accent">Engineering Challenge</h2>
              <p className="mt-1 text-sm text-muted">{project.incident.title}</p>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
                {project.incident.body}
              </p>
            </section>
          )}

          {/* Results */}
          <section>
            <h2 className="text-sm font-semibold text-accent">Results</h2>
            <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
              {project.result}
            </p>
          </section>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex items-start justify-between gap-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="text-xs text-muted transition-colors group-hover:text-accent">
                  ← Previous
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-accent">
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end gap-1"
              >
                <span className="text-xs text-muted transition-colors group-hover:text-accent">
                  Next →
                </span>
                <span className="text-sm font-medium text-right transition-colors group-hover:text-accent">
                  {nextProject.name}
                </span>
              </Link>
            )}
          </div>
        </div>

      </main>
    </>
  );
}
