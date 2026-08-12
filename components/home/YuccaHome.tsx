'use client'

import Link from 'next/link'
import { useEffect, useState, type CSSProperties } from 'react'
import {
  HERO_WORDS,
  HOME_FAQS,
  HOME_HIW_STEPS,
  HOME_TREATMENTS,
} from '../../lib/home-data'
import { media } from '../../lib/media'
import { RetroClosingSection, RetroWhySection } from '../retro/RetroShared'

function useHeroTyper() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_WORDS.length), 2200)
    return () => window.clearInterval(id)
  }, [])
  return HERO_WORDS[index]
}

function HeroSection() {
  const word = useHeroTyper()

  return (
    <section className="retro-home-hero-section pax-home-hero" data-hero-reveal data-revealed="true">
      <div className="retro-home-hero-card pax-home-hero__card relative overflow-hidden rounded-retro-card border-2 border-retro-ink">
        <div className="pax-home-hero__media" aria-hidden="true">
          <img
            className="pax-home-hero__photo"
            src={media.heroHomeDesktop.src}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <div className="pax-home-hero__wash" />
          <div className="pax-home-hero__scrim" />
        </div>
        <div className="retro-home-hero-contain relative z-2">
          <div className="retro-home-hero-wrap pax-home-hero__wrap relative z-2">
            <div className="retro-home-hero-top">
              <h1 className="sr-only">Provider-guided GLP-1 treatment</h1>
              <div className="retro-home-hero-heading pax-home-hero__heading hero-reveal hero-reveal--fade-up">
                <span className="italic pax-home-hero__word" style={{ color: word.color }}>
                  {word.text}
                </span>
                <br />
                with provider review
              </div>
            </div>
            <div className="retro-home-hero-bottom hero-reveal hero-reveal--fade-up">
              <div className="retro-home-hero-cta-group">
                <div className="retro-home-hero-primary-wrap">
                  <Link href="/check-eligibility?program=semaglutide" className="retro-home-hero-btn retro-home-hero-btn--primary">
                    Check Eligibility — $0 to start
                  </Link>
                </div>
                <Link href="/#treatments" className="retro-home-hero-btn retro-home-hero-btn--secondary">
                  <span>Explore Treatments</span>
                  <span className="retro-home-hero-btn-chevron" aria-hidden="true">
                    <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.799805 0.799988L5.79981 5.79999L0.799805 10.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TreatmentsSection() {
  const [activeId, setActiveId] = useState<(typeof HOME_TREATMENTS)[number]['id']>(HOME_TREATMENTS[0].id)
  const active = HOME_TREATMENTS.find((t) => t.id === activeId) ?? HOME_TREATMENTS[0]

  return (
    <section id="treatments" className="goal-treatments-section" data-active-tone={active.id}>
      <div className="goal-treatments-container">
        <div className="goal-treatments-heading">
          <h2>
            <em>Personalized treatments</em> reviewed by licensed providers
          </h2>
          <p>Choose Semaglutide or Tirzepatide, then complete a medical intake.</p>
        </div>

        <div className="goal-tablist-wrap">
          <div className="goal-tablist" role="tablist" aria-label="Choose a treatment">
            {HOME_TREATMENTS.map((treatment) => {
              const selected = treatment.id === activeId
              return (
                <button
                  key={treatment.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? 'is-active' : undefined}
                  style={selected ? ({ backgroundColor: treatment.toneSoft, borderColor: 'var(--navy)' } as CSSProperties) : undefined}
                  onClick={() => setActiveId(treatment.id)}
                >
                  {treatment.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="goal-treatments-pane" key={active.id}>
          <div className="goal-cutouts" aria-hidden="true">
            <img className="goal-cutouts-pair" src={active.cutoutPair} alt="" loading="lazy" />
          </div>

          <div className="goal-product-card">
            <div className="goal-product-tags">
              <div className="goal-product-tags-left">
                <span className="goal-product-tag" style={{ backgroundColor: active.toneSoft, borderColor: active.tone }}>
                  {active.label}
                </span>
                <span
                  className="goal-product-tag"
                  style={{ backgroundColor: active.badgeSoft, borderColor: active.badgeTone, color: 'var(--navy)' }}
                >
                  {active.badge}
                </span>
              </div>
            </div>

            <div className="goal-product-top">
              <div className="goal-product-vial">
                {active.vials.map((src, i) => (
                  <img key={src} src={src} alt="" loading="eager" className={i === 0 ? 'goal-vial goal-vial--front' : 'goal-vial goal-vial--back'} />
                ))}
              </div>
              <div className="goal-product-meta">
                <div className="goal-product-price" style={{ background: `linear-gradient(145deg, ${active.tone} 0%, ${active.toneSoft} 100%)` }}>
                  FROM {active.price}
                  <span>{active.period}</span>
                </div>
                <p className="goal-product-price-note">{active.priceNote}</p>
              </div>
            </div>

            <h3 className="goal-product-title">{active.title}</h3>
            <p className="goal-product-desc">{active.description}</p>
            <p className="goal-product-detail">{active.detail}</p>

            <div className="goal-product-ctas">
              <Link href={`/check-eligibility?program=${active.program}`} className="goal-product-cta goal-product-cta--primary">
                See if I qualify
              </Link>
              <Link href={active.learnHref} className="goal-product-cta goal-product-cta--ghost">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeHiwSection() {
  return (
    <section id="how-it-works-home" className="goal-hiw-section pax-hiw">
      <div className="goal-hiw-container pax-hiw__container">
        <div className="goal-hiw-heading pax-hiw__heading">
          <p className="goal-hiw-eyebrow pax-hiw__eyebrow">How it works</p>
          <h2>
            From onboarding through treatment, we&rsquo;ll be supporting and guiding you <em>every step of the way</em>.
          </h2>
        </div>
        <div className="goal-hiw-grid pax-hiw__grid" role="list">
          {HOME_HIW_STEPS.map((step) => (
            <article key={step.n} className="goal-hiw-card pax-hiw__card" role="listitem">
              <div className="pax-hiw__copy">
                <span className="goal-hiw-tag pax-hiw__step" aria-label={`Step ${step.n}`}>
                  {step.n}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className="goal-hiw-media pax-hiw__media">
                <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/how-it-works" className="goal-product-cta goal-product-cta--ghost" style={{ display: 'inline-flex' }}>
            See full care path
          </Link>
        </p>
      </div>
    </section>
  )
}

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <section className="retro-faqs">
      <div className="retro-faqs__head">
        <h2 className="retro-faqs__heading">We&rsquo;ve got you.</h2>
        <p className="retro-faqs__sub">You have questions, we have answers.</p>
      </div>
      <ul className="retro-faqs__list">
        {HOME_FAQS.map((faq, index) => {
          const open = activeFaq === index
          return (
            <li key={faq.q} className="retro-faqs__item" data-faq-item data-open={open ? 'true' : 'false'}>
              <button type="button" className="retro-faqs__toggle" aria-expanded={open} onClick={() => setActiveFaq(open ? null : index)}>
                <span className="retro-faqs__question">{faq.q}</span>
                <span className="retro-faqs__icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="retro-faqs__panel" role="region" hidden={!open}>
                <div className="retro-faqs__panel-inner">
                  <div className="retro-faqs__answer">
                    <p>{faq.lead}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <p style={{ textAlign: 'center', marginTop: '1.25rem' }}>
        <Link href="/faq">See all FAQs →</Link>
      </p>
    </section>
  )
}

/** Nexa Rx homepage — retro layout, Nexa assets and copy */
export default function YuccaHome() {
  return (
    <div className="yucca-home u5-type" data-retro-scope>
      <HeroSection />
      <TreatmentsSection />
      <HomeHiwSection />
      <RetroWhySection />
      <FaqSection />
      <RetroClosingSection />
    </div>
  )
}
