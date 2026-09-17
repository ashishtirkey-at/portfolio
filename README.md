# Portfolio — Ashish Tirkey

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Structure
- `src/content/data.ts` — all real content (about, experience, project case studies). Edit this file to update anything on the site.
- `src/app/page.tsx` — homepage (hero, about, experience, projects list, contact)
- `src/app/projects/[slug]/page.tsx` — case study detail pages, generated from `caseStudies` in data.ts
- `src/components/` — Nav and DiffMetricRow (the before/after metric component)

## Run locally
```
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy
Push to a GitHub repo, then import it at vercel.com/new — zero config needed, Vercel auto-detects Next.js.

## Still to fill in (see TODOs in src/content/data.ts)
- Contact email, GitHub URL, LinkedIn URL
- A resume PDF to link/download
- Open Graph image for social previews
