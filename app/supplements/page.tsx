import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import SiteImage from '../../components/SiteImage'
import MediaFrame from '../../components/MediaFrame'
import { supplements } from '../../lib/site-data'
import { media, supplementImages } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const supplementImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = supplementImages

export const metadata = pageMetadata({
  title: 'Supplements Shop | Nexa Rx',
  description: 'Shop Nexa Rx dietary supplements in a separate non-prescription lane with transparent recurring terms.',
  path: '/supplements',
  image: media.heroProduct.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Supplements', path: '/supplements' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
            <h1>Shop Supplements</h1>
            <p className="lede">
              Dietary supplements are sold separately from medical treatment and do not affect prescribing decisions.
            </p>
            <div className="hero__cta">
              <Link href="/supplements" className="btn btn--primary btn--lg">
                Shop Supplements
              </Link>
              <Link href="/supplements/bundles" className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.heroProduct.src}
            alt={media.heroProduct.alt}
            priority
            caption="Dietary supplements"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
            reveal="right"
          />
        </section>
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    quality={72}
                  />
                </div>
                <div className="treat-card__body">
                  <span className="pill">Dietary Supplement</span>
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
        <p className="container supplements__disclaimer" style={{ marginBottom: '2rem' }}>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to
          diagnose, treat, cure, or prevent any disease. See <Link href="/supplement-terms">Supplement Terms</Link>.
        </p>
      </main>
    </PageShell>
  )
}
