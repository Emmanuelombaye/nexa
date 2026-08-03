import Link from 'next/link'
import PageShell from '../../../components/PageShell'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import SiteImage from '../../../components/SiteImage'
import MediaFrame from '../../../components/MediaFrame'
import { media } from '../../../lib/media'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata({
  title: 'Supplements Checkout | Nexa Rx',
  description: 'Mock checkout flow for Nexa Rx supplements with recurring billing disclosures.',
  path: '/supplements/checkout',
  image: media.shopProduct.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: 'Checkout', path: '/supplements/checkout' },
        ]}
      />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Checkout (Mock)</p>
            <h1>Review recurring terms before purchase.</h1>
            <p className="lede">
              This demo checkout shows one-time price, subscription price, renewal frequency, cancellation method,
              return policy, and shipping terms before payment.
            </p>
            <div className="hero__cta">
              <Link href="/supplements" className="btn btn--primary btn--lg">
                Shop Supplements
              </Link>
              <Link href="/supplements/order-support" className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.packaging.src}
            alt={media.packaging.alt}
            priority
            caption="Review terms before payment"
            sizes="(max-width: 640px) 100vw, 50vw"
            reveal="right"
          />
        </section>
        <section className="container pricing-grid">
          <article className="pricing-card" data-reveal="up">
            <div className="pricing-card__media">
              <SiteImage
                src={media.shopProduct.src}
                alt={media.shopProduct.alt}
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                quality={70}
              />
            </div>
            <div className="pricing-card__header">
              <h2>Before you pay</h2>
              <p className="subtitle">Clear recurring terms</p>
            </div>
            <div className="pricing-card__row">
              <span className="label">One-time purchase</span>
              <span className="value">Displayed per product before payment</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Subscription price</span>
              <span className="value">Displayed per product before payment</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Renewal frequency</span>
              <span className="value">Every 30 days unless changed at checkout</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Cancellation method</span>
              <span className="value">Cancel from account settings or support prior to renewal</span>
            </div>
            <div className="pricing-card__row limitation-row">
              <span className="label">Return and shipping terms</span>
              <span className="value">Policies shown before order placement</span>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  )
}
