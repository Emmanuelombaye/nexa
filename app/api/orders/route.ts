import { NextRequest, NextResponse } from 'next/server'
import { isValidEmail } from '../../../lib/intake'
import { fetchPatientOrders } from '../../../lib/vco'

export async function GET(req: NextRequest) {
  const email = String(req.nextUrl.searchParams.get('email') || '').trim()
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const result = await fetchPatientOrders(email)
  return NextResponse.json(result.json, { status: result.status })
}
