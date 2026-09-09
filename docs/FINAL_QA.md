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
