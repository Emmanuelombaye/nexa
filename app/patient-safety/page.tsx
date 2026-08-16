import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Patient Safety | Nexa Rx',
  description: 'Patient safety information for NexaRx®.',
  path: '/patient-safety',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'Patient Safety', path: '/patient-safety' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Patient Safety</h1>
          <p className="lede">Official content will be added from provided docs.</p>
        </section>

        <section className="container legal-prose">
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/medical-disclaimer" className="btn btn--outline">
              Medical Disclaimer
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
