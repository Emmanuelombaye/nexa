import Link from 'next/link'
import { pricingPrograms } from '../lib/site-data'
import { media } from '../lib/media'
import SiteImage from './SiteImage'

const imageBySlug: Record<string, { src: string; alt: string; width: number; height: number }> = {
  semaglutide: media.pricingSemaglutide,
  tirzepatide: media.pricingTirzepatide,
}

export default function PricingGrid() {
  return (
    <section className="container pricing-grid pricing-grid--enhanced">
      {pricingPrograms.map((program, index) => {
        const image = imageBySlug[program.slug]
        return (
          <article
            key={program.slug}
            className="pricing-card pricing-card--enhanced"
            data-reveal="up"
            style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
          >
            {image && (
              <div className="pricing-card__media">
                <SiteImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  quality={70}
                />
              </div>
            )}

            <div className="pricing-card__header">
              <span className="pill">{program.pricingModel}</span>
              <h2>{program.title}</h2>
              <p className="subtitle">{program.subtitle}</p>
            </div>

            <div className="pricing-card__hero-price">
              <div>
                <span className="pricing-card__hero-label">Due today</span>
                <strong className="pricing-card__hero-value">{program.dueToday}</strong>
              </div>
              <p className="pricing-card__hero-note">{program.dueTodayNote}</p>
            </div>

            <div className="pricing-card__split">
              <div className="pricing-card__split-col">
                <h3>Included in program</h3>
                <ul>
                  {program.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pricing-card__split-col pricing-card__split-col--muted">
                <h3>Shown before enrollment</h3>
                <ul>
                  {program.billedSeparately.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pricing-card__drivers">
              <span className="label">Monthly total depends on</span>
              <div className="pricing-card__driver-tags">
                {program.costDrivers.map((driver) => (
                  <span key={driver} className="pricing-card__driver-tag">
                    {driver}
                  </span>
                ))}
              </div>
            </div>

            <details className="pricing-card__details">
              <summary>View full pricing breakdown</summary>
              <div className="pricing-card__details-body">
                <div className="pricing-card__row">
                  <span className="label">Recurring amount</span>
                  <span className="value">{program.recurring}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Clinical evaluation / consultation</span>
                  <span className="value">{program.consultationFee}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Prescription cost</span>
                  <span className="value">{program.medicationCost}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Lab diagnostic fees</span>
                  <span className="value">{program.labCost}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Supplies &amp; shipping</span>
                  <span className="value">{program.shippingCost}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Follow-up care &amp; messaging</span>
                  <span className="value">{program.supportInclusions}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Cancellation policy</span>
                  <span className="value">{program.cancellation}</span>
                </div>
                <div className="pricing-card__row limitation-row">
                  <span className="label">Limitations &amp; availability</span>
                  <span className="value">{program.limitations}</span>
                </div>
              </div>
            </details>

            <div className="pricing-card__footer">
              <Link href={`/check-eligibility?program=${program.slug}`} className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
              <Link href={`/${program.slug}`} className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}
