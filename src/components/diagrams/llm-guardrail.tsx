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

export function LlmGuardrailDiagram() {
  return (
    <figure aria-label="LLM guardrail middleware — request flow diagram">
      <div className="w-full max-w-xs space-y-0">

        {/* User request */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">User Request</p>
          <p className="mt-0.5 font-mono text-xs text-muted">application layer</p>
        </div>

        <Arrow />

        {/* Middleware interceptor — featured */}
        <div className="rounded border border-accent/60 bg-surface px-4 py-3 text-center">
          <p className="font-mono text-[10px] tracking-widest text-accent">Middleware</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Middleware Interceptor</p>
          <p className="mt-0.5 font-mono text-xs text-muted">Node.js · in-request path</p>
        </div>

        <Arrow />

        {/* Input guardrails */}
        <div className="rounded border border-border bg-surface px-4 py-3">
          <p className="text-center font-mono text-[10px] tracking-widest text-accent">
            Input Guardrails
          </p>
          <p className="mt-1.5 text-center font-mono text-[10px] text-muted">
            parallel execution
          </p>
          <ul className="mt-2.5 space-y-1.5" aria-label="Input guardrail checks">
            {[
              "PII detection",
              "Prompt injection detection",
              "Policy enforcement",
            ].map((check) => (
              <li key={check} className="flex items-center gap-2 text-xs text-foreground/80">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                  aria-hidden="true"
                />
                {check}
              </li>
            ))}
          </ul>
          <p className="mt-2.5 text-center font-mono text-[9px] text-muted/70">
            via provider-adapter registry
          </p>
        </div>

        <Arrow />

        {/* Pass / Violation branch */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-mono text-[10px] text-diff-add">Pass</p>
            <div className="w-full rounded border border-accent/60 bg-surface px-3 py-2.5 text-center">
              <p className="text-xs font-medium text-foreground">DialogGPT</p>
              <p className="mt-0.5 font-mono text-[10px] text-muted">LLM processing</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-mono text-[10px] text-diff-remove">Violation</p>
            <div className="w-full rounded border border-border bg-surface px-3 py-2.5 text-center">
              <p className="text-xs font-medium text-foreground">Human Review</p>
              <p className="mt-0.5 font-mono text-[10px] text-muted">above threshold</p>
            </div>
          </div>
        </div>

        <Arrow />

        {/* Redis cache */}
        <div className="rounded border border-border bg-surface px-4 py-3 text-center">
          <p className="text-sm font-medium text-foreground">Redis Cache</p>
          <p className="mt-0.5 font-mono text-xs text-muted">
            normalized prompt hash · TTL
          </p>
          <p className="mt-1 font-mono text-[10px] text-muted/70">
            repeated prompts skip guardrail APIs
          </p>
        </div>

        <Arrow />

        {/* Validated response */}
        <div className="rounded border border-border bg-surface px-4 py-2.5 text-center">
          <p className="text-sm font-medium text-foreground">Validated Response</p>
          <p className="mt-0.5 font-mono text-xs text-muted">returned to application</p>
        </div>

      </div>

      <figcaption className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted">
        Policy checks run in parallel via a pluggable provider-adapter registry. Caching on
        normalized prompt hashes cut added latency from ~400ms to under 100ms.
      </figcaption>
    </figure>
  );
}
