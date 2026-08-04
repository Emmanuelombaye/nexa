export const siteUrl = 'https://nexamd.com'

export const treatmentLinks = [
  { href: '/medical-weight-loss', label: 'Medical Weight Loss' },
  { href: '/mens-hormone-health', label: "Men's Hormone Health" },
  { href: '/womens-hormone-health', label: "Women's Hormone Health" },
  { href: '/peptide-therapy', label: 'Peptide Therapy' },
]

export const shopLinks = [
  { href: '/supplements', label: 'All Supplements' },
  { href: '/supplements/bundles', label: 'Bundles' },
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
  headers: ['', 'Weight', "Men's", "Women's", 'Peptides'],
  rows: [
    { label: 'Due today to start', values: ['$0', '$0', '$0', '$0'] },
    { label: 'Clinical evaluation', values: ['Included if prescribed*', 'Included if prescribed*', 'Included if prescribed*', 'Included if prescribed*'] },
    { label: 'Ongoing messaging', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
    { label: 'Refill coordination', values: ['Monthly review', 'Monthly review', 'Monthly review', 'Before each renewal'] },
    { label: 'Labs', values: ['When indicated', 'Required at baseline', 'When indicated', 'When indicated'] },
    { label: 'Prescription cost', values: ['Separate line item', 'Separate line item', 'Separate line item', 'Separate line item'] },
    { label: 'Monthly total', values: ['Personalized quote', 'Personalized quote', 'Personalized quote', 'Personalized quote'] },
  ],
}

export const programs = [
  {
    slug: 'medical-weight-loss',
    navLabel: 'Medical Weight Loss',
    category: 'MEDICAL WEIGHT LOSS',
    title: 'Clinician-Guided Weight Management',
    description: 'Personalized medical evaluation with approved medication options.',
    price: priceTag,
    priceSubline,
    priceNote,
    highlights: [
      'Program-first care, not drug-first merchandising',
      'Approved medication options based on clinical evaluation',
      'Ongoing clinical support and clear pricing before enrollment',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Your clinician may prescribe FDA-approved medication options when medically appropriate.',
        'Specific products and indications are confirmed after clinical evaluation — not before.',
        'Compounded alternatives are only considered when clinically appropriate and legally available.',
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
    slug: 'mens-hormone-health',
    navLabel: "Men's Hormone Health",
    category: "MEN'S HORMONE HEALTH",
    title: 'Testosterone Evaluation & Care',
    description: 'Evaluation based on symptoms, medical history, and lab results.',
    price: priceTag,
    priceSubline,
    priceNote,
    highlights: [
      'Care begins with evaluation, not a predetermined prescription',
      'Symptoms, history, and labs reviewed by a licensed clinician',
      'Follow-up and refill support included in the active program',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Testosterone and related therapies are prescribed only when clinically indicated.',
        'Your clinician explains whether a prescribed option is FDA-approved or compounded.',
        'Labs and monitoring guide dosing — preference alone does not determine treatment.',
      ],
    },
    ongoingCare: {
      followUp: 'Follow-up visit at 6–12 weeks, then every 3–6 months when clinically indicated.',
      refills: 'Refill review every 30 days after treatment begins.',
      labs: 'Baseline labs required; repeat labs at 6–12 weeks and every 6 months when indicated.',
      messaging: 'Licensed clinician messaging within 2 business days during active care.',
    },
  },
  {
    slug: 'womens-hormone-health',
    navLabel: "Women's Hormone Health",
    category: "WOMEN'S HORMONE HEALTH",
    title: 'Menopause & Hormone Care',
    description:
      'Personalized evaluation and treatment options based on symptoms, medical history, and lab results.',
    price: priceTag,
    priceSubline,
    priceNote,
    highlights: [
      'Personalized menopause and hormone evaluation',
      'Treatment options based on symptoms, history, and labs',
      'Clear pricing and ongoing clinical support',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Hormone therapies are selected after evaluation of symptoms, history, and labs.',
        'Your clinician reviews FDA-approved and, when appropriate, compounded options.',
        'Treatment plans are individualized — not ordered from a fixed product menu.',
      ],
    },
    ongoingCare: {
      followUp: 'Symptom review at 4–6 weeks, then periodic check-ins based on your care plan.',
      refills: 'Refill review every 30 days when clinically appropriate.',
      labs: 'Labs ordered when clinically indicated at baseline and follow-up.',
      messaging: 'Licensed clinician messaging within 2 business days during active care.',
    },
  },
  {
    slug: 'peptide-therapy',
    navLabel: 'Peptide Therapy',
    category: 'LONGEVITY / RECOVERY THERAPY',
    title: 'Clinician-Prescribed Peptide Therapy',
    description:
      'Online medical evaluation for select peptide therapies. When prescribed, treatment is fulfilled by a qualified U.S. compounding pharmacy or outsourcing facility, as applicable. Availability varies by therapy and state.',
    price: 'Starting at $[VERIFIED]/month*',
    priceSubline,
    priceNote,
    highlights: [
      'Prescription-only peptide therapies for eligible patients',
      'Nexa Rx does not sell research-use-only products',
      'Fulfilled through applicable licensed U.S. pharmacy channels',
    ],
    medicationStatus: {
      title: 'Medication status',
      points: [
        'Peptide therapies require medical evaluation and a valid prescription.',
        'Compounded peptides are not FDA-approved as finished branded products.',
        'Fulfillment may use a 503A compounding pharmacy or 503B outsourcing facility, as applicable.',
      ],
    },
    ongoingCare: {
      followUp: 'Clinician review at 4–8 weeks after starting therapy, then per your prescribed plan.',
      refills: 'Refill coordinator confirms renewal before each billing cycle.',
      labs: 'Labs reviewed when clinically indicated for the prescribed therapy.',
      messaging: 'Treatment monitoring and clinical messaging included in active membership.',
    },
  },
]

