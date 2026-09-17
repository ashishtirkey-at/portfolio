function Arrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" className="text-border">
        <line x1="6" y1="0" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 10L6 18L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export function AlertSenderDiagram() {
  return (
    <figure aria-label="Alert sender — observability and alerting flow diagram">
      <div className="w-full max-w-xs space-y-0">

        {/* Production services */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Production Services</p>
          <p className="mt-0.5 font-mono text-xs text-muted">15+ services emitting logs</p>
        </div>

        <Arrow />

        {/* Loki */}
        <div className="rounded border border-accent/60 bg-surface px-4 py-3 text-center">
          <p className="font-mono text-[10px] tracking-widest text-accent">Log Aggregation</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Loki</p>
          <p className="mt-0.5 font-mono text-xs text-muted">structured log storage</p>
        </div>

        <Arrow />

        {/* 60s Scheduled Poller */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Scheduled Poller</p>
          <p className="mt-0.5 font-mono text-xs text-muted">LogQL error pattern queries</p>
          <p className="mt-1 font-mono text-[10px] text-muted/70">60s interval · threshold matching</p>
        </div>

        <Arrow />

        {/* Deduplication */}
        <div className="rounded border border-accent/60 bg-surface px-4 py-3 text-center">
          <p className="font-mono text-[10px] tracking-widest text-accent">Deduplication</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Normalize · Hash · Backoff</p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {["regex normalize", "hash dedup", "exp. backoff"].map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-1.5 py-0.5 font-mono text-[9px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Arrow />

        {/* Notification dispatch */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Notification Dispatch</p>
          {/* Channels */}
          <div className="mt-2.5 flex justify-center gap-2">
            {["Slack", "PagerDuty", "Email"].map((ch) => (
              <span
                key={ch}
                className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-foreground/70"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        <Arrow />

        {/* On-call dashboard */}
        <div className="rounded border border-border bg-surface px-4 py-2.5 text-center">
          <p className="text-sm font-medium text-foreground">On-call Dashboard</p>
          <p className="mt-0.5 font-mono text-xs text-muted">incident visibility · response tracking</p>
        </div>

      </div>

      <figcaption className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted">
        Regex normalization strips dynamic values (request IDs, timestamps) before hashing,
        cutting alert volume 80%. Mean time to detect reduced from ~30 min to ~18 min.
      </figcaption>
    </figure>
  );
}
