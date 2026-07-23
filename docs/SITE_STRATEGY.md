# Site Strategy

## Positioning

Akshaj Kashyap is a UCSB computer science student presenting a concise body of technical project work for software engineering, machine learning, data science, and research internship reviewers. The site should make the work inspectable: clear problem statements, implementation choices, evidence, and direct links to source material.

## Audiences and their goals

| Audience | Primary question | What they need quickly |
| --- | --- | --- |
| Software engineering recruiter | Is there credible engineering work here? | Project scope, stack, repository, shipped/demo evidence |
| ML/data-science recruiter | Has the candidate built and evaluated ML systems? | Task, data/evaluation context, model decisions, results |
| Hiring manager or engineer | Can this person explain technical trade-offs? | Concise technical detail, architecture, documentation, code |
| Research mentor | Is the work rigorous and relevant? | Problem framing, methodology, evaluation, research links |
| Startup collaborator | What can this person contribute now? | Practical builds, areas of interest, contact path |

## Website goals

- Establish technical credibility in a first scan and enable deeper verification.
- Route visitors to featured project evidence, the full project inventory, resume, and contact details.
- Represent the breadth of software engineering and ML work without claiming depth that is not documented.
- Work cleanly on mobile and remain maintainable as project data is added.

## Ten-second message

“Akshaj Kashyap is a UCSB CS student with a focused portfolio of software and ML projects, presented with enough evidence to inspect the work.”

## Lasting impression

The visitor should remember a technically grounded candidate whose strongest projects are organized, specific, and easy to verify.

## Emphasize

- Four verified, polished featured projects once their details are supplied.
- Problem → build → technical decision → evidence/result on every strong project.
- Direct GitHub, demo, documentation, resume, and contact paths where available.
- Clear role-relevant breadth across ML, data, research, and software engineering.
- Honest scope labels: prototype, coursework, independent project, research work, or deployed product (only after verification).

## Intentionally omit

- Unverified metrics, employer claims, research affiliations, links, awards, and credentials.
- Generic self-descriptions and adjective-heavy marketing copy.
- Skill bars, long tool dumps, decorative visual effects, testimonials, blog feeds, and timeline entries without useful evidence.
- Individual project detail pages in v1; external documentation/repositories and the `/projects` inventory are sufficient until content volume warrants them.

## Success criteria

- A reviewer can reach a featured project, its evidence, and contact/resume in one or two actions.
- Every published project has an accurate title, concise summary, technologies, placement rationale, and at least one evidence link or an explicit “link unavailable” state.
- No empty or misleading CTAs appear; unavailable links are not rendered.
- The homepage remains scannable without reading the full projects page.
- Keyboard, screen-reader, mobile, and reduced-motion use are supported.
- The visual system feels restrained and deliberate rather than template-like.

## Credibility risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Empty project data is presented as finished work | Publish only verified project fields; use internal placeholders during development. |
| Metrics lack context | Pair each metric with dataset, baseline, split, timeframe, and evaluation method where applicable. |
| Overclaiming deployment or research impact | Use precise labels and link primary evidence. |
| Too many shallow projects dilute the best work | Feature only projects meeting the selection rubric; archive or exclude the rest. |
| Screenshots are decorative or unreadable | Use one purposeful visual per featured project, captioned with what it proves. |
| Contact/resume links fail | Validate all public links and PDF download before launch. |
