import { NextRequest, NextResponse } from 'next/server'
import { isCheckoutProgramSlug } from '../../../../lib/checkout'
import { validateVcoCoupon } from '../../../../lib/vco'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = (await req.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid coupon request.' }, { status: 400 })
  }

  const programSlug = body.programSlug
  if (!isCheckoutProgramSlug(programSlug)) {
    return NextResponse.json({ error: 'Select a valid care program to continue.' }, { status: 400 })
  }

  const result = await validateVcoCoupon(body.code, programSlug)
  return NextResponse.json(result.json, { status: result.status })
}
