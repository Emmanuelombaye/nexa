import Link from 'next/link'
import { pricingModel } from '../lib/site-data'

export default function PricingModel() {
  return (
    <section className="pricing-model">
      <div className="container">
        <div className="pricing-model__intro">
          <p className="eyebrow">{pricingModel.eyebrow}</p>
          <h2>{pricingModel.headline}</h2>
          <p className="lede">{pricingModel.lede}</p>
        </div>

        <div className="pricing-model__principles">
          {pricingModel.principles.map((item) => (
            <article key={item.title} className="pricing-model__principle">
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="pricing-model__buckets">
          {pricingModel.buckets.map((bucket) => (
            <article key={bucket.title} className="pricing-model__bucket">
              <h3>{bucket.title}</h3>
              <p className="pricing-model__bucket-note">{bucket.note}</p>
              <ul className="check-list">
                {bucket.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing-model__cta">
          <Link href="/check-eligibility" className="btn btn--primary btn--lg">
            Check Eligibility
          </Link>
          <p className="hero__stats-note">{pricingModel.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
