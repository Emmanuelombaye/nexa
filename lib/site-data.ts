export const siteUrl = 'https://nexamd.com'

export const treatmentLinks = [
  { href: '/semaglutide', label: 'Semaglutide' },
  { href: '/tirzepatide', label: 'Tirzepatide' },
]

export const shopLinks = [
  { href: '/supplements', label: 'Shop' },
  { href: '/supplements/subscribe-and-save', label: 'Subscribe & Save' },
  { href: '/supplements/order-support', label: 'Order Support' },
]

const priceTag = '$0 to start'
const priceSubline = 'Itemized quote before enrollment'
const priceNote =
  'Final price depends on prescribed therapy, dosage, pharmacy, shipping, and state. All charges and recurring terms are shown before enrollment.'

export const pricingModel = {
  eyebrow: 'How pricing works',
  headline: 'See every charge before you enroll.',
  lede:
    'Nexa Rx separates clinical program care from partner pharmacy fulfillment. You review a full itemized summary — due today, recurring terms, labs, and supplies — before confirming enrollment.',
  principles: [
    {
      title: '$0 to begin',
      text: 'Start eligibility at no cost. You are not charged for ongoing program care until you review and accept your enrollment summary.',
    },
    {
      title: 'Pay only if prescribed',
      text: 'If a clinician determines you are not eligible, you are not enrolled in ongoing program billing.',
    },
    {
      title: 'Itemized before checkout',
      text: 'Due today, recurring amount, consultation terms, medication, labs, shipping, and cancellation policy appear in one summary.',
    },
    {
      title: 'No hidden renewals',
      text: 'Subscription frequency, renewal amount, and how to cancel are shown before payment — the same standard used by leading telehealth platforms.',
    },
  ],
  buckets: [
    {
      title: 'Clinical program care',
      note: 'Evaluation, messaging, refill coordination, and follow-up cadence.',
      includes: [
        'Licensed clinician evaluation when medically appropriate',
        'Secure clinical messaging during active care',
        'Refill review and treatment monitoring',
      ],
    },
    {
      title: 'Prescription & pharmacy',
      note: 'Billed through the applicable licensed U.S. pharmacy channel.',
      includes: [
        'Prescription cost varies by therapy and dosage',
        '503A or 503B fulfillment as applicable to your plan',
        'Discreet delivery where legally available',
      ],
    },
    {
      title: 'Labs & supplies',
      note: 'Shown in your enrollment summary when clinically required.',
      includes: [
        'Baseline and follow-up labs when indicated',
        'Administration supplies when part of your plan',
        'Shipping terms confirmed before enrollment',
      ],
    },
  ],
  disclaimer:
    'Prescription treatment is not guaranteed. Pricing varies by program, therapy, pharmacy, and state. Confirm your itemized quote during eligibility review.',
}

export const pricingBeforeEnrollment = [
  'Due today amount',
  'Monthly recurring program fee and billing frequency',
  'Clinical evaluation / consultation terms',
  'Prescription and pharmacy cost',
  'Lab fees and frequency (if required)',
  'Supplies and shipping',
  'Follow-up visits and clinical messaging',
  'Cancellation timing and any non-refundable fees',
  'State, therapy, and eligibility limitations',
]

export const pricingComparison = {
  headers: ['', 'Semaglutide', 'Tirzepatide'],
  rows: [
    { label: 'Due today to start', values: ['$0', '$0'] },
    { label: 'Clinical evaluation', values: ['Included if prescribed*', 'Included if prescribed*'] },
    { label: 'Ongoing messaging', values: ['Yes', 'Yes'] },
    { label: 'Refill coordination', values: ['Monthly review', 'Monthly review'] },
    { label: 'Labs', values: ['When indicated', 'When indicated'] },
    { label: 'Prescription cost', values: ['Separate line item', 'Separate line item'] },
    { label: 'Monthly total', values: ['Personalized quote', 'Personalized quote'] },
  ],
}

