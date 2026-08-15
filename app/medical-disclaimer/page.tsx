import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Medical Disclaimer | Nexa Rx',
  description:
    'Important medical and product disclaimers for the NexaRx® website, assessments, and related services.',
  path: '/medical-disclaimer',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'Medical Disclaimer', path: '/medical-disclaimer' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Medical Disclaimer</h1>
          <p className="lede">
            The information provided through the NexaRx® website, assessments, product pages, checkout flows,
            communications, and related services is for general informational purposes only and is not a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
          <p className="hero__stats-note">Last updated: August 14, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Informational Use Only</h2>
            <p>
              All content on the NexaRx® Services—including text, graphics, images, assessments, product descriptions,
              and other materials—is provided for general informational purposes only. It is not intended to be, and
              should not be relied upon as, medical advice or a recommendation for any particular treatment, medication,
              or course of action.
            </p>
          </article>
          <article>
            <h2>2. Not Medical Advice</h2>
            <p>
              Use of the NexaRx® Services does not create a doctor-patient relationship with NexaRx®. Content on the
              Services does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified
              healthcare provider with any questions you may have regarding your health or a medical condition.
            </p>
          </article>
          <article>
            <h2>3. NexaRx® Is Not a Pharmacy</h2>
            <p>
              NexaRx® is not a pharmacy and does not itself practice medicine. Medical services, if available, are
              provided by independent US-licensed providers or affiliated clinical partners.
            </p>
          </article>
          <article>
            <h2>4. Provider Review Required</h2>
            <p>
              Prescription treatment, if any, is provided only after review by a US-licensed provider and only if
              clinically appropriate.
            </p>
            <p>
              Completing an assessment, checkout, payment authorization, or account creation does not guarantee that
              treatment will be prescribed.
            </p>
          </article>
          <article>
            <h2>5. No Emergency Services</h2>
            <p>
              The Services are not intended for emergency medical needs. If you are experiencing a medical emergency,
              call 911 or seek emergency medical care immediately.
            </p>
          </article>
          <article>
            <h2>6. No Guaranteed Results</h2>
            <p>
              NexaRx® does not guarantee specific outcomes, results, eligibility, prescriptions, weight loss, hair
              regrowth, performance improvement, energy improvement, anti-aging benefits, or treatment availability.
            </p>
          </article>
          <article>
            <h2>7. Treatment Availability</h2>
            <p>
              Services may not be available in all states. Treatment options may vary based on state laws, provider
              review, clinical appropriateness, pharmacy availability, medication availability, and other operational or
              legal factors.
            </p>
          </article>
          <article>
            <h2>8. Prescription Products</h2>
            <p>
              Certain products available through the Services require a valid prescription from a licensed healthcare
              provider. A prescription will only be issued if a provider determines that treatment is clinically
              appropriate.
            </p>
          </article>
          <article>
            <h2>9. Compounded Medication Notice</h2>
            <p>
              Some medications, if prescribed, may be compounded medications. Compounded medications are prepared by a
              licensed compounding pharmacy pursuant to a prescription for an individual patient and are not reviewed by
              the FDA for safety, effectiveness, or quality in the same manner as FDA-approved medications. Compounded
              medications are not generic versions of, equivalent to, interchangeable with, or the same as FDA-approved
              medications.
            </p>
          </article>
          <article>
            <h2>10. Product Images and Packaging</h2>
            <p>
              Product images, packaging, labels, and descriptions are for illustrative purposes only and may differ from
              the medication, packaging, or instructions provided by a pharmacy or licensed provider.
            </p>
          </article>
          <article>
            <h2>11. Individual Results May Vary</h2>
            <p>
              Individual results vary. Any timelines, benefits, or descriptions on the Services are general in nature and
              may not apply to every individual.
            </p>
          </article>
          <article>
            <h2>12. Third-Party Providers and Pharmacies</h2>
            <p>
              NexaRx® may coordinate access to independent providers, pharmacies, payment processors, fulfillment
              partners, or other service providers. These third parties may have their own policies, notices, and
              responsibilities.
            </p>
          </article>
          <article>
            <h2>13. When to Seek Medical Care</h2>
            <p>
              Contact a licensed healthcare provider if you have questions about your health, symptoms, medications, side
              effects, allergies, or treatment options. Seek urgent or emergency care if symptoms are severe, sudden, or
              life-threatening.
            </p>
          </article>
          <article>
            <h2>14. Contact Us</h2>
            <p>
              Questions about this Medical Disclaimer can be sent to{' '}
              <a href="mailto:support@nexarx.com">support@nexarx.com</a>.
            </p>
            <p>Nexa RX LLC d/b/a NexaRx®</p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/telehealth-consent" className="btn btn--outline">
              Telehealth Consent
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
