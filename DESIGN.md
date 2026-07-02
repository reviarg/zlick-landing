# Zlick — Design System

The source of truth for **how the site looks and behaves.** Reflects what's *actually shipped*
in `styles.css` / `index.html` (not the older brand notes in `CLAUDE.md`).
For product/positioning see [PRODUCT.md](PRODUCT.md).

Last verified: 2026-07-01.

---

## Stack & constraints

- **Plain HTML + CSS + vanilla JS.** No framework, no bundler, no build step.
- **Host:** Render.com static site, auto-deploying from GitHub `main` (publish dir = repo root), fronted by Cloudflare.
- **Fonts:** Google Fonts only — **Noto Sans** (weights 400/500/600/700). No paid fonts, no unknown CDNs.
- Must stay compatible with Render static deploys and work cleanly at **375px and up**.

## Design tokens (`:root` in styles.css)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f0eee6` | Dominant cream background |
| `--bg-soft` | `#e7e2d8` | Subtle step-down background |
| `--surface` | `#f8f6ef` | Cards / light surfaces |
| `--surface-strong` | `#e1dace` | Stronger surface |
| `--ink` | `#333331` | Primary text |
| `--muted` | `#776f66` | Muted text / section eyebrows |
| `--line` | `#c8c0b5` | Borders / hairlines |
| `--dark` | `#404040` | Dark sections (quote-band), title line 2 |
| `--dark-soft` | `#5c5954` | Softer dark |
| `--red` | `#c00000` | **Primary accent** — CTAs, bullets, key accent words |
| `--red-deep` | `#980000` | Hover/active red |
| `--clay` | `#d97757` | Secondary warm accent (rare) |
| `--gold` | `#ffc000` | Tertiary accent (rare) |
| `--radius` / `--radius-small` | `18px` / `12px` | Corner radii |
| `--shadow` / `--shadow-soft` | see file | Elevation |
| `--ease-out` | `cubic-bezier(0.23,1,0.32,1)` | Standard easing |
| `--font-display` / `--font-body` | `"Noto Sans", "Segoe UI", system-ui, sans-serif` | Type |

> **Note vs. `CLAUDE.md`:** the brand section there describes a two-typeface system and different hex values (cream `#F2EDE4`, dark `#2E2A27`). The shipped site uses the single Noto Sans family and the tokens above. This file wins.

## Color usage rules

- **Cream (`--bg`) dominates.** Most sections sit on cream.
- **Red earns its place by being infrequent** — CTAs, bullet markers, and one or two accent words (e.g., "trial forecasting" in the hero). Don't scatter it.
- Exactly **one dark element** punctuates the page: the closing **quote-band** (`--dark`).
- Don't introduce new background colors without explicit instruction.

## Typography

- One family (**Noto Sans**) across display and body; hierarchy comes from **size + weight**, not typeface.
- **Fluid scale via `clamp()`.** Key sizes:
  - Hero H1: `clamp(1.9rem, 3.8vw, 2.9rem)`, weight 700, tight tracking `-0.02em`.
  - Feature titles (`.feature-copy h3`): `clamp(1.9rem, 3vw, 3rem)`, weight 400.
  - Section eyebrows (`.eyebrow`): ~`0.78rem`, uppercase, tracked `0.12em`, red — **except the hero eyebrow, which is dark** (`.hero-top .eyebrow`, `--ink`).
- Body: `--ink` on cream; muted copy uses `--muted`.

## Layout

- **Section width:** `min(1160px, 100vw - 32px)`, centered; vertical padding `96px 0`.
- **Hero:** centered column, `.hero-top` max-width 1140px, text-align center; the use-case **carousel** sits below the copy.
- **Feature rows:** 2-column grid, `minmax(0,0.88fr) minmax(0,1.12fr)` (copy is the narrower `0.88fr` track), gap `52px`; alternate sides with `.reverse`.
- **Responsive breakpoints:** `980px` (feature rows & hero collapse to 1 column), `760px`, `720px`. Below 980 the hero column caps at 760px.

## Components

- **Buttons:** `.button` (filled crimson, primary) and `.button-secondary` (outline/ghost). Primary CTA text = "Get started"; secondary = "Request demo" (opens the demo modal).
- **Cards / surfaces:** rounded (`--radius`), light border or soft shadow on `--surface`.
- **Numbered feature rows:** eyebrow `NN | Label`, `<h3>` title, lead paragraph, crimson-bulleted list, and a **visual panel** — either a `.card-fan` (stacked images; click front to enlarge via **lightbox**, click back to bring forward; "Click to enlarge" hint) or a `.feature-media` image.
  - Special case: `.feature-title--split` sizes a hard-wrapped (`<br>`) title down so each half fits one line.
- **Use-case carousel:** full-width panes, one looping muted `<video>` per pane (lazy — only the active pane plays), manual nav via arrows/dots (no auto-advance), clone-based forward loop, inline-SVG icons.
- **Quote-band:** dark rounded card — quote, brand line (`logo · Expert Forecasting`), subtitle, CTAs.
- **Trusted strip:** scrolling logo marquee from `/logos/`.
- **Demo modal + lightbox:** JS-driven; modal prefills topic/message from a trigger's `data-topic` / `data-message`.

## Iconography & decoration

- Crimson-filled circle bullets. Numbered section labels (`01 | …`). Inline **SVG** icons (no raster icon files, no emoji, no gradients, no generic stock icons).
- Logo assets: `zlick-logo.png` (wordmark), `zlick-icon.png` (atom mark). On dark backgrounds the logo is rendered white via `filter: brightness(0) invert(1)`.

## Motion

- **Scroll reveal:** `[data-reveal]` + IntersectionObserver adds `.is-visible` (subtle fade/rise).
- **Hero typewriter:** `.type-rotate` types → holds (~2.9s) → erases → next word, in a fixed `min-width` slot so the line doesn't shift; blinking caret via `.type-rotate::after` (`currentColor`).
- **Carousel:** smooth scroll-snap; media has a soft floating shadow (no tilt).
- **Respect `prefers-reduced-motion`:** typewriter renders the first word statically, caret stops blinking, reveals/scroll go instant. Keep any new motion behind this guard.
- No gratuitous or template-style animation.

## Conventions

- **Cache-busting:** bump the `?v=` query on `styles.css` / `script.js` (and page URLs when testing) on every change, e.g. `styles.css?v=20260629c`.
- **Source of truth = repo root** (`index.html`, `styles.css`, `script.js`, `about/pricing/contact.html`). `design-v2/` is the older working copy; keep it in sync or retire it. Previous homepage preserved as `index-legacy.html`.
- **Assets** (`feature-*.png/.mp4/.gif`, `logos/`, `zlick-*.png`) live at repo root; don't rename/move/delete without instruction.

## What "good" looks like

- Feels designed by someone who understands clinical operations, not generated by a template.
- Typography is the most memorable element; the cream feels warm/premium, not beige/dated.
- Crimson is used with restraint. The dark quote-band is a strong closing punctuation mark.
- Fast load, no external deps beyond Google Fonts, clean at 375px+, reduced-motion respected.
