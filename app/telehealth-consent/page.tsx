import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Telehealth Consent | Nexa Rx',
  description:
    'How telehealth services may be provided through the NexaRx® platform, including asynchronous care and provider review.',
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
          <p className="eyebrow">Legal</p>
          <h1>Telehealth Consent</h1>
          <p className="lede">
            This Telehealth Consent explains how telehealth services may be provided through the NexaRx® platform. By
            using the NexaRx® Services, completing an assessment, submitting information, or proceeding with provider
            review, you consent to receive care through telehealth where permitted by applicable law.
          </p>
          <p className="hero__stats-note">Last updated: August 14, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <p>
              NexaRx® is not a pharmacy and does not itself practice medicine. Medical services, if available, are
              provided by independent US-licensed providers or affiliated clinical partners.
            </p>
          </article>
          <article>
            <h2>1. What Telehealth Is</h2>
            <p>
              Telehealth is the delivery of health-related services and clinical information through electronic
              communications between a patient and a provider who are in different locations.
            </p>
            <p>
              Telehealth may include online questionnaires, secure messaging, uploaded photos or documents, remote
              provider review, and other electronic communications. A live video or phone visit may not always be
              required unless requested by a provider or required by law.
            </p>
          </article>
          <article>
            <h2>2. Asynchronous Care</h2>
            <p>
              Care through NexaRx® is often delivered asynchronously, meaning a US-licensed provider reviews your
              information and communicates with you at separate times rather than during a real-time visit.
            </p>
            <p>
              Asynchronous telehealth may not be appropriate for all medical conditions. A provider may request more
              information, require a live consultation, decline treatment, or recommend in-person care.
            </p>
          </article>
          <article>
            <h2>3. Provider Review</h2>
            <p>
              The information you submit through assessments, intake forms, secure messages, and uploads is reviewed by
              an independent US-licensed provider to determine whether treatment is clinically appropriate for you.
            </p>
            <p>
              Providers may ask follow-up questions, request additional information, or recommend alternative care,
              including in-person evaluation.
            </p>
          </article>
          <article>
            <h2>4. No Guarantee of Prescription</h2>
            <p>
              Completing an assessment, checkout, payment authorization, or account creation does not guarantee that
              treatment will be prescribed.
            </p>
            <p>
              Prescription treatment, if any, is provided only after a US-licensed provider reviews your information and
              determines that treatment is clinically appropriate.
            </p>
          </article>
          <article>
            <h2>5. Potential Benefits of Telehealth</h2>
            <p>
              Potential benefits include more convenient access to licensed providers, the ability to receive care from a
              private location, reduced travel and wait times, and discreet communication about sensitive health
              concerns.
            </p>
          </article>
          <article>
            <h2>6. Potential Risks and Limitations</h2>
            <p>Telehealth has potential risks and limitations, including but not limited to:</p>
            <ul>
              <li>Information transmitted may be insufficient to allow appropriate clinical decision-making</li>
              <li>Delays in evaluation or treatment may occur due to technology failures</li>
              <li>
                In rare cases, security protocols could fail, causing a breach of privacy of personal health information
              </li>
            </ul>
            <p>
              A provider may determine that telehealth is not appropriate for your situation and may recommend in-person
              evaluation or care.
            </p>
          </article>
          <article>
            <h2>7. Your Responsibilities</h2>
            <p>
              You are responsible for providing complete, accurate, and current information, including medical history,
              medications, allergies, symptoms, and any changes in your health.
            </p>
            <p>
              You agree to follow provider instructions, ask questions if anything is unclear, and notify your provider
              promptly of any new or worsening symptoms or side effects.
            </p>
          </article>
          <article>
            <h2>8. Emergency Care</h2>
            <p>
              If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. NexaRx®
              should not be used for emergencies.
            </p>
          </article>
          <article>
            <h2>9. Medical Records and Privacy</h2>
            <p>
              Your information may become part of your medical record and may be shared with providers, pharmacies,
              fulfillment partners, payment processors, or service providers as described in the{' '}
              <Link href="/privacy">Privacy Policy</Link> and applicable notices.
            </p>
            <p>
              NexaRx® uses reasonable administrative, technical, and physical safeguards designed to protect your
              information.
            </p>
          </article>
          <article>
            <h2>10. Prescriptions and Pharmacy Fulfillment</h2>
            <p>
              If a provider determines that prescription treatment is clinically appropriate, a prescription may be sent
              to a licensed dispensing pharmacy, where permitted by law.
            </p>
            <p>
              Final treatment, dose, formulation, and pricing may vary based on provider review, pharmacy availability,
              and applicable law.
            </p>
          </article>
          <article>
            <h2>11. Right to Decline or Withdraw Consent</h2>
            <p>
              You may decline or withdraw consent to telehealth at any time by discontinuing use of the Services or
              contacting support. Withdrawing consent may limit your ability to receive services through NexaRx®.
            </p>
          </article>
          <article>
            <h2>12. State Availability</h2>
            <p>
              Services may not be available in all states. Available treatments, provider networks, and pharmacy partners
              may vary based on your location and applicable law.
            </p>
          </article>
          <article>
            <h2>13. Contact Us</h2>
            <p>
              Questions about this Telehealth Consent can be sent to{' '}
              <a href="mailto:support@nexarx.com">support@nexarx.com</a>.
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/privacy" className="btn btn--outline">
              Privacy Policy
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
