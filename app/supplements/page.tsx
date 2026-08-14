import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import SiteImage from '../../components/SiteImage'
import { supplements } from '../../lib/site-data'
import { media, supplementImages } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const supplementImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = supplementImages

export const metadata = pageMetadata({
  title: 'Supplements Shop | Nexa Rx',
  description: 'Shop two focused Nexa Rx dietary supplements in a separate non-prescription lane with transparent recurring terms.',
  path: '/supplements',
  image: media.heroProduct.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Supplements', path: '/supplements' }]} />
      <main className="shop-page">
        <section className="page-hero--cover shop-hero">
          <div className="page-hero__media" aria-hidden="true">
            <SiteImage
              src={media.heroProduct.src}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={74}
              className="page-hero__image"
            />
            <div className="page-hero__shade" />
          </div>
          <div className="container page-hero__content">
            <div className="page-hero__copy">
              <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
              <h1>Two supplements. Clear terms.</h1>
              <p className="lede">
                A focused shop for everyday wellness — sold separately from medical treatment and never tied to
                prescribing decisions.
              </p>
              <div className="hero__cta">
                <Link href="#shop-shelf" className="btn btn--primary btn--lg">
                  Shop Now
                </Link>
                <Link href="/supplements/subscribe-and-save" className="btn btn--on-cover btn--lg">
                  Subscribe &amp; Save
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="shop-shelf" className="container shop-shelf">
          <div className="shop-shelf__head">
            <p className="eyebrow">In stock</p>
            <h2>Choose your support</h2>
            <p className="section__sub">Two products. Transparent one-time and subscribe pricing before you pay.</p>
          </div>
          <div className="treat-grid treat-grid--duo">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
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
          </div>
        </section>

        <p className="container supplements__disclaimer" style={{ marginBottom: '2rem' }}>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to
          diagnose, treat, cure, or prevent any disease. See <Link href="/supplement-terms">Supplement Terms</Link>.
        </p>
      </main>
    </PageShell>
  )
}
