import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'States We Serve | Nexa Rx',
  description: 'States where NexaRx® services may be available.',
  path: '/states-we-serve',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'States We Serve', path: '/states-we-serve' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>States We Serve</h1>
          <p className="lede">Official content will be added from provided docs.</p>
        </section>

        <section className="container legal-prose">
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/patient-safety" className="btn btn--outline">
              Patient Safety
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
