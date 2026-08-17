export const CHECKOUT_PROGRAM_SLUGS = ['semaglutide', 'tirzepatide'] as const

export type CheckoutProgramSlug = (typeof CHECKOUT_PROGRAM_SLUGS)[number]

export type CheckoutPatientInfo = {
  firstName: string
  lastName: string
  email: string
  phone: string
  dob: string
  state: string
}

export type CheckoutRequestBody = {
  programSlug: CheckoutProgramSlug
  patientInfo: CheckoutPatientInfo
  intakeAnswers: Record<string, string | boolean | number>
  couponCode?: string
}

export function isCheckoutProgramSlug(value: unknown): value is CheckoutProgramSlug {
  return CHECKOUT_PROGRAM_SLUGS.includes(value as CheckoutProgramSlug)
}
