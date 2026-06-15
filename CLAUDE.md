# Zlick Website — Claude Code Project Brief

Use this file as the source of truth when starting any new thread on the website repo.
Last verified: 2026-06-15.

---

## New-thread prompt

`Read CLAUDE.md and confirm you're ready to continue work on the Zlick website.`

---

## What Zlick is

Zlick is the first clinical trial enrollment forecasting and simulation platform with a deep and detailed understanding of how patient recruitment actually works. Think of it as a **digital twin simulation engine for trial recruitment**.

The platform ingests a trial's NCT ID and builds an up-to-date, 360° canonical view of the trial and its context — protocol details, eligibility, site landscape, competitor activity, patient prevalence, socioeconomic and demographic data, market dynamics, and more. It then reasons through the mechanics of enrollment to produce a month-by-month forecast and rich scenario simulations.

**The four questions Zlick answers:**
1. How long will my trial take to complete?
2. Where will delays be most likely to occur?
3. What can I do to avoid delays, or fix them?
4. Are we better off doing X, Y, or nothing?

**What's under the hood (the four components):**
- **Real-world data** — clinical, demographic, social, business data to create a current, 360° canonical view of each trial
- **Patient recruitment expertise** — recruitment "hat and goggles" to assess each trial from a recruitment POV; thousands of trial patterns inform how Zlick thinks about workflows, timelines, metrics, and condition-specific enrollment behavior
- **AI Reasoning Graph** — Zlick's AI-powered engine reasons about the mechanics that drive enrollment over time, connecting protocol, patient, site, business, and operational variables before generating a forecast
- **Trial Simulator** — connects all the pieces, then runs a month-by-month forecasting engine and scenario modeling

**How the competition falls short (key differentiator context):**
- *Site questionnaires* (e.g. IQVIA): clinical sites self-assess capabilities and patient estimates — subjective and disconnected from real dynamics
- *Historical data* (e.g. Citeline): past data tells what was possible then, not what is probable now
- *Advanced analytics* (e.g. Medidata): reduces patient recruitment to a math problem, disconnected from the underlying factors
- *DIY tools* (e.g. Veeva): lets sponsors use their own inputs and assumptions — combines the other approaches without adding anything new

Zlick is different because it *learns* everything about your trial, *understands* patient recruitment at a deep operational level, *reasons* through how your trial will enroll over time, *delivers* actionable recommendations and forecasts, *calculates* financial impact of delays and interventions, and *improves* with real-world feedback from clinical teams.

**Target buyers:** clinical operations directors, feasibility leads, recruitment leads, study managers, and innovation/executive teams at small-to-mid-size biopharma and biotech companies, and at CROs. Not targeting large pharma or very early-stage companies.

**Pricing tiers (for reference — used on pricing page):**
- Small: 10 trials/year, 25 users, unlimited simulations — from $40K/year (small/mid-size sponsor)
- Medium: 25 trials/year, 100 users, unlimited simulations — from $90K/year (mid-size sponsor or CRO)
- Large: 50 trials/year, 250 users, unlimited simulations — from $125K/year (large sponsor or CRO)
- Add-ons: connectors, custom rulebook, custom simulator settings, white-label, forward-deployed PM

---

## Repo and deployment

- **Stack:** Plain HTML, plain CSS, vanilla JavaScript. No framework, no bundler, no build step.
- **Hosting:** Render.com (static site). Any change to the stack must remain compatible with Render.com static deployments.
- **Repos:** Two separate repos — one for the website (this repo), one for the application. These instructions apply to the website repo only.
- **Pages in scope:** `index.html` (home page) is the primary focus. `about.html`, `pricing.html`, `contact.html` exist but contain placeholder content and are lower priority.

---

## Standing workflow rules

Before making changes:

