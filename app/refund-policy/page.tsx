import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Refund Policy',
  description:
    'Refund and billing information for NexaRx® telehealth services. Charged only if prescribed, where applicable.',
  path: '/refund-policy',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'Refund Policy', path: '/refund-policy' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Refund Policy</h1>
          <p className="lede">
            NexaRx® billing is designed around provider review. Where stated on product pages, you are charged only if a
            licensed provider prescribes treatment.
          </p>
          <p className="hero__stats-note">Last updated: August 16, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Charged only if prescribed</h2>
            <p>
              For protocols that state “charged only if prescribed,” payment authorization may be collected during intake,
              but you are not charged for the medication plan unless a U.S.-licensed provider issues a prescription.
            </p>
          </article>
          <article>
            <h2>2. If you are not prescribed</h2>
            <p>
              If a provider determines treatment is not clinically appropriate, you will not be charged for that medication
              plan under a “charged only if prescribed” offer. You may still be notified of the determination by email or
              through your account.
            </p>
          </article>
          <article>
            <h2>3. After a prescription is issued</h2>
            <p>
              Once a prescription is issued and pharmacy fulfillment begins, refund eligibility may be limited because
              medication preparation and shipping are handled by licensed pharmacies under patient-specific prescriptions.
              Requests are reviewed case by case in accordance with applicable law and pharmacy policies.
            </p>
          </article>
          <article>
            <h2>4. Cancel or pause</h2>
            <p>
              Plans are generally month-to-month. You may request to cancel or pause future refills through the patient
              portal or by contacting support. Cancellation does not automatically refund prior fulfilled shipments.
            </p>
          </article>
          <article>
            <h2>5. Dietary supplements</h2>
            <p>
              Non-prescription dietary supplements purchased through the shop are separate from clinical care. Refund
              terms for supplements are described in <Link href="/supplement-terms">Supplement Terms</Link> and at
              checkout.
            </p>
          </article>
          <article>
            <h2>6. How to request help</h2>
            <p>
              For billing or refund questions, email <a href="mailto:support@nexarx.com">support@nexarx.com</a> or call
              775-262-9279. Include your full name, email used at intake, and a brief description of the issue.
            </p>
          </article>
          <article>
            <h2>7. Related policies</h2>
            <p>
              See also our <Link href="/shipping">Shipping &amp; Fulfillment</Link> page,{' '}
              <Link href="/terms">Terms of Service</Link>, and <Link href="/medical-disclaimer">Medical Disclaimer</Link>.
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/shipping" className="btn btn--outline">
              Shipping &amp; Fulfillment
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
