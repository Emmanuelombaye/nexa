import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Patient Safety',
  description: 'Patient safety information for NexaRx® telehealth weight-care services.',
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
          <p className="lede">
            NexaRx® is designed to support safe, provider-guided care. Prescription treatment is available only if
            clinically appropriate after licensed provider review.
          </p>
          <p className="hero__stats-note">Last updated: August 16, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Important notices</h2>
            <ul>
              <li>NexaRx® is not a pharmacy, drug manufacturer, outsourcing facility, or compounding facility.</li>
              <li>
                Prescription treatment is provided only when clinically appropriate after evaluation by a licensed
                healthcare provider.
              </li>
              <li>
                Clinical services are provided through affiliated or contracted medical practices and licensed
                healthcare providers. Provider availability varies by state, treatment category, and patient eligibility.
              </li>
              <li>Prescription medication is dispensed by an appropriately licensed pharmacy pursuant to a valid prescription.</li>
              <li>
                Where compounded medications are dispensed, they are not FDA-approved as finished branded products and
                have not been reviewed by the FDA for safety, effectiveness, or quality in the same manner as FDA-approved
                drugs.
              </li>
              <li>
                Product imagery is illustrative and does not imply that NexaRx® manufactures, compounds, dispenses, or
                physically fulfills medication. Actual packaging and pharmacy labeling may differ.
              </li>
              <li>In an emergency, call 911 or seek immediate emergency care.</li>
            </ul>
          </article>
          <article>
            <h2>2. Provider review and prescriptions</h2>
            <p>
              Completing an assessment, creating an account, submitting payment information, or completing checkout does
              not create a guarantee of treatment or a prescription. No prescription or prescription medication will be
              issued, dispensed, or shipped before the required provider evaluation and issuance of a valid prescription
              by an authorized prescriber.
            </p>
          </article>
          <article>
            <h2>3. Telehealth limitations</h2>
            <p>
              Telehealth and asynchronous care are not appropriate for every patient or condition. A provider may request
              additional information, require a live consultation or laboratory testing, decline treatment, discontinue
              treatment, or recommend in-person or emergency care.
            </p>
          </article>
          <article>
            <h2>4. Adverse events</h2>
            <p>
              Seek immediate medical attention for severe or concerning symptoms, including difficulty breathing, chest
              pain, severe allergic reactions, severe abdominal pain, or loss of consciousness. To report medication side
              effects, patients may also contact the FDA MedWatch program at 1-800-FDA-1088 or www.fda.gov/medwatch.
            </p>
          </article>
          <article>
            <h2>5. Contact</h2>
            <p>
              Nexa RX LLC d/b/a NexaRx® · 1200 Harbor Center Dr, Suite 400, Tampa, FL 33602 ·{' '}
              <a href="mailto:support@nexarx.com">support@nexarx.com</a> · 775-262-9279
            </p>
          </article>
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
