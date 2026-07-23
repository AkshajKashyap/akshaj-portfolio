# Akshaj Kashyap Portfolio

A static, text-first portfolio for Akshaj Kashyap, a UCSB computer science student. It presents verified machine-learning and software projects, selected experience, and professional contact links.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

There is no backend, CMS, database, authentication, analytics, or contact form.

## Local setup

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run start
```

## Routes

- `/` — portfolio homepage
- `/projects` — full project inventory
- `/documents/resume.pdf` — verified resume PDF

## Content updates

- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Skills: `src/data/skills.ts`
- Personal links and resume path: `src/data/profile.ts`
- Resume asset: `public/documents/resume.pdf`

Keep public claims tied to the source inventory and verification documents in `docs/`. Vercel is the recommended deployment target because the site is a static Next.js application.