export const careSteps = [
  {
    n: '01',
    title: 'Choose a care program',
    text: "Select medical weight management, men's hormone health, women's hormone health, or peptide therapy.",
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
      'Follow-up visits, clinical messaging, refill coordination, and lab cadence are defined in your program plan — weight management includes monthly refill review and periodic labs; hormone programs include scheduled follow-ups and lab monitoring; peptide therapy includes therapy-specific review before each renewal.',
  },
]

export const pricingPrograms = [
  {
    slug: 'medical-weight-loss',
    title: 'Weight Management Program',
    subtitle: 'Clinician-guided weight management with approved medication options when clinically appropriate',
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
    medicationCost: 'Separate line item based on prescribed therapy, dosage, and pharmacy.',
    labCost: 'Shown before enrollment when ordered through the partner clinical network.',
    shippingCost: 'Discreet delivery and supplies included when listed in your enrollment summary.',
    supportInclusions:
      'Ongoing follow-up visits, clinical titration planning, clinical messaging, and monthly refill support when clinically appropriate.',
    cancellation: 'Cancel anytime via the Patient Center prior to your next recurring billing cycle.',
    limitations:
      'Availability varies by state, clinical evaluation outcome, prescribed therapy, and applicable pharmacy rules.',
  },
  {
    slug: 'mens-hormone-health',
    title: "Men's Hormone Health",
    subtitle: 'Testosterone evaluation, treatment options, and clinical monitoring',
    pricingModel: 'Program care + partner pharmacy',
    dueToday: '$0',
    dueTodayNote: 'Charged for ongoing care only after you review and accept your enrollment summary.',
    included: [
      'Clinical evaluation when prescribed',
      'Licensed clinician dosing review',
      'Ongoing messaging during active care',
    ],
    billedSeparately: [
      'Prescription cost (partner pharmacy)',
      'Required lab panels and follow-up labs',
      'Monthly program total in enrollment summary',
    ],
    costDrivers: ['Prescribed therapy', 'Dosage', 'Lab cadence', 'State'],
    recurring: 'Personalized monthly total shown before enrollment',
    consultationFee:
      'Included in active monthly care when prescribed. A non-refundable evaluation fee applies if not eligible — amount shown before checkout.',
    medicationCost: 'Separate line item based on prescribed therapy and dosage.',
    labCost: 'Lab diagnostics required — costs and frequency shown before enrollment.',
    shippingCost: 'Discreet delivery and necessary supplies included when listed in your enrollment summary.',
    supportInclusions:
      'Ongoing lab monitoring, licensed clinician dosing review, and clinical messaging during active care.',
    cancellation: 'No long-term contracts. Cancel prior to the next billing cycle.',
    limitations:
      'Patient must be 18+. Availability varies by state, clinical indication, and applicable pharmacy rules.',
  },
  {
    slug: 'womens-hormone-health',
    title: "Women's Hormone Health",
    subtitle: 'Menopause and hormone evaluation with personalized treatment options',
    pricingModel: 'Program care + partner pharmacy',
    dueToday: '$0',
    dueTodayNote: 'Charged for ongoing care only after you review and accept your enrollment summary.',
    included: [
      'Clinical evaluation when prescribed',
      'Symptom-based titration review',
      'Ongoing messaging during active care',
    ],
    billedSeparately: [
      'Prescription cost (partner pharmacy)',
      'Labs when clinically indicated',
      'Monthly program total in enrollment summary',
    ],
    costDrivers: ['Prescribed therapy', 'Dosage', 'Symptom plan', 'State'],
    recurring: 'Personalized monthly total shown before enrollment',
    consultationFee:
      'Included in active monthly care when prescribed. A non-refundable evaluation fee applies if not eligible — amount shown before checkout.',
    medicationCost: 'Separate line item based on prescribed therapy and dosage.',
    labCost: 'Diagnostic labs ordered when clinically indicated — costs shown before enrollment.',
    shippingCost: 'Discreet delivery included when listed in your enrollment summary.',
    supportInclusions:
      'Symptom-based titration review, licensed clinician support, and clinical messaging during active care.',
    cancellation: 'Cancel anytime prior to the next billing cycle.',
    limitations: 'Subject to clinical eligibility and state pharmacy delivery rules.',
  },
  {
    slug: 'peptide-therapy',
    title: 'Peptide Therapy',
    subtitle: 'Clinician-prescribed peptide therapies via qualified U.S. pharmacy channels',
    pricingModel: 'Program care + compounding pharmacy',
    dueToday: '$0',
    dueTodayNote: 'Charged for ongoing care only after you review and accept your enrollment summary.',
    included: [
      'Clinical evaluation when prescribed',
      'Treatment monitoring and refill coordination',
      'Licensed clinician messaging',
    ],
    billedSeparately: [
      'Prescription cost (503A / 503B channel as applicable)',
      'Therapy-specific labs when indicated',
      'Monthly program total in enrollment summary',
    ],
    costDrivers: ['Peptide therapy', 'Dosage', 'Pharmacy channel', 'State'],
    recurring: 'Personalized monthly total shown before enrollment',
    consultationFee:
      'Included in membership when prescribed. A non-refundable evaluation fee applies if not eligible — amount shown before checkout.',
    medicationCost:
      'Separate line item — final price depends on prescribed therapy, dosage, pharmacy, shipping, and state.',
    labCost: 'Lab work reviewed when clinically indicated — costs shown before enrollment.',
    shippingCost: 'Shipping and supplies included when listed in your enrollment summary.',
    supportInclusions: 'Licensed clinician support, treatment monitoring, and refill coordinator services.',
    cancellation: 'Cancel subscription before the next recurring billing cycle begins.',
    limitations: 'State availability varies by specific compound formulation and pharmacy channel.',
  },
]

