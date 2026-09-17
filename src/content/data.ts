export const profile = {
  name: "Ashish Tirkey",
  headline: "I build the backend systems that make AI products reliable",
  location: "Hyderabad, India",
  about:
    "I'm a backend software engineer with ~4 years of experience, most recently at Kore.ai in Hyderabad, where I built distributed systems and AI infrastructure for enterprise conversational AI platforms — including a configuration management platform serving 25+ engineering teams and an LLM guardrail middleware layer protecting DialogGPT integrations. My core stack is Node.js, Express, MongoDB, and Redis, and I'm currently deepening my skills in production RAG pipelines and agentic AI systems. I hold a B.Tech in Electronics and Communication Engineering from NIT Jamshedpur.",
  email: "ashish.tirkey2399@gmail.com",
  github: "https://github.com/ashishtirkey-at",
  linkedin: "https://www.linkedin.com/in/ashish-tirkey-9a69661b6",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
};

export const experience: ExperienceEntry[] = [
  { role: "Backend Software Engineer", company: "Kore.ai", dates: "Jan 2024 – May 2026" },
  { role: "Associate Software Engineer", company: "Kore.ai", dates: "July 2022 – Jan 2024" },
  { role: "Intern", company: "Samsung Research Institute", dates: "Feb – Apr 2022" },
];

export const education = {
  degree: "B.Tech, Electronics and Communication Engineering",
  school: "NIT Jamshedpur",
  dates: "2018 – 2022",
};

export type DiffMetric = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  problem: string;
  architecture: string;
  reliability?: string;
  incident?: { title: string; body: string };
  tradeoff?: string;
  evaluation?: string;
  metrics: DiffMetric[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "config-platform",
    name: "Configuration Management & Orchestration Platform",
    summary:
      "Replaced a static config file shared by 100+ microservices with a real-time propagation platform serving 25+ engineering teams.",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Redis Pub/Sub", "Docker"],
    problem:
      "100+ microservices depended on a static koreConfig file — every change required manual edits and a service restart, causing deployment delays, downtime, and difficult rollbacks across both cloud and on-prem customers.",
    architecture:
      "A Node.js/Express REST API validates configuration changes and writes them as versioned documents in MongoDB. A Redis cache (LRU + TTL) sits in front of reads, and updates are published as deltas over Redis Pub/Sub so every subscribed service updates its in-memory configuration immediately. Every write is audit-logged, and environments are isolated by namespace.",
    reliability:
      "If Redis goes down, services fall back to reading MongoDB directly. If a service misses a Pub/Sub message, it does a full config fetch on startup or reconnect. Concurrent updates are handled with optimistic locking on a version number.",
    incident: {
      title: "Config drift under peak load",
      body: "Under peak load of 5,000+ requests/sec, Redis Pub/Sub's fire-and-forget delivery caused intermittent config drift — some services silently missed update events. I fixed this with a periodic reconciliation loop (each service compares its local config version against MongoDB every 60 seconds) plus version-mismatch alerting. Drift incidents dropped to zero.",
    },
    metrics: [
      { label: "Config propagation", before: "restart required", after: "< 50ms" },
      { label: "Deployment-related incidents", before: "baseline", after: "-30%" },
    ],
    evaluation: "",
    tradeoff: "",
    result:
      "Became the centralized configuration system for 25+ engineering teams, eliminated restart-related downtime, and reduced deployment-related incidents by roughly 30%.",
  },
  {
    slug: "alert-sender",
    name: "Alert Sender — Observability & Alerting System",
    summary:
      "Built automated production alerting from scratch, cutting mean time to detect incidents by 40% across 15+ services.",
    stack: ["Loki", "LogQL", "Node.js"],
    problem:
      "There was no automated alerting — incidents were caught through manual log checks, keeping mean time to detect (MTTD) around 30 minutes.",
    architecture:
      "Scheduled LogQL queries run against Loki every 60 seconds, matching error patterns against threshold conditions. Matches are deduplicated, backed off exponentially to avoid repeat noise, and delivered to Slack, PagerDuty, and email, with a dashboard for on-call engineers.",
    tradeoff:
      "Chose 60-second polling over a streaming pipeline — slightly higher latency in exchange for an operationally simple system a single engineer could own and debug end to end.",
    incident: {
      title: "Alert storms from naive deduplication",
      body: "The first version deduplicated on the exact error string, but logs embedded dynamic values (request IDs, timestamps), so every occurrence looked unique and triggered its own alert. I fixed this with regex-based normalization — stripping dynamic values before hashing — which cut alert volume by 80%.",
    },
    metrics: [
      { label: "Mean time to detect", before: "~30 min", after: "~18 min" },
      { label: "Alert volume (post-dedup fix)", before: "baseline", after: "-80%" },
    ],
    evaluation: "Measured over 8 weeks of production incident timestamps, across 15+ production services.",
    reliability: "",
    result:
      "Cut MTTD by roughly 40% (30 min → 18 min), measured over 8 weeks of production data across 15+ services.",
  },
  {
    slug: "llm-guardrail-middleware",
    name: "LLM Guardrail Middleware",
    summary:
      "Added a safety and validation layer in front of a conversational AI product, cutting added latency by 75% while reducing unsafe outputs by 35%.",
    stack: ["Node.js", "Redis", "OpenAI API", "External guardrail APIs"],
    problem:
      "DialogGPT-based conversational AI integrations had no validation layer in front of them — no defense against toxic output, PII leakage, or prompt injection.",
    architecture:
      "A Node.js middleware interceptor sits between the application layer and DialogGPT, running PII detection, prompt-injection detection, and policy enforcement via external guardrail APIs through a pluggable provider-adapter registry. Violations above a threshold are routed to human review rather than silently dropped or passed through.",
    tradeoff:
      "Running policy checks sequentially was simpler but added ~400ms of latency per request. Parallelizing the checks cut latency but required reconciling independent check results into one consistent policy decision, and handling failures/timeouts from external providers independently per check.",
    incident: {
      title: "Latency reduction",
      body: "Parallelized the independent policy checks and added Redis TTL caching on normalized prompt hashes, so repeated prompts resolved from cache instead of hitting external guardrail APIs again. Added latency dropped from ~400ms to under 100ms across 50,000+ daily AI interactions.",
    },
    evaluation:
      "Validated with an A/B test (guardrails on vs. off) across 10,000+ users, plus a regression suite of 200+ curated prompt-response pairs run automatically on every policy change; deployments are blocked if the false-positive rate rises or the catch rate drops.",
    metrics: [
      { label: "Added latency", before: "~400ms", after: "< 100ms" },
      { label: "Unsafe outputs (A/B tested)", before: "baseline", after: "-35%" },
    ],
    reliability: "",
    result:
      "Cut added latency by 75% (400ms → under 100ms) and reduced policy-violating outputs by 35%, validated through A/B testing on 10,000+ users.",
  },
];
