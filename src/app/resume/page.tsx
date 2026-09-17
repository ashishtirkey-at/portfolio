import type { Metadata } from "next";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Resume — Ashish Tirkey",
  description: "Resume of Ashish Tirkey, backend software engineer specializing in distributed systems and AI infrastructure.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">

        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
          <a
            href="/Ashish_Tirkey_Resume.pdf"
            download
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Download PDF ↓
          </a>
        </div>

        {/* Desktop: inline PDF viewer */}
        <div className="mt-6 hidden sm:block">
          <iframe
            src="/Ashish_Tirkey_Resume.pdf"
            className="w-full rounded-lg border border-border"
            style={{ minHeight: "82vh" }}
            title="Ashish Tirkey — Resume"
          />
          <p className="mt-3 text-xs text-muted">
            PDF not loading?{" "}
            <a
              href="/Ashish_Tirkey_Resume.pdf"
              download
              className="text-accent hover:underline"
            >
              Download it directly.
            </a>
          </p>
        </div>

        {/* Mobile: download prompt */}
        <div className="mt-6 rounded-lg border border-border p-8 sm:hidden">
          <p className="text-sm leading-relaxed text-muted">
            Inline PDF viewing isn't supported on most mobile browsers. Download the resume to view it.
          </p>
          <a
            href="/Ashish_Tirkey_Resume.pdf"
            download
            className="mt-5 inline-flex items-center rounded border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Download Resume
          </a>
        </div>

      </main>
    </>
  );
}
