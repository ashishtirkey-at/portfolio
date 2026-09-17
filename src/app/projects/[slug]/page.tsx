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

function SectionRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-border py-10 sm:flex-row sm:gap-16">
      <p className="shrink-0 font-mono text-xs tracking-widest text-accent sm:w-36 sm:pt-0.5">
        {label}
      </p>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
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
  const nextProject =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const proseSections: { title: string; body?: string }[] = [
    { title: "Problem", body: project.problem },
    { title: "Architecture", body: project.architecture },
    { title: "Reliability", body: project.reliability },
    { title: "Trade-off", body: project.tradeoff },
    { title: "Evaluation", body: project.evaluation },
  ];

  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-14">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-muted">
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground/60 truncate">{project.name}</span>
        </nav>

        {/* Header */}
        <div className="mt-8 border-b border-border pb-10">
          <p className="font-mono text-xs tracking-widest text-accent">Case Study</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-muted">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results at a glance */}
        <SectionRow label="Results at a glance">
          <div className="max-w-sm divide-y divide-border">
            {project.metrics.map((metric) => (
              <DiffMetricRow key={metric.label} metric={metric} />
            ))}
          </div>
        </SectionRow>

        {/* My Role */}
        {project.myRole && (
          <SectionRow label="My Role">
            <p className="max-w-2xl leading-relaxed text-foreground/90">{project.myRole}</p>
          </SectionRow>
        )}

        {/* Prose sections */}
        {proseSections
          .filter((s) => s.body)
          .map((section) => (
            <SectionRow key={section.title} label={section.title}>
              <p className="max-w-2xl leading-relaxed text-foreground/90">{section.body}</p>
            </SectionRow>
          ))}

        {/* Engineering Challenge */}
        {project.incident && (
          <SectionRow label="Engineering Challenge">
            <div className="max-w-2xl">
              <p className="font-display text-xl font-semibold">{project.incident.title}</p>
              <p className="mt-4 leading-relaxed text-foreground/90">{project.incident.body}</p>
            </div>
          </SectionRow>
        )}

        {/* Results */}
        <SectionRow label="Results">
          <p className="max-w-2xl leading-relaxed text-foreground/90">{project.result}</p>
        </SectionRow>

        {/* Prev / Next */}
        <div className="mt-4 border-t border-border pt-10">
          <div className="flex items-start justify-between gap-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                  ← Previous
                </span>
                <span className="font-display text-base font-semibold transition-colors group-hover:text-accent">
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end gap-1 text-right"
              >
                <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                  Next →
                </span>
                <span className="font-display text-base font-semibold transition-colors group-hover:text-accent">
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