export const programs = [
  {
    slug: 'semaglutide',
    navLabel: 'Semaglutide',
    category: 'GLP-1 WEIGHT MANAGEMENT',
    title: 'Clinician-Guided Semaglutide Therapy',
    description:
      'Online medical evaluation for semaglutide-based weight management. When prescribed, treatment is fulfilled by a licensed U.S. pharmacy with ongoing clinical support. Availability varies by state.',
    price: priceTag,
    priceSubline,
    priceNote,
    highlights: [
      'GLP-1 therapy evaluated by a licensed clinician — not sold over the counter',
      'FDA-approved brand options or compounded semaglutide when clinically appropriate',
      'Monthly refill review, secure messaging, and clear pricing before enrollment',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Semaglutide is a GLP-1 receptor agonist prescribed for chronic weight management when medically appropriate.',
        'Your clinician may prescribe FDA-approved products (such as Wegovy or Ozempic, when indicated) or compounded semaglutide where legally available.',
        'Specific product, dose, and formulation are confirmed after clinical evaluation — not before checkout.',
      ],
    },
    ongoingCare: {
      followUp: 'Licensed clinician review via secure messaging, typically within 2 business days.',
      refills: 'Refill review every 30 days when clinically appropriate.',
      labs: 'Baseline labs when indicated; follow-up labs every 3–6 months based on your care plan.',
      messaging: 'Clinical messaging included in the active program.',
    },
  },
  {
    slug: 'tirzepatide',
    navLabel: 'Tirzepatide',
    category: 'GLP-1 / GIP WEIGHT MANAGEMENT',
    title: 'Clinician-Guided Tirzepatide Therapy',
    description:
      'Online medical evaluation for tirzepatide-based weight management. Dual GLP-1/GIP therapy when clinically appropriate, fulfilled by a licensed U.S. pharmacy. Availability varies by state.',
    price: priceTag,
    priceSubline,
    priceNote,
    highlights: [
      'Dual-action GLP-1/GIP therapy evaluated by a licensed clinician',
      'FDA-approved brand options or compounded tirzepatide when clinically appropriate',
      'Ongoing titration support, refill coordination, and transparent pricing before enrollment',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Tirzepatide activates both GLP-1 and GIP receptors and may be prescribed for chronic weight management when medically appropriate.',
        'Your clinician may prescribe FDA-approved products (such as Zepbound or Mounjaro, when indicated) or compounded tirzepatide where legally available.',
        'Dosing, titration, and formulation follow your clinician’s plan — preference alone does not determine treatment.',
      ],
    },
    ongoingCare: {
      followUp: 'Licensed clinician review via secure messaging, typically within 2 business days.',
      refills: 'Refill review every 30 days when clinically appropriate.',
      labs: 'Baseline labs when indicated; follow-up labs every 3–6 months based on your care plan.',
      messaging: 'Clinical messaging included in the active program.',
    },
  },
]

export const careSteps = [
  {
    n: '01',
    title: 'Choose a care program',
    text: 'Select semaglutide or tirzepatide weight-management therapy based on your goals and clinical eligibility.',
  },
  {
    n: '02',
    title: 'Complete secure intake',
    text: 'Provide medical information inside the secure clinical portal — not on the public marketing site.',
  },
  {
    n: '03',
    title: 'Meet a licensed clinician',
    text: 'The clinician reviews medical history, symptoms, labs when required, and treatment eligibility.',
  },
  {
    n: '04',
    title: 'Receive a clinical decision',
    text: 'A prescription is issued only when medically appropriate. Treatment is not guaranteed.',
  },
  {
    n: '05',
    title: 'Pharmacy fulfillment',
    text: 'When prescribed, medication is dispensed by the applicable licensed pharmacy and shipped where legally available.',
  },
  {
    n: '06',
    title: 'Ongoing care',
    text:
      'Follow-up visits, clinical messaging, refill coordination, and lab cadence are defined in your program plan — including monthly refill review and periodic labs for both semaglutide and tirzepatide therapy.',
  },
]

