# EWO Creative Agency Website

Marketing website for [EWO Solutions](https://ewosolutions.com), a digital
marketing agency in Somerset West, Cape Town. Five pages: Home, About,
Services, Work, Contact — built from the agency's design handoff
("EWO Creative Agency Prototype").

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in the
  `@theme` block in `src/app/globals.css`
- Space Grotesk via `next/font` (stand-in for the licensed Blauer Nue
  brand font — swap via `@font-face` when licensed)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project layout

- `src/app/` — one route per page (`/`, `/about`, `/services`, `/work`, `/contact`)
- `src/components/` — shared UI (Nav, Footer, PillButton, Newsletter, …)
- `src/features/` — per-page interactive islands (accordion, stepper, wizard, filter)
- `src/data/` — all copy and content as typed modules
- `scripts/optimize-images.mjs` — one-off sharp pipeline for brand photography
  (`npm run optimize-images -- <source-dir>`)

## Deployment

Zero-config Vercel: import the GitHub repo at [vercel.com/new](https://vercel.com/new),
framework preset "Next.js", no environment variables required.

## Forms / email setup

The contact wizard and newsletter POST to `/api/enquiry`, which sends via
[Resend](https://resend.com). Environment variables (Vercel → Project →
Settings → Environment Variables):

- `RESEND_API_KEY` — required; forms return a friendly error until set
- `ENQUIRY_TO` — recipient inbox (default `info@ewosolutions.com`)
- `ENQUIRY_FROM` — verified sender; until the domain is verified in Resend,
  the default `onboarding@resend.dev` sandbox sender only delivers to the
  Resend account owner's own address

## Production TODOs

- Replace case-study `PlaceholderImage` slots with real photography/logos.
- Swap Space Grotesk for licensed Blauer Nue.
- Verify or replace the placeholder stats on the service detail pages.
- Point ewosolutions.com DNS at Vercel after import.
