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

export function ConfigPlatformDiagram() {
  return (
    <figure aria-label="Configuration management platform — system flow diagram">
      <div className="w-full max-w-xs space-y-0">

        {/* Config Update Request */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Config Update Request</p>
          <p className="mt-0.5 font-mono text-xs text-muted">via REST endpoint</p>
        </div>

        <Arrow />

        {/* REST API — central component */}
        <div className="rounded border border-accent/60 bg-surface px-4 py-3 text-center">
          <p className="font-mono text-[10px] tracking-widest text-accent">Core Service</p>
          <p className="mt-1 text-sm font-semibold text-foreground">REST API</p>
          <p className="mt-0.5 font-mono text-xs text-muted">Node.js · Express</p>
          <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
            {["validates", "versions document", "optimistic lock"].map((tag) => (
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

        {/* Persistence layer — two columns */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded border border-border bg-surface px-3 py-2.5 text-center">
            <p className="text-xs font-medium text-foreground">MongoDB</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted">source of truth</p>
            <p className="font-mono text-[10px] text-muted">versioned docs</p>
          </div>
          <div className="rounded border border-border bg-surface px-3 py-2.5 text-center">
            <p className="text-xs font-medium text-foreground">Redis Cache</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted">in-memory reads</p>
            <p className="font-mono text-[10px] text-muted">LRU · TTL</p>
          </div>
        </div>

        <Arrow />

        {/* Redis Pub/Sub — featured */}
        <div className="rounded border border-accent/60 bg-surface px-4 py-3 text-center">
          <p className="text-sm font-semibold text-foreground">Redis Pub/Sub</p>
          <p className="mt-0.5 font-mono text-xs text-muted">delta delivery to subscribers</p>
        </div>

        <Arrow />

        {/* Subscribed microservices */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Subscribed Microservices</p>
          <p className="mt-0.5 font-mono text-xs text-muted">100+ services · in-memory update</p>
          <p className="mt-1.5 font-mono text-[10px] text-muted/70">
            60s reconciliation loop against MongoDB
          </p>
        </div>

      </div>

      <figcaption className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted">
        Propagation latency under 50ms. If Redis is unavailable, services fall back to reading
        MongoDB directly.
      </figcaption>
    </figure>
  );
}
