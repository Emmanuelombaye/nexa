import { NextRequest, NextResponse } from 'next/server'
import { isValidEmail } from '../../../lib/intake'
import { fetchPatientOrders } from '../../../lib/vco'

export async function GET(req: NextRequest) {
  const email = String(req.nextUrl.searchParams.get('email') || '').trim()
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const orderId = String(req.nextUrl.searchParams.get('orderId') || req.nextUrl.searchParams.get('order_id') || '').trim()
  const result = await fetchPatientOrders(email, orderId)
  return NextResponse.json(result.json, { status: result.status })
}
