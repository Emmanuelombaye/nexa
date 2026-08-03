import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Terms of Service | Nexa Rx',
  description:
    'Terms governing use of the Nexa Rx website, eligibility checks, clinical care pathway, and separate supplement shop.',
  path: '/terms',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }]} />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="lede">
            These terms govern your use of the Nexa Rx website, eligibility tools, clinical care pathway, and separate
            dietary supplement shop.
          </p>
          <p className="hero__stats-note">Last updated: July 22, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Agreement</h2>
            <p>
              By using nexamd.com or related Nexa Rx services, you agree to these Terms and our{' '}
              <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the site.
            </p>
          </article>
          <article>
            <h2>2. What Nexa Rx is — and is not</h2>
            <p>
              Nexa Rx is a telehealth care platform that connects eligible adults with licensed clinicians. Nexa Rx is
              not a pharmacy, hospital, or emergency service. Prescriptions are fulfilled by independently licensed U.S.
              pharmacy partners when clinically appropriate.
            </p>
          </article>
          <article>
            <h2>3. Eligibility and clinical decisions</h2>
            <ul>
              <li>You must be 18+ and legally able to consent to telehealth care in your state.</li>
              <li>Completing an eligibility check does not create a clinician–patient relationship by itself.</li>
              <li>Prescription treatment is not guaranteed. Licensed clinicians make all treatment decisions.</li>
              <li>Availability varies by state, therapy, pharmacy channel, and clinical evaluation.</li>
            </ul>
          </article>
          <article>
            <h2>4. Telehealth pathway</h2>
            <p>
              Medical intake occurs in a secure clinical portal. You agree to provide accurate information and to review
              the <Link href="/telehealth-consent">Telehealth Consent</Link> before clinical evaluation.
            </p>
          </article>
          <article>
            <h2>5. Pricing and billing</h2>
            <p>
              Program costs, recurring terms, consultation fees, medication, labs, shipping, and cancellation policies
              are shown in your enrollment summary before you confirm care. Dietary supplements are billed separately
              through the shop.
            </p>
          </article>
          <article>
            <h2>6. Supplements</h2>
            <p>
              Shop products are dietary supplements — not prescription medications. Purchasing supplements does not
              affect clinical eligibility or prescribing. See{' '}
              <Link href="/supplement-terms">Supplement Terms</Link>.
            </p>
          </article>
          <article>
            <h2>7. Prohibited use</h2>
            <p>
              You may not misuse the site, attempt unauthorized access, submit false medical information, or use the
              platform for emergency care. Call 911 for medical emergencies.
            </p>
          </article>
          <article>
            <h2>8. Disclaimers</h2>
            <p>
              The marketing site provides general information and does not replace clinical advice. Compounded
              medications are not FDA-approved as finished branded products. Outcomes are not guaranteed.
            </p>
          </article>
          <article>
            <h2>9. Contact</h2>
            <p>
              Questions: <a href="mailto:support@nexamd.com">support@nexamd.com</a>
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
