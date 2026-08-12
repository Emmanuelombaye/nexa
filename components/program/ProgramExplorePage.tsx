'use client'

import Link from 'next/link'
import { useMemo, useState, type CSSProperties } from 'react'
import {
  getProgramExploreContent,
  PROGRAM_INCLUDES,
  PROTOCOL_ICON_LINES,
  PROTOCOL_ICON_PATH,
  PROTOCOL_ICON_WAVE,
  type ProgramExploreContent,
} from '../../lib/program-page-data'
import { PATIENT_RESULTS } from '../../lib/home-data'
import { RetroClosingSection, RetroReviewsSection, RetroWhySection } from '../retro/RetroShared'

type ProgramInput = {
  slug: string
  navLabel: string
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
}

const METRIC_ARROW = (
  <svg className="retro-happy__metric-arrow" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M7.5 1.5v12M2.5 8.5l5 5 5-5" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PILL_CHECK = (
  <svg className="retro-happy__pill-check" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2.25L3.5 4.5v5.25c0 3.75 2.6 7.05 6.5 8.25 3.9-1.2 6.5-4.5 6.5-8.25V4.5L10 2.25z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10.25l2.25 2.25L13.5 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ProtocolIcon({ name }: { name: string }) {
  if (name === PROTOCOL_ICON_PATH) {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 22C30 22 30 44 48 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
        <circle cx="30" cy="29" r="2.4" fill="currentColor" />
      </svg>
    )
  }
  if (name === PROTOCOL_ICON_LINES) {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
        <line x1="19" y1="26" x2="41" y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="19" y1="32" x2="46" y2="32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="19" y1="38" x2="35" y2="38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
      </svg>
    )
  }
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 34c3.2-7 6.4-7 9.6 0s6.4 7 9.6 0 6.4-7 9.6 0 6.4 7 9.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ExploreHero({
  content,
  program,
}: {
  content: ProgramExploreContent
  program: ProgramInput
}) {
  return (
    <section className="explore-hero-section bg-white pb-10">
      <div className="explore-hero-container u-container">
        <div className="explore-hero-grid flex flex-col gap-6 tablet:flex-row tablet:items-start tablet:gap-9 desktop:gap-8">
          <div
            data-card={content.card}
            className="explore-card explore-hero-card relative flex flex-col justify-between overflow-visible rounded-3xl text-xs font-medium tracking-[-0.01em] w-full h-[27.5rem] tablet:h-auto tablet:min-h-0 tablet:flex-1 tablet:max-w-[31.5131rem] desktop:flex-none desktop:w-[31.5131rem] desktop:aspect-[480/549] px-6 pt-6 pb-5 tablet:px-7 tablet:pt-8 tablet:pb-7"
          >
            <h2 className="explore-hero-card-title mx-auto m-0 text-center text-[1.75rem] tablet:text-[2.5rem] desktop:text-[2.625rem] leading-[1] tracking-[-0.04em] font-medium max-w-[15ch]">
              {content.cardTitle}
            </h2>
            <img src={content.vialImage} alt="" className="explore-hero-card-vial" loading="lazy" />
            <div className="explore-hero-card-price explore-hero-card-price--nexa" aria-label={content.priceBadgeAlt}>
              <span className="explore-hero-card-price-main">{program.price}</span>
              <span className="explore-hero-card-price-sub">to start</span>
            </div>
            <div className="explore-hero-card-footer flex items-center justify-between gap-3">
              <div>
                <strong className="font-medium">20,000+</strong> patients on Nexa Rx
              </div>
              <div className="flex items-center gap-1.5">
                <span className="explore-hero-chip inline-flex items-center justify-center rounded-full text-xs font-medium leading-none tracking-tight px-1.5 py-1 whitespace-nowrap bg-pax-chip text-white">
                  {content.chip}
                </span>
                <span className="explore-hero-stock inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium leading-none tracking-tight whitespace-nowrap">
                  <span className="explore-stock-dot block w-1.5 h-1.5 rounded-full" />
                  In Stock
                </span>
              </div>
            </div>
          </div>

          <div className="explore-hero-content flex flex-col w-full tablet:flex-1 desktop:max-w-[47%]">
            <p className="explore-hero-copy text-base leading-[1.5] tracking-[-0.01em] text-neutral-900 mb-4 tablet:mb-6 desktop:mb-8">
              {content.blurb}
            </p>

            <div className="explore-hero-products my-[18px] flex flex-row flex-wrap items-center gap-x-6 gap-y-3 mb-6">
              <div className="explore-hero-product flex items-center gap-2 is-active" aria-current="true">
                <div className="explore-hero-product-thumb aspect-square w-[34px] max-w-[34px] overflow-clip rounded-full">
                  <img src={content.productThumb} alt="" loading="lazy" className="block w-full h-full object-cover" />
                </div>
                <div className="explore-hero-product-copy">
                  <div className="explore-hero-product-name text-sm font-medium text-neutral-900">{content.productName}</div>
                  <div className="explore-hero-product-desc">{content.productDesc}</div>
                </div>
              </div>
              <Link href={content.alternateProduct.href} className="explore-hero-product flex items-center gap-2 no-underline">
                <div className="explore-hero-product-thumb aspect-square w-[34px] max-w-[34px] overflow-clip rounded-full">
                  <img
                    src={content.alternateProduct.thumb}
                    alt=""
                    loading="lazy"
                    className="block w-full h-full object-cover"
                  />
                </div>
                <div className="explore-hero-product-copy">
                  <div className="explore-hero-product-name text-sm font-medium text-neutral-900">{content.alternateProduct.name}</div>
                  <div className="explore-hero-product-desc">{content.alternateProduct.desc}</div>
                </div>
              </Link>
            </div>

            <div className="explore-hero-includes mb-5 grid gap-4 grid-cols-1 gap-y-[18px] desktop:grid-cols-[0.75fr_1fr] desktop:items-center">
              <div className="explore-hero-plans">
                <div className="explore-hero-plans-label text-sm tracking-[-0.01em] text-neutral-900/40">All plans include:</div>
                <div className="explore-hero-plan-list mt-2.5 flex flex-col gap-3">
                  {PROGRAM_INCLUDES.map((item) => (
                    <div key={item} className="explore-hero-plan-item flex items-center gap-3 text-sm tracking-[-0.01em] text-neutral-900">
                      <div className="explore-hero-plan-icon flex aspect-square w-6 min-w-6 items-center justify-center overflow-clip rounded-full bg-neutral-200 text-neutral-900">
                        ✓
                      </div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="explore-hero-guarantee relative pt-5" aria-label="Nexa Rx care guarantee">
                <div className="explore-hero-guarantee-card rounded-2xl bg-neutral-200 px-3 pt-8 pb-4 text-center text-xs leading-[1.5] tracking-[-0.01em] text-neutral-900">
                  <div className="explore-hero-guarantee-heading" aria-hidden="true">
                    <img src="/brand/nexa-rx-tm-logo.webp" alt="Nexa Rx™" loading="lazy" className="explore-hero-guarantee-logo" />
                    <span className="explore-hero-guarantee-rule" />
                    <span className="explore-hero-guarantee-word">Promise</span>
                  </div>
                  <p>
                    Licensed U.S. providers, qualified pharmacy fulfillment, and clear pricing before you enroll — with
                    flexibility to change or cancel per your program terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="explore-hero-divider mb-9 hidden h-px w-full bg-[#eee] tablet:block" />

            <div className="explore-hero-pricing mb-6 grid grid-cols-1 gap-3 text-center tablet:mb-0">
              <div className="explore-hero-price-row flex items-center justify-between">
                <div className="explore-hero-price-label text-sm tracking-[-0.01em] text-neutral-900/40">Starting at:</div>
                <div className="explore-hero-price text-lg font-medium text-neutral-900">
                  {program.price}
                  {program.priceSubline ? <span className="explore-hero-price-sub"> · {program.priceSubline}</span> : null}
                </div>
              </div>
              {program.priceNote ? (
                <p className="text-xs text-neutral-600 text-left m-0">{program.priceNote}</p>
              ) : null}
              <Link
                href={`/check-eligibility?program=${program.slug}`}
                className="explore-hero-cta block w-full rounded-full px-6 py-4 text-base font-medium leading-none tracking-[-0.01em] text-center no-underline"
              >
                See if I qualify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HappyResults() {
  return (
    <section className="retro-happy" aria-label="Patient results">
      <h2 className="retro-happy__heading">
        Our <em className="retro-happy__heading-accent">patients&rsquo; unstoppable progress</em>
        <br />&mdash; built to last!
      </h2>
      <div className="retro-happy__marquee">
        <div className="retro-happy__track" role="list">
          {[0, 1].map((loop) => (
            <ul key={loop} className="retro-happy__group" role="list">
              {PATIENT_RESULTS.map((r) => (
                <li key={`${loop}-${r.name}`} className="retro-happy__card">
                  <img className="retro-happy__photo" src={r.image} alt={`${r.name} — verified Nexa Rx patient`} loading="lazy" />
                  <span className="retro-happy__chip retro-happy__chip--before">Before</span>
                  <span className="retro-happy__chip retro-happy__chip--after">After</span>
                  <div className="retro-happy__scrim" aria-hidden="true" />
                  <div className="retro-happy__metric">
                    <div className="retro-happy__metric-row">
                      <span className="retro-happy__metric-label">Lost</span>
                      {METRIC_ARROW}
                    </div>
                    <div className="retro-happy__metric-number">
                      <span className="retro-happy__metric-lbs">{r.lbs}</span>
                      <span className="retro-happy__metric-unit">lbs</span>
                    </div>
                    <div className="retro-happy__metric-time">{r.time}</div>
                  </div>
                  <div className="retro-happy__pill">
                    <span className="retro-happy__pill-name">{r.name}</span>
                    {PILL_CHECK}
                    <span className="retro-happy__pill-verified">Verified Nexa Rx Patient</span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProtocolSection({ content, programSlug }: { content: ProgramExploreContent; programSlug: string }) {
  return (
    <section className="retro-protocol pax-protocol" aria-labelledby={`retro-protocol-heading-${programSlug}`}>
      <div className="retro-protocol__inner">
        <div className="retro-protocol__left">
          <h2 id={`retro-protocol-heading-${programSlug}`} className="retro-protocol__heading">
            {content.protocol.heading}
          </h2>
          <p className="retro-protocol__sub">{content.protocol.sub}</p>
          <div className="retro-protocol__vials" aria-hidden="true">
            <img className="retro-protocol__vials-img" src={content.protocol.vials} alt="" loading="lazy" />
          </div>
        </div>
        <div className="retro-protocol__right">
          {content.protocol.cards.map((c, i) => (
            <article key={c.title} className="retro-protocol-card pax-protocol-card" data-step={String(i + 1).padStart(2, '0')} style={{ '--i': i } as CSSProperties}>
              <div className="pax-protocol-card__top">
                <span className="retro-protocol-card__icon pax-protocol-card__icon" aria-hidden="true">
                  <ProtocolIcon name={c.icon} />
                </span>
                <span className="pax-protocol-card__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="retro-protocol-card__title">{c.title}</h3>
              <p className="retro-protocol-card__body">{c.body}</p>
            </article>
          ))}
          <Link href={`/check-eligibility?program=${programSlug}`} className="retro-protocol__cta pax-protocol__cta">
            Check Eligibility
          </Link>
        </div>
      </div>
    </section>
  )
}

function CalculatorSection() {
  const [weight, setWeight] = useState('')
  const loss = useMemo(() => {
    const n = Number(weight)
    if (!Number.isFinite(n) || n <= 0) return null
    return (n * 0.2).toFixed(1)
  }, [weight])

  return (
    <section className="retro-calculator" aria-labelledby="retro-calculator-heading">
      <div className="retro-calculator__panel">
        <div className="retro-calculator__left">
          <h2 id="retro-calculator-heading" className="retro-calculator__heading">
            Let&rsquo;s see your <em>potential</em> with GLP-1s
          </h2>
          <div className="retro-calculator__control">
            <label className="sr-only" htmlFor="retro-calculator-weight">
              Enter your weight (lbs)
            </label>
            <input
              id="retro-calculator-weight"
              className="retro-calculator__input"
              type="number"
              inputMode="decimal"
              min="120"
              max="400"
              step="1"
              placeholder="Enter your weight (lbs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="retro-calculator__arrow" aria-hidden="true">
          <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="8" r="4.5" stroke="currentColor" strokeWidth="2" />
            <path d="M13 8h66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="m73 2 7 6-7 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="retro-calculator__right">
          <span className="retro-calculator__readout-label">
            You could <em>lose up to</em>
          </span>
          <span className="retro-calculator__readout" aria-live="polite">
            <span>{loss ?? '00.0'}</span>
            <span className="retro-calculator__readout-unit">lbs</span>
          </span>
          <span className="retro-calculator__readout-caption">*Illustrative estimate. Individual results vary.</span>
        </div>
      </div>
    </section>
  )
}

function ClinicalSection({ content }: { content: ProgramExploreContent }) {
  return (
    <section className="retro-clinical retro-clinical--weight-loss" aria-labelledby="retro-clinical-heading">
      <div className="retro-clinical__inner">
        <div className="retro-clinical__text">
          <p className="retro-clinical__eyebrow">{content.clinical.eyebrow}</p>
          <h2 id="retro-clinical-heading" className="retro-clinical__heading">
            {content.clinical.heading[0]}
            <br />
            {content.clinical.heading[1]}
            <br />
            {content.clinical.heading[2]}
          </h2>
          <div className="retro-clinical__body">
            {content.clinical.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="retro-clinical__visual" aria-hidden="true">
          <img className="retro-clinical__vial retro-clinical__vial--sema" src={content.clinical.vialImage} alt="" loading="lazy" />
          {content.clinical.secondaryVial ? (
            <img className="retro-clinical__vial retro-clinical__vial--tirz" src={content.clinical.secondaryVial} alt="" loading="lazy" />
          ) : null}
        </div>
      </div>
    </section>
  )
}

function ExpectSection({ content }: { content: ProgramExploreContent }) {
  return (
    <section className="retro-expect" aria-labelledby="retro-expect-heading">
      <div className="retro-expect__inner">
        <h2 id="retro-expect-heading" className="retro-expect__heading">
          {content.expect.title}
        </h2>
        <p className="retro-expect__sub">{content.expect.sub}</p>
        <div className="retro-expect__grid">
          {content.expect.weeks.map((w) => (
            <article key={w.tag} className="retro-expect-card">
              <div className="retro-expect-card__media">
                <img className="retro-expect-card__img" src={w.img} alt="" loading="lazy" />
              </div>
              <h3 className="retro-expect-card__label">{w.tag}</h3>
              <p className="retro-expect-card__desc">{w.text}</p>
            </article>
          ))}
        </div>
        <div className="retro-expect__carousel">
          <div className="retro-expect__track">
            {content.expect.weeks.map((w) => (
              <article key={`c-${w.tag}`} className="retro-expect-card retro-expect-card--carousel">
                <div className="retro-expect-card__media">
                  <img className="retro-expect-card__img" src={w.img} alt="" loading="lazy" />
                </div>
                <h3 className="retro-expect-card__label">{w.tag}</h3>
                <p className="retro-expect-card__desc">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function KnowallSection({ content, programSlug }: { content: ProgramExploreContent; programSlug: string }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="retro-knowall pax-knowall" aria-labelledby="retro-knowall-heading" data-knowall="">
      <div className="retro-knowall__inner">
        <div className="retro-knowall__left">
          <p className="pax-knowall__eyebrow">Before you begin</p>
          <h2 id="retro-knowall-heading" className="retro-knowall__heading">
            What most patients want to know before they begin.
          </h2>
          <img className="retro-knowall__vial retro-knowall__vial--wl" src={content.vialImage} alt="" loading="lazy" />
        </div>
        <div className="retro-knowall__right">
          <ul className="retro-knowall__list pax-knowall__list" role="list">
            {content.faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <li
                  key={f.q}
                  className="retro-knowall__item pax-knowall__item"
                  data-knowall-item=""
                  data-open={open ? 'true' : 'false'}
                  data-step={String(i + 1).padStart(2, '0')}
                  style={{ '--i': i } as CSSProperties}
                >
                  <button type="button" className="retro-knowall__toggle pax-knowall__toggle" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                    <span className="pax-knowall__n" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="retro-knowall__question">{f.q}</span>
                    <span className="retro-knowall__icon pax-knowall__icon" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  <div className="retro-knowall__panel" role="region" hidden={!open}>
                    <div className="retro-knowall__panel-inner">
                      <div className="retro-knowall__answer">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <Link href={`/check-eligibility?program=${programSlug}`} className="retro-knowall__cta pax-knowall__cta">
            Check Eligibility
          </Link>
        </div>
      </div>
    </section>
  )
}

function CarePanel({ program }: { program: ProgramInput }) {
  const careRows = [
    { label: 'Follow-up', text: program.ongoingCare.followUp },
    { label: 'Refills', text: program.ongoingCare.refills },
    { label: 'Labs', text: program.ongoingCare.labs },
    { label: 'Messaging', text: program.ongoingCare.messaging },
  ]

  return (
    <section className="program-care-panel" aria-labelledby="program-care-heading">
      <div className="program-care-panel__inner">
        <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ margin: 0 }}>
            Care blueprint
          </p>
          <h2 id="program-care-heading" style={{ margin: '0.5rem 0 0', fontFamily: 'var(--font-display)', fontWeight: 400 }}>
            Everything included in your {program.navLabel} program
          </h2>
        </header>
        <div className="program-care-grid">
          <article className="program-care-card">
            <h3>Program highlights</h3>
            <ul>
              {program.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="program-care-card">
            <h3>Ongoing care</h3>
            <ul>
              {careRows.map((row) => (
                <li key={row.label}>
                  <strong>{row.label}: </strong>
                  {row.text}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default function ProgramExplorePage({ program }: { program: ProgramInput }) {
  const content = getProgramExploreContent(program.slug)
  if (!content) return null

  return (
    <div className="program-explore yx-clone u5-type fade-in" data-retro-scope>
      <section className="yx-clone__intro px-4" style={{ paddingTop: '1.5rem' }}>
        <h1 className="max-w-[37.0625rem] mx-auto text-center text-2xl tablet:text-[2.25rem] leading-[1] tracking-[-0.04em] font-semibold text-neutral-900 m-0">
          {program.title}
        </h1>
        <p className="max-w-[42rem] mx-auto text-center text-base text-neutral-700 mt-4 mb-0">{program.priceSubline}</p>
      </section>

      <ExploreHero content={content} program={program} />
      <HappyResults />

      <ProtocolSection content={content} programSlug={program.slug} />
      <CalculatorSection />
      <ClinicalSection content={content} />
      <ExpectSection content={content} />
      <KnowallSection content={content} programSlug={program.slug} />
      <CarePanel program={program} />
      <RetroReviewsSection ctaHref={`/check-eligibility?program=${program.slug}`} />
      <RetroWhySection />
      <RetroClosingSection
        ctaHref={`/check-eligibility?program=${program.slug}`}
        title={
          <>
            Start {program.navLabel} with <em>licensed clinical guidance</em>
          </>
        }
        subtitle="Clear pricing before enrollment. Discreet delivery when prescribed."
      />

      <p className="program-crosslink">
        <Link href={content.alternate.href}>{content.alternate.teaser}</Link>
      </p>

      <section className="container" style={{ maxWidth: '48rem', margin: '0 auto 3rem', padding: '0 1rem' }}>
        <div className="quality__supplement-note">
          <p>
            GLP-1 therapies require medical evaluation and a valid prescription. Compounded semaglutide and tirzepatide
            are not FDA-approved as finished branded products when dispensed in compounded form.
          </p>
        </div>
      </section>
    </div>
  )
}
