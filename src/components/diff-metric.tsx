import type { DiffMetric } from "@/content/data";

export function DiffMetricRow({ metric }: { metric: DiffMetric }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-2 text-sm last:border-b-0">
      <span className="text-muted">{metric.label}</span>
      <span className="font-mono">
        <span className="text-diff-remove">{metric.before}</span>
        <span className="mx-2 text-muted">to</span>
        <span className="text-diff-add">{metric.after}</span>
      </span>
    </div>
  );
}
