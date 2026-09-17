import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/data";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ashish Tirkey — Backend Software Engineer",
  description:
    "Backend software engineer specializing in distributed systems and AI/LLM infrastructure. Config management platforms, production observability, and AI guardrail middleware.",
  openGraph: {
    title: "Ashish Tirkey — Backend Software Engineer",
    description:
      "Backend software engineer specializing in distributed systems and AI/LLM infrastructure.",
    type: "website",
    url: "https://ashishtirkey.vercel.app",
    siteName: "Ashish Tirkey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Tirkey — Backend Software Engineer",
    description:
      "Backend software engineer specializing in distributed systems and AI/LLM infrastructure.",
  },
  metadataBase: new URL("https://ashishtirkey.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="absolute -top-full left-4 z-50 rounded bg-accent px-4 py-2 text-sm font-medium text-background focus-visible:top-4"
        >
          Skip to content
        </a>
        {children}
        <footer className="border-t border-border py-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted">{profile.name} · {new Date().getFullYear()}</p>
            <div className="flex gap-6 text-xs text-muted">
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
          </div>
        </footer>
      </body>
    </html>
  );
}