export const pricingPrograms = [
  {
    slug: 'semaglutide',
    title: 'Semaglutide Therapy',
    subtitle: 'Clinician-guided GLP-1 weight management with semaglutide when clinically appropriate',
    pricingModel: 'Program care + partner pharmacy',
    dueToday: '$0',
    dueTodayNote: 'Charged for ongoing care only after you review and accept your enrollment summary.',
    included: [
      'Clinical evaluation when prescribed',
      'Ongoing messaging and refill coordination',
      'Follow-up visits when clinically appropriate',
    ],
    billedSeparately: [
      'Prescription cost (partner pharmacy)',
      'Labs when clinically required',
      'Monthly program total in enrollment summary',
    ],
    costDrivers: ['Prescribed therapy', 'Dosage', 'Pharmacy channel', 'State'],
    recurring: 'Personalized monthly total shown before enrollment',
    consultationFee:
      'Included when prescribed. A non-refundable evaluation fee applies only if a clinician determines you are not eligible — amount shown before checkout.',
    medicationCost: 'Separate line item based on prescribed semaglutide product, dosage, and pharmacy.',
    labCost: 'Shown before enrollment when ordered through the partner clinical network.',
    shippingCost: 'Discreet delivery and supplies included when listed in your enrollment summary.',
    supportInclusions:
      'Ongoing follow-up visits, clinical titration planning, clinical messaging, and monthly refill support when clinically appropriate.',
    cancellation: 'Cancel anytime via the Patient Center prior to your next recurring billing cycle.',
    limitations:
      'Availability varies by state, clinical evaluation outcome, prescribed therapy, and applicable pharmacy rules.',
  },
  {
    slug: 'tirzepatide',
    title: 'Tirzepatide Therapy',
    subtitle: 'Clinician-guided GLP-1/GIP weight management with tirzepatide when clinically appropriate',
    pricingModel: 'Program care + partner pharmacy',
    dueToday: '$0',
    dueTodayNote: 'Charged for ongoing care only after you review and accept your enrollment summary.',
    included: [
      'Clinical evaluation when prescribed',
      'Ongoing messaging and refill coordination',
      'Follow-up visits when clinically appropriate',
    ],
    billedSeparately: [
      'Prescription cost (partner pharmacy)',
      'Labs when clinically required',
      'Monthly program total in enrollment summary',
    ],
    costDrivers: ['Prescribed therapy', 'Dosage', 'Pharmacy channel', 'State'],
    recurring: 'Personalized monthly total shown before enrollment',
    consultationFee:
      'Included when prescribed. A non-refundable evaluation fee applies only if a clinician determines you are not eligible — amount shown before checkout.',
    medicationCost: 'Separate line item based on prescribed tirzepatide product, dosage, and pharmacy.',
    labCost: 'Shown before enrollment when ordered through the partner clinical network.',
    shippingCost: 'Discreet delivery and supplies included when listed in your enrollment summary.',
    supportInclusions:
      'Ongoing follow-up visits, clinical titration planning, clinical messaging, and monthly refill support when clinically appropriate.',
    cancellation: 'Cancel anytime via the Patient Center prior to your next recurring billing cycle.',
    limitations:
      'Availability varies by state, clinical evaluation outcome, prescribed therapy, and applicable pharmacy rules.',
  },
]

export const stateAvailabilityNote =
  'Availability is updated by clinical operations and may change based on licensure, pharmacy rules, and prescribed therapy. Confirm your state and program during eligibility review.'

const coreStates =
  'AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC'

export const programStateAvailability = [
  {
    slug: 'semaglutide',
    label: 'Semaglutide',
    summary: 'Broad availability across the U.S. with state-specific prescribing and pharmacy rules.',
    groups: [{ status: 'available', states: [coreStates] }],
  },
  {
    slug: 'tirzepatide',
    label: 'Tirzepatide',
    summary: 'Broad availability across the U.S. with state-specific prescribing and pharmacy rules.',
    groups: [{ status: 'available', states: [coreStates] }],
  },
]

export const stateAvailabilityBySlug: Record<string, typeof programStateAvailability[number]> = Object.fromEntries(
  programStateAvailability.map((program) => [program.slug, program])
)

