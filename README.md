# Nexa Rx

Personalized telehealth for medical weight management, hormone health, and select prescription therapies.

Nexa Rx connects eligible adults with licensed clinicians, shows clear pricing before enrollment, and fulfills prescriptions through qualified U.S. pharmacy partners. Dietary supplements are sold in a separate non-prescription shop lane.

**Organization:** [Rangel Holdings](https://github.com/Rangel-holdings)  
**Repository:** [github.com/Rangel-holdings/nexa](https://github.com/Rangel-holdings/nexa)

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19
- Static generation for public marketing pages
- Deploy-ready for Vercel

## Requirements

- Node.js 20+

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Lint the project |

## Site structure

### Care programs

- `/medical-weight-loss` — Clinician-guided weight management
- `/mens-hormone-health` — Testosterone evaluation & care
- `/womens-hormone-health` — Menopause & hormone care
- `/peptide-therapy` — Clinician-prescribed peptide therapy

### Core pages

- `/` — Homepage
- `/how-it-works` — Six-step care path
- `/pricing` — Program cost breakdown
- `/quality-and-safety` — Care standards and disclosures
- `/medical-team` — Clinical team overview
- `/faq` — Patient questions
- `/check-eligibility` — Public eligibility form (program, state, contact only)
- `/patient-login` — Patient login
- `/patient-center` — Patient center shell

### Shop (supplements)

- `/supplements` — Collection
- `/supplements/[slug]` — Product pages
- `/supplements/bundles` — Bundles
- `/supplements/subscribe-and-save` — Recurring purchase options
- `/supplements/order-support` — Order support
- `/supplements/checkout` — Mock checkout (no live payments)

## Product model

- **Clinical care** — Licensed clinicians; prescription treatment is not guaranteed
- **Pharmacy fulfillment** — Qualified U.S. compounding pharmacies / outsourcing facilities as applicable
- **Supplements** — Non-prescription retail lane, separate from clinical intake and prescribing

## SEO & privacy

- Unique metadata and canonical URLs per route
- Organization, Breadcrumb, and Product JSON-LD where applicable
- Dynamic `robots.txt` and `sitemap.xml`
- Preview environments set to `noindex`
- Optional preview password via `PREVIEW_PASSWORD` (see Deploy)
- Public lead form limited to program interest, state, and contact details
- Medical intake belongs in the secure clinical portal (not the marketing site)
- Legal pages: `/privacy`, `/terms`, `/telehealth-consent`, `/supplement-terms`

### Privacy / tracking audit (pre-launch)

| Surface | Status |
|---------|--------|
| Marketing site forms | Contact, state, program interest only |
| Clinical intake | Secure portal only — not on public pages |
| Ad pixels / Meta / GTM | Not present in codebase |
| Session replay | Not present |
| Health data to ads | Forbidden by design — see Privacy Policy |
| Preview indexing | `noindex` + optional `PREVIEW_PASSWORD` Basic Auth |

Re-audit before enabling paid traffic or third-party analytics.

## Deploy (Vercel)

1. Import [Rangel-holdings/nexa](https://github.com/Rangel-holdings/nexa) in Vercel
2. Framework: **Next.js**
3. Build command: `npm run build`
4. Keep preview deployments noindexed until claims, pricing, and clinical pathways are approved
5. Set `PREVIEW_PASSWORD` in Vercel for preview deployments to enable HTTP Basic Auth (user: `nexa`)

## Project layout

```text
app/           Next.js App Router pages
components/    Shared UI (header, footer, forms, program pages)
lib/           Site content and shared data
public/        Static assets
src/index.css  Global styles
```

## Brand direction

Navy, cream, and teal palette with a premium medical-care feel—care platform first, not a drug catalog.

## Performance

- Next.js Image Optimization (AVIF/WebP) for all marketing imagery
- Long-lived immutable cache headers for `/images`, `/brand`, and `/_next/static`
- Self-hosted fonts via `next/font` (Cormorant Garamond + Manrope)
- Priority loading only for LCP hero imagery

## Author

Built and maintained by **Ombaye** for Rangel Holdings.
