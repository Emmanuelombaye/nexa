import { type CheckoutProgramSlug } from './checkout'

export type VcoProduct = {
  id: string
  name?: string
  slug?: string | null
  sku?: string | null
  price?: string | number
  status?: string
  visibility?: string
}

type VcoConfig = {
  baseUrl: string
  brandId: string
  apiKey: string
}

export function getVcoConfig(): VcoConfig {
  const baseUrl = (process.env.VCO_API_URL || process.env.NEXT_PUBLIC_VCO_API_URL || 'https://portal.virtualclinicos.com').replace(
    /\/$/,
    '',
  )
  const brandId = process.env.VCO_BRAND_ID || process.env.NEXT_PUBLIC_VCO_BRAND_ID || 'nexarx'
  const apiKey = process.env.VCO_API_KEY || ''
  return { baseUrl, brandId, apiKey }
}

function vcoHeaders(apiKey: string) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`
  return headers
}

export async function fetchVcoProducts(): Promise<VcoProduct[]> {
  const { baseUrl, brandId, apiKey } = getVcoConfig()
  const res = await fetch(`${baseUrl}/api/commerce/v1/products?brandId=${encodeURIComponent(brandId)}`, {
    headers: vcoHeaders(apiKey),
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`catalog_${res.status}`)
  }

  const data = (await res.json()) as { products?: VcoProduct[] }
  return Array.isArray(data.products) ? data.products : []
}

export function resolveProgramProduct(products: VcoProduct[], programSlug: CheckoutProgramSlug): VcoProduct | null {
  const needle = programSlug.toLowerCase()
  return (
    products.find((product) => {
      const name = String(product.name || '').toLowerCase()
      const slug = String(product.slug || '').toLowerCase()
      const sku = String(product.sku || '').toLowerCase()
      return name.includes(needle) || slug.includes(needle) || sku.includes(needle)
    }) || null
  )
}

export function publicCheckoutError(status: number, vcoError?: string) {
  const raw = String(vcoError || '')
  if (status === 401) return 'Secure checkout is unavailable right now. Please try again shortly.'
  if (status === 400) return 'Some intake details could not be verified. Please review your information and try again.'
  if (status === 404) return 'This care program is not available for checkout right now.'
  if (/stripe connect/i.test(raw)) return 'Payment setup is still being completed. Please try again shortly.'
  if (/doctorFee/i.test(raw)) {
    return 'Checkout is temporarily unavailable while clinical billing is being finalized. Please try again shortly.'
  }
  if (status >= 500) return 'We could not start checkout. Please try again in a few minutes.'
  return 'We could not start checkout. Please try again.'
}

export function sanitizeCouponCode(value: unknown) {
  return String(value || '')
    .trim()
    .replace(/[^A-Za-z0-9_-]/g, '')
    .slice(0, 40)
}

export function priceToCents(price: string | number | undefined) {
  const n = typeof price === 'number' ? price : Number(String(price ?? '').replace(/[^0-9.]/g, ''))
  if (!Number.isFinite(n) || n <= 0) return 0
  return n >= 1000 ? Math.round(n) : Math.round(n * 100)
}

export function publicCouponError(status: number) {
  if (status === 401) return 'Promo codes are unavailable right now. Please try again shortly.'
  if (status === 404 || status === 400) return 'This code is not valid for this order.'
  if (status >= 500) return 'We could not check this code right now. Please try again shortly.'
  return 'This code is not valid for this order.'
}

export function publicOrdersError(status: number) {
  if (status === 401) return 'Order lookup is unavailable right now. Please try again shortly.'
  if (status >= 500) return 'We could not load your orders right now. Please try again shortly.'
  return 'We could not load your orders. Please try again.'
}

export type PublicCoupon = {
  valid: boolean
  code: string
  discountType?: string
  discountValue?: number
  discountAmountCents?: number
  finalAmountCents?: number
  error?: string
}

export async function validateVcoCoupon(code: string, programSlug: CheckoutProgramSlug): Promise<{
  status: number
  json: PublicCoupon | { error: string }
}> {
  const { baseUrl, brandId, apiKey } = getVcoConfig()
  if (!apiKey) {
    return { status: 503, json: { error: 'Promo codes are unavailable right now. Please try again shortly.' } }
  }

  const sanitized = sanitizeCouponCode(code)
  if (!sanitized) {
    return { status: 400, json: { error: 'Enter a promo code.' } }
  }

  let cartTotalCents = 0
  try {
    const products = await fetchVcoProducts()
    const product = resolveProgramProduct(products, programSlug)
    if (!product?.id) {
      return { status: 404, json: { error: 'This care program is not available for checkout right now.' } }
    }
    cartTotalCents = priceToCents(product.price)
  } catch {
    return { status: 502, json: { error: publicCouponError(502) } }
  }

  try {
    const res = await fetch(`${baseUrl}/api/commerce/v1/coupons/validate`, {
      method: 'POST',
      headers: vcoHeaders(apiKey),
      body: JSON.stringify({ brandId, code: sanitized, cartTotalCents }),
    })
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>
    if (!res.ok) {
      console.error('[coupon] vco failed', res.status)
      return { status: res.status >= 400 ? res.status : 502, json: { error: publicCouponError(res.status) } }
    }
    if (data.valid !== true) {
      return {
        status: 200,
        json: { valid: false, code: sanitized, error: 'This code is not valid for this order.' },
      }
    }
    return {
      status: 200,
      json: {
        valid: true,
        code: String(data.code || sanitized),
        discountType: typeof data.discountType === 'string' ? data.discountType : undefined,
        discountValue: typeof data.discountValue === 'number' ? data.discountValue : undefined,
        discountAmountCents: typeof data.discountAmountCents === 'number' ? data.discountAmountCents : undefined,
        finalAmountCents: typeof data.finalAmountCents === 'number' ? data.finalAmountCents : undefined,
      },
    }
  } catch {
    console.error('[coupon] vco unreachable')
    return { status: 502, json: { error: publicCouponError(502) } }
  }
}

export type PublicPatientOrder = {
  id: string
  status: string
  clinicalStatus: string
  productName: string
  trackingNumber: string
  carrier: string
  createdAt: string
}

function mapPublicOrder(raw: Record<string, unknown>): PublicPatientOrder {
  return {
    id: String(raw.id || ''),
    status: String(raw.status || 'pending'),
    clinicalStatus: String(raw.clinical_status || raw.clinicalStatus || 'pending'),
    productName: String(raw.product_name || raw.productName || 'Care program'),
    trackingNumber: String(raw.tracking_number || raw.trackingNumber || ''),
    carrier: String(raw.carrier || ''),
    createdAt: String(raw.created_at || raw.createdAt || ''),
  }
}

export async function fetchPatientOrders(email: string): Promise<{
  status: number
  json: { orders: PublicPatientOrder[] } | { error: string }
}> {
  const { baseUrl, apiKey } = getVcoConfig()
  if (!apiKey) {
    return { status: 503, json: { error: 'Order lookup is unavailable right now. Please try again shortly.' } }
  }

  try {
    const res = await fetch(`${baseUrl}/api/v1/orders/patient?email=${encodeURIComponent(email)}`, {
      headers: vcoHeaders(apiKey),
      cache: 'no-store',
    })
    const data = (await res.json().catch(() => ({}))) as { orders?: unknown }
    if (!res.ok) {
      console.error('[orders] vco failed', res.status)
      return { status: res.status >= 400 ? res.status : 502, json: { error: publicOrdersError(res.status) } }
    }
    const orders = Array.isArray(data.orders)
      ? data.orders
          .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
          .map(mapPublicOrder)
      : []
    return { status: 200, json: { orders } }
  } catch {
    console.error('[orders] vco unreachable')
    return { status: 502, json: { error: publicOrdersError(502) } }
  }
}