export function getProgramAvailabilityStatus(slug: string, stateInput: string): 'available' | 'review' | 'unavailable' | null {
  const program = stateAvailabilityBySlug[slug]
  if (!program || !stateInput?.trim()) return null

  const state = stateInput.trim().toUpperCase()
  for (const group of program.groups) {
    const states = group.states.flatMap((entry) => entry.split(',').map((s) => s.trim()))
    if (states.includes(state)) return group.status as 'available' | 'review' | 'unavailable'
  }

  return 'unavailable'
}

export const medicalTeamRoles = [
  {
    title: 'Clinical leadership',
    text: 'Licensed clinicians oversee evaluation standards, prescribing protocols, and patient safety across all care programs.',
  },
  {
    title: 'Licensed clinicians',
    text: 'Board-certified or licensed physicians and advanced practice providers conduct medical evaluations and make treatment decisions.',
  },
  {
    title: 'Care coordination',
    text: 'Patient care coordinators help with intake, scheduling, refill coordination, and routing clinical questions to the care team.',
  },
  {
    title: 'Pharmacy partnerships',
    text: 'Prescriptions are sent to appropriately licensed U.S. pharmacies. Nexa Rx is not the dispensing pharmacy.',
  },
  {
    title: 'Privacy & compliance',
    text: 'Medical intake and records stay in the secure clinical portal. Health information is not shared with advertising platforms.',
  },
]

export const faqItems = [
  {
    q: 'What is the difference between semaglutide and tirzepatide?',
    a: 'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors. Both may be used for chronic weight management when clinically appropriate, but eligibility, dosing, and side-effect profiles differ. Your licensed clinician determines which therapy — if any — is right for you.',
  },
  {
    q: 'Are brand names like Wegovy, Ozempic, Zepbound, or Mounjaro prescribed?',
    a: 'Your clinician may prescribe FDA-approved brand products when medically appropriate and available, or compounded semaglutide or tirzepatide where legally permitted. The specific product is confirmed after your evaluation — not before enrollment.',
  },
  {
    q: 'Are compounded GLP-1 therapies FDA-approved?',
    a: 'Compounded medications are not FDA-approved as finished branded products. They are prepared by licensed U.S. pharmacies under applicable federal and state standards when clinically appropriate and legally available.',
  },
  {
    q: 'Which treatments use FDA-approved medications?',
    a: 'Our clinicians may prescribe FDA-approved semaglutide or tirzepatide products and, where appropriate, compounded alternatives. Your clinician will explain the status of any medication prescribed to you.',
  },
  {
    q: 'Which costs are included in the monthly price?',
    a: 'The pricing page shows how Nexa Rx separates clinical program care from partner pharmacy costs. Your enrollment summary lists due today, recurring amount, consultation terms, medication, labs, supplies, shipping, follow-up visits, clinical messaging, and refill support before you pay.',
  },
  {
    q: 'Is a prescription guaranteed?',
    a: 'No. Prescription treatment is not guaranteed. Eligibility and treatment decisions are made solely by a licensed clinician based on your medical evaluation.',
  },
  {
    q: 'Which states are currently supported?',
    a: 'Semaglutide and tirzepatide programs are available in most U.S. states, subject to licensure and pharmacy rules. See the state availability section on the Pricing page and confirm your state during eligibility review.',
  },
  {
    q: 'Are supplements part of my prescription treatment plan?',
    a: 'No. Dietary supplements are non-prescription products sold separately from medical treatment. Purchasing supplements does not affect your clinical eligibility or prescribing decisions.',
  },
  {
    q: 'Can I buy supplements without becoming a Nexa Rx patient?',
    a: 'Yes. Supplements are available through our Shop without a clinical intake or prescription.',
  },
  {
    q: 'How do I cancel a recurring treatment or supplement order?',
    a: 'You can cancel through your Patient Center or by contacting our support team. Cancellation terms, timing, and any non-refundable fees are shown before enrollment or purchase.',
  },
  {
    q: 'Where is my medical information collected and stored?',
    a: 'All medical intake occurs inside a secure clinical portal — not on the public marketing website. Health information is not shared with advertising platforms.',
  },
]

