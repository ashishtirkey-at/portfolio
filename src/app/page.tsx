import Link from "next/link";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { profile, experience, caseStudies } from "@/content/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6">

        {/* Hero */}
        <section className="py-20">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              View My Work
            </Link>
            <a
              href="/Ashish_Tirkey_Resume.pdf"
              download
              className="inline-flex items-center rounded border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-5 flex gap-5 text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Brief intro */}
        <section className="border-t border-border py-10">
          <p className="max-w-[60ch] leading-relaxed text-foreground/80">
            {profile.about[0]}
          </p>
          <Link
            href="/about"
            className="mt-3 inline-block text-sm text-muted transition-colors hover:text-accent"
          >
            More about me →
          </Link>
        </section>

        {/* Selected work */}
        <section className="border-t border-border py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-semibold text-accent">Selected work</h2>
            <Link
              href="/projects"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-6 space-y-6">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Experience snapshot */}
        <section className="border-t border-border py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-semibold text-accent">Experience</h2>
            <Link
              href="/experience"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Full experience →
            </Link>
          </div>
          <ul className="mt-6 space-y-5">
            {experience.map((entry) => (
              <li
                key={`${entry.company}-${entry.dates}`}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium">{entry.role}</p>
                  <p className="text-sm text-muted">{entry.company}</p>
                </div>
                <p className="shrink-0 font-mono text-sm text-muted">{entry.dates}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border py-14">
          <h2 className="text-sm font-semibold text-accent">Let's connect</h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            Open to backend engineering and AI infrastructure roles. Happy to chat about distributed
            systems, observability, or LLM infrastructure.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
          >
            Get in touch →
          </Link>
        </section>

      </main>
    </>
  );
}