1. Re-establish context from the code, not memory.
2. Check `git status` and current branch first.
3. Keep edits targeted — avoid broad rewrites unless clearly needed or explicitly requested.
4. Commit and push after every meaningful change unless the user says otherwise.
5. If you change section structure, copy, or visual design in a meaningful way, flag it clearly before and after.

---

## Brand system

### Colors

| Role | Value |
|---|---|
| Cream (dominant bg) | `#F2EDE4` |
| Charcoal (primary type) | `#2A2A2A` |
| Crimson (primary accent, CTAs, bullets) | `#C00000` |
| Dark section bg | `#2E2A27` (warm dark charcoal) |
| Card bg / subtle surface | `#EDE8DF` |
| Muted type | `#6B6560` |
| White | `#FFFFFF` |

Cream is the dominant background. Most sections sit on cream. One section — the closing CTA — uses the dark charcoal background. Do not introduce additional background colors without explicit instruction.

### Typography

Typography is intentionally open to creative direction, but must feel **authoritative, precise, and clinical** — not startup-casual, not playful, not decorative.

Guidelines:
- Use Google Fonts or system fonts only (no paid fonts). No font loading from unknown CDNs.
- Display/headline face: should carry weight and gravitas. Strong grotesque or geometric sans-serif with tight tracking and heavy weight is preferred. Avoid anything that reads as "friendly SaaS."
- Body face: clean, readable, slightly warm. A humanist sans or a well-set geometric at regular weight.
- Type scale: deliberate and confident. Large display headlines (hero especially), clear hierarchy between section labels, headings, subheads, and body.
- Section eyebrows (e.g. "CLINICAL TRIAL ENROLLMENT INTELLIGENCE", "WHY ZLICK IS DIFFERENT"): small caps or tracked uppercase, muted crimson or muted charcoal, used to orient the reader without competing with headlines.

### Iconography and decoration

- Crimson-filled circles used as bullet markers (as in the WIP) — keep this pattern.
- Numbered section labels (e.g. "01 | CONTEXT") — keep this pattern for the Platform section; the numbered steps reflect a real sequential workflow.
- UI mockup cards (cream/white cards with browser chrome dots) — keep this visual device for the Platform section illustrations.
- No generic stock icons. No emoji. No gradients.

---

## Page structure (home page)

The home page has exactly these sections in this order. Do not add, remove, or reorder sections without explicit instruction.

### 1. Nav (sticky)
- Left: Zlick logo (image asset)
- Right: Home, About, Pricing, Contact (links) + Sign in (ghost button) 
- Sticky on scroll, clean and minimal

### 2. Hero
- Background: cream
- Eyebrow label: "CLINICAL TRIAL ENROLLMENT INTELLIGENCE"
- Headline (locked, do not alter): **"The First Enrollment Forecasting Platform That Actually Understands How Enrollment Works."**
- Subhead (locked, do not alter): **"Zlick has a deep understanding of how patient recruitment works in real life - what factors are at play, how they affect each other, and how differences in therapeutic area, location, seasonality, and study design choices will impact completion times and costs."**
- CTAs: Primary filled button "Get started" (crimson), Secondary outline/ghost button "Request a demo"
- Right side / below: product visual (screenshot or video — placeholder until final asset confirmed)
- Layout: left-aligned headline/text, visual on right OR centered headline with visual below — typography and layout are open to creative direction

### 3. Data sources bar
- Label: "Built from trusted trial, health, geography, and market data sources"
- Scrolling logo strip (existing image assets in `/logos/` directory)
- Background: cream or a very subtle step down from cream

### 4. Why Zlick is different
- Section eyebrow: "WHY ZLICK IS DIFFERENT"
- Section headline: **"Forecasting that starts with recruitment logic, not a spreadsheet shortcut."**
- 4 cards in a grid, each with a number label, bold title, and short body copy:
  - **01 Real-world data** — Clinical trial records, site experience, geography, prevalence, access, market, and competitive signals give each forecast a broader base.
  - **02 Recruitment expertise** — Thousands of trial patterns inform how Zlick thinks about workflows, timelines, metrics, strategies, and condition-specific enrollment behavior.
  - **03 AI reasoning graph** — Zlick connects protocol, patient, site, business, and operational variables before generating a month-by-month forecast.
  - **04 Rich simulations** — Model added sites, delays, eligibility changes, referrals, outreach, country mix, seasonality, and financial impact in structured scenarios.
