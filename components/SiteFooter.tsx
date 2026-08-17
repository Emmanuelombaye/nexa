import Link from 'next/link'
import { shopLinks, treatmentLinks } from '../lib/site-data'

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/states-we-serve', label: 'States We Serve' },
  { href: '/telehealth-consent', label: 'Telehealth Consent' },
  { href: '/hipaa', label: 'HIPAA Notice' },
  { href: '/medical-disclaimer', label: 'Medical Disclaimer' },
  { href: '/patient-safety', label: 'Patient Safety' },
  { href: '/shipping', label: 'Shipping & Fulfillment' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/supplement-terms', label: 'Supplement Terms' },
]

const COMPANY_ADDRESS = ['22238 N Calle Royale', 'Scottsdale, AZ 85255'] as const

export default function SiteFooter() {
  return (
    <>
      <div className="brand-bottom-banner" aria-hidden="true">
        <div className="container brand-bottom-banner__inner">
          <span className="brand-bottom-banner__text">LICENSED CLINICAL CARE. CLEAR PRICING.</span>
          <span className="brand-bottom-banner__dot" />
        </div>
      </div>
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand-col">
            <Link href="/" className="footer__logo-wrap" aria-label="Nexa Rx home">
              <img
                src="/brand/nexa-rx-tm-logo-on-dark.webp"
                alt="Nexa Rx™"
                width={180}
                height={49}
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__tag">
              Nexa RX LLC d/b/a NexaRx®. Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.
            </p>
            <address className="footer__address">
              {COMPANY_ADDRESS.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
          <div className="footer__col">
            <h4>Care</h4>
            {treatmentLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/quality-and-safety">Quality &amp; Safety</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="footer__col">
            <h4>Shop</h4>
            {shopLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Support</h4>
            <Link href="/medical-team">Medical Team</Link>
            <Link href="/check-eligibility">Check Eligibility</Link>
            <Link href="/check-eligibility">Patient Login</Link>
            <Link href="/patient-safety">Patient Safety</Link>
            <a href="mailto:support@nexarx.com">support@nexarx.com</a>
            <p className="footer__contact-lines">
              {COMPANY_ADDRESS.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="container footer__trust" aria-label="Trust signals">
          <div className="footer__trust-item">
            <span className="footer__trust-mark footer__trust-mark--pending" aria-hidden="true">
              LS
            </span>
            <div>
              <span className="footer__trust-kicker">Pending review</span>
              <strong>LegitScript certification — not yet verified</strong>
            </div>
          </div>
          <div className="footer__trust-item">
            <span className="footer__trust-mark" aria-hidden="true">
              USA
            </span>
            <div>
              <span className="footer__trust-kicker">Compounded by</span>
              <strong>Licensed Pharmacies in the USA</strong>
            </div>
          </div>
          <div className="footer__trust-item">
            <span className="footer__trust-mark footer__trust-mark--hipaa" aria-hidden="true">
              HIPAA
            </span>
            <div>
              <span className="footer__trust-kicker">Data protected</span>
              <strong>HIPAA Compliant</strong>
            </div>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>Nexa RX LLC d/b/a NexaRx® · &copy; {new Date().getFullYear()} NexaRx®. All rights reserved.</p>
          <p className="footer__legal">
            {COMPANY_ADDRESS.join(', ')}. Official website for NexaRx® personalized telehealth services.
          </p>
          <nav className="footer__legal-links" aria-label="Legal">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="footer__legal">
            NexaRx® is a telehealth platform that connects eligible patients with independent US-licensed providers and
            licensed pharmacy partners. NexaRx® is not a pharmacy and does not itself practice medicine. Prescription
            products are provided only if clinically appropriate after review by a US-licensed provider. Individual
            results may vary.
          </p>
          <p className="footer__legal">
            <strong>Service availability:</strong> Services may not be available in all states. Availability may vary by
            treatment, provider licensure, pharmacy fulfillment, and patient eligibility.
          </p>
          <p className="footer__legal">
            <strong>Provider network:</strong> Clinical services are provided by licensed providers through affiliated or
            contracted provider networks. Provider availability may vary by state, treatment, and patient eligibility.
          </p>
          <p className="footer__legal">
            <strong>Pharmacy &amp; fulfillment:</strong> NexaRx® is not a pharmacy, drug manufacturer, outsourcing
            facility, or compounding facility, and does not compound, manufacture, dispense, or physically fulfill
            medications. If prescription treatment is clinically appropriate, medication may be fulfilled through a
            licensed dispensing pharmacy pursuant to a patient-specific prescription. Compounded medications are not
            FDA-approved as finished branded products. *Timing not guaranteed.
          </p>
          <p className="footer__legal">
            <strong>Product imagery:</strong> Displayed product imagery is intended solely for illustrative purposes and
            is not intended to imply that NexaRx® compounds, manufactures, dispenses, or physically fulfills medications.
            Actual medication packaging and pharmacy labeling may differ. Dietary supplements are non-prescription
            products sold separately from clinical care.
          </p>
        </div>
      </footer>
    </>
  )
}
