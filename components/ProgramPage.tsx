import Link from 'next/link'
import PageShell from './PageShell'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import MediaFrame from './MediaFrame'
import { programImages } from '../lib/media'
import { stateAvailabilityBySlug } from '../lib/site-data'

const programImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = programImages

interface ProgramProps {
  slug: string
  navLabel: string
  category: string
  title: string
  description: string
  price: string
  priceSubline?: string
  priceNote?: string
  highlights: string[]
  ongoingCare: {
    followUp: string
    refills: string
    labs: string
    messaging: string
  }
  medicationStatus?: {
    title: string
    points: string[]
  }
}

export default function ProgramPage({ program }: { program: ProgramProps }) {
  const isPeptide = program.slug === 'peptide-therapy'
  const image = programImagesRecord[program.slug]
  const availability = stateAvailabilityBySlug[program.slug]

  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Treatments', path: '/medical-weight-loss' },
          { name: program.navLabel, path: `/${program.slug}` },
        ]}
      />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">{program.category}</p>
            <h1>{program.title}</h1>
            <p className="lede">{program.description}</p>
            <p className="treat-card__price">{program.price}</p>
            {program.priceSubline && <p className="treat-card__price-note">{program.priceSubline}</p>}
            {program.priceNote && <p className="treat-card__price-note">{program.priceNote}</p>}
            <p className="hero__disclosure">
              Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
              clinician. Availability varies by state and treatment.
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
          {image && (
            <MediaFrame
              src={image.src}
              alt={image.alt}
              priority
              caption={program.navLabel}
              sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
              reveal="right"
            />
          )}
        </section>

        <section className="container program-detail-grid">
          <article className="program-detail-card" data-reveal="up">
            <p className="eyebrow">What&apos;s included</p>
            <h2>Program highlights</h2>
            <ul className="check-list">
              {program.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="program-detail-card" data-reveal="up" style={{ '--delay': '70ms' } as React.CSSProperties}>
            <p className="eyebrow">Ongoing care</p>
            <h2>Follow-up, messaging, and refills</h2>
            <ul className="check-list">
              <li>{program.ongoingCare.followUp}</li>
              <li>{program.ongoingCare.refills}</li>
              <li>{program.ongoingCare.labs}</li>
              <li>{program.ongoingCare.messaging}</li>
            </ul>
          </article>

          {program.medicationStatus && (
            <article className="program-detail-card" data-reveal="up" style={{ '--delay': '140ms' } as React.CSSProperties}>
              <p className="eyebrow">Approved vs compounded</p>
              <h2>{program.medicationStatus.title}</h2>
              <ul className="check-list">
                {program.medicationStatus.points.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          )}

          {availability && (
            <article className="program-detail-card" data-reveal="up" style={{ '--delay': '210ms' } as React.CSSProperties}>
              <p className="eyebrow">State availability</p>
              <h2>Where this program is offered</h2>
              <p className="lede">{availability.summary}</p>
              <ul className="state-card__groups">
                {availability.groups.map((group) => (
                  <li key={group.status}>
                    <strong>
                      {group.status === 'available'
                        ? 'Available'
                        : group.status === 'review'
                          ? 'Clinical review required'
                          : 'Not currently available'}
                    </strong>
                    <span>{group.states.join(', ')}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn btn--outline btn--sm" style={{ marginTop: '1rem' }}>
                View full state matrix
              </Link>
            </article>
          )}
        </section>

        {isPeptide && (
          <section className="container" data-reveal="up">
            <div className="quality__supplement-note">
              <p>
                Nexa Rx offers prescription therapies for eligible patients and does not sell research-use-only products.
                Compounded medications are not FDA-approved as finished branded products.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Depending on the prescribed therapy, fulfillment may occur through a 503A compounding pharmacy or a 503B
                outsourcing facility. Your clinician will explain the applicable channel before enrollment.
              </p>
            </div>
          </section>
        )}
      </main>
    </PageShell>
  )
}
