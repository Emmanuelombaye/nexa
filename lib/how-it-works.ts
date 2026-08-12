import { media } from './media'

export type HowStep = {
  n: string
  title: string
  titleItalic: string
  body: string
  image: { src: string; alt: string; width: number; height: number; sizes?: string }
  chips?: string[]
  callout?: { value: string; label: string }
}

export const howSteps: HowStep[] = [
  {
    n: '01',
    title: 'Start your',
    titleItalic: 'intake',
    body: 'Share your goals and history in a short intake. Browse physician-directed options — semaglutide, tirzepatide, or GLP-1 care — so your care team can confirm whether treatment may be appropriate.',
    image: {
      src: media.howStep01.src,
      alt: media.howStep01.alt,
      width: media.howStep01.width,
      height: media.howStep01.height,
      sizes: '(max-width: 1024px) 92vw, 50vw',
    },
    chips: ['Semaglutide', 'Tirzepatide', 'GLP-1 care'],
    callout: {
      value: 'Physician-first',
      label: 'Care begins with clinical fit — not a template checkout.',
    },
  },
  {
    n: '02',
    title: 'Consult &',
    titleItalic: 'verify',
    body: 'A care coordinator guides next steps. Identity and eligibility checks follow applicable telehealth rules so prescribing stays safe, compliant, and accountable.',
    image: {
      src: media.howStep02.src,
      alt: media.howStep02.alt,
      width: media.howStep02.width,
      height: media.howStep02.height,
      sizes: '(max-width: 1024px) 92vw, 50vw',
    },
    chips: ['Secure intake', 'Telehealth eligible', 'Clear next steps'],
  },
  {
    n: '03',
    title: 'Physician',
    titleItalic: 'review',
    body: 'A board-certified physician reviews your history and labs as needed. If clarification is required, your care team follows up. Protocols are designed around your biology.',
    image: {
      src: media.howStep03.src,
      alt: media.howStep03.alt,
      width: media.howStep03.width,
      height: media.howStep03.height,
      sizes: '(max-width: 1024px) 92vw, 50vw',
    },
    chips: ['Board-certified', 'Labs when indicated', 'No one-size plan'],
  },
  {
    n: '04',
    title: 'Compound &',
    titleItalic: 'ship',
    body: 'When clinically indicated, prescriptions are prepared through our licensed 503A compounding pharmacy and shipped with clear instructions — California supply chain accountability from created to shipped.',
    image: {
      src: media.howStep04.src,
      alt: media.howStep04.alt,
      width: media.howStep04.width,
      height: media.howStep04.height,
      sizes: '(max-width: 1024px) 92vw, 50vw',
    },
    chips: ['503A pharmacy', 'Clear instructions', 'CA supply chain'],
    callout: {
      value: 'When indicated',
      label: 'Compounded medications are not FDA-approved drug products.',
    },
  },
  {
    n: '05',
    title: 'Start &',
    titleItalic: 'follow through',
    body: 'Care continues after delivery. Onboarding guidance, follow-up, and physician oversight keep your protocol accountable as your labs and goals evolve.',
    image: {
      src: media.howStep05.src,
      alt: media.howStep05.alt,
      width: media.howStep05.width,
      height: media.howStep05.height,
      sizes: '(max-width: 1024px) 92vw, 50vw',
    },
    chips: ['Onboarding support', 'Ongoing follow-up', 'Real accountability'],
  },
]

export const howWhy = [
  {
    image: media.brandLifestyle,
    title: 'Transparent & trusted',
    body: 'Licensed 503A compounding with clear clinical language — never vague wellness claims.',
  },
  {
    image: media.careJourney,
    title: 'Tailored personalized care',
    body: 'Protocols built around your labs and goals, decided with your physician.',
  },
  {
    image: media.heroLifestyle,
    title: 'Science-backed results',
    body: 'Clinically guided care designed for long-term optimization, not trends.',
  },
] as const

export const howStoryCards = [
  {
    step: '01',
    img: media.semaglutide,
    title: 'Metabolic Renewal',
    timeline: 'Month 3 · Semaglutide Protocol',
    quote: 'My physician adjusted my dosing based on bloodwork — not a template.',
    patient: 'Alex R.',
    location: 'California',
    metric: 'Biomarkers Tracked',
    focus: 'Physician Consult',
  },
  {
    step: '02',
    img: media.tirzepatide,
    title: 'Sustained Progress',
    timeline: 'Month 2 · Tirzepatide Protocol',
    quote: 'Clear instructions and direct communication with my care team.',
    patient: 'Morgan S.',
    location: 'California',
    metric: 'Custom Dosing',
    focus: 'Labs & Review',
  },
  {
    step: '03',
    img: media.packaging,
    title: 'Discreet Fulfillment',
    timeline: 'Month 4 · GLP-1 Care',
    quote: 'Fulfillment was calm, cold-chain shipped, and completely discreet.',
    patient: 'Blaze B.',
    location: 'California',
    metric: '503A Compounded',
    focus: 'Pharmacy Direct',
  },
  {
    step: '04',
    img: media.careStarts,
    title: 'Continuous Vitality',
    timeline: 'Month 6 · Full Optimization',
    quote: 'Ongoing physician check-ins kept my goals on track long term.',
    patient: 'Taylor H.',
    location: 'California',
    metric: 'Ongoing MD Oversight',
    focus: 'Long-Term Care',
  },
] as const

export const howFaqPreview = [
  {
    q: 'What is the difference between semaglutide and tirzepatide?',
    a: 'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors. Both may be used for chronic weight management when clinically appropriate, but eligibility, dosing, and side-effect profiles differ. Your licensed clinician determines which therapy — if any — is right for you.',
  },
  {
    q: 'Is a prescription guaranteed?',
    a: 'No. Prescription treatment is not guaranteed. Eligibility and treatment decisions are made solely by a licensed clinician based on your medical evaluation.',
  },
  {
    q: 'Are compounded GLP-1 therapies FDA-approved?',
    a: 'Compounded medications are not FDA-approved as finished branded products. They are prepared by licensed U.S. pharmacies under applicable federal and state standards when clinically appropriate and legally available.',
  },
  {
    q: 'Which costs are included in the monthly price?',
    a: 'The pricing page shows how Nexa Rx separates clinical program care from partner pharmacy costs. Your enrollment summary lists due today, recurring amount, consultation terms, medication, labs, supplies, shipping, follow-up visits, clinical messaging, and refill support before you pay.',
  },
  {
    q: 'How do I cancel a recurring treatment or supplement order?',
    a: 'You can cancel through your Patient Center or by contacting our support team. Cancellation terms, timing, and any non-refundable fees are shown before enrollment or purchase.',
  },
] as const

export const brandTagline = 'Clear pricing. Licensed clinicians. Ongoing support.'
