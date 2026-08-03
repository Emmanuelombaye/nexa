import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PricingModel from '../../components/PricingModel'
import PricingBeforePay from '../../components/PricingBeforePay'
import PricingComparison from '../../components/PricingComparison'
import PricingGrid from '../../components/PricingGrid'
import StateAvailability from '../../components/StateAvailability'
import MediaFrame from '../../components/MediaFrame'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Pricing | Nexa Rx',
  description:
    'Transparent telehealth pricing with $0 to start, itemized enrollment summaries, and program-specific inclusions before you pay.',
  path: '/pricing',
  image: media.pricingHero.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Clear Pricing</p>
            <h1>$0 to start. Itemized quote before you pay.</h1>
            <p className="lede">
              Review due today, recurring terms, consultation fees, prescription costs, labs, shipping, and cancellation
              policy in one enrollment summary — before confirming care.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary btn--lg" href="/check-eligibility">
                Check Eligibility
              </Link>
              <Link className="btn btn--outline btn--lg" href="/#treatments">
                View Treatments
              </Link>
            </div>
            <p className="hero__disclosure">
              Prescription treatment is not guaranteed. You are charged for ongoing program care only after you review
              and accept your enrollment summary.
            </p>
          </div>
          <MediaFrame
            src={media.pricingHero.src}
            alt={media.pricingHero.alt}
            priority
            quality={74}
            caption="Clear costs before enrollment"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <PricingModel />
        <PricingBeforePay />
        <PricingComparison />
        <PricingGrid />
        <StateAvailability compact />
        <p className="container hero__stats-note" style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
          *Clinical evaluation is included when prescribed. If you are not eligible, ongoing program billing does not
          begin. Monthly totals vary by therapy, dosage, pharmacy, shipping, and state.
        </p>
      </main>
    </PageShell>
  )
}
