# Personal Content Verification

Source priority was applied as follows: `/home/akshaj/Career/resume/current.tex` was used for identity, education, links, experience, and skills; the matching PDF was used only for resume delivery validation. Repository sources remain the basis for project-specific claims.

| Claim | Website location | Source file | Status | Wording transformation |
| --- | --- | --- | --- | --- |
| Name: Akshaj Kashyap | Header, footer, About, metadata | `current.tex` heading | Verified | None. |
| UCSB computer science student | Hero, footer | `current.tex` education entry | Verified | “University of California, Santa Barbara” is shortened to “UCSB.” |
| B.S. Computer Science, expected Dec. 2028 | About | `current.tex` education entry | Verified | “Expected Dec. 2028” is expanded to “expected December 2028.” |
| Applied ML/software systems focus | Hero, About, Contact | `current.tex` projects/experience/skills; verified project inventory | Verified synthesis | Condenses supported work areas; does not assign a professional title. |
| PLAXCO Lab role, date, location, 44 datasets, and SACMES work | Experience | `current.tex` PLAXCO Lab entry | Verified | One resume bullet becomes two scan-friendly sentences. |
| Techions role, date, location, CV pipeline, and 27% accuracy improvement | Experience | `current.tex` Techions entry | Verified | One resume bullet becomes two scan-friendly sentences. |
| Handshake AI Fellowship role, dates, 20+ evaluations, and structured justifications | Experience | `current.tex` Handshake entry | Verified | One resume bullet becomes two scan-friendly sentences. |
| PromptShop role, dates, five workflows, and 30+ test cases | Experience | `current.tex` PromptShop entry | Verified | One resume bullet becomes two scan-friendly sentences. |
| Email: `akshajkashyap@gmail.com` | Contact, footer | `current.tex` heading | Verified | Used as a `mailto:` destination; not repeated as plain text in every location. |
| LinkedIn: `linkedin.com/in/akshajkashyap` | Contact, footer | `current.tex` heading | Verified | Uses the explicit HTTPS destination from the resume. |
| GitHub: `github.com/AkshajKashyap` | Contact, footer | `current.tex` heading; audited Git remotes | Verified | Uses the explicit HTTPS destination. |
| Resume path: `/documents/resume.pdf` | Header, hero, Contact | `current.pdf`, copied byte-for-byte to `public/documents/resume.pdf` | Verified | Link label is “View resume” and opens in a new tab. |

## Deliberate omissions

- GPA, coursework, phone number, and leadership details are verified but omitted from the homepage to keep the identity layer concise.
- No personal location, graduation claim beyond the expected date, employer claim beyond the selected experience entries, or 2027 internship wording is added.
- No profile image, Open Graph image, or new favicon is claimed because no approved asset source was found.
