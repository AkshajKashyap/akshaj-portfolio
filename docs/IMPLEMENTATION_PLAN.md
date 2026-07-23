# Implementation Plan

## Delivery boundaries

Version one is a static Next.js App Router, TypeScript, and Tailwind site backed by local structured data. It has a homepage and `/projects`, four detailed featured projects, additional projects on the homepage, and no individual project pages. Build mobile-first and use no new dependency unless a later verified requirement cannot be met with the existing stack.

| Status | Meaning |
| --- | --- |
| Can begin immediately | Does not require an unverified personal, project, or asset claim. |
| Blocked by verified content | Build the structure, but do not publish or hard-code the missing content. |
| Optional later enhancement | Explicitly out of version one. |

## Phase 1 — Verified content and structured data

- **Goal:** Define local TypeScript data shapes and populate only verified content.
- **Status:** Structure can begin immediately; populated public cards are blocked by verified project, experience, skill, and link details.
- **Likely files:** modify `src/types/project.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`; optionally add focused local types/data modules under `src/data/`.
- **Inputs/dependencies:** project inventory checklist, verified summaries, technologies, results with context, URLs, experience entries, skill list.
- **Acceptance criteria:** every rendered project has a title, placement, verified summary, technologies, and only valid available links; optional fields are safely omitted; featured ordering is exactly Causal Uplift Experimentation Ops, Molecular GNN Property Ops, LLM Posttraining Ops, Plant Disease VisionOps unless Akshaj changes it; no fabricated metrics or fallback links.
- **Risks:** treating titles as proof of deployment; data types that force unavailable URLs/results to be invented.
- **Must not do prematurely:** enter placeholder public URLs, claim results, publish empty experience cards, or add a CMS/database.

## Phase 2 — Global layout and design tokens

- **Goal:** Establish the light-first foundation, typography, spacing, shared container, and reusable low-level styles from the design system.
- **Status:** Can begin immediately.
- **Likely files:** modify `src/app/globals.css`, `src/app/layout.tsx`; create shared components such as `src/components/site-shell.tsx`, `src/components/container.tsx`, and `src/components/ui/` only if reuse is clear.
- **Inputs/dependencies:** `docs/DESIGN_SYSTEM.md`, existing Geist font setup.
- **Acceptance criteria:** design tokens match documented hex values; content width, gutters, spacing scale, type scale, borders, focus styles, and reduced-motion behavior are implemented in Tailwind-compatible utilities/CSS; no dark-mode UI is introduced.
- **Risks:** duplicating tokens across components; styling that works only at desktop widths.
- **Must not do prematurely:** add a theme switcher, animation library, gradients, large shadows, or an unrelated component library.

## Phase 3 — Navigation and hero

- **Goal:** Build accessible shared navigation and a concise homepage introduction.
- **Status:** Navigation structure can begin immediately; the final hero copy and Resume CTA are blocked by verified content/PDF.
- **Likely files:** create `src/components/site-header.tsx`, `src/components/mobile-nav.tsx`, `src/components/hero.tsx`; modify `src/app/page.tsx`.
- **Inputs/dependencies:** sitemap anchors, hero copy, resume file decision.
- **Acceptance criteria:** desktop links and mobile menu match the sitemap; keyboard focus, Escape close, focus return, and visible expanded state work; mobile layout is usable at 320px+; `View projects` works; Resume is absent until `/documents/resume.pdf` exists, then opens in a new tab as specified.
- **Risks:** client-side state leaking into otherwise static components; inaccessible menu behavior.
- **Must not do prematurely:** render an empty Resume button, add a contact form/backend, or make unsupported personal claims in the hero.

## Phase 4 — Featured projects

- **Goal:** Present the four selected projects as detailed, evidence-led cards.
- **Status:** Card component and responsive layout can begin immediately; final card content and visuals are blocked by verified project inputs.
- **Likely files:** create `src/components/project-card.tsx`, possibly `src/components/project-links.tsx`; modify `src/app/page.tsx` and project data/types.
- **Inputs/dependencies:** all required project fields, verified placement/order, optional images/diagrams and alt text.
- **Acceptance criteria:** exactly four featured cards on the homepage; each supports category, title, summary, problem/build detail, documented evidence when supplied, technologies, and only available links; text remains before visual in DOM order; cards stack correctly on mobile.
- **Risks:** cards become too dense for the proposed layout; screenshots communicate nothing useful.
- **Must not do prematurely:** invent result statements, use stock imagery, expose private material, or create `/projects/[slug]` pages.

## Phase 5 — Additional projects and `/projects`

- **Goal:** Make the remaining publishable work accessible without diluting the homepage.
- **Status:** Page shell and card variants can begin immediately; individual entries are blocked by verified summaries, technologies, and destinations.
- **Likely files:** create `src/app/projects/page.tsx`, optionally `src/components/project-grid.tsx`; modify homepage and local project data.
- **Inputs/dependencies:** additional-project publication decisions and verified fields.
- **Acceptance criteria:** homepage shows a compact additional-project section and a working `/projects` link; `/projects` presents featured projects first and additional projects second; no filter is added for the initial inventory; mobile shows one column and desktop follows the documented grid behavior.
- **Risks:** duplicate content drifts between homepage and `/projects`; an additional project has no valid destination.
- **Must not do prematurely:** create individual pages, add client-side filtering, or display unpublished/empty projects.

