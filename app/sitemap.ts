import { siteUrl, supplements, programs } from '../lib/site-data'

export default function sitemap() {
  const routes = [
    '/',
    ...programs.map((program) => `/${program.slug}`),
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
    '/states-we-serve',
    '/telehealth-consent',
    '/hipaa',
    '/medical-disclaimer',
    '/patient-safety',
    '/shipping',
    '/refund-policy',
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
        : route.startsWith('/privacy') ||
            route.startsWith('/terms') ||
            route.includes('consent') ||
            route.includes('hipaa') ||
            route.includes('medical-disclaimer') ||
            route.includes('states-we-serve') ||
            route.includes('patient-safety') ||
            route.includes('supplement-terms')
          ? 0.4
          : route.startsWith('/supplements/') && route !== '/supplements'
            ? 0.6
            : 0.7,
  }))
}
