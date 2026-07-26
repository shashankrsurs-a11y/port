# R. S. Shashank Urs — Portfolio

A cinematic, editorial one-page portfolio for filmmaker and content development professional R. S. Shashank Urs, built to the design system defined in [`../design/PORTFOLIO_DESIGN_BLUEPRINT.md`](../design/PORTFOLIO_DESIGN_BLUEPRINT.md).

**Stack:** React + TypeScript, Vite, Tailwind CSS v4, Framer Motion.

## Design system

- **Color:** matte black / dark charcoal backgrounds, warm ivory text, antique gold accent — no gradients, no glassmorphism.
- **Type:** Instrument Serif for display headlines (Canela-style), Manrope for body copy, IBM Plex Sans for uppercase labels/metadata, Noto Serif Kannada for the bilingual tagline.
- **Motion:** restrained scroll reveals (fade + rise) and underline draw-ins — no bounce/spring easing, no parallax.

## Structure

Single-scroll homepage assembled in `src/App.tsx` from section components in `src/components/`:

`Hero → Introduction (+ Education) → Timeline → Films → Production → Slate → Skills → Awards (+ Research) → Contact → Footer`

All profile content lives in one place: `src/data/content.ts`.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```
