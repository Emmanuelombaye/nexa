import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'HIPAA Notice of Privacy Practices | Nexa Rx',
  description:
    'How medical information about you may be used and disclosed through NexaRx®, and how you can get access to this information.',
  path: '/hipaa',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'HIPAA Notice', path: '/hipaa' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>HIPAA Notice of Privacy Practices</h1>
          <p className="lede">
            This Notice describes how medical information about you may be used and disclosed and how you can get access
            to this information. Please review it carefully.
          </p>
          <p className="hero__stats-note">Last updated: August 14, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>Uses and Disclosures</h2>
            <p>
              Your protected health information (“PHI”) may be used and disclosed for treatment (including provider
              review and pharmacy dispensing), payment, and healthcare operations, and as otherwise permitted or required
              by law.
            </p>
          </article>
          <article>
            <h2>Your Rights</h2>
            <p>
              You have the right to inspect and request a copy of your PHI, request amendments, request an accounting of
              disclosures, request restrictions and confidential communications, and receive a paper copy of this notice.
            </p>
          </article>
          <article>
            <h2>Our Responsibilities</h2>
            <p>
              We are required by law to maintain the privacy and security of your PHI, notify you following a breach of
              unsecured PHI, and follow the terms of the notice currently in effect.
            </p>
          </article>
          <article>
            <h2>Complaints and Contact</h2>
            <p>
              If you believe your privacy rights have been violated, you may file a complaint with us or with the US
              Department of Health and Human Services. You will not be retaliated against for filing a complaint.
            </p>
            <p>
              Contact: <a href="mailto:support@nexarx.com">support@nexarx.com</a>
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/privacy" className="btn btn--outline">
              Privacy Policy
            </Link>
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
