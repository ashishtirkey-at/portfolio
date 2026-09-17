import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { profile } from "@/content/data";

export const metadata: Metadata = {
  title: "Contact — Ashish Tirkey",
  description: "Get in touch with Ashish Tirkey — backend software engineer.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        <h1 className="text-3xl font-semibold tracking-tight">Let's connect</h1>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
          Open to backend engineering and AI infrastructure roles. Happy to chat about distributed
          systems, observability, or LLM infrastructure.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-sm font-semibold text-accent">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block font-mono text-sm text-foreground/90 transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-accent">GitHub</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-mono text-sm text-foreground/90 transition-colors hover:text-accent"
            >
              github.com/ashishtirkey-at
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-accent">LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-mono text-sm text-foreground/90 transition-colors hover:text-accent"
            >
              linkedin.com/in/ashish-tirkey-9a69661b6
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
