@AGENTS.md

# Project context for Claude Code

This is Ashish Tirkey's personal portfolio site — Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, to be deployed on Vercel. Goal: a site to share with recruiters, link from LinkedIn, and use as a professional brand — showcasing backend engineering and AI/LLM infrastructure work.

## Ground rule — accuracy over polish

All project content (experience, metrics, case studies) was gathered directly from Ashish across a long back-and-forth, cross-checked against his own interview-prep notes, and explicitly confirmed by him. **Do not invent, embellish, or "improve" any fact, number, or claim** — no new metrics, no invented team sizes, no assumed architecture details. If something needs to change or expand, ask Ashish rather than filling gaps yourself. Everything currently in `src/content/data.ts` is confirmed and safe to use as-is.

## Stack & structure

- Next.js 15, App Router, TypeScript, Tailwind v4
- `src/content/data.ts` — single source of truth for all content (profile, experience, education, case studies). Edit this file to change site content; avoid hardcoding content directly in JSX.
- `src/app/page.tsx` — homepage: hero, About, Experience, Projects list, Contact
- `src/app/projects/[slug]/page.tsx` — dynamic case-study pages, statically generated from `caseStudies` in data.ts via `generateStaticParams`
- `src/components/nav.tsx` — top nav
- `src/components/diff-metric.tsx` — reusable "before → after" metric row (used on homepage cards and case study pages)

## Design system (already decided — don't change without asking)

Grounded in the subject matter (config propagation, log diffs, versioned state) rather than generic portfolio defaults. Deliberately avoided: cream+terracotta, near-black+neon-green, SaaS rounded-card-with-shadow kit, ALL-CAPS eyebrow labels, em-dash labels, arrow-suffixed buttons, numbered 01/02/03 markers.

- Colors (CSS vars in `src/app/globals.css`): `--background: #0e1116` (ink navy, not pure black), `--foreground: #edede8`, `--muted: #8a93a3`, `--accent: #d9a441` (amber), `--surface: #151920`, `--border: #262b34`, `--diff-add: #6fa37a`, `--diff-remove: #c4635a`
- Type: IBM Plex Sans (body/headings, one family, weights 400-700) + IBM Plex Mono (reserved only for genuine data - metrics, dates, tech stack tags - not decoration). Loaded via `next/font/google` in `src/app/layout.tsx`. Note: the sandbox this was built in had no internet access to fetch Google Fonts, so it was tested locally with a temporary system-font stub, then restored to the real IBM Plex config before delivery - verify fonts load correctly in your dev environment.
- Layout: left-aligned, max ~72ch line length, single-column, case studies get their own full-width pages (not modals/accordions)
- The "diff block" metric treatment (red before -> green after, monospace) is the signature device - it's literal, not decorative, since Ashish's actual work involves before/after system metrics

## Current status

Done:
- Project scaffolded, builds clean (`npx tsc --noEmit` and `npx eslint src` both pass)
- Homepage, nav, and all 3 case study pages built and content-complete
- Design tokens and typography in place

Still open (see TODOs inline in `src/content/data.ts`):
- Contact email, GitHub URL, LinkedIn URL - currently blank placeholders
- Resume PDF - not yet added; needs a download/view link, likely in Contact section and/or nav
- Open Graph image for social link previews
- SEO metadata polish (sitemap, robots.txt)
- No tests yet
- Headline copy - 3 options were drafted, final pick not yet locked in (`profile.headline` in data.ts currently holds option 1)
- Not yet deployed - target is Vercel, GitHub-connected, zero-config

## Working style

Ashish prefers concise, direct, table-heavy communication and wants to be told plainly when something's a bad idea or technically weak - don't just agree. He's using this project partly to grow frontend/TypeScript/React skills (limited prior production experience there), so it's fine to briefly explain non-obvious Next.js/React patterns as you introduce them, without turning it into a tutorial.
