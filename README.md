# Felix Garcia — Portfolio

Personal site and project index of **Felix Rafael Garcia Martinez**, full-stack software developer.

Built with [Astro](https://astro.build) and TypeScript as a fully static, bilingual site (English / Spanish) that ships no client-side JavaScript.

## Highlights

- **Static and fast**: plain HTML and CSS at runtime, no UI framework.
- **Bilingual**: English at `/`, Spanish at `/es/`, with `hreflang` alternates for SEO.
- **Content-driven**: profile data lives in one typed file; each project is a Markdown file validated against a schema at build time.
- **Accessible**: light and dark themes from system preference, visible focus states, reduced-motion support.
- **Documented design system**: color, typography, spacing and component rules in [`docs/DESIGN.md`](docs/DESIGN.md).
- **AI-assisted workflow**: [`CLAUDE.md`](CLAUDE.md) gives Claude Code the project's goals, scope and conventions.

## Tech stack

| | |
|---|---|
| Framework | Astro 7 |
| Language | TypeScript (strict) |
| Styling | Hand-written CSS with design tokens |
| Content | Astro content collections + Zod schema |
| Package manager | pnpm |
| Runtime | Node.js 24 |
| Hosting | Vercel |

## Getting started

Requires Node.js 24 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev       # http://localhost:4321
```

| Command | Description |
|---|---|
| `pnpm dev` | Start the local dev server with live reload |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Serve the production build locally |

## Project structure

```
src/
  i18n/profile.ts        Profile content and UI strings (en / es)
  components/Home.astro  Page sections
  layouts/Base.astro     Document head, SEO, navigation, footer
  content.config.ts      Project schema
  content/projects/      One Markdown file per project
  styles/global.css      Design tokens and base styles
  pages/                 Routes: / and /es/
docs/
  DESIGN.md              Design guidelines
```

## Adding a project

1. Copy `src/content/projects/_plantilla.md` to `src/content/projects/<slug>.md`. Files starting with `_` are ignored.
2. Fill in the front matter: title, summaries in both languages, stack, links, date, status (`live`, `in-progress` or `archived`) and `featured`.
3. Run `pnpm build`. The build fails if a required field is missing or invalid.

## Deployment

Every push to `main` deploys automatically to Vercel. The production URL is set in `site` inside `astro.config.mjs`.

## Contact

- Email: [felixxrafaell@gmail.com](mailto:felixxrafaell@gmail.com)
- LinkedIn: [felix-rafael-garcia-martinez](https://www.linkedin.com/in/felix-rafael-garcia-martinez/)