# Wireframes

## Global frame

- Desktop content width: `min(1240px, calc(100% - 64px))`; mobile: `calc(100% - 40px)`.
- The non-sticky masthead contains a centered name row, a 3px green rule, then an identity/navigation row.
- Main sections use approximately 96px desktop and 64px mobile vertical spacing.
- Optional verified project visuals use a consistent frame. When no visual exists, omit the frame entirely.

## Desktop homepage

```text
┌──────────────────────────────────────────────────────────────────────┐
│                         AKSHAJ KASHYAP                               │
╞══════════════════════════════════════════════════════════════════════╡
│ Computer Science · UCSB  Projects Experience About Contact Résumé   │
├──────────────────────────────────────────────────────────────────────┤
│ BUILDING MODELS IS ONLY HALF THE WORK.                               │
│ Deck, topic line, [Explore featured work] [View résumé]             │
├──────────────────────────────────────────────────────────────────────┤
│ FEATURED PROJECTS                                                    │
│ ┌──────────────────────────────────────────┬───────────────────────┐ │
│ │ CUDA RUNTIME — lead story (8 cols)      │ CAUSAL — 4 cols      │ │
│ │ summary / evidence / tech / links       │ evidence / links     │ │
│ └──────────────────────────────────────────┴───────────────────────┘ │
│ ┌──────────────────────────────┬───────────────────────────────────┐ │
│ │ MOLECULAR GNN                │ MATCHSTREAM                      │ │
│ └──────────────────────────────┴───────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│ ADDITIONAL PROJECTS / RULED ARCHIVE ROWS                             │
│ category | title | purpose | result | repository                    │
├──────────────────────────────────────────────────────────────────────┤
│ EXPERIENCE / RESEARCH — two-column ruled article list               │
├────────────────────────────────────┬─────────────────────────────────┤
│ ABOUT                              │ SKILLS                          │
├──────────────────────────────────────────────────────────────────────┤
│ CONTACT — “Continue the conversation.” + verified links             │
├──────────────────────────────────────────────────────────────────────┤
│ MINIMAL FOOTER                                                        │
└──────────────────────────────────────────────────────────────────────┘
```

- The hero is concise and does not repeat the masthead name.
- The first featured row creates clear 8/4-column prominence; the second row gives two projects equal weight.
- Every featured story retains category, verified summary, evidence, technology, and relevant source/documentation actions.
- Additional projects are scan-friendly archive rows, not cards.
- Experience is a ruled two-column list above 1024px. About and skills use a coordinated split rather than independent panels.

## Mobile homepage

```text
┌──────────────────────────────┐
│       AKSHAJ KASHYAP         │
╞══════════════════════════════╡
│ Computer Science       Menu  │
├──────────────────────────────┤
│ BUILDING MODELS IS ONLY      │
│ HALF THE WORK.               │
│ deck / topics                │
│ [Explore featured work]      │
│ [View résumé]                │
├──────────────────────────────┤
│ FEATURED                     │
│ lead story                   │
│ major story                  │
│ standard story               │
│ standard story               │
├──────────────────────────────┤
│ ADDITIONAL / archive rows    │
├──────────────────────────────┤
│ EXPERIENCE                   │
│ ABOUT                        │
│ SKILLS                       │
│ CONTACT                      │
│ FOOTER                       │
└──────────────────────────────┘
```

- At narrow widths, all editorial grids become one column while preserving story order and evidence.
- Archive fields stack into labeled text groups; repository actions remain visible.
- Calls to action wrap naturally and become full width only when necessary.
- The menu contains Projects, Experience, About, Contact, and Résumé; it is keyboard operable and dismissible with Escape.

## Desktop `/projects`

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Shared two-row masthead                                              │
├──────────────────────────────────────────────────────────────────────┤
│ THE PROJECT ARCHIVE                                                  │
│ Concise verified inventory introduction + return-home link           │
├──────────────────────────────────────────────────────────────────────┤
│ CUDA TRANSFORMER RUNTIME — full-width lead                           │
├───────────────────────────────────────────┬──────────────────────────┤
│ CAUSAL / MOLECULAR GNN                     │ MATCHSTREAM              │
├──────────────────────────────────────────────────────────────────────┤
│ ML/APPLIED · ML SYSTEMS/EVALUATION · SOFTWARE SYSTEMS                │
├──────────────────────────────────────────────────────────────────────┤
│ Shared minimal footer                                                 │
└──────────────────────────────────────────────────────────────────────┘
```

- `/projects` uses the same editorial language but is an inventory page, not a duplicate homepage.
- It contains the same four detailed featured projects, then every remaining verified project once under one of three static archive groups.
- Category filters and individual case-study routes are outside version one.

## Mobile `/projects`

- Shared compact masthead followed by one route H1 and introduction.
- All four featured stories stack in the same editorial order.
- Additional archive rows use labeled fields with no hover-only content.
- Long technology labels, evidence, and links wrap without horizontal scrolling.
