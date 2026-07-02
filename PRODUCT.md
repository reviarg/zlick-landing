# Zlick — Product Reference

The source of truth for **what Zlick is, who it's for, and how we talk about it.**
Rewritten from the **Zlick_SK02** deck (the latest, most complete product source).
For design/brand rules see [DESIGN.md](DESIGN.md). For agent working-rules see [CLAUDE.md](CLAUDE.md).

Last verified: 2026-07-02 (source: Zlick_SK02 deck).

---

## One-line

Zlick is a **Clinical Trial Enrollment Simulator** — the first trial forecasting platform with a deep and detailed understanding of **how patient enrollment works.**

**Tagline:** *Predict enrollment. Prevent delays. Preview costs.*

**Elevator:** Zlick combines real-world data, patient recruitment expertise, and an AI reasoning engine to forecast trial completion times and costs.

## The four questions Zlick answers

1. **How long** will my trial take to complete?
2. **Where / why** are delays likely to occur?
3. **What can I do** to avoid or correct delays?
4. **Are we better off** doing X, Y, or nothing at all?

Anything Zlick does — and any copy — should map to one of these four questions.

## What's under the hood (the four components)

- **Real-world data** — clinical, demographic, social, business, etc., to create a current, 360° canonical view of each trial.
- **Patient recruitment expertise** — recruitment "hat and goggles" to assess each trial from a recruitment POV.
- **AI Reasoning Graph** — Zlick's AI-powered engine reasons about the mechanics that drive enrollment over time.
- **Trial Simulator** — connects all the pieces, then runs a month-by-month forecasting engine and scenario modeling.

---

## How it works (3 stages)

The user adds a trial (NCT ID, protocol upload, or manual input); Zlick returns insights, recommendations, and forecasts, and improves via user **ratings** at each stage.

1. **Data Aggregation** *(partially proprietary)* — an agentic AI layer finds, extracts, normalizes, and computes live data from trusted public sources (clinical, demographic, business, social, etc.), producing a deep, canonical, structured view of each trial ready for modeling.
   → *Insights:* Who/where competes with us? How do we compare? What is our patient pool like? Where should we open a site?
2. **Core Knowledge** *(proprietary)* — trained on a growing list of real-life recruitment case studies, benchmarks, metrics, best practices, strategies, and methodologies; best-in-class recruitment expertise proposes specific action items per trial.
   → *Recommendations:* How can we prevent delays? What sites are a delay risk? How do we speed up the trial? Where should we focus?
3. **Trial Simulator** *(proprietary)* — a forecasting model with dozens of operational parameters, each with its own weight settings, multipliers, and implementation rules; generates reliable forecasts and lets users test scenarios before implementation.
   → *Forecasts & Simulations:* Will our trial be delayed? What if we open sites in X? What if we change the I/E? What if we do radio ads?

---

## How Zlick is different (active-verb framework)

Zlick's differentiators are expressed as actions. Headlines and copy should feel active and confident.

### 1. Zlick *understands* patient recruitment
> "You can't explain or forecast what you don't understand."

Deep, detailed knowledge of how patient recruitment works in real life — **what factors are involved, their relationships and dynamics, and differences by condition, country, seasonality**, etc. Under the hood:

- **Search & Retrieval Policy** — condition-specific term expansion, search areas, candidate budgets.
- **Condition Locking** — subtype-aware disease labeling, aliases, family detection.
- **Private Taxonomy & Registries** — oncology conflict rules, seeded prevalence mappings, auto rare-disease detection.
- **Structured Evidence Pipeline** — eligibility, prevalence, competitors, recruitment, market landscape, site quality.
- **Core Knowledge Rulebook** — structured operational rules, real-life metrics, projection multipliers and lifts, exclusions.
- **Case Study Memory Layer** — matched prior patterns by disease sub-type, phase, etc.
- **Simulator Settings** — weights, multipliers, lifts, timelines, guardrails, and other assumptions set per parameter.
- **Scenario-Ready Outputs** — recommendations translated into modeled levers, not just text.
- **User Implementation Ratings** — captures real-world downstream signals, not just static labels.
- **Recency-Weighted Learning Engine** — user feedback is not naively counted; recency and other elements are accounted for.
- **Evidence-Grounded Re-Ranking** — future outputs improve based on actual implementation behavior for similar trials.

### 2. Zlick *reasons* how enrollment will evolve
> "Predictive analyses that ignore how trials work are superficial guesswork."

Zlick's AI-powered *brain* understands the mechanics of clinical trials and reasons how enrollment is most likely to evolve over time.
- Proprietary AI reasoning graph
- Bottom-up, multi-factor modeling
- Month-by-month forecasting

### 3. Zlick *learns* everything about your trial
> "Site surveys and past data are not enough to predict how enrollment will play out and how long it will take."

Zlick knows many more factors are at play — clinical, demographic, social, financial, commercial — and knows how to find and evaluate the data required, then builds full 360° canonical views of each trial **before any forecasting is done.** (e.g., competitive pressure by site, market analysis, point-by-point eligibility assessment with drop-off and candidate-pool math.)

