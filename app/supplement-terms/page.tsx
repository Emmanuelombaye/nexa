import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Supplement Terms | Nexa Rx Shop',
  description:
    'Terms for Nexa Rx dietary supplement purchases, including recurring billing, shipping, returns, and adverse-event reporting.',
  path: '/supplement-terms',
})

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[{ name: 'Home', path: '/' }, { name: 'Supplement Terms', path: '/supplement-terms' }]}
      />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Shop</p>
          <h1>Supplement Terms</h1>
          <p className="lede">
            These terms apply to dietary supplement purchases in the Nexa Rx Shop. Supplements are non-prescription
            products sold separately from clinical care.
          </p>
          <p className="hero__stats-note">Last updated: July 22, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Separate from clinical care</h2>
            <p>
              Buying supplements does not make you a Nexa Rx clinical patient and does not affect eligibility or
              prescribing decisions. Supplement orders use commerce checkout — not the clinical portal.
            </p>
          </article>
          <article>
            <h2>2. Product information</h2>
            <p>
              Each product page shows statement of identity, net quantity, Supplement Facts, directions, warnings,
              allergens, storage, manufacturer/distributor details, pricing, renewal frequency, cancellation method,
              shipping, and return policy.
            </p>
          </article>
          <article>
            <h2>3. FDA disclaimer</h2>
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended
              to diagnose, treat, cure, or prevent any disease.
            </p>
          </article>
          <article>
            <h2>4. Pricing and Subscribe &amp; Save</h2>
            <ul>
              <li>One-time and subscription prices are shown before payment.</li>
              <li>Subscription renewal frequency and amount are shown before you confirm.</li>
              <li>Cancel anytime through Order Support before the next renewal date.</li>
            </ul>
          </article>
          <article>
            <h2>5. Shipping and returns</h2>
            <p>
              Shipping windows and return eligibility are shown on each product page and at checkout. Unopened products
              may generally be returned within 30 days of delivery; opened products are typically not eligible.
            </p>
          </article>
          <article>
            <h2>6. Age and safety</h2>
            <p>
              Products are intended for adults 18+ unless a product page states otherwise. Follow label directions and
              consult a healthcare professional if you are pregnant, nursing, take medication, or have a medical
              condition.
            </p>
          </article>
          <article>
            <h2>7. Adverse events</h2>
            <p>
              Report suspected adverse events to <a href="mailto:adverse-events@nexamd.com">adverse-events@nexamd.com</a>{' '}
              or call (800) 555-0139. Product questions: <a href="mailto:supplements@nexamd.com">supplements@nexamd.com</a>.
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/supplements" className="btn btn--primary">
              Shop Supplements
            </Link>
            <Link href="/supplements/order-support" className="btn btn--outline">
              Order Support
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
