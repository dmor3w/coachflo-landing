# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

No test runner or linter is configured in this project.

## Architecture

Next.js 15 App Router landing page for CoachFlo — a SaaS platform for online fitness trainers. The UI is in Russian.

**Entry point:** `app/page.tsx` — a single `'use client'` page that composes all sections and manages two modal states: `trialOpen` and `demoOpen`. These booleans are passed as callbacks (`onTrial`, `onDemo`) to sections that need CTA buttons. A `heroEmail` state captures email from Hero and pre-fills the trial LeadForm.

**Component layout:**
- `components/layout/` — `Header` with sticky nav and CTA buttons
- `components/sections/` — landing page sections rendered in order: `Hero`, `StatsBar`, `AudienceBlocks`, `TrainerModules`, `FeatureGrid`, `ClientSlider`, `InfiniteCarousel`, `Quiz`, `Pricing`, `FinalCTA`
- `components/ui/` — `Modal` (overlay wrapper), `LeadForm` (react-hook-form + zod validation, `mode: 'trial' | 'demo'`), `DecorativeBg`

**LeadForm** currently logs to console on submit — no real backend integration exists yet.

**Footer** is inline in `app/page.tsx`, not extracted into a component.

## Key Dependencies

- `framer-motion` — animations across sections
- `react-hook-form` + `@hookform/resolvers` + `zod` — form handling and validation in `LeadForm`
- `lucide-react` — icons

## Design System (Tailwind)

Light theme with custom tokens defined in `tailwind.config.ts`:

| Token | Value |
|---|---|
| `bg` / `bg-2` / `bg-3` | `#FFFFFF` / `#F8FAFC` / `#F1F5F9` |
| `accent` | `#8B5CF6` (purple) |
| `accent-light` / `accent-dark` | `#A78BFA` / `#7C3AED` |
| `t-primary` / `t-secondary` | `#0F172A` / `#64748B` |
| `border` | `#E2E8F0` |

Font: Inter (Latin + Cyrillic subsets) via `next/font/google`, exposed as `--font-inter`.

Marquee animations (`animate-marquee`, `animate-marquee-reverse`) are defined in the Tailwind config for `InfiniteCarousel`.
