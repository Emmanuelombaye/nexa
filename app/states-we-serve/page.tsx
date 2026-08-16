import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'States We Serve',
  description:
    'Where NexaRx® telehealth services may be available, subject to provider licensure and pharmacy fulfillment.',
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
          <p className="lede">
            NexaRx® connects eligible patients with independent U.S.-licensed providers and licensed pharmacy partners.
            Service availability varies and is not guaranteed in every jurisdiction.
          </p>
          <p className="hero__stats-note">Last updated: August 16, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Availability depends on licensure and fulfillment</h2>
            <p>
              NexaRx® services may be available only in jurisdictions where affiliated or contracted licensed providers
              are authorized to provide care and where applicable pharmacy fulfillment is legally permitted. Availability
              may vary by treatment category, provider licensure, pharmacy availability, patient eligibility, and
              applicable law.
            </p>
          </article>
          <article>
            <h2>2. Not every product or service is available everywhere</h2>
            <p>
              Even where some services are offered, a specific medication, dosing option, shipping method, or subscription
              plan may not be available in every state. Completing an intake or creating an account does not guarantee that
              treatment will be offered or prescribed in your state.
            </p>
          </article>
          <article>
            <h2>3. How to confirm eligibility</h2>
            <p>
              The most accurate way to confirm whether care may be available to you is to complete the online medical
              intake. A U.S.-licensed provider reviews submitted information and determines whether treatment is
              clinically appropriate and operationally available.
            </p>
          </article>
          <article>
            <h2>4. Questions about your state</h2>
            <p>
              If you have questions about availability in your state, contact us at{' '}
              <a href="mailto:support@nexarx.com">support@nexarx.com</a> or 775-262-9279.
            </p>
          </article>
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