- Background: cream
- Card style: subtle rounded cards with light border or shadow, number labels in crimson

**Language notes for this section (inform copy tone):**
The deck uses an active verb framework for Zlick's differentiators: *learns*, *understands*, *reasons*, *delivers*, *calculates*, *improves*. This rhythm can inform headlines and card copy throughout. The competitive foil (questionnaires → historical → analytics → DIY) is the implicit "before" to Zlick's "after" — copy should feel like it's answering a problem the reader already knows they have.

### 5. Platform
- Section eyebrow: "PLATFORM"
- Section headline: **"A forecasting workflow built around the decisions clinical teams actually make."**
- Section subhead: "First-pass topics below are placeholders for review. The structure is ready for final copy and stronger product visuals." *(remove this line when final copy is in)*
- 5 numbered subsections, alternating layout (text left / visual right, then text right / visual left):

  **01 | CONTEXT — Build a structured view of the trial before forecasting.**
  Zlick reads the protocol and surrounding landscape to understand the recruiting challenge before it projects enrollment.
  - Protocol details, eligibility, enrollment target, phases, and timelines.
  - Trial family, competitors, active markets, and relevant completed benchmarks.
  - Patient access, condition prevalence, socioeconomic context, and site geography.
  *Visual: UI card showing Protocol complexity / Competition density / Access friction / Seasonality exposure*

  **02 | REASONING — See the variables Zlick connects behind each forecast.**
  The model is not just a historical average. Zlick reasons through the dynamic between sites, patients, operations, competition, and time.
  - Condition and country differences shape the base enrollment curve.
  - Site capacity, startup timing, and active recruitment levers change the monthly pace.
  - Demographic, socioeconomic, and medical context help explain where risk accumulates.
  *Visual: Dark reasoning graph card showing Condition / Sites / Patients / Forecast nodes*

  **03 | SIMULATION — Model practical scenarios before you commit resources.**
  Teams can test how recruitment actions might shift timeline, probability, expected range, and financial impact.
  - Add or adjust sites with location and capability assumptions.
  - Model delays, eligibility changes, referrals, outreach, and operational bottlenecks.
  - Compare each forecast against baseline and doing nothing.
  *Visual: UI card showing Baseline / Add 5 sites / Eligibility edit / Outreach + referrals with timeline bars*

  **04 | EXPLAINABILITY — Understand why the forecast moved, not just that it moved.**
  Zlick pairs projections with commentary and drivers, so teams can discuss assumptions and make decisions with more confidence.
  - Baseline, forecast, delta, expected range, and probability.
  - Direct costs, time costs, net result, and comparison to doing nothing.
  - Plain-language commentary built from the scenario and trial context.
  *Visual: Scenario commentary card with Net result line*

  **05 | LEARNING LOOP — Improve forecasts as real teams challenge the model.**
  Zlick is designed with a feedback loop that can refine assumptions from aggregated user feedback over time.
  - Capture where forecasts feel too fast or too slow.
  - Aggregate feedback without exposing individual customer inputs.
  - Use learning signals to sharpen future projections and scenario guidance.
  *Visual: Dark feedback card showing Team feedback / Assumption reviewed / Model signal / Next forecast*

  **Note on financial impact:** The deck also includes a strong "financial impact" differentiator (direct costs, time costs, net result, vs. doing nothing). This is currently embedded within section 03 (Simulation) and section 04 (Explainability) as bullet points. Do not create a separate 6th subsection — this content lives within the existing structure. Key financial questions from the deck that can inform copy: "How much will delays cost?", "What's the cost of doing X?", "Are we better off doing X or Y?", "How does X compare vs. doing nothing?"

