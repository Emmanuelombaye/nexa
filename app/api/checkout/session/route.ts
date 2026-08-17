import { NextRequest, NextResponse } from 'next/server'
import { isValidAdultDob, isValidEmail, isValidPhone } from '../../../../lib/intake'
import { isCheckoutProgramSlug } from '../../../../lib/checkout'
import {
  fetchVcoProducts,
  getVcoConfig,
  publicCheckoutError,
  resolveProgramProduct,
  sanitizeCouponCode,
} from '../../../../lib/vco'

function originFromRequest(req: NextRequest) {
  const forwardedHost = req.headers.get('x-forwarded-host')
  const forwardedProto = req.headers.get('x-forwarded-proto') || 'https'
  if (forwardedHost) return `${forwardedProto}://${forwardedHost}`
  return req.nextUrl.origin
}

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(req: NextRequest) {
  const { baseUrl, brandId, apiKey } = getVcoConfig()
  if (!apiKey) {
    return NextResponse.json({ error: 'Checkout is not configured yet. Please try again later.' }, { status: 503 })
  }

  let body: Record<string, unknown>
  try {
    body = (await req.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid checkout request.' }, { status: 400 })
  }

  const programSlug = body.programSlug
  if (!isCheckoutProgramSlug(programSlug)) {
    return NextResponse.json({ error: 'Select a valid care program to continue.' }, { status: 400 })
  }

  const patientInfo = (body.patientInfo || {}) as Record<string, unknown>
  const firstName = readString(patientInfo.firstName)
  const lastName = readString(patientInfo.lastName)
  const email = readString(patientInfo.email)
  const phone = readString(patientInfo.phone).replace(/\D/g, '')
  const dob = readString(patientInfo.dob)
  const state = readString(patientInfo.state).toUpperCase()
  const intakeAnswers =
    body.intakeAnswers && typeof body.intakeAnswers === 'object' && !Array.isArray(body.intakeAnswers)
      ? (body.intakeAnswers as Record<string, string | boolean | number>)
      : null

  if (!firstName || !lastName || !email || !phone || !dob || !state || !intakeAnswers) {
    return NextResponse.json({ error: 'Please complete all required intake fields before checkout.' }, { status: 400 })
  }
  if (!isValidEmail(email) || !isValidPhone(phone) || !isValidAdultDob(dob) || !/^[A-Z]{2}$/.test(state)) {
    return NextResponse.json({ error: 'Some intake details could not be verified. Please review your information and try again.' }, { status: 400 })
  }

  let productId = ''
  try {
    const products = await fetchVcoProducts()
    const product = resolveProgramProduct(products, programSlug)
    productId = product?.id || ''
  } catch {
    return NextResponse.json({ error: publicCheckoutError(502) }, { status: 502 })
  }

  if (!productId) {
    return NextResponse.json({ error: 'This care program is not available for checkout right now.' }, { status: 404 })
  }

  const origin = originFromRequest(req)
  const couponCode = sanitizeCouponCode(body.couponCode)

  try {
    const res = await fetch(`${baseUrl}/api/commerce/v1/checkout/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        brandId,
        productId,
        patientInfo: { firstName, lastName, email, phone, dob, state },
        intakeAnswers: {
          ...intakeAnswers,
          programSlug,
        },
        ...(couponCode ? { couponCode } : {}),
        successUrl: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${origin}/check-eligibility?canceled=1&program=${encodeURIComponent(programSlug)}`,
      }),
    })

    const data = (await res.json().catch(() => ({}))) as {
      error?: string
      checkoutUrl?: string
      orderId?: string
      sessionId?: string
    }

    if (!res.ok || !data.checkoutUrl) {
      console.error('[checkout] vco failed', res.status)
      return NextResponse.json({ error: publicCheckoutError(res.status, data.error) }, { status: res.status >= 400 ? res.status : 502 })
    }

    return NextResponse.json({
      checkoutUrl: data.checkoutUrl,
      orderId: data.orderId,
    })
  } catch {
    console.error('[checkout] vco unreachable')
    return NextResponse.json({ error: 'We could not start checkout. Please try again in a few minutes.' }, { status: 502 })
  }
}