### 4. Zlick *delivers* actionable recommendations and forecasts
Practical, data-driven, ultra-specific action items to streamline trials.
- Extensive recruitment knowledge generates **time-saving recommendations**.
- Bottom-up, month-by-month trial forecasting in seconds.
- Create, save, and compare scenarios to decide in advance of changes.
- Outputs pair a baseline, most-likely duration, adjusted delta, **expected range (P10 / P50 / P90)**, probability, and plain-language commentary; users rate each recommendation (*Not relevant / May consider / Good idea*), and modeled actions show estimated impact (e.g., "2.0 months saved").

### 5. Zlick *calculates* the financial impact of delays and interventions
> "The right decision for a trial ultimately depends on the ROI of the choices taken."

Zlick helps teams easily estimate the economic impact of delays, the ROI of potential interventions, and how different options compare with each other **and with no action taken**. The **Financial Impact** view reports **Direct Costs · Time Costs · Net Result · vs. Doing Nothing**, driven by editable financial inputs (monthly burn, cost per active site, referral costs, offline advertising, digital-outreach costs, call-center, EHR matching, etc.).

### 6. Zlick *compares* scenarios head-to-head
Zlick reveals in seconds how the actions being considered stack up against each other — **compare up to four scenarios side by side.**
- Full comparisons summarized on one page; easy-to-read tables and charts.
- Scenario assumptions, results (duration, direct cost, total cost, net vs. baseline), and leaders (fastest, lowest direct cost, lowest total cost), plus enrollment-trajectory and cost-vs-time charts.
- Save, print, and share comparisons with one click.

*The "Doing nothing" scenario is always the neutral reference in comparisons.*

---

## Reasoning Graph (architecture overview)

Zlick's reasoning runs through seven stages:

1. **Data Intake & Normalization** — trial intake, CT.gov ingestion, selective AI extraction, condition locking, taxonomy & registries → Canonical Trial Object.
2. **Search Rules & Evidence Building** — comparable-trial search policy, match filters, benchmark metrics, eligibility model, prevalence & geography, recruitment intelligence, commercial context, site intelligence.
3. **Proprietary Knowledge & Learning** — core knowledge rulebook, case-study registry, channel logic, projection overrides, user implementation ratings, recency-weighted learning engine, evidence-grounded re-ranking.
4. **Simulator Payload Assembly** — admin-tunable settings, scenario editor, current-status anchor, checklist gating → unified simulator payload.
5. **Enrollment Forecast Engine** — realism guardrails, operational/site/eligibility/pool mechanics, context multipliers, baseline-pace blending → month-by-month simulation → probabilistic runs.
6. **Financial Forecasting** — financial assumptions → scenario cost engine → financial outputs.
7. **Decision Outputs** — driver breakdown, projection chart, forecast range, planning view.

---

## Pricing

| Tier | Trials/yr | Users | Simulations | Annual licence |
|---|---|---|---|---|
| **Small** | 10 | 25 | Unlimited | From **$50K** |
| **Medium** | 25 | 100 | Unlimited | From **$90K** |
| **Large** | 50 | 250 | Unlimited | From **$125K** |

**Extras & add-ons (applicable to all plans):** Connectors · Custom rulebook · Custom simulator settings · Additional trials · Additional users · Powered-by (white-label) · Account Manager · Advanced modeling · Financial module.

---

## Founder & CEO — Pablo Graiver

**First-hand experience**
- 16+ years in digital clinical trials
- Founder/CEO at Antidote (pioneer in the field)
- Ex-VP Digital Patient Strategy at IQVIA
- Advisor to Verily, LetterOne Health, UEPM, and others
- Hundreds of clinical trials, first-hand experience
- 2 patents re: use of AI in patient recruitment

**Entrepreneur & operator**
- 4x founder; 2x successful exits, incl. a $575M sale to Yahoo!
- Senior roles at KAYAK, ValueClick, and others
- Board member, advisor, and consultant

**In the media:** WIRED, Business Insider, CNBC, Bloomberg, Fierce Biotech, Forbes, HuffPost, The Standard, Applied Clinical Trials, Clinical Leader, MedCity News, MassDevice.

---

## Voice & language

- **Plain clinical language** — write the way a sharp clinical-ops director speaks, not a SaaS marketing team.
- **Active-verb framework** — *understands, reasons, learns, delivers, calculates, compares* (and *improves*, via the learning loop).
- **Avoid:** cutting-edge, next-generation, revolutionary, unlock, seamless, leverage.
- **Prefer:** specific, concrete, operational language.
- **Anchor tagline:** *"Predict enrollment. Prevent delays. Preview costs."*

## Contact & domains

- Email: **hello@zlick.co** · Phone: **(347) 861-2616**
- Marketing site: **https://zlick.co** · App: **https://app.zlick.co**
- Entity: **Zlick Labs** — "Private and confidential."

---

## Supplementary context

*Not in the SK02 deck — carried over from the earlier brief. Verify before using externally.*

- **Target buyers:** clinical operations directors, feasibility leads, recruitment leads, study managers, and innovation/executive teams at small-to-mid-size biopharma/biotech and at CROs. Not large pharma or very early-stage companies.
- **Competitive positioning:** Zlick stands in contrast to site questionnaires (subjective self-assessment), historical data (stale), advanced analytics (recruitment reduced to math), and DIY tools (circular logic). Copy needn't name competitors, but can acknowledge the problem those approaches create.