- Background: cream throughout

### 6. Dark CTA section
- Background: `#2E2A27` (warm dark charcoal)
- Headline: **"You cannot forecast enrollment from the outside. Zlick models the system underneath it."**
- Subhead: "For clinical operations, feasibility, recruitment, innovation, and executive teams planning studies where enrollment risk matters."
- CTAs: Primary filled "Get started" (crimson), Ghost "Request a demo" (white text)
- Full-width, generous padding

### 7. Footer
- Left: Zlick logo + tagline ("Zlick helps clinical teams forecast enrollment, simulate recruitment decisions, and understand the drivers behind trial timelines.")
- Center columns: Company (About, Pricing, Contact) | Product (Highlights, Features, Sign in)
- Right: Contact email + "Request a demo" button
- Bottom bar: "© 2026 Zlick Labs. Private and confidential."
- Background: slightly darker than cream or same dark charcoal as section 6 — match the WIP

---

## Product voice and language

These principles come directly from the pitch deck and should guide any copy Claude Code writes or suggests:

**Active verb framework** — Zlick's differentiators are expressed as actions: *learns*, *understands*, *reasons*, *delivers*, *calculates*, *improves*. Headlines and section copy should feel active and confident, not passive or abstract.

**Plain clinical language** — Write the way a sharp clinical ops director would speak, not the way a SaaS marketing team would. Avoid: "cutting-edge", "next-generation", "revolutionary", "unlock", "seamless", "leverage". Prefer: specific, concrete, operational language.

**The competitive foil** — Zlick exists in contrast to four incumbent approaches: site questionnaires, historical data, advanced analytics, and DIY. Copy doesn't need to name competitors, but should implicitly acknowledge the problem those approaches create (subjective estimates, stale data, disconnected modeling, circular logic).

**The four questions** — Everything Zlick does answers one of these: How long will it take? Where will delays occur? What can be done? Is X better than Y or nothing? Copy that maps to these questions is on-brand.

**"Predict enrollment. Prevent delays. Preview costs."** — This tagline from the deck is strong and may be useful in subheads or the CTA section. Do not use it as the hero headline (that is locked), but it can appear elsewhere if appropriate.

---

- **Bartix** (bartix.framer.website) — aesthetic and structural inspiration. Clean, confident, modern SaaS landing page energy. Use as a reference for section rhythm, card treatment, and overall density — not as a copy.
- **WIP design** — the existing design-v2 local build. Color scheme, section structure, and hero copy are established there. Typography and layout details within sections are open to improvement.

---

## Assets

- Logo: `/zlick-logo.png` and `/zlick-icon.png`
- Data source logos: `/logos/image1.png` through `/logos/image19.png` (and `.jpeg` variants)
- Demo video: `demo-preview-v2.mp4` (hero section), `demo-preview-hd-v2.mp4` (modal/lightbox)
- Sample report: `sample-report.pdf`
- Icons directory: `/icons/`

Do not rename, move, or delete existing assets without explicit instruction.

---

## What good looks like

- The page should feel like it was designed by someone who understands clinical operations, not generated by a template engine.
- Typography should be the most memorable design element — the headline scale and weight should make the content feel important.
- The cream background should feel warm and premium, not beige or dated.
- The crimson accent should be used with restraint — it earns its presence by being infrequent.
- The dark CTA section should feel like a strong punctuation mark at the end of a well-constructed argument.
- Mobile responsive is required. The page must work cleanly at 375px and up.
- No gratuitous animation. Subtle scroll-triggered fade-ins are acceptable if they serve clarity. Nothing that feels like a template effect.
- Reduced motion must be respected (`prefers-reduced-motion`).
- The page should load fast. No unnecessary JavaScript. No external dependencies beyond Google Fonts.
