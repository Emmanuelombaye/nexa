import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Privacy Policy | Nexa Rx',
  description:
    'How Nexa Rx collects, uses, and protects personal and health-related information across the marketing site, clinical portal, and shop.',
  path: '/privacy',
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }]} />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lede">
            This policy explains how Nexa Rx handles information on the public marketing site, in the secure clinical
            portal, and in the separate supplement shop.
          </p>
          <p className="hero__stats-note">Last updated: July 22, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Who we are</h2>
            <p>
              Nexa Rx is a telehealth platform that connects eligible adults with licensed clinicians for medical weight
              management, hormone health, and select prescription therapies. Dietary supplements are sold in a separate
              non-prescription shop lane.
            </p>
          </article>
          <article>
            <h2>2. Information we collect</h2>
            <ul>
              <li>
                <strong>Public site:</strong> contact details, state, and program interest entered on eligibility forms.
              </li>
              <li>
                <strong>Clinical portal:</strong> medical history, symptoms, labs, medications, and other health
                information needed for evaluation — collected only inside the secure clinical portal.
              </li>
              <li>
                <strong>Shop:</strong> order, shipping, and payment details for dietary supplement purchases.
              </li>
              <li>
                <strong>Technical data:</strong> device type, browser, approximate location, and pages visited on the
                marketing site.
              </li>
            </ul>
          </article>
          <article>
            <h2>3. How we use information</h2>
            <ul>
              <li>To route eligibility requests and support clinical evaluation</li>
              <li>To fulfill prescriptions through licensed U.S. pharmacy partners when prescribed</li>
              <li>To process supplement orders and customer support requests</li>
              <li>To improve site performance, security, and clarity of disclosures</li>
            </ul>
          </article>
          <article>
            <h2>4. Clinical data stays out of marketing tools</h2>
            <p>
              Medical intake and identifiable health information are collected in the secure clinical portal — not on the
              public marketing website. We do not send medical intake, diagnoses, medications, lab results, or other
              identifiable health data to advertising platforms.
            </p>
          </article>
          <article>
            <h2>5. Sharing</h2>
            <p>We may share information with:</p>
            <ul>
              <li>Licensed clinicians in the care network</li>
              <li>Licensed U.S. pharmacy partners for fulfillment when a prescription is issued</li>
              <li>Lab partners when labs are ordered as part of care</li>
              <li>Service providers who support hosting, security, payments, or operations under contractual limits</li>
              <li>Authorities when required by law</li>
            </ul>
          </article>
          <article>
            <h2>6. Cookies and tracking</h2>
            <p>
              The marketing site may use essential cookies for security and basic analytics. We avoid session-recording
              tools and ad pixels that capture health selections. Any future marketing tools will be reviewed so they do
              not receive clinical intake data.
            </p>
          </article>
          <article>
            <h2>7. Your choices</h2>
            <p>
              You may request access, correction, or deletion of personal information where applicable by contacting{' '}
              <a href="mailto:privacy@nexamd.com">privacy@nexamd.com</a>. Clinical record requests may follow additional
              healthcare procedures.
            </p>
          </article>
          <article>
            <h2>8. Contact</h2>
            <p>
              Privacy questions: <a href="mailto:privacy@nexamd.com">privacy@nexamd.com</a>
              <br />
              Product or adverse-event questions for supplements: <a href="mailto:adverse-events@nexamd.com">adverse-events@nexamd.com</a>
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
