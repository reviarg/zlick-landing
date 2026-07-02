# Zlick Website — Claude Code Project Brief

Working brief for the **website repo** (zlick.co). Product truth and design system now live
in dedicated files — this doc is just how to *work* in this repo, plus pointers.

Last verified: 2026-07-01.

---

## Reference docs (single source of truth)

- **[PRODUCT.md](PRODUCT.md)** — what Zlick is, the four questions, personas, competitive foil, pricing, voice/messaging. *(Shared truth — keep in sync with the app repo.)*
- **[DESIGN.md](DESIGN.md)** — the as-built design system: tokens, typography, layout, components, motion, conventions.

If product positioning or visual/brand rules are relevant to a task, read those files rather than
relying on memory. When you change product messaging or design in a meaningful way, update the
matching doc in the same change.

---

## New-thread prompt

`Read CLAUDE.md and confirm you're ready to continue work on the Zlick website.`

---

## What Zlick is (one line)

The first clinical-trial **enrollment forecasting and simulation** platform — a digital twin
simulation engine for trial recruitment. Full detail in [PRODUCT.md](PRODUCT.md).

---

## Repo and deployment

- **Stack:** Plain HTML, plain CSS, vanilla JavaScript. No framework, no bundler, no build step. Any change must stay compatible with static hosting.
- **Hosting:** Render.com static site, **auto-deploying from GitHub `main`** (publish dir = repo root), fronted by Cloudflare. **A push to `main` goes live** — Render rebuilds and the new page usually propagates within ~15–60s.
- **Source of truth = repo root** (`index.html`, `styles.css`, `script.js`, `about.html`, `pricing.html`, `contact.html`). The previous homepage is preserved as `index-legacy.html` for rollback.
- **`design-v2/`** is the older working copy the current site was promoted from. Prefer editing the root files; keep `design-v2/` in sync or retire it (open item).
- **Repos:** Two separate repos — website (this repo) and the application. **These instructions apply to the website repo only.** Product truth in [PRODUCT.md](PRODUCT.md) is shared with the app repo; the app has its own design system.
- **Pages:** `index.html` (home) is primary. `pricing.html` and `contact.html` are built and live; `about.html` is lighter.

---

## Standing workflow rules

1. Re-establish context from the code, not memory.
2. Check `git status` and current branch first.
3. Keep edits targeted — avoid broad rewrites unless clearly needed or explicitly requested.
4. **Bump the `?v=` cache-busting query** on `styles.css` / `script.js` whenever you change them (e.g. `styles.css?v=20260629c`), so the CDN/browser fetch fresh.
5. Verify visible changes before considering them done (locally via the dev server, or against the live URL after deploy).
6. Commit and push after every meaningful change unless the user says otherwise — remember this **deploys to production**.
7. If you change section structure, copy, or visual design in a meaningful way, flag it clearly before and after.

---

## Assets

Live at repo root; **do not rename, move, or delete without explicit instruction.**

- Logo: `zlick-logo.png` (wordmark), `zlick-icon.png` (atom mark)
- Feature media: `feature-*.png` / `feature-*.jpg` / `feature-*.gif` / `feature-howto-*.mp4`
- Data-source logos: `logos/image1…19` (`.png` / `.jpeg`)
- Demo video: `demo-preview-v2.mp4`, `demo-preview-hd-v2.mp4`
- Sample report: `sample-report.pdf`; icons in `icons/`

---

## References

- **Bartix** (bartix.framer.website) — aesthetic/structural inspiration: section rhythm, card treatment, density. Reference, not copy.
