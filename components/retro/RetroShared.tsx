'use client'

import Link from 'next/link'
import { type CSSProperties, type ReactNode } from 'react'
import { HOME_CLOSING_IMAGE, HOME_WHY_MEDIA } from '../../lib/home-data'

function WhyCheckList({ items }: { items: [string, string][] }) {
  return (
    <ul className="pax-why__checks">
      {items.map(([label, hint]) => (
        <li key={label}>
          <span className="pax-why__check-mark" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
              <path d="M3.5 8.2 6.4 11l6.1-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>
            <strong>{label}</strong>
            <small>{hint}</small>
          </span>
        </li>
      ))}
    </ul>
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
        <>
          <WhyCheckList
            items={[
              ['Quality sourcing', '503A pharmacies'],
              ['Medical review', 'Licensed U.S. providers'],
              ['Home delivery', 'Discreet & expedited'],
            ]}
          />
          <p className="pax-why__pending">
            <span className="pax-why__pending-dot" aria-hidden="true" />
            LegitScript certification — pending review · not yet verified
          </p>
        </>
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
        <WhyCheckList
          items={[
            ['Medical intake', 'Clinical questionnaire first'],
            ['Provider decision', 'Prescribe only if appropriate'],
            ['Ongoing titration', 'Dose adjusted as needed'],
          ]}
        />
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
      body: 'Weekly protocols guided by licensed clinicians for appetite regulation support — not guaranteed outcomes.',
      tone: 'light',
      media: (
        <div className="pax-why__media-frame pax-why__media-frame--people">
          <img src="/images/nexa/clinical-people.webp?v=1" alt="" loading="lazy" width={1024} height={1536} />
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
          {pillars.map((p, i) => (
            <article
              key={p.id}
              className={`retro-home-why-card pax-why__card pax-why__card--${p.tone}`}
              style={{ '--why-i': i } as CSSProperties}
            >
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
