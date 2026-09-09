# website_flo-erpnext — Flo Works ERPNext site (Astro)

Thai-language marketing site for Flo Works Limited: ERPNext implementation for Thai
businesses. Minimal, warm-paper + deep-green look. English is fine for code/commits;
user-facing copy must be Thai.

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build → ./dist/
npm run preview   # preview the production build
```

## ⛔ Workflow rule (owner instruction, Sep 2026)

**NEVER push directly to `main`.** All changes — including this file, content edits,
deps, config — go through a PR:

1. `git checkout -b <topic>` (e.g. `feat/add-services-page`, `fix/typo-home`)
2. commit with a clear message
3. `git push -u origin <topic>`
4. Open a PR (see auth note below) and wait for the owner to review/merge.
   Do NOT self-merge.

Auth note: pushes use the SSH key `/opt/data/home/.ssh/id_ed25519`
(`git config core.sshCommand` is set in this repo). The `gh` CLI is NOT logged in on
this machine, so after pushing a branch give the owner the PR compare URL:
`https://github.com/kittiu/website_flo-erpnext/compare/main...<branch>?expand=1`

## Content & design conventions

- **Palette** lives in `src/styles/global.css` `:root`:
  `--bg #faf9f6` (warm paper), `--fg #1f1d1a`, `--line #e7e3da`,
  `--accent #1f6b4f` (deep green — use sparingly: eyebrows, inline links, button hover).
  Keep it flat/minimal — no tinted bands or shadows by owner request.
- **Domain placeholders** — search for `flo-erpnext.example.com` across
  `astro.config.mjs`, `public/robots.txt`, `public/llms.txt`, `src/layouts/Base.astro`,
  `src/pages/index.astro` (JSON-LD). Replace all when the real domain is chosen.
- **Contact details** (real): sales@flo-works.co, +66 81 841 7480,
  Silom Edge, Bangkok 10500. Netlify form `name="contact"` — works only when hosted on Netlify.
- **Blog posts**: Markdown in `src/content/blog/`, schema in `src/content/config.ts`
  (title, description, date, author, tags). Thai content.
- Deploy: Netlify auto-deploys `main` (`netlify.toml`: build `npm run build`, publish `dist`).