## Phase 6 — Experience, about, skills, and contact

- **Goal:** Add concise supporting context after the projects.
- **Status:** Section components can begin immediately; rendered experience, skill, and contact content is blocked by verified inputs. About may use only the verified UCSB CS statement plus approved wording.
- **Likely files:** create `src/components/experience-section.tsx`, `src/components/about-section.tsx`, `src/components/skills-section.tsx`, `src/components/contact-section.tsx`, `src/components/site-footer.tsx`; modify homepage and local data.
- **Inputs/dependencies:** verified experience entries, skills, email, GitHub/LinkedIn URLs, approved About copy.
- **Acceptance criteria:** empty experience is omitted; skills are grouped without proficiency bars; contact uses a verified `mailto:` link; footer renders only supplied destinations; each section has a unique accessible anchor and heading.
- **Risks:** generic copy or a crowded list of tools undermines credibility.
- **Must not do prematurely:** create a contact backend, publish social placeholders, or infer experience/research affiliations.

## Phase 7 — Metadata, accessibility, and performance

- **Goal:** Make the static site discoverable, accessible, and efficient without expanding scope.
- **Status:** Baseline structure can begin immediately; final metadata and social image are blocked by approved identity/assets.
- **Likely files:** modify `src/app/layout.tsx`; create route metadata in `src/app/projects/page.tsx` and an Open Graph image implementation only after the asset decision.
- **Inputs/dependencies:** final title/description, canonical production URL if used, favicon and Open Graph asset decision.
- **Acceptance criteria:** one H1 per route; semantic landmarks; keyboard-only navigation; AA contrast; descriptive links/alt text; no hover-only content; responsive images sized appropriately; route metadata accurately describes verified content; no avoidable layout shift.
- **Risks:** metadata accidentally claims unverified scope; visual images harm performance.
- **Must not do prematurely:** add analytics, third-party trackers, a sitemap/robots policy requiring a production domain, or vague SEO claims.

## Phase 8 — Asset integration

- **Goal:** Integrate approved resume, project visuals, Open Graph image, and favicon safely.
- **Status:** Blocked by supplied and approved assets.
- **Likely files:** add assets under `public/documents/` and `public/images/projects/`; modify `src/app/favicon.ico` only with an approved replacement; modify relevant data/components.
- **Inputs/dependencies:** asset checklist, public-safe files, image captions/alt text, resume behavior confirmation.
- **Acceptance criteria:** exact asset paths resolve; images are optimized and readable; resume opens in a new tab; no starter Next.js graphics remain in portfolio UI; all assets have appropriate rights and no sensitive content.
- **Risks:** private data in screenshots, poor image cropping, or broken filenames.
- **Must not do prematurely:** generate a portrait, use a generic stock image, or replace identity assets without approval.

## Phase 9 — Responsive testing

- **Goal:** Verify the mobile-first implementation across documented breakpoints.
- **Status:** Can begin once phases 2–6 have a renderable structural implementation; content-specific checks remain blocked until content arrives.
- **Likely files:** source fixes only where tests expose issues; no new dependencies required.
- **Inputs/dependencies:** completed structural pages and representative approved/temporary non-public development content.
- **Acceptance criteria:** checks at 320px, 375px, 768px, 1024px, and 1440px; no horizontal scroll; all controls meet 44px target; cards, navigation, CTAs, and links remain usable; text wraps without clipping; zoom to 200% remains functional.
- **Risks:** only checking a large desktop viewport; data-dependent overflow.
- **Must not do prematurely:** treat placeholder text as final content validation or introduce a visual-regression service.

## Phase 10 — Final QA and deployment

- **Goal:** Validate the final public site and deploy the static Next.js app.
- **Status:** Blocked until verified content, links, assets, and phases 1–9 are complete.
- **Likely files:** final targeted corrections in existing source/data files; deployment configuration only if required by the chosen host.
- **Inputs/dependencies:** complete content, asset and link verification, production host/project access if deployment is requested.
- **Acceptance criteria:** lint/build pass; all links and anchors work; resume and external links follow documented behavior; metadata/OG/favicon verified; manual keyboard and responsive checks complete; no starter UI/assets, placeholders, empty sections, or unsupported claims; Vercel-ready static deployment succeeds.
- **Risks:** production-only URL/path issues and stale placeholders.
- **Must not do prematurely:** commit/push/deploy without authorization, add authentication, a database, a CMS, analytics, dark mode, or animation libraries.

## Deferred enhancements

- Individual `/projects/[slug]` case-study pages.
- A CMS, database, authentication, contact backend, analytics, dark mode, animation library, project filters, blog, or additional integrations.
- Reconsider only after v1 content is verified and the need is explicit.
