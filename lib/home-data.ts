import { media } from './media'

/** High-fidelity treatment visuals (Yucca-style art direction) */
export const YUCCA = '/images/yucca-clone'

export const HERO_WORDS = [
  { text: 'Semaglutide', color: 'var(--forest)' },
  { text: 'Tirzepatide', color: 'var(--terracotta)' },
] as const

export const PATIENT_RESULTS = [
  { name: 'Alyssa R.', lbs: 62, time: 'in 5 Months', image: `${YUCCA}/woman-glp-1-weight-loss-journey-yucca-health.avif` },
  { name: 'Marcus T.', lbs: 48, time: 'in 4 Months', image: `${YUCCA}/Man-beginning-his-personalized-GLP-1-weight-loss-treatment-with-Yucca-Health.avif` },
  { name: 'Tanya M.', lbs: 71, time: 'in 6 Months', image: `${YUCCA}/woman-weight-loss-journey-glp-1-yucca-health.avif` },
  { name: 'Jordan P.', lbs: 39, time: 'in 12 Weeks', image: `${YUCCA}/Weight-Loss-Image-from-TinyPNG.avif` },
  { name: 'Rebecca S.', lbs: 55, time: 'in 5 Months', image: `${YUCCA}/gorgeous-plus-size-model-beige-women-s-lingerie.avif` },
] as const

export const HOME_STATBAND = {
  left: `${YUCCA}/gorgeous-plus-size-model-beige-women-s-lingerie.avif`,
  right: `${YUCCA}/statband-couple-weight-loss-journey-yucca-health.avif`,
} as const

export const HOME_WHY_MEDIA = {
  vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
  portal: `${YUCCA}/hiw/yucca-health-patient-portal-dashboard-semaglutide-mobile.avif`,
} as const

export const HOME_CLOSING_IMAGE = `${YUCCA}/cta-personalized-treatments-wellness-portrait-yucca-health.avif`

export const HOME_TREATMENTS = [
  {
    id: 'semaglutide',
    label: 'Semaglutide',
    tone: 'var(--forest)',
    toneSoft: 'color-mix(in oklch, var(--forest) 18%, transparent)',
    badge: 'Most Popular',
    badgeTone: 'var(--terracotta)',
    badgeSoft: 'color-mix(in oklch, var(--terracotta) 18%, transparent)',
    title: 'Personalized Semaglutide',
    resultStat: '20%',
    description:
      'A weekly GLP-1 injection designed to support weight management by helping regulate appetite and reduce hunger signals.',
    detail: 'GLP-1 (Semaglutide) · Steady, gradual results.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    enrolled: 'Licensed clinician review included',
    rating: '4.7/5',
    reviews: '1000+ Reviews',
    vials: [`${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout.avif`,
    learnHref: '/semaglutide',
    program: 'semaglutide',
  },
  {
    id: 'tirzepatide',
    label: 'Tirzepatide',
    tone: 'var(--terracotta)',
    toneSoft: 'color-mix(in oklch, var(--terracotta) 18%, transparent)',
    badge: 'Dual Pathway',
    badgeTone: 'var(--terracotta)',
    badgeSoft: 'color-mix(in oklch, var(--terracotta) 16%, transparent)',
    title: 'Personalized Tirzepatide',
    resultStat: '20%',
    description:
      'A weekly dual-action GLP-1 + GIP injection for stronger appetite regulation and more pronounced weight-loss support.',
    detail: 'GLP-1 + GIP (Tirzepatide) · Faster dual-action support.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    enrolled: 'Licensed clinician review included',
    rating: '4.7/5',
    reviews: '1000+ Reviews',
    vials: [`${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout-tirz.avif`,
    learnHref: '/tirzepatide',
    program: 'tirzepatide',
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

export const DOCTORS = [
  {
    name: 'Dr. Elena Vasquez, MD',
    title: 'Licensed Clinician',
    desc: 'Board-certified physician specializing in metabolic health and GLP-1 weight-management protocols.',
    image: '/images/cards/doctor-female.png',
    alma: '/brand/nexa-rx-tm-logo.webp',
    almaAlt: 'Nexa Rx™ licensed clinical network',
  },
  {
    name: 'Dr. James Porter, MD',
    title: 'Licensed Clinician',
    desc: 'Internal medicine physician focused on telehealth evaluation, dosing guidance, and ongoing GLP-1 care.',
    image: '/images/cards/doctor-male.png',
    alma: '/brand/nexa-rx-tm-logo.webp',
    almaAlt: 'Nexa Rx™ licensed clinical network',
  },
] as const

export const HOME_REVIEWS = [
  {
    cat: 'results',
    title: 'I switched to Nexa Rx and the care team has helped me so much.',
    body: "Support has gone above and beyond. I'm down 100lbs total this year and was able to get my life back.",
    name: 'Susan',
    result: '−100 lbs',
  },
  {
    cat: 'results',
    title: "I've lost over 100 pounds so far and am continuing on the program with strong results and support.",
    body: "I've been on a GLP-1 program through Nexa Rx for about a year now, and my experience has been genuinely life-changing.",
    name: 'Benjamin N.',
    result: '−100 lbs',
  },
  {
    cat: 'results',
    title: "I've lost 25 pounds in three months and I'm feeling great.",
    body: 'I ordered another three months and am looking forward to more results.',
    name: 'Rosemary R.',
    result: '−25 lbs',
  },
  {
    cat: 'support',
    title: 'The care team actually answers — and follows up.',
    body: 'Whenever I had a dosing question, someone got back to me the same day. It feels like a real clinic, not a checkout page.',
    name: 'Maya L.',
    result: 'Same-day replies',
  },
  {
    cat: 'process',
    title: 'Clear pricing before I paid anything.',
    body: 'I saw due today, recurring terms, and pharmacy costs in one enrollment summary before confirming care.',
    name: 'Jordan T.',
    result: 'Transparent quote',
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
