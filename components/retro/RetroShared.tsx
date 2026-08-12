'use client'

import Link from 'next/link'
import { useState, type CSSProperties, type ReactNode } from 'react'
import { HOME_CLOSING_IMAGE, HOME_REVIEWS, HOME_WHY_MEDIA } from '../../lib/home-data'

const SHIELD = (
  <svg className="retro-home-reviews-card-shield" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 1.8l6.4 2.3v4.2c0 3.9-2.7 7.2-6.4 8.4-3.7-1.2-6.4-4.5-6.4-8.4V4.1L10 1.8z" fill="#c6c9cc" />
    <path d="M6.8 9.9l2.1 2.1 4.3-4.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true" style={{ color: 'var(--teal, #4DAA9A)', letterSpacing: '0.08em' }}>
      ★★★★★
    </span>
  )
}

function reviewInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function RetroReviewsSection({ ctaHref = '/check-eligibility' }: { ctaHref?: string }) {
  const [cat, setCat] = useState<'results' | 'support' | 'process'>('results')
  const visible = HOME_REVIEWS.filter((r) => r.cat === cat)

  return (
    <section className="retro-home-reviews pax-reviews" data-reviews-filter="">
      <div className="retro-home-reviews-head pax-reviews__head">
        <Stars className="retro-home-reviews-stars" />
        <p className="retro-home-reviews-rating pax-reviews__rating">
          <strong>4.7/5.0</strong>
          <span aria-hidden="true"> · </span>
          1000+ reviews
          <span aria-hidden="true"> · </span>
          20,000+ patients
        </p>
        <h2 className="retro-home-reviews-title">What people love about Nexa Rx</h2>
      </div>

      <div className="retro-home-reviews-filters pax-reviews__filters" role="group" aria-label="Filter reviews by topic">
        {(
          [
            ['results', 'Product & Results'],
            ['support', 'Patient Support'],
            ['process', 'Process'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className="retro-home-reviews-pill pax-reviews__pill"
            data-reviews-cat={id}
            data-active={cat === id ? 'true' : 'false'}
            aria-pressed={cat === id}
            onClick={() => setCat(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="retro-home-reviews-track pax-reviews__track" data-reviews-track="" aria-live="polite">
        {(visible.length ? visible : HOME_REVIEWS).map((r) => (
          <div key={`${r.cat}-${r.name}`} className="retro-home-reviews-slide pax-reviews__slide" data-cat={r.cat}>
            <article className="retro-home-reviews-card pax-reviews__card">
              <div className="pax-reviews__card-top">
                <Stars className="retro-home-reviews-card-stars pax-reviews__card-stars" />
                {r.result ? <span className="pax-reviews__chip">{r.result}</span> : null}
              </div>
              <h3 className="retro-home-reviews-card-title pax-reviews__quote">{r.title}</h3>
              <p className="retro-home-reviews-card-body pax-reviews__body">{r.body}</p>
              <div className="retro-home-reviews-card-foot pax-reviews__foot">
                <span className="pax-reviews__avatar" aria-hidden="true">
                  {reviewInitials(r.name)}
                </span>
                <div className="pax-reviews__identity">
                  <span className="retro-home-reviews-card-name pax-reviews__name">{r.name}</span>
                  <span className="retro-home-reviews-card-verified pax-reviews__verified">
                    {SHIELD}
                    Verified Patient
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <p className="retro-home-reviews-note pax-reviews__note">Individual patient experiences and results may vary.</p>
      <div className="pax-reviews__cta-wrap">
        <Link href={ctaHref} className="retro-home-reviews-cta">
          See if I qualify
        </Link>
      </div>
    </section>
  )
}

export function RetroWhySection() {
  const pillars: {
    id: string
    n: string
    title: ReactNode
    body: string
    tone: string
    media: ReactNode
  }[] = [
    {
      id: 'trusted',
      n: '01',
      title: (
        <>
          Transparent &amp; <em>trusted</em>
        </>
      ),
      body: 'From compounding partners to doorstep delivery — pharmaceutical-grade quality with clear, clinical oversight.',
      tone: 'sand',
      media: (
        <ul className="pax-why__checks">
          {[
            ['Quality sourcing', '503A pharmacies'],
            ['Medical review', 'Licensed U.S. providers'],
            ['Home delivery', 'Discreet & expedited'],
          ].map(([label, hint]) => (
            <li key={label}>
              <span className="pax-why__check-mark" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{label}</strong>
                <small>{hint}</small>
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'tailored',
      n: '02',
      title: (
        <>
          Care <em>built around you</em>
        </>
      ),
      body: 'Semaglutide or Tirzepatide — protocols tailored to your goals, history, and how your body responds.',
      tone: 'dune',
      media: (
        <div className="pax-why__metric" aria-hidden="true">
          <span className="pax-why__metric-value">−30.5</span>
          <span className="pax-why__metric-unit">lbs journey marker</span>
          <div className="pax-why__metric-bars">
            <i style={{ '--h': '38%' } as CSSProperties} />
            <i style={{ '--h': '58%' } as CSSProperties} />
            <i style={{ '--h': '76%' } as CSSProperties} />
            <i style={{ '--h': '92%' } as CSSProperties} />
          </div>
          <div className="pax-why__metric-axis">
            <span>Wk 1</span>
            <span>Wk 3</span>
            <span>Wk 6</span>
            <span>Mo 3</span>
          </div>
        </div>
      ),
    },
    {
      id: 'science',
      n: '03',
      title: (
        <>
          Science-backed <em>GLP-1</em>
        </>
      ),
      body: 'Clinically guided weekly protocols designed for appetite regulation and durable metabolic support.',
      tone: 'light',
      media: (
        <div className="pax-why__media-frame">
          <img src={HOME_WHY_MEDIA.vials} alt="" loading="lazy" />
        </div>
      ),
    },
    {
      id: 'support',
      n: '04',
      title: (
        <>
          Support <em>within reach</em>
        </>
      ),
      body: 'Your portal, care team, and treatment plan — organized in one place whenever you need them.',
      tone: 'forest',
      media: (
        <div className="pax-why__media-frame pax-why__media-frame--portal">
          <img src={HOME_WHY_MEDIA.portal} alt="" loading="lazy" />
        </div>
      ),
    },
  ]

  return (
    <section className="retro-home-why pax-why" aria-labelledby="retro-home-why-title">
      <div className="retro-home-why-inner pax-why__inner">
        <header className="pax-why__head">
          <p className="pax-why__eyebrow">The Nexa Rx difference</p>
          <h2 className="retro-home-why-title" id="retro-home-why-title">
            Why <em>Nexa Rx</em>?
          </h2>
          <p className="pax-why__sub">Provider-guided Semaglutide &amp; Tirzepatide — designed with clinical clarity, not checkout chaos.</p>
        </header>
        <div className="retro-home-why-grid pax-why__grid">
          {pillars.map((p) => (
            <article key={p.id} className={`retro-home-why-card pax-why__card pax-why__card--${p.tone}`}>
              <div className="pax-why__card-copy">
                <span className="pax-why__n">{p.n}</span>
                <h3 className="retro-home-why-card-title pax-why__card-title">{p.title}</h3>
                <p className="retro-home-why-card-body pax-why__card-body">{p.body}</p>
              </div>
              <div className="pax-why__card-media">{p.media}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RetroClosingSection({
  ctaHref = '/check-eligibility',
  title = (
    <>
      Semaglutide &amp; Tirzepatide, <em>guided by your goals</em>
    </>
  ),
  subtitle = 'Licensed U.S. providers. Weekly GLP-1 protocols. Delivered to your door.',
  bg = HOME_CLOSING_IMAGE,
}: {
  ctaHref?: string
  title?: ReactNode
  subtitle?: string
  bg?: string
}) {
  return (
    <section className="retro-home-closing" aria-labelledby="retro-home-closing-title">
      <img className="retro-home-closing-bg retro-home-closing-bg--weight-loss" src={bg} alt="" aria-hidden="true" loading="lazy" />
      <div className="retro-home-closing-inner">
        <h2 className="retro-home-closing-title" id="retro-home-closing-title">
          {title}
        </h2>
        <p className="retro-home-closing-sub">{subtitle}</p>
        <Link href={ctaHref} className="retro-home-closing-cta">
          Check Eligibility
        </Link>
      </div>
    </section>
  )
}
