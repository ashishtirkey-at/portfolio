import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { AnimateIn } from "@/components/animate-in";
import { profile } from "@/content/data";

export const metadata: Metadata = {
  title: "Contact — Ashish Tirkey",
  description: "Get in touch with Ashish Tirkey — backend software engineer.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">

        <AnimateIn>
          <p className="font-mono text-xs tracking-widest text-accent">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Let&apos;s connect.
          </h1>
          <p className="mt-4 max-w-lg text-muted">
            Open to backend engineering and AI infrastructure roles. Happy to chat about
            distributed systems, observability, or LLM infrastructure.
          </p>
        </AnimateIn>

        <div className="mt-12 divide-y divide-border border-t border-border">
          <AnimateIn delay={80}>
            <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs tracking-widest text-accent">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-foreground transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs tracking-widest text-accent">GitHub</p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground transition-colors hover:text-accent"
              >
                github.com/ashishtirkey-at
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs tracking-widest text-accent">LinkedIn</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground transition-colors hover:text-accent"
              >
                linkedin.com/in/ashish-tirkey-9a69661b6
              </a>
            </div>
          </AnimateIn>
        </div>

      </main>
    </>
  );
}
