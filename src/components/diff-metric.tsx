import type { DiffMetric } from "@/content/data";

export function DiffMetricRow({ metric }: { metric: DiffMetric }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <span className="text-sm text-muted">{metric.label}</span>
      <span className="font-mono text-sm">
        <span className="text-diff-remove">{metric.before}</span>
        <span className="mx-2 text-muted">to</span>
        <span className="text-diff-add">{metric.after}</span>
      </span>
    </div>
  );
}
