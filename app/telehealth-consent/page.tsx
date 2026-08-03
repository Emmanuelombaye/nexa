import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Telehealth Consent | Nexa Rx',
  description:
    'Understand how Nexa Rx telehealth evaluation works, including clinical portal intake, limitations, and patient responsibilities.',
  path: '/telehealth-consent',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'Telehealth Consent', path: '/telehealth-consent' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Clinical pathway</p>
          <h1>Telehealth Consent</h1>
          <p className="lede">
            Before clinical evaluation, review how online care works at Nexa Rx — including what happens in the secure
            portal, what clinicians decide, and what is not guaranteed.
          </p>
          <p className="hero__stats-note">Last updated: July 22, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Nature of telehealth</h2>
            <p>
              Telehealth uses electronic communications to connect you with a licensed clinician for evaluation and,
              when appropriate, treatment. Care may include asynchronous review, messaging, and remote follow-up.
            </p>
          </article>
          <article>
            <h2>2. Secure clinical portal</h2>
            <p>
              Symptoms, diagnoses, medications, labs, and medical history are collected inside the secure clinical portal
              — not on the public marketing website. You agree to keep portal credentials confidential and provide
              accurate information.
            </p>
          </article>
          <article>
            <h2>3. Benefits and limitations</h2>
            <ul>
              <li>Benefits may include convenient access, discreet delivery where available, and ongoing messaging.</li>
              <li>Limitations include technology failures, incomplete information, and the inability to perform a full
                in-person exam.</li>
              <li>Your clinician may require labs, additional information, or in-person care before prescribing.</li>
            </ul>
          </article>
          <article>
            <h2>4. No guaranteed prescription</h2>
            <p>
              Eligibility and treatment decisions are made solely by a licensed clinician. Completing intake or paying
              for evaluation does not guarantee a prescription or a specific medication.
            </p>
          </article>
          <article>
            <h2>5. Pharmacy fulfillment</h2>
            <p>
              When prescribed, medication is dispensed by the applicable licensed U.S. pharmacy and shipped where legally
              available. Compounded medications are prepared by compounding pharmacies or outsourcing facilities as
              applicable and are not FDA-approved as finished branded products.
            </p>
          </article>
          <article>
            <h2>6. Emergencies</h2>
            <p>
              Nexa Rx is not for emergencies. If you have chest pain, trouble breathing, severe allergic reaction,
              suicidal thoughts, or any emergency, call 911 or go to the nearest emergency department.
            </p>
          </article>
          <article>
            <h2>7. Your responsibilities</h2>
            <ul>
              <li>Provide complete and truthful medical information</li>
              <li>Follow clinician instructions and report side effects promptly</li>
              <li>Complete required labs and follow-ups</li>
              <li>Confirm your state of residence for telehealth eligibility</li>
            </ul>
          </article>
          <article>
            <h2>8. Consent</h2>
            <p>
              By continuing to Check Eligibility and proceeding into the clinical portal, you acknowledge that you have
              read this Telehealth Consent and agree to receive care electronically when clinically appropriate.
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/privacy" className="btn btn--outline">
              View Details
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
