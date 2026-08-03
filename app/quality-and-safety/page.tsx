import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import SiteImage from '../../components/SiteImage'
import MediaFrame from '../../components/MediaFrame'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Quality & Safety | Nexa Rx',
  description:
    'Clear standards for licensed clinical care, pharmacy fulfillment, secure portal intake, and supplement separation.',
  path: '/quality-and-safety',
  image: media.qualityHero.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Quality & Safety', path: '/quality-and-safety' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Quality &amp; Safety</p>
            <h1>Clear standards for every part of care.</h1>
            <p className="lede">
              Nexa Rx connects patients with licensed clinicians and qualified U.S. pharmacy partners, and we explain
              pricing and next steps before enrollment.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary btn--lg" href="/check-eligibility">
                Check Eligibility
              </Link>
              <Link className="btn btn--outline btn--lg" href="/#treatments">
                View Treatments
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.qualityHero.src}
            alt={media.qualityHero.alt}
            priority
            quality={74}
            caption="Quality standards"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <section className="container quality-visual-grid">
          <article className="quality-visual-card" data-reveal="up" style={{ '--delay': '0ms' } as React.CSSProperties}>
            <div className="quality-visual-card__media">
              <SiteImage
                src={media.qualitySecurePortal.src}
                alt={media.qualitySecurePortal.alt}
                fill
                quality={70}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              />
            </div>
            <div className="quality-visual-card__body">
              <h2>Secure clinical pathway</h2>
              <p>Medical intake stays in the clinical portal — not on the public marketing website.</p>
            </div>
          </article>
          <article className="quality-visual-card" data-reveal="up" style={{ '--delay': '80ms' } as React.CSSProperties}>
            <div className="quality-visual-card__media">
              <SiteImage
                src={media.qualityPharmacy.src}
                alt={media.qualityPharmacy.alt}
                fill
                quality={70}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              />
            </div>
            <div className="quality-visual-card__body">
              <h2>Qualified U.S. fulfillment</h2>
              <p>Prescriptions are sent to appropriately licensed U.S. pharmacies when treatment is prescribed.</p>
            </div>
          </article>
        </section>

        <section className="container" data-reveal="up">
          <ul className="check-list">
            <li>
              Partner pharmacies operate under strict FDA regulations (503A or 503B) and use active pharmaceutical
              ingredients (APIs) sourced from FDA-registered facilities.
            </li>
            <li>
              Our clinicians prescribe FDA-approved medications and, when clinically appropriate, compounded therapies
              prepared by licensed U.S. pharmacies.
            </li>
            <li>Compounded medications are not FDA-approved as finished branded products.</li>
            <li>Medical intake is collected in a secure clinical portal, not the public marketing website.</li>
            <li>Health-related selections and patient data should not be sent to ad platforms.</li>
            <li>Dietary supplements are sold separately from medical treatment.</li>
          </ul>
          <p className="quality__supplement-note">
            Dietary supplements are non-prescription products and are sold separately from medical treatment. Product
            claims, ingredients, directions, warnings, and recurring terms are shown on each product page.
          </p>
        </section>
      </main>
    </PageShell>
  )
}
