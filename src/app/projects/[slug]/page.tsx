import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { DiffMetricRow } from "@/components/diff-metric";
import { caseStudies } from "@/content/data";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();

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
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
        <Link href="/#projects" className="text-sm text-muted hover:text-accent">
          Back to work
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          {project.name}
        </h1>
        <p className="mt-3 max-w-[62ch] text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border p-5">
          {project.metrics.map((metric) => (
            <DiffMetricRow key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {sections
            .filter((s) => s.body)
            .map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-semibold text-accent">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
                  {section.body}
                </p>
              </section>
            ))}

          {project.incident && (
            <section>
              <h2 className="text-sm font-semibold text-accent">
                {project.incident.title}
              </h2>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
                {project.incident.body}
              </p>
            </section>
          )}

          <section>
            <h2 className="text-sm font-semibold text-accent">Result</h2>
            <p className="mt-3 max-w-[62ch] leading-relaxed text-foreground/90">
              {project.result}
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        Ashish Tirkey — built with Next.js
      </footer>
    </>
  );
}
