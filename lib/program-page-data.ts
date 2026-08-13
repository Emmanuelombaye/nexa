import { YUCCA } from './home-data'

const PROTOCOL_ICON_WAVE = 'wave'
const PROTOCOL_ICON_PATH = 'path'
const PROTOCOL_ICON_LINES = 'lines'

export type ProgramSlug = 'semaglutide' | 'tirzepatide'

export type ProgramExploreContent = {
  slug: ProgramSlug
  card: 'wl'
  cardTitle: string
  chip: string
  blurb: string
  priceBadge: string
  priceBadgeAlt: string
  productThumb: string
  productName: string
  productDesc: string
  alternateProduct: { href: string; thumb: string; name: string; desc: string }
  vialImage: string
  protocol: {
    heading: string
    sub: string
    vials: string
    cards: { icon: string; title: string; body: string }[]
  }
  clinical: {
    eyebrow: string
    heading: string[]
    paragraphs: string[]
    vialImage: string
    secondaryVial?: string
  }
  expect: {
    title: string
    sub: string
    weeks: { tag: string; text: string; img: string }[]
  }
  faqs: { q: string; a: string }[]
  alternate: { slug: ProgramSlug; label: string; href: string; teaser: string }
}

const SHARED_EXPECT = {
  title: 'What to expect, week by week with your GLP-1 treatment',
  sub: "No guesswork. Here's how the first months typically look for patients in the program. Individual experiences vary.",
  weeks: [
    {
      tag: 'Week 1 → 4 · Your body is adjusting',
      text: 'You start on a low dose — intentionally. Your treatment is introduced gradually so your body can adapt. Some patients notice appetite changes early; others take a few more weeks. Both are normal. Your clinician is available throughout.',
      img: `${YUCCA}/GLP1-Retro/expect-week-1-4.avif`,
    },
    {
      tag: 'Week 4 → 12 · The protocol starts to settle',
      text: 'As titration continues, your clinician monitors how you respond. Appetite signals and dosing may be adjusted based on your individual course — experiences vary, and treatment is not guaranteed to produce a specific outcome.',
      img: `${YUCCA}/GLP1-Retro/expect-week-4-12.avif`,
    },
    {
      tag: 'Month 3+ · Calibrated to you',
      text: 'Your clinician fine-tunes your plan with real precision based on your response. The focus shifts from adjustment to consistency, and maintainable progress becomes the rhythm.',
      img: `${YUCCA}/GLP1-Retro/expect-month-3.avif`,
    },
  ],
}

