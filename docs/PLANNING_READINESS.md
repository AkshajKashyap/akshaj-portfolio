# Planning Readiness Report

> Superseded: the readiness decision has been acted on. This file remains historical and should not be used as the current implementation specification.

## Documents reviewed

- `docs/WEBSITE_BRIEF.md`
- `docs/SITE_STRATEGY.md`
- `docs/SITEMAP.md`
- `docs/PROJECT_CONTENT_PLAN.md`
- `docs/CONTENT_SPEC.md`
- `docs/WIREFRAME.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/ASSET_CHECKLIST.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/OPEN_QUESTIONS.md`

## Contradictions found and resolved

| Finding | Resolution |
| --- | --- |
| The brief combined Contact and Footer, while the sitemap required nine separate sections. | The brief now lists Contact and Footer separately, matching the exact sitemap order. |
| The sitemap listed `/resume.pdf`, but the asset checklist specified `public/documents/resume.pdf`, which is served as `/documents/resume.pdf`. | The sitemap route now correctly uses `/documents/resume.pdf`. |
| The brief called for a “Resume download,” while later planning specified opening the PDF in a new tab. | V1 behavior is now consistently `Resume (PDF)` opening `/documents/resume.pdf` in a new tab. |

No unsupported links, metrics, experience details, project results, or personal claims were added. The featured set is consistently Causal Uplift Experimentation Ops, Molecular GNN Property Ops, LLM Posttraining Ops, and Plant Disease VisionOps. The planned layout is mobile-first, with the same single-column mobile behavior, 12-column desktop frame, homepage additional-project section, and dedicated `/projects` page across documents.

## Remaining blocking inputs

- Approved project summaries, scope, technologies, technical decisions, evidence/results with context, and public URLs.
- Decision on which additional projects are publishable at launch.
- Verified experience/research entries or confirmation to omit that section.
- Verified skill groups, public email, GitHub URL, and optional LinkedIn URL.
- Approved resume PDF, project visuals/captions/alt text, Open Graph image, favicon decision, and hosting/deployment authorization.

## Non-blocking placeholders

- Final hero-subheading approval.
- Additional-project count and archive/exclusion decisions.
- LinkedIn inclusion.
- Profile-image decision (the recommended v1 default is to omit it).
- Custom production domain.

## Final version-one scope

- Static Next.js App Router + TypeScript + Tailwind site with local structured data.
- Homepage in this exact order: Navigation, Hero, Featured Projects, Additional Projects, Experience and Research, About, Skills, Contact, Footer.
- Four detailed featured projects, additional projects visible on the homepage, and a dedicated `/projects` inventory route.
- Responsive, accessible dark-first presentation with a resume PDF and only verified external/contact links.
- No individual project pages in v1.

## Explicitly deferred

- Individual project case-study pages, CMS, database, authentication, contact backend, analytics, dark mode, animation libraries, project filters, blog, and other integrations.

## Readiness decision

Structural implementation **can begin now** without inventing content. The first eligible phase is **Phase 2: Global layout and design tokens**; Phase 3 navigation and the `/projects`/homepage shells may follow with conditional rendering. Data population, public project cards, experience, skills, contact, assets, final metadata, and deployment remain blocked by the verified inputs above.
