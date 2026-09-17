import Link from "next/link";
import type { CaseStudy } from "@/content/data";
import { DiffMetricRow } from "@/components/diff-metric";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <div className="flex flex-col rounded-lg border border-border p-6 transition-colors hover:border-accent hover:bg-surface">
      <h3 className="font-medium">{project.name}</h3>
      <p className="mt-2 max-w-[60ch] text-sm text-muted">{project.summary}</p>
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
      <div className="mt-4 space-y-1">
        {project.metrics.map((metric) => (
          <DiffMetricRow key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="mt-5 border-t border-border pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}