export const PROGRAM_EXPLORE: Record<ProgramSlug, ProgramExploreContent> = {
  semaglutide: {
    slug: 'semaglutide',
    card: 'wl',
    cardTitle: 'Personalized Semaglutide',
    chip: 'GLP-1',
    blurb:
      'A weekly GLP-1 injection designed to support appetite regulation and steady weight management through a single clinically studied pathway.',
    priceBadge: '',
    priceBadgeAlt: 'Starting at $0 to begin — itemized quote before enrollment',
    productThumb: `${YUCCA}/expt-wl-sema.jpg`,
    productName: 'GLP-1 (Semaglutide)',
    productDesc: 'Weekly GLP-1 pathway.',
    alternateProduct: {
      href: '/tirzepatide',
      thumb: `${YUCCA}/expt-wl-tirz.jpg`,
      name: 'GLP-1 + GIP (Tirzepatide)',
      desc: 'Dual-pathway option.',
    },
    vialImage: `${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
    protocol: {
      heading: "Your body isn't working against you. It just needs the right signal.",
      sub: 'Semaglutide works through the GLP-1 pathway your body already uses to regulate hunger — with dosing reviewed by a licensed clinician.',
      vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
      cards: [
        {
          icon: PROTOCOL_ICON_WAVE,
          title: "Targets the hormone that tells your brain you're full.",
          body: 'GLP-1 medications mimic the signal that travels to your brain after you eat. The result is a clearer, more consistent message to stop eating.',
        },
        {
          icon: PROTOCOL_ICON_PATH,
          title: 'Slows down how fast food leaves your stomach.',
          body: 'Treatment reduces the rate at which your stomach empties after a meal. Fullness lasts longer — and hunger returns more slowly.',
        },
        {
          icon: PROTOCOL_ICON_LINES,
          title: 'Recalibrates your hunger system — not shuts it down.',
          body: 'With structured dosing reviewed by your provider, GLP-1 therapy helps restore a more balanced hormonal response to food over time.',
        },
      ],
    },
    clinical: {
      eyebrow: 'Personalized Semaglutide · GLP-1',
      heading: ['A clinically studied', 'approach to weight', 'management.'],
      paragraphs: [
        'Semaglutide acts on a single GLP-1 pathway — a foundation for gradual, sustainable progress when medically appropriate.',
        'Your dosing protocol is reviewed and prescribed by a licensed U.S. provider, adjusted as you progress.',
      ],
      vialImage: `${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
      secondaryVial: `${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
    },
    expect: SHARED_EXPECT,
    faqs: [
      {
        q: 'What is semaglutide?',
        a: 'Semaglutide is a GLP-1 receptor agonist prescribed for chronic weight management when medically appropriate. At Nexa Rx, every protocol is reviewed by a licensed clinician and built around your history and goals.',
      },
      {
        q: 'How is semaglutide different from tirzepatide?',
        a: 'Semaglutide targets the GLP-1 pathway. Tirzepatide activates both GLP-1 and GIP receptors. Your clinician reviews your health history to determine which therapy may be appropriate for you.',
      },
      {
        q: 'Who may qualify for semaglutide?',
        a: 'Eligibility is determined by a licensed provider based on your medical history, current health, and goals. Treatment is not right for everyone — care begins with clinical review, not checkout.',
      },
      {
        q: 'How does the prescription process work?',
        a: 'Complete a secure intake, verify identity when required, and connect with a licensed provider. If approved, your prescription is filled by a licensed U.S. pharmacy and shipped discreetly.',
      },
      {
        q: 'What should I know about side effects?',
        a: 'Side effects vary by person. Nausea, constipation, or digestive discomfort may occur especially while adjusting. Your clinician explains what to watch for and can adjust your protocol if needed.',
      },
      {
        q: 'Are compounded medications FDA-approved?',
        a: 'Compounded semaglutide is not an FDA-approved finished branded product. When clinically appropriate, your clinician may prescribe FDA-approved brand products or compounded formulations — confirmed before enrollment.',
      },
    ],
    alternate: {
      slug: 'tirzepatide',
      label: 'Tirzepatide',
      href: '/tirzepatide',
      teaser: 'Explore dual GLP-1 + GIP therapy →',
    },
  },
  tirzepatide: {
    slug: 'tirzepatide',
    card: 'wl',
    cardTitle: 'Personalized Tirzepatide',
    chip: 'Dual Pathway',
    blurb:
      'A weekly dual-action GLP-1 + GIP injection for appetite regulation support when clinically appropriate.',
    priceBadge: '',
    priceBadgeAlt: 'Starting at $0 to begin — itemized quote before enrollment',
    productThumb: `${YUCCA}/expt-wl-tirz.jpg`,
    productName: 'GLP-1 + GIP (Tirzepatide)',
    productDesc: 'Dual-pathway weekly support.',
    alternateProduct: {
      href: '/semaglutide',
      thumb: `${YUCCA}/expt-wl-sema.jpg`,
      name: 'GLP-1 (Semaglutide)',
      desc: 'Weekly GLP-1 pathway.',
    },
    vialImage: `${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
    protocol: {
      heading: 'Dual pathways. One provider-guided protocol.',
      sub: 'Tirzepatide activates GLP-1 and GIP receptors — supporting appetite regulation through a broader metabolic signal when your clinician determines it is appropriate.',
      vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
      cards: [
        {
          icon: PROTOCOL_ICON_WAVE,
          title: 'Dual receptor support for appetite regulation.',
          body: 'Tirzepatide works on GLP-1 and GIP pathways — designed for patients who may benefit from stronger appetite and metabolic signaling.',
        },
        {
          icon: PROTOCOL_ICON_PATH,
          title: 'Structured titration with clinical oversight.',
          body: 'Dosing starts low and increases gradually under licensed provider review — giving your body time to adapt safely.',
        },
        {
          icon: PROTOCOL_ICON_LINES,
          title: 'Built around your response — not a template.',
          body: 'Your care team adjusts the protocol based on how you respond, with secure messaging and refill review included in active care.',
        },
      ],
    },
    clinical: {
      eyebrow: 'Personalized Tirzepatide · GLP-1 + GIP',
      heading: ['A dual-action', 'approach to weight', 'management.'],
      paragraphs: [
        'Tirzepatide activates both GLP-1 and GIP receptors for stronger appetite regulation and a broader metabolic response when medically appropriate.',
        'Your dosing protocol is reviewed and prescribed by a licensed U.S. provider, adjusted as you progress.',
      ],
      vialImage: `${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
      secondaryVial: `${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
    },
    expect: SHARED_EXPECT,
    faqs: [
      {
        q: 'What is tirzepatide?',
        a: 'Tirzepatide is a dual GLP-1/GIP receptor agonist that may be prescribed for chronic weight management when medically appropriate. Nexa Rx connects you with licensed clinicians for evaluation and ongoing support.',
      },
      {
        q: 'How is tirzepatide different from semaglutide?',
        a: 'Tirzepatide activates GLP-1 and GIP receptors. Semaglutide focuses on the GLP-1 pathway. Your clinician recommends therapy based on your history, goals, and clinical fit.',
      },
      {
        q: 'Who may qualify for tirzepatide?',
        a: 'Eligibility is determined by a licensed provider after reviewing your medical history and symptoms. Treatment is not guaranteed and varies by state.',
      },
      {
        q: 'How does the prescription process work?',
        a: 'Complete secure intake, verify identity when required, and receive a licensed provider review — typically within 24 hours. If approved, pharmacy fulfillment and discreet delivery follow.',
      },
      {
        q: 'What should I know about side effects?',
        a: 'Side effects vary. Nausea, digestive changes, or appetite shifts may occur during titration. Your clinician monitors your response and adjusts dosing when needed.',
      },
      {
        q: 'Are compounded medications FDA-approved?',
        a: 'Compounded tirzepatide is not an FDA-approved finished branded product. Your clinician may prescribe FDA-approved brands or compounded formulations where legally available — confirmed before you enroll.',
      },
    ],
    alternate: {
      slug: 'semaglutide',
      label: 'Semaglutide',
      href: '/semaglutide',
      teaser: 'Explore GLP-1 semaglutide therapy →',
    },
  },
}

export function getProgramExploreContent(slug: string): ProgramExploreContent | null {
  if (slug === 'semaglutide' || slug === 'tirzepatide') return PROGRAM_EXPLORE[slug]
  return null
}

export const PROGRAM_INCLUDES = [
  'Licensed clinician evaluation',
  'Secure patient portal access',
  'Refill review & coordination',
  'Discreet home delivery',
] as const

export { PROTOCOL_ICON_WAVE, PROTOCOL_ICON_PATH, PROTOCOL_ICON_LINES }
