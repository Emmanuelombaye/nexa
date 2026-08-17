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
