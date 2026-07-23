# Wireframes

## Global frame

- Desktop content width: `min(1120px, calc(100% - 64px))`; mobile: `calc(100% - 40px)`.
- Sticky header height: 64px desktop / 60px mobile. Main sections use 96px desktop and 64px mobile vertical spacing.
- All project visuals use a consistent 16:9 frame. A missing visual should use a restrained labeled placeholder during development, never a stock image.

## Desktop homepage

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Akshaj Kashyap    Projects  Experience  About  Contact     Resume   │  64
├──────────────────────────────────────────────────────────────────────┤
│                         HERO (single column, left aligned)           │
│  Eyebrow / name                                                       │
│  Headline (max 720px)                                                 │
│  Supporting text (max 620px)                                         │
│  [View projects]  [Resume (PDF)]                                     │  360–440
├──────────────────────────────────────────────────────────────────────┤
│ FEATURED PROJECTS                                                     │
│  [wide card: text 7 cols | visual 5 cols]                            │
│  [wide card: visual 5 cols | text 7 cols]                            │  repeat ×4
│  Each: category, title, summary, evidence, tags, links               │
├──────────────────────────────────────────────────────────────────────┤
│ ADDITIONAL PROJECTS                                                   │
│  [compact card] [compact card] [compact card]                        │
│  [compact card] [compact card] [compact card]  [View all projects]  │
├──────────────────────────────────────────────────────────────────────┤
│ EXPERIENCE AND RESEARCH (single column entries, optional)            │
├──────────────────────────────┬───────────────────────────────────────┤
│ ABOUT (7 cols)               │ SKILLS (5 cols; grouped text lists)  │
├──────────────────────────────────────────────────────────────────────┤
│ CONTACT: brief statement + primary email/link                          │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                │
└──────────────────────────────────────────────────────────────────────┘
```

- Hero aligns to the content left edge, vertically balanced but not viewport-filling on short screens. CTA buttons sit beneath copy, left aligned.
- Featured cards alternate visual position for rhythm but preserve text before visual in DOM order. Card padding 28–32px; 24px internal gap.
- Additional-project grid uses three equal columns above 1024px, with cards of equal visual weight and no images unless meaningful.
- Experience entries use a left date/label rail (about 180px) and right content column. Omit if no verified entries.
- About/skills use a 7/5 column split, aligned at top. Contact has a full-width thin top border and a single clear email CTA.

## Mobile homepage

```text
┌──────────────────────────────┐
│ Akshaj Kashyap   Projects  ☰ │
├──────────────────────────────┤
│ HERO                         │
│ headline                     │
│ supporting copy              │
│ [View projects]              │
│ [Resume (PDF)]               │
├──────────────────────────────┤
│ FEATURED                     │
│ [visual]                     │
│ category / title / copy      │
│ evidence / tags / links      │  repeat ×4
├──────────────────────────────┤
│ ADDITIONAL                   │
│ [compact card]               │  one column
│ [View all projects]          │
├──────────────────────────────┤
│ EXPERIENCE (optional)        │
│ ABOUT                        │
│ SKILLS                       │
│ CONTACT                      │
│ FOOTER                       │
└──────────────────────────────┘
```

- At 767px and below, all content is one column; 20px side gutters and 64px section gaps.
- Featured visual appears above content; cards have 20px padding and 16px gaps. Links wrap onto separate lines when needed.
- CTAs stack full width only below 420px; otherwise remain content-width buttons.
- The menu panel replaces nonessential header links; it is not a second permanent navigation row.

## Desktop `/projects`

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Shared navigation                                                     │
├──────────────────────────────────────────────────────────────────────┤
│ PROJECTS: title + 1–2 sentence inventory introduction                │
│ Featured projects: 2-column cards (each visual above/alongside text) │
│ Additional projects: 3-column compact-card grid                      │
│ Optional archive: text list only, only when it exists                │
│ Shared contact/footer                                                 │
└──────────────────────────────────────────────────────────────────────┘
```

- Intro max width 680px. Use 48px gap before featured inventory.
- Featured grid is two columns with cards aligned to the top; do not force equal heights when evidence length differs.
- Category filters are omitted in v1 unless the supplied inventory grows beyond a simple scan.

## Mobile `/projects`

- Shared mobile navigation, then single-column title/introduction.
- Featured cards stack visual then content; additional cards stack one per row.
- Preserve the same card information hierarchy and link order as desktop; no hover-only information.
