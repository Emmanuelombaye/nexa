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

const CARE_ROWS = [
  { key: 'followUp', label: 'Follow-up', icon: 'calendar' },
  { key: 'refills', label: 'Refills', icon: 'refresh' },
  { key: 'labs', label: 'Labs', icon: 'labs' },
  { key: 'messaging', label: 'Messaging', icon: 'message' },
] as const

function DetailIcon({ name }: { name: string }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true as const,
    className: 'program-blueprint__icon',
  }

  switch (name) {
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'refresh':
      return (
        <svg {...common}>
          <path
            d="M19.5 12a7.5 7.5 0 11-2.2-5.3M19.5 4.5v4.2h-4.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'labs':
      return (
        <svg {...common}>
          <path
            d="M9.5 3.5h5M10 3.5v6.2L5.8 17a2.6 2.6 0 002.2 4h8a2.6 2.6 0 002.2-4L14 9.7V3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'message':
      return (
        <svg {...common}>
          <path
            d="M5 6.5A2.5 2.5 0 017.5 4h9A2.5 2.5 0 0119 6.5v7A2.5 2.5 0 0116.5 16H10l-4 3.5V6.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path
            d="M12 3.5l7 2.5v5.4c0 4.2-2.8 7.8-7 9.1-4.2-1.3-7-4.9-7-9.1V6l7-2.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9.2 12.1l1.9 1.9 3.7-3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'map':
      return (
        <svg {...common}>
          <path
            d="M9 4.5l-5 2v13l5-2 6 2 5-2v-13l-5 2-6-2zM9 4.5v13M15 6.5v13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function splitStates(entries: string[]) {
  return entries.flatMap((entry) => entry.split(',').map((s) => s.trim())).filter(Boolean)
}

export default function ProgramPage({ program }: { program: ProgramProps }) {
  const isPeptide = program.slug === 'peptide-therapy'
  const image = programImagesRecord[program.slug]
  const availability = stateAvailabilityBySlug[program.slug]
  const careItems = CARE_ROWS.map((row) => ({
    ...row,
    text: program.ongoingCare[row.key],
  }))

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

        <section className="program-blueprint" aria-labelledby="program-blueprint-heading">
          <div className="program-blueprint__atmosphere" aria-hidden="true" />
          <div className="container program-blueprint__inner">
            <header className="program-blueprint__header" data-reveal="up">
              <p className="eyebrow">Care blueprint</p>
              <h2 id="program-blueprint-heading">Everything included in this program.</h2>
              <p className="program-blueprint__sub">
                Clear coverage, clinical follow-up, medication status, and state availability — before you enroll.
              </p>
            </header>

            <div className="program-blueprint__grid">
              <article className="program-blueprint__panel program-blueprint__panel--highlights" data-reveal="up">
                <div className="program-blueprint__panel-top">
                  <span className="program-blueprint__badge">
                    <DetailIcon name="check" />
                    What&apos;s included
                  </span>
                  <h3>Program highlights</h3>
                </div>
                <ul className="program-blueprint__checks">
                  {program.highlights.map((item, index) => (
                    <li key={item}>
                      <span className="program-blueprint__check-index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="program-blueprint__check-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className="program-blueprint__panel program-blueprint__panel--care"
                data-reveal="up"
                style={{ '--delay': '70ms' } as React.CSSProperties}
              >
                <div className="program-blueprint__panel-top">
                  <span className="program-blueprint__badge">
                    <DetailIcon name="message" />
                    Ongoing care
                  </span>
                  <h3>Follow-up, messaging, and refills</h3>
                </div>
                <ul className="program-blueprint__care-list">
                  {careItems.map((item) => (
                    <li key={item.key}>
                      <span className="program-blueprint__care-icon" aria-hidden="true">
                        <DetailIcon name={item.icon} />
                      </span>
                      <div className="program-blueprint__care-copy">
                        <strong>{item.label}</strong>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              {program.medicationStatus && (
                <article
                  className="program-blueprint__panel program-blueprint__panel--meds"
                  data-reveal="up"
                  style={{ '--delay': '140ms' } as React.CSSProperties}
                >
                  <div className="program-blueprint__panel-top">
                    <span className="program-blueprint__badge">
                      <DetailIcon name="shield" />
                      Approved vs compounded
                    </span>
                    <h3>{program.medicationStatus.title}</h3>
                  </div>
                  <ul className="program-blueprint__meds">
                    {program.medicationStatus.points.map((item, index) => (
                      <li key={item}>
                        <span className="program-blueprint__med-step" aria-hidden="true">
                          {index + 1}
                        </span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {availability && (
                <article
                  className="program-blueprint__panel program-blueprint__panel--states"
                  data-reveal="up"
                  style={{ '--delay': '210ms' } as React.CSSProperties}
                >
                  <div className="program-blueprint__panel-top program-blueprint__panel-top--row">
                    <div>
                      <span className="program-blueprint__badge">
                        <DetailIcon name="map" />
                        State availability
                      </span>
                      <h3>Where this program is offered</h3>
                      <p className="program-blueprint__lede">{availability.summary}</p>
                    </div>
                    <Link href="/pricing" className="btn btn--outline btn--sm program-blueprint__matrix-btn">
                      View full state matrix
                    </Link>
                  </div>

                  <div className="program-blueprint__state-groups">
                    {availability.groups.map((group) => {
                      const states = splitStates(group.states)
                      const statusLabel =
                        group.status === 'available'
                          ? 'Available'
                          : group.status === 'review'
                            ? 'Clinical review required'
                            : 'Not currently available'

                      return (
                        <div
                          key={group.status}
                          className={`program-blueprint__state-group program-blueprint__state-group--${group.status}`}
                        >
                          <div className="program-blueprint__state-label">
                            <span className="program-blueprint__state-dot" aria-hidden="true" />
                            <strong>{statusLabel}</strong>
                            <span className="program-blueprint__state-count">{states.length} states</span>
                          </div>
                          <ul className="program-blueprint__state-chips" aria-label={statusLabel}>
                            {states.map((state) => (
                              <li key={`${group.status}-${state}`}>{state}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </article>
              )}
            </div>
          </div>
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
