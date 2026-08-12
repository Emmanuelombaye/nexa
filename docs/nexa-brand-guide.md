# Nexa Rx™ Brand Guide

> Combined from:
> 1. Live site scrape — [https://www.nexarx.com/](https://www.nexarx.com/) (2026-08-12)
> 2. **Nexa Rx Website Revision Brief V2** — `Nexa_Rx_Website_Revision_BriefV2.docx` (text extract: `docs/nexa-revision-brief.txt`)
> 3. Official lockup you added — `new-tm logo.png` → `/brand/primary-logo.webp` (+ on-dark)

Use this as the source of truth for logo, colors, wording, and flow.

---

## 1. Logo (use this)

| Asset | Path | Use |
| --- | --- | --- |
| **Primary (TM)** | `/brand/nexa-rx-tm-logo.webp` | Header, light backgrounds |
| **Primary PNG** | `/brand/nexa-rx-tm-logo.png` | Fallback / design |
| **On dark** | `/brand/nexa-rx-tm-logo-on-dark.webp` | Footer, dark panels, login overlay |
| **Source** | `new-tm logo.png` (repo root) | Master artwork |

### Lockup rules

- Wordmark: **Nexa Rx™** (include **™** in alt text: `Nexa Rx™`)
- Serif “Nexa” + “R” in **navy** `#0F1722`
- Stylized **x**: one stroke navy, one stroke **teal** `#4DAA9A`
- **™** sits at the upper right of Rx
- Do **not** use old tagline lockups that say “PERSONAL CARE. REAL RESULTS.” under the logo in UI chrome (revision brief removes “Real Results”)
- Do not redraw the logo as CSS text in the header/footer — use the image assets above

---

## 2. Color system

| Token | Hex | Role |
| --- | --- | --- |
| `--navy` | `#0F1722` | Text, primary CTA, logo body |
| `--navy-deep` | `#0B1220` | Deep bands |
| `--teal` | `#4DAA9A` | Accent, italic emphasis, Rx x-stroke |
| `--teal-deep` | `#3d8f81` | Eyebrows, links |
| `--sand` | `#F2EFEA` | Warm surfaces |
| `--cloud` | `#FAFAF8` | Page background |
| `--slate` | `#6B7280` | Muted body |

**Keep** (revision brief): navy, cream/sand, teal palette · serif headlines · premium restraint.  
**Avoid:** purple gradients, terracotta-cream clichés, neon glow, “Most Potent” merchandising.

---

## 3. Typography

| Role | Family |
| --- | --- |
| Display | Cormorant Garamond |
| Body / UI | Manrope |

Headline pattern: short serif line + *teal italic* emphasis.

---

## 4. Positioning (revision brief)

| Role | Copy |
| --- | --- |
| Primary positioning | Personalized telehealth for medical weight management, hormone health, and select prescription therapies. |
| Trust line | Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment. |
| Feel | Medical care platform first — **not** a drug catalog |

### Local catalog note

This repo currently focuses on **Semaglutide & Tirzepatide**. Keep revision *voice and compliance*; adapt program names to the local catalog when rewriting cards.

---

## 5. Site chrome (revision → live)

**Trust bar:** `LICENSED CLINICAL CARE • CLEAR PRICING • NO INSURANCE REQUIRED • DISCREET DELIVERY`

**Nav:** Treatments · How It Works · Pricing · Quality & Safety · Shop · FAQ  
**Actions:** Patient Login · **Check Eligibility** (primary everywhere)  
**Secondary CTAs only:** View Treatments / View Details / Shop Supplements

---

## 6. Homepage flow & ready-to-paste copy

1. Hero → 2. Trust strip → 3. Manifesto → 4. Programs → 5. Supplements (separate) → 6. Quality → 7. How It Works → 8. Mid CTA → 9. FAQ → 10. Closing CTA → Footer

### Hero (revision / live)

- Eyebrow: `PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.`
- H1: `Your care. Your way.` *(keep — strongest line)*
- Support: Connect online with a licensed clinician… See your options and costs before treatment begins.
- Disclosure: Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed clinician. Availability varies by state and treatment.
- Buttons: Check Eligibility · View Treatments

### Manifesto

- H2: Modern care should be personal, clear, and clinically guided.
- Body: Nexa Rx connects eligible adults with licensed clinicians… transparent pricing and ongoing support.

### Programs section

- Eyebrow: PERSONALIZED CARE PROGRAMS
- H2: Explore care programs
- Sub: Ongoing clinical support. Clear pricing before enrollment.
- Card actions: View Details · Check Eligibility
- Price framing: `$0 to start` / Itemized quote before enrollment

### Supplements (separate lane)

- Eyebrow: NON-PRESCRIPTION SUPPORT
- H2: Support your health between visits.
- Never mix into clinical treatment cards.

---

## 7. How It Works (revision sequence)

1. Choose a care program  
2. Complete secure intake (clinical portal — not marketing site)  
3. Meet a licensed clinician  
4. Receive a clinical decision (treatment not guaranteed)  
5. Pharmacy fulfillment  
6. Ongoing care  

---

## 8. Words to remove (revision brief)

Do **not** use:

- Real Results  
- Most Potent  
- No hidden fees. Ever.  
- Unlimited physician access (unless literally true)  
- Bio-individualized  
- Premium medications  
- Blanket “FDA-approved only” positioning  
- Vague longevity / outcome promises  

---

## 9. Compliance phrases (reuse)

- Prescription treatment is not guaranteed.  
- Eligibility and treatment decisions are made by a licensed clinician.  
- Availability varies by state and treatment.  
- Compounded medications are not FDA-approved as finished branded products.  
- $0 to start / Itemized quote before enrollment  
- Supplements are sold separately from medical treatment.  

---

## 10. Repo mapping

| Concern | Location |
| --- | --- |
| Logo (TM) | `public/brand/nexa-rx-tm-logo.webp`, `nexa-rx-tm-logo-on-dark.webp` |
| CSS tokens | `src/index.css` `:root` |
| Fonts | `app/layout.tsx` |
| Programs / FAQs | `lib/site-data.ts` |
| HIW copy | `lib/how-it-works.ts` |
| Revision extract | `docs/nexa-revision-brief.txt` |
| Agent rule | `.cursor/rules/nexa-brand.mdc` |

---

*Sources: nexarx.com scrape · Nexa_Rx_Website_Revision_BriefV2.docx · new-tm logo.png*
