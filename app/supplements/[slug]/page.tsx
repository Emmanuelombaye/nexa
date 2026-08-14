import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '../../../components/PageShell'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import SupplementFactsPanel from '../../../components/SupplementFactsPanel'
import SiteImage from '../../../components/SiteImage'
import { supplements, siteUrl } from '../../../lib/site-data'
import { media, supplementImages } from '../../../lib/media'
import { pageMetadata } from '../../../lib/seo'

const supplementImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = supplementImages

export function generateStaticParams() {
  return supplements.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = supplements.find((item) => item.slug === slug)
  if (!product) return {}
  const image = supplementImagesRecord[product.slug] || media.shopProduct
  return pageMetadata({
    title: `${product.name} | Nexa Rx Supplements`,
    description: `${product.name} dietary supplement details, pricing, and recurring terms.`,
    path: `/supplements/${product.slug}`,
    image: image.src,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = supplements.find((item) => item.slug === slug)
  if (!product) notFound()

  const image = supplementImagesRecord[product.slug] || media.shopProduct

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: product.category,
    description: product.description,
    image: `${siteUrl}${image.src}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: product.subscribePrice.replace('$', ''),
      highPrice: product.oneTimePrice.replace('$', ''),
      offerCount: 2,
    },
  }

  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: product.name, path: `/supplements/${product.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="lede">{product.description}</p>
            <p className="hero__disclosure">
              Dietary supplement. Sold separately from prescription care. Does not require prescription or medical evaluation.
            </p>
            <div className="hero__cta">
              <Link
                href={`/supplements/checkout?product=${product.slug}`}
                className="btn btn--primary btn--lg"
              >
                Checkout ({product.subscribePrice}/mo)
              </Link>
              <Link href="/supplements" className="btn btn--outline btn--lg">
                Back to Shop
              </Link>
            </div>
          </div>
          <div className="program-split__media" style={{ position: 'relative', minHeight: '340px' }}>
            <SiteImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
              quality={75}
            />
          </div>
        </section>

        <section className="container program-detail-grid">
          <article className="program-detail-card" data-reveal="up">
            <p className="eyebrow">Formulation</p>
            <h2>Supplement Facts</h2>
            <SupplementFactsPanel product={product} />
          </article>

          <article className="program-detail-card" data-reveal="up" style={{ '--delay': '70ms' } as React.CSSProperties}>
            <p className="eyebrow">Subscription details</p>
            <h2>Transparent terms</h2>
            <ul className="check-list">
              <li>{product.subscribePrice}/month with Subscribe &amp; Save</li>
              <li>{product.oneTimePrice} single one-time order option</li>
              <li>Auto-renews monthly; pause or cancel anytime before renewal</li>
              <li>Dietary supplement; not intended to diagnose, treat, cure, or prevent any disease</li>
            </ul>
          </article>
        </section>
      </main>
    </PageShell>
  )
}
