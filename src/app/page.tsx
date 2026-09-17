import Link from "next/link";
import { Nav } from "@/components/nav";
import { AnimateIn } from "@/components/animate-in";
import { profile, experience, caseStudies, skills } from "@/content/data";

const heroStats = [
  { value: "4", label: "Years experience" },
  { value: "3", label: "Systems owned E2E" },
  { value: "10k+", label: "Users impacted" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">

        {/* ─── Hero ─── */}
        <section className="flex min-h-[88vh] flex-col justify-center px-6 py-20">
          <div className="mx-auto w-full max-w-5xl">
            <p className="animate-fade-up font-mono text-xs tracking-widest text-accent">
              Backend Engineer · AI Infrastructure · Hyderabad
            </p>
            <h1 className="animate-fade-up animate-delay-100 mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.headline}
            </h1>
            <p className="animate-fade-up animate-delay-200 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>

            {/* Stats */}
            <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap gap-8 border-t border-border pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-3xl font-medium text-foreground">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up animate-delay-400 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center rounded border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View My Work
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
              </Link>
            </div>

            {/* Social links */}
            <div className="animate-fade-up animate-delay-500 mt-6 flex items-center gap-5 text-sm text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <span className="text-border">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ─── N° 01 Work ─── */}
        <section id="work" className="py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <AnimateIn>
              <div className="flex items-end justify-between border-t border-border pt-8">
                <div>
                  <p className="font-mono text-xs tracking-widest text-accent">N° 01</p>
                  <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Work</h2>
                </div>
                <Link
                  href="/projects"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  All projects →
                </Link>
              </div>
            </AnimateIn>

            <div className="mt-2 divide-y divide-border">
              {caseStudies.map((project, i) => (
                <AnimateIn key={project.slug} delay={i * 100}>
                  <div className="group py-8 sm:py-10">
                    <div className="flex gap-6 sm:gap-10">
                      <span className="hidden shrink-0 select-none pt-1 font-mono text-5xl font-medium leading-none text-border sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                            {project.name}
                          </h3>
                          <Link
                            href={`/projects/${project.slug}`}
                            className="shrink-0 text-sm text-accent hover:underline"
                          >
                            View Case Study →
                          </Link>
                        </div>
                        <p className="mt-2 max-w-xl text-sm text-muted">{project.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-6">
                          {project.metrics.map((m) => (
                            <div key={m.label}>
                              <span className="font-mono text-sm font-medium text-diff-add">
                                {m.after}
                              </span>
                              <span className="ml-1.5 text-xs text-muted">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── N° 02 Experience ─── */}
        <section id="experience" className="py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <AnimateIn>
              <div className="flex items-end justify-between border-t border-border pt-8">
                <div>
                  <p className="font-mono text-xs tracking-widest text-accent">N° 02</p>
                  <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Experience</h2>
                </div>
                <Link
                  href="/experience"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Full timeline →
                </Link>
              </div>
            </AnimateIn>

            <div className="mt-8 divide-y divide-border">
              {experience.map((entry, i) => (
                <AnimateIn key={`${entry.company}-${entry.dates}`} delay={i * 80}>
                  <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="font-medium">{entry.role}</p>
                      <p className="mt-0.5 text-sm text-accent">{entry.company}</p>
                    </div>
                    <p className="shrink-0 font-mono text-sm text-muted">{entry.dates}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── N° 03 Skills ─── */}
        <section id="skills" className="py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <AnimateIn>
              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs tracking-widest text-accent">N° 03</p>
                <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Skills</h2>
              </div>
            </AnimateIn>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {skills.map((group, i) => (
                <AnimateIn key={group.category} delay={i * 60}>
                  <p className="font-mono text-xs tracking-widest text-accent">
                    {group.category}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact CTA ─── */}
        <section className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6">
            <AnimateIn>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-xs tracking-widest text-accent">Get in touch</p>
                <h2 className="mt-4 max-w-lg font-display text-4xl font-bold sm:text-5xl">
                  Open to backend and AI infrastructure roles.
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  Happy to chat about distributed systems, observability, or LLM infrastructure.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center rounded border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    {profile.email}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Contact page →
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>
    </>
  );
}