export const stateAvailabilityNote =
  'Availability is updated by clinical operations and may change based on licensure, pharmacy rules, and prescribed therapy. Confirm your state and program during eligibility review.'

const coreStates =
  'AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, DC'

const peptideAvailable =
  'AZ, CO, FL, GA, ID, IL, IN, IA, KS, KY, MI, MN, MO, MT, NE, NV, NH, NM, NC, OH, OK, OR, PA, SC, SD, TN, TX, UT, VA, WA, WI, WY, DC'

const peptideReview = 'CA, CT, DE, ME, MD, MA, NJ, NY, RI, VT'

const peptideUnavailable = 'AL, AK, AR, HI, LA, MS, ND, WV'

export const programStateAvailability = [
  {
    slug: 'medical-weight-loss',
    label: 'Medical Weight Loss',
    summary: 'Broad availability across the U.S. with state-specific prescribing and pharmacy rules.',
    groups: [{ status: 'available', states: [coreStates] }],
  },
  {
    slug: 'mens-hormone-health',
    label: "Men's Hormone Health",
    summary: 'Available in most states where testosterone therapy is permitted via telehealth.',
    groups: [{ status: 'available', states: [coreStates] }],
  },
  {
    slug: 'womens-hormone-health',
    label: "Women's Hormone Health",
    summary: 'Available in most states where hormone therapy is permitted via telehealth.',
    groups: [{ status: 'available', states: [coreStates] }],
  },
  {
    slug: 'peptide-therapy',
    label: 'Peptide Therapy',
    summary: 'More limited than other programs because availability depends on therapy, pharmacy channel, and state rules.',
    groups: [
      { status: 'available', states: [peptideAvailable] },
      { status: 'review', states: [peptideReview] },
      { status: 'unavailable', states: [peptideUnavailable] },
    ],
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
    q: 'Are Nexa Rx peptide therapies prescription-only?',
    a: 'Yes. Peptide therapies offered through the Nexa Rx clinical program require a medical evaluation and a valid prescription from a licensed clinician.',
  },
  {
    q: 'Does Nexa Rx sell research-use-only peptides?',
    a: 'No. Nexa Rx does not sell research-use-only products. Peptide therapies offered through the clinical program require a medical evaluation and prescription and are dispensed for eligible patients through the applicable pharmacy channel.',
  },
  {
    q: 'Are compounded peptide therapies FDA-approved?',
    a: 'Compounded medications are not FDA-approved as finished branded products. They are prepared by licensed U.S. compounding pharmacies or outsourcing facilities under applicable federal standards.',
  },
  {
    q: 'What is the difference between a 503A compounding pharmacy and a 503B outsourcing facility?',
    a: '503A pharmacies compound medications for individual patient prescriptions. 503B outsourcing facilities operate under stricter FDA oversight and can produce larger quantities. The applicable pharmacy channel depends on your prescribed therapy.',
  },
  {
    q: 'Which treatments use FDA-approved medications?',
    a: 'Our clinicians may prescribe both FDA-approved medications and, where appropriate, compounded therapies. Your clinician will explain the status of any medication prescribed to you.',
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
    q: 'Which states are currently supported for each program?',
    a: 'Medical weight loss and hormone programs are available in most U.S. states. Peptide therapy has more limited availability by therapy and state — see the state availability section on the Pricing page for the current matrix. Availability is confirmed during eligibility review.',
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
  {
    slug: 'hydration-electrolyte',
    name: 'Hydration + Electrolyte Mix',
    category: 'Dietary Supplement',
    oneTimePrice: '$42',
    subscribePrice: '$36',
    renewal: 'Every 30 days',
    description: 'Electrolyte drink mix with sodium, potassium, and magnesium.',
    servingSize: '1 scoop (8 g)',
    servingsPerContainer: 30,
    netQuantity: '240 g powder (30-day supply)',
    ingredients: [
      { name: 'Sodium (as sodium citrate)', amount: '500 mg', dailyValue: '22%' },
      { name: 'Potassium (as potassium citrate)', amount: '200 mg', dailyValue: '4%' },
      { name: 'Magnesium (as magnesium citrate)', amount: '60 mg', dailyValue: '14%' },
    ],
    otherIngredients: 'Citric acid, natural flavors, stevia leaf extract.',
    directions: 'Mix 1 scoop with 12–16 oz of water. Adults take up to 1 serving daily.',
    warnings:
      'Consult your physician before use if you have kidney disease, heart disease, or are on a sodium-restricted diet.',
    allergens: 'Free from major allergens.',
    storage: 'Store in a cool, dry place. Keep pouch sealed.',
    ageRestriction: 'Adults 18+',
    manufacturer: supplementManufacturer,
    distributor: supplementManufacturer,
    returnPolicy: 'Unopened products may be returned within 30 days of delivery. Opened products are not eligible for return.',
    shippingTerms: 'Orders ship within 2 business days. Standard U.S. shipping 3–7 business days.',
    contact: supplementContact,
    facts: ['Serving Size: 1 scoop', 'Servings Per Container: 30', 'Key ingredients: sodium citrate, potassium citrate, magnesium'],
  },
  {
    slug: 'omega-balance',
    name: 'Omega Balance Softgels',
    category: 'Dietary Supplement',
    oneTimePrice: '$48',
    subscribePrice: '$40',
    renewal: 'Every 30 days',
    description: 'Purified fish oil softgels with EPA and DHA.',
    servingSize: '2 softgels',
    servingsPerContainer: 30,
    netQuantity: '60 softgels (30-day supply)',
    ingredients: [
      { name: 'EPA (eicosapentaenoic acid)', amount: '360 mg', dailyValue: '†' },
      { name: 'DHA (docosahexaenoic acid)', amount: '240 mg', dailyValue: '†' },
      { name: 'Total Omega-3 fatty acids', amount: '720 mg', dailyValue: '†' },
    ],
    otherIngredients: 'Fish oil concentrate, gelatin, glycerin, purified water, mixed tocopherols.',
    directions: 'Adults take 2 softgels daily with a meal, or as directed by your healthcare professional.',
    warnings:
      'Contains fish (anchovy, sardine, mackerel). Consult your physician if you take blood thinners or have a fish allergy.',
    allergens: 'Contains fish.',
    storage: 'Store in a cool, dry place. Refrigerate after opening for best freshness.',
    ageRestriction: 'Adults 18+',
    manufacturer: supplementManufacturer,
    distributor: supplementManufacturer,
    returnPolicy: 'Unopened products may be returned within 30 days of delivery. Opened products are not eligible for return.',
    shippingTerms: 'Orders ship within 2 business days. Standard U.S. shipping 3–7 business days.',
    contact: supplementContact,
    facts: ['Serving Size: 2 softgels', 'Servings Per Container: 30', 'Key ingredients: EPA, DHA, mixed tocopherols'],
  },
]
