
import Link from "next/link";
import { Nav } from "@/components/nav";
import { DiffMetricRow } from "@/components/diff-metric";
import { profile, experience, education, caseStudies } from "@/content/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        {/* Hero */}
        <section className="py-20">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-4 text-muted">{profile.location}</p>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border py-14 scroll-mt-20">
          <h2 className="text-sm font-semibold text-accent">About</h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-foreground/90">
            {profile.about}
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-border py-14 scroll-mt-20">
          <h2 className="text-sm font-semibold text-accent">Experience</h2>
          <ul className="mt-6 space-y-6">
            {experience.map((entry) => (
              <li
                key={`${entry.company}-${entry.dates}`}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
              >
                <div>
                  <p className="font-medium">{entry.role}</p>
                  <p className="text-sm text-muted">{entry.company}</p>
                </div>
                <p className="font-mono text-sm text-muted">{entry.dates}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6">
            <p className="font-medium">{education.degree}</p>
            <div className="flex justify-between text-sm text-muted">
              <p>{education.school}</p>
              <p className="font-mono">{education.dates}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border py-14 scroll-mt-20">
          <h2 className="text-sm font-semibold text-accent">Selected work</h2>
          <div className="mt-6 space-y-10">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block rounded-lg border border-border p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-medium">{project.name}</h3>
                <p className="mt-2 max-w-[60ch] text-sm text-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-1">
                  {project.metrics.map((metric) => (
                    <DiffMetricRow key={metric.label} metric={metric} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-14 scroll-mt-20">
          <h2 className="text-sm font-semibold text-accent">Contact</h2>
          <p className="mt-4 max-w-[55ch] text-muted">
            Reach me by email or find me on GitHub / LinkedIn.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              email
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              linkedin
            </a>
            <a href="/Ashish_Tirkey_Resume.pdf" download className="text-accent hover:underline">
              resume
            </a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        {profile.name} — built with Next.js
      </footer>
    </>
  );
}

