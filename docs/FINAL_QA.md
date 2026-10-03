# Final QA

Completed September 8, 2026 against the final local implementation.

## Automated checks

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and static generation for `/` and `/projects`.
- `git diff --check`: passed.
- No package or major dependency was added; Playwright and Chromium were downloaded only under `/tmp` for QA.

## Rendered browser checks

The final homepage was rendered in headless Chromium at 320, 375, 768, 1024, and 1440 CSS pixels. The final `/projects` page was rendered at 320px, and desktop/mobile screenshots were reviewed.

- Horizontal overflow was 0px at every requested homepage width and on `/projects` at 320px.
- The featured sequence was CUDA Transformer Runtime, Causal Uplift Experimentation Ops, Molecular GNN Property Ops, and MatchStream at every width.
- Homepage additional work contained exactly four entries in the approved order.
- `/projects` contained the same four featured projects followed by three archive groups; no featured project was repeated below.
- The 320px and 375px mobile menu exposed all five approved actions. Escape closed the menu and returned focus to its trigger.
- Keyboard traversal produced the global visible 2px solid focus outline.
- Reduced-motion emulation produced automatic scrolling and effectively zero-duration transitions.
- The `work`, `experience`, `about`, `skills`, and `contact` targets were present; `/projects` rendered successfully.
- The résumé resolved at `/documents/resume.pdf`.

## Visual and accessibility checks

- The warm-paper, racing-green, serif/sans/mono editorial system and asymmetric 8/4 featured composition remain intact.
- Exactly two project visuals render: the CUDA architecture diagram and the MatchStream dashboard crop.
- Both render in responsive 16:9 frames at 278px wide on a 320px viewport and scale cleanly on larger screens.
- Each visual has the approved meaningful alt text; all key evidence also remains available as text.
- CUDA remains the lead without imagery spreading across the rest of the project inventory.
- No stock imagery, generic AI art, gradient, dark mode, animation library, filter, CMS, backend, analytics, or project-detail route was introduced.

## Claims and links

- CUDA correctness and performance, causal synthetic policy evidence, Molecular GNN repeated-seed results, MatchStream local replay/throughput, and the additional-project metrics retain their required context.
- The causal result says `synthetic` and requires real prospective validation.
- MatchStream throughput says `local`; CUDA names the RTX 3050 Laptop GPU and makes no production-engine comparison.
- Every rendered GitHub repository and documentation URL returned HTTP 200 during QA.
- Agent Reliability Bench remains a verified archive entry, but its unreachable/private GitHub destination is intentionally not rendered.
- No demo link or Movie Recommender entry is shown because neither had a verified public source.

## Remaining limitations

- Browser QA is local and headless rather than a cross-browser device lab.
- Agent Reliability Bench has no public source action until its repository becomes publicly reachable.
- Open Graph art, canonical-domain work, analytics, and deployment remain intentionally out of scope.

## Portfolio refresh QA, September 13, 2026

This section records the approved content and hierarchy refresh without replacing the September 8 historical results above.

### Automated checks

- `npm run lint`: passed.
- `npm run build`: passed with TypeScript checking and static generation for `/` and `/projects`.
- `git diff --check`: passed.
- Public-facing em-dash search across `src` and `public`: no matches.
- No package or project dependency was added. Playwright and Chromium were installed only under `/tmp` for QA.

### Rendered browser checks

- The homepage and `/projects` were rendered in headless Chromium at 375px, 768px, and 1440px.
- Horizontal overflow measured 0px on both routes at all three widths.
- The featured sequence is CUDA Transformer Runtime, Causal Uplift Experimentation, Molecular Property Prediction with GNNs, and BlockScope.
- Homepage additional work is C++ Matching Engine, Gridiron Spatial Intelligence, Plant Disease Classification, and LLM Posttraining Ops.
- The rendered `/projects` sequence follows the approved priority order through Valorant Quant Research. It contains 13 entries because Graph Kernel SVM remains evidence-gated.
- MatchStream is absent from the homepage and is the first archive-only project on `/projects`.
- Long project titles wrap without clipping; archive rows retain their established visual language and mobile stacking.
- The wide archive-row grid was made flexible at the `xl` breakpoint after QA found and then eliminated a 95px overflow at 1440px.
- The homepage renders one project visual, the existing CUDA architecture diagram. The MatchStream asset remains untouched but is not rendered in its archive row.
- The résumé link remains `/documents/resume.pdf`, and the PDF was not modified.

### Claims and links

- Every rendered project repository and documentation URL returned HTTP 200 during QA.
- BlockScope's public `v0.1.0` annotated tag and GitHub-recognized MIT license were verified. GitHub reports no formal release, and the repository README/changelog still contain contradictory no-license wording. The site therefore calls the work a `v0.1.0` alpha and makes no license or open-source claim.
- BlockScope copy preserves the small/nonrepresentative corpus boundary and does not claim confirmed attacks, intent, wallet loss, realized profit, or production deployment.
- Causal Uplift leads with methodology and synthetic measured lift; promotion remains on hold pending real randomized validation.
- Matching Engine's 14× figure is tied to one WSL2/ext4 host, 16 clients, and the same-run cap-1 control.
- LLM Posttraining states that tiny fixtures and one-step SFT/DPO validate infrastructure rather than model-quality improvement.
- Graph Kernel SVM is retained in structured data with nonquantitative copy and `portfolioVisible: false`. Its public repository still lacks the generated reports supporting the previously shown macro-F1 values.
- Scanpy PR #4364 was open and unmerged during QA and is not represented on the site.

## Recruiting-positioning QA, October 2, 2026

- `npm run lint`, `npm run build`, and `git diff --check` passed.
- The production server returned HTTP 200 for `/`, `/projects`, and `/documents/resume.pdf`.
- Rendered HTML contained the second-year identity line, Summer 2027 availability, ERSP admission, expected June 2028 B.S. completion, and corrected PLAXCO wording.
- The résumé URL remains `/documents/resume.pdf`; the served PDF matched the checked-in file byte-for-byte, and the PDF was not modified.
- Desktop and mobile visual inspection could not be completed because no browser executable or browser automation package was available in the workspace. The production build and static rendering completed successfully.

## Sherwood affiliation and résumé refresh QA, October 3, 2026

- `npm run lint`, `npm run build`, and `git diff --check` passed.
- The production server returned HTTP 200 for `/`, `/projects`, and `/documents/resume.pdf`.
- Rendered HTML placed Sherwood Lab first in Experience and contained the approved organization, role, project scope, dates, location, research focus, and advisor wording without completed-contribution or result claims.
- The project archive retained the established featured-project hierarchy.
- `/home/akshaj/Career/resume/current.pdf`, `public/documents/resume.pdf`, and the PDF served from `/documents/resume.pdf` matched byte-for-byte with SHA-256 `464934e51e61f7d3890b8dad975bc3efe14147ebe47aa97e03d389f96b1b5197`.
- Desktop and mobile visual inspection could not be completed because no browser executable or browser automation package was available in the workspace. The production build and static rendering completed successfully.
