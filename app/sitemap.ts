import { siteUrl, supplements } from '../lib/site-data'

export default function sitemap() {
  const routes = [
    '/',
    '/medical-weight-loss',
    '/mens-hormone-health',
    '/womens-hormone-health',
    '/peptide-therapy',
    '/how-it-works',
    '/pricing',
    '/quality-and-safety',
    '/medical-team',
    '/supplements',
    '/supplements/bundles',
    '/supplements/subscribe-and-save',
    '/supplements/order-support',
    '/faq',
    '/patient-login',
    '/check-eligibility',
    '/privacy',
    '/terms',
    '/telehealth-consent',
    '/supplement-terms',
    ...supplements.map((item) => `/supplements/${item.slug}`),
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority:
      route === '/'
        ? 1
        : route.startsWith('/privacy') || route.startsWith('/terms') || route.includes('consent') || route.includes('supplement-terms')
          ? 0.4
          : route.startsWith('/supplements/') && route !== '/supplements'
            ? 0.6
            : 0.7,
  }))
}
