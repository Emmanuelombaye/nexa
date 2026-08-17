import { media } from './media'

/** High-fidelity treatment visuals (Yucca-style art direction) */
export const YUCCA = '/images/yucca-clone'

export const HERO_WORDS = [
  { text: 'Semaglutide', color: 'var(--teal)' },
  { text: 'Tirzepatide', color: 'var(--teal)' },
] as const

export const HOME_WHY_MEDIA = {
  vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
  portal: `${YUCCA}/hiw/yucca-health-patient-portal-dashboard-semaglutide-mobile.avif`,
} as const

export const HOME_CLOSING_IMAGE = `${YUCCA}/cta-personalized-treatments-wellness-portrait-yucca-health.avif`

/** Yucca Treatments order: Tirzepatide first, then Semaglutide */
export const HOME_TREATMENTS = [
  {
    id: 'tirzepatide',
    label: 'Tirzepatide',
    tone: 'var(--teal)',
    toneSoft: 'color-mix(in oklch, var(--teal) 18%, transparent)',
    badge: 'Dual Pathway',
    badgeTone: 'var(--teal)',
    badgeSoft: 'color-mix(in oklch, var(--teal) 16%, transparent)',
    title: 'Personalized Tirzepatide',
    description:
      'A weekly dual-action GLP-1 + GIP injection for appetite regulation support — prescribed only after a licensed provider reviews your intake.',
    detail: 'GLP-1 + GIP (Tirzepatide) · Provider-guided dosing.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    vials: ['/images/nexa/vial-tirzepatide.webp?v=5'],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout-tirz.avif`,
    learnHref: '/tirzepatide',
    program: 'tirzepatide',
  },
  {
    id: 'semaglutide',
    label: 'Semaglutide',
    tone: 'var(--navy)',
    toneSoft: 'color-mix(in oklch, var(--navy) 18%, transparent)',
    badge: 'GLP-1',
    badgeTone: 'var(--teal)',
    badgeSoft: 'color-mix(in oklch, var(--teal) 18%, transparent)',
    title: 'Personalized Semaglutide',
    description:
      'A weekly GLP-1 injection that may support weight management by helping regulate appetite — prescribed only after a licensed provider reviews your intake.',
    detail: 'GLP-1 (Semaglutide) · Provider-guided dosing.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    vials: ['/images/nexa/vial-semaglutide.webp?v=5'],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout.avif`,
    learnHref: '/semaglutide',
    program: 'semaglutide',
  },
] as const

export const HOME_HIW_STEPS = [
  {
    n: '1',
    title: 'Complete your intake form',
    body: 'Answer a short medical questionnaire so our providers can determine if treatment is right for you.',
    image: '/images/pax-hiw-step-1.png',
    alt: 'Tablet intake form — tell us about yourself',
  },
  {
    n: '2',
    title: 'Provider review',
    body: 'After verifying your identity, a licensed U.S. provider reviews your intake within 24 hours to determine if treatment is appropriate for you.',
    image: '/images/pax-hiw-step-2.png',
    alt: 'Licensed clinician reviewing your intake on a laptop',
  },
  {
    n: '3',
    title: 'Start treatment',
    body: 'If approved, your prescription is filled by a licensed U.S. pharmacy and delivered to your door with discreet shipping.',
    image: '/images/pax-hiw-step-3.png',
    alt: 'Temperature-controlled medication delivery at your door',
  },
] as const

export const HOME_FAQS = [
  {
    q: 'What is Nexa Rx?',
    lead: 'Nexa Rx connects eligible adults with licensed clinicians for semaglutide and tirzepatide weight-management therapy, with transparent pricing and ongoing support.',
  },
  {
    q: 'How much does treatment cost?',
    lead: 'You start at $0 today. Your enrollment summary lists due today, recurring program fees, prescription costs, labs, and shipping before you confirm care.',
  },
  {
    q: 'Are video visits with a doctor required?',
    lead: 'In most cases, an asynchronous intake form is sufficient. If your clinician needs more information, they may request a brief telehealth visit.',
  },
  {
    q: 'Is insurance required?',
    lead: 'No. Nexa Rx is self-pay care with clear pricing shown before enrollment — no insurance required.',
  },
] as const
