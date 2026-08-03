import Link from 'next/link'
import { shopLinks, treatmentLinks } from '../lib/site-data'

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/telehealth-consent', label: 'Telehealth Consent' },
  { href: '/supplement-terms', label: 'Supplement Terms' },
]

export default function SiteFooter() {
  return (
    <>
      <div className="brand-bottom-banner" aria-hidden="true">
        <div className="container brand-bottom-banner__inner">
          <span className="brand-bottom-banner__text">CARE THAT CONNECTS. RESULTS THAT LAST.</span>
          <span className="brand-bottom-banner__dot" />
        </div>
      </div>
      <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Link href="/" className="footer__logo-wrap" aria-label="Nexa Rx home">
            <img
              src="/brand/primary-logo.webp"
              alt="Nexa Rx - Personal Care. Real Results."
              width={160}
              height={50}
              className="footer__logo-img"
            />
          </Link>
          <p className="footer__tag">Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.</p>
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
          <h4>Company</h4>
          <Link href="/medical-team">Medical Team</Link>
          <Link href="/check-eligibility">Check Eligibility</Link>
          <Link href="/patient-login">Patient Login</Link>
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Nexa Rx. All rights reserved.</p>
        <nav className="footer__legal-links" aria-label="Legal">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer__legal">
          Nexa Rx is a telehealth platform connecting eligible patients with licensed clinicians and qualified U.S.
          pharmacy partners. Compounded medications are not FDA-approved as finished branded products. Prescription
          treatment is not guaranteed; eligibility and treatment decisions are made by a licensed clinician.
          Availability varies by state and treatment. Dietary supplements are non-prescription products and are sold
          separately from clinical care. *Timing not guaranteed. State, pharmacy, product, and eligibility limitations
          apply.
        </p>
      </div>
    </footer>
    </>
  )
}