const supplementContact = {
  questions: 'supplements@nexamd.com',
  adverseEvents: 'adverse-events@nexamd.com',
  phone: '775-262-9279',
}

const supplementManufacturer = {
  name: 'Nexa Wellness Labs, LLC',
  address: '1200 Harbor Center Dr, Suite 400, Tampa, FL 33602',
}

export const supplements = [
  {
    slug: 'metabolic-support',
    name: 'Metabolic Support Daily',
    category: 'Dietary Supplement',
    oneTimePrice: '$59',
    subscribePrice: '$49',
    renewal: 'Every 30 days',
    description: 'Daily dietary supplement with berberine, chromium, and alpha lipoic acid.',
    servingSize: '2 capsules',
    servingsPerContainer: 30,
    netQuantity: '60 capsules (30-day supply)',
    ingredients: [
      { name: 'Berberine HCl', amount: '500 mg', dailyValue: '†' },
      { name: 'Chromium (as chromium picolinate)', amount: '200 mcg', dailyValue: '571%' },
      { name: 'Alpha Lipoic Acid', amount: '300 mg', dailyValue: '†' },
    ],
    otherIngredients: 'Vegetable cellulose (capsule), rice flour, magnesium stearate.',
    directions: 'Adults take 2 capsules daily with food, or as directed by your healthcare professional.',
    warnings:
      'Keep out of reach of children. Do not use if pregnant, nursing, or under 18 without physician guidance. Consult your physician before use if you take medication or have a medical condition.',
    allergens: 'Manufactured in a facility that also processes soy, tree nuts, and dairy.',
    storage: 'Store in a cool, dry place. Keep lid tightly closed.',
    ageRestriction: 'Adults 18+',
    manufacturer: supplementManufacturer,
    distributor: supplementManufacturer,
    returnPolicy: 'Unopened products may be returned within 30 days of delivery. Opened products are not eligible for return.',
    shippingTerms: 'Orders ship within 2 business days. Standard U.S. shipping 3–7 business days.',
    contact: supplementContact,
    facts: ['Serving Size: 2 capsules', 'Servings Per Container: 30', 'Key ingredients: berberine complex, chromium, alpha lipoic acid'],
  },
  {
    slug: 'sleep-recovery',
    name: 'Sleep + Recovery Complex',
    category: 'Dietary Supplement',
    oneTimePrice: '$54',
    subscribePrice: '$45',
    renewal: 'Every 30 days',
    description: 'Nighttime dietary supplement with magnesium glycinate, L-theanine, and apigenin.',
    servingSize: '2 capsules',
    servingsPerContainer: 30,
    netQuantity: '60 capsules (30-day supply)',
    ingredients: [
      { name: 'Magnesium (as magnesium glycinate)', amount: '200 mg', dailyValue: '48%' },
      { name: 'L-Theanine', amount: '200 mg', dailyValue: '†' },
      { name: 'Apigenin', amount: '50 mg', dailyValue: '†' },
    ],
    otherIngredients: 'Vegetable cellulose (capsule), rice flour, silica.',
    directions: 'Adults take 2 capsules 30–60 minutes before bedtime, or as directed by your healthcare professional.',
    warnings:
      'May cause drowsiness. Do not drive or operate machinery after taking. Not for use under 18. Consult your physician if pregnant, nursing, or taking sedatives.',
    allergens: 'Free from major allergens. Manufactured in a facility that processes soy.',
    storage: 'Store in a cool, dry place away from light.',
    ageRestriction: 'Adults 18+',
    manufacturer: supplementManufacturer,
    distributor: supplementManufacturer,
    returnPolicy: 'Unopened products may be returned within 30 days of delivery. Opened products are not eligible for return.',
    shippingTerms: 'Orders ship within 2 business days. Standard U.S. shipping 3–7 business days.',
    contact: supplementContact,
    facts: ['Serving Size: 2 capsules', 'Servings Per Container: 30', 'Key ingredients: magnesium glycinate, L-theanine, apigenin'],
  },
]
