import Link from 'next/link'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import PageShell from './PageShell'
import SiteImage from './SiteImage'
import MediaFrame from './MediaFrame'
import { supplements } from '../lib/site-data'
import { media, supplementImages, bundleImages } from '../lib/media'

const pageCopy = {
  bundles: {
    title: 'Supplement Bundles',
    body: 'Focused bundles tied to clear everyday needs. Each bundle is labeled as a dietary supplement and sold separately from prescription care.',
    image: media.bundlesHero,
  },
  'subscribe-and-save': {
    title: 'Subscribe & Save',
    body: 'Save on recurring supplement orders. Subscription frequency, renewal amount, and cancellation method are shown before payment.',
    image: media.shopProduct,
  },
  'order-support': {
    title: 'Order Support',
    body: 'Questions about supplement orders, shipping, returns, or adverse events? Contact support through the paths shown at checkout.',
    image: media.careJourney,
  },
}

interface ShopSubPageParams {
  slug: 'bundles' | 'subscribe-and-save' | 'order-support'
}

const bundleImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = bundleImages
const supplementImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = supplementImages

export default function ShopSubPage({ params }: { params: ShopSubPageParams }) {
  const copy = pageCopy[params.slug]

  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: copy.title, path: `/supplements/${params.slug}` },
        ]}
      />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Shop</p>
            <h1>{copy.title}</h1>
            <p className="lede">{copy.body}</p>
            <div className="hero__cta">
              <Link href="/supplements" className="btn btn--primary btn--lg">
                Shop Supplements
              </Link>
              <Link href="/supplements/checkout" className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </div>
          <MediaFrame
            src={copy.image.src}
            alt={copy.image.alt}
            aspectRatio="16/10"
            className="program-split__media"
            reveal="right"
          />
        </section>

        {params.slug === 'bundles' && (
          <section className="container bundle-grid">
            {supplements.map((item, index) => {
              const image = bundleImagesRecord[item.slug] || supplementImagesRecord[item.slug] || media.shopProduct
              const shape = `bundle-card--shape-${(index % 4) + 1}`
              return (
                <article
                  key={item.slug}
                  className={`bundle-card ${shape}`}
                  data-reveal="up"
                  data-product-card="true"
                  data-product-slug={item.slug}
                  data-product-name={`${item.name} Bundle`}
                  data-product-price={`${item.subscribePrice}/mo`}
                  data-product-image={image.src}
                  data-product-alt={image.alt}
                  style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
                >
                  <div className="bundle-card__media">
                    <SiteImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      quality={74}
                    />
                  </div>
                  <div className="bundle-card__body">
                    <span className="pill">Dietary Supplement Bundle</span>
                    <h3>{item.name} Bundle</h3>
                    <p className="bundle-card__desc">{item.description}</p>
                    <p className="bundle-card__price">From {item.subscribePrice}/month</p>
                    <div className="bundle-card__actions">
                      <Link href={`/supplements/${item.slug}`}>View Details</Link>
                      <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--sm">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
        )}

        {params.slug === 'subscribe-and-save' && (
          <section className="container treat-grid">
            {supplements.map((item, index) => {
              const image = supplementImagesRecord[item.slug] || media.shopProduct
              return (
              <article
                key={item.slug}
                className="treat-card"
                data-reveal="up"
                data-product-card="true"
                data-product-slug={item.slug}
                data-product-name={item.name}
                data-product-price={`${item.subscribePrice}/mo`}
                data-product-image={image.src}
                data-product-alt={image.alt}
                style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="treat-card__media">
                  <SiteImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    quality={72}
                  />
                </div>
                <div className="treat-card__body">
                  <span className="pill">Subscribe &amp; Save</span>
                  <h3>{item.name}</h3>
                  <p className="treat-card__desc">{item.description}</p>
                  <p className="treat-card__price">
                    One-time {item.oneTimePrice} · Subscribe {item.subscribePrice}
                  </p>
                  <p className="treat-card__price-note">{item.renewal}</p>
                  <div className="treat-card__actions">
                    <Link href={`/supplements/${item.slug}`}>View Details</Link>
                    <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--sm">
                      Checkout
                    </Link>
                  </div>
                </div>
              </article>
              )
            })}
          </section>
        )}

        {params.slug === 'order-support' && (
          <section className="container" data-reveal="up">
            <ul className="check-list">
              <li>Shipping terms and delivery windows are shown before payment.</li>
              <li>Return policy and cancellation method are shown before enrollment or purchase.</li>
              <li>Contact support for product questions and adverse-event reporting.</li>
              <li>Supplement orders remain separate from clinical intake and prescription decisions.</li>
            </ul>
          </section>
        )}
      </main>
    </PageShell>
  )
}
