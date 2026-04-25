# ScalePilot Migration Status: Nuxt 3 to Next.js

This document tracks the progress of migrating the ScalePilot frontend from Nuxt 3 to Next.js.

## 🟢 Completed
- [x] **Global CSS & Theme**
  - Transferred `main.css` to `app/globals.css`.
  - Ported Tailwind CSS v4 `@theme` configuration.
  - Aligned font variables with `next/font` (Instrument Sans, Geist Mono).
  - Ported custom utilities (diagonal-lines, dotted-background, etc.).
- [x] **Public Assets**
  - Moved all images/icons from `public/img/` (36+ files including new feature tabs and user avatars).
  - Transferred `favicon.ico` and `robots.txt`.

## 🟡 In Progress
- [ ] **Core Layouts**
  - [ ] Port `app/layouts/default.vue` logic to `app/layout.tsx`.
- [ ] **Global Components**
  - [ ] `TheNav.vue` (Navigation/Mega Menu)
  - [ ] `TheFooter.vue`
  - [ ] `ScalePilotLogo.vue`

## ⚪ Pending
### Components
- [x] `VisualGrid.vue` (used in Index)
- [x] `FeatHeroImage.vue` (used in Index)
- [x] `BlockDiagonal.vue` (used in Index, Pricing)
- [x] `FlagAccent.vue` (used in Index)
- [x] `TitleAccentTriangle.vue` (used in Index)
- [x] `FeatProblems.vue` (used in Index)
- [x] `FeatSolution.vue` (used in Index)
- [x] `FeatTestimonials.vue` (used in Index)
- [x] `CtaGeneral.vue` (used in Index, Pricing, Privacy, TOS)
- [x] `BaseTooltip.vue`
- [x] `CtaStartFree.vue`
- [x] `ScalePilotGiant.vue`
- [x] Icons (`IconClose.vue`, `IconGlobe.vue`, `IconWarning.vue`, `IconInfo.vue`, `IconYes.vue`, `IconNo.vue`, etc.)

### Pages
- [x] `index.vue` (Homepage) -> `app/(marketing)/page.tsx`
- [x] `pricing.vue` (Pricing) -> `app/(marketing)/pricing/page.tsx`
- [x] `privacy-policy.vue` (Privacy) -> `app/(marketing)/privacy-policy/page.tsx`
- [x] `terms-of-service.vue` (TOS) -> `app/(marketing)/terms-of-service/page.tsx`
- [x] `waitlist.vue` (Waitlist) -> `app/waitlist/page.tsx`

## 📝 Notes
- **Styling**: Using Tailwind CSS v4 in the destination.
- **Animations**: Using `framer-motion` to replicate Vue transitions.
- **Assets**: All images from `/assets/img` in Nuxt are moved to `/public/img` in Next.js.
- **Routing**: Implemented Route Groups (`(marketing)`) to handle shared layouts (Nav/Footer) while allowing blank layouts for pages like Waitlist.
- **Config**: Converted `nuxt.config.ts` settings (Metadata) to Next.js equivalents. Next.js uses default port `3000` (Nuxt uses `3005`).
