import { siteUrl } from '../lib/site-data'

export default function robots() {
  const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: isPreview ? '/' : undefined,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
