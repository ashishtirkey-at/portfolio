import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="absolute -top-full left-4 z-50 rounded bg-accent px-4 py-2 text-sm font-medium text-background focus-visible:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
