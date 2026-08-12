import Link from 'next/link'
import HowItWorksStickySteps from './HowItWorksStickySteps'
import SiteImage from './SiteImage'
import { howFaqPreview, howWhy } from '../lib/how-it-works'
import { media } from '../lib/media'

export default function HowItWorksFlow() {
  return (
    <div className="hiw-flow">
      <HowItWorksStickySteps />

      <section className="hiw-story" aria-labelledby="hiw-story-heading">
        <div className="container">
          <div className="hiw-story__head" data-reveal="up">
            <span className="hiw-story__badge">
              <span className="hiw-story__badge-dot" aria-hidden="true" />
              Clinical process
            </span>
            <h2 id="hiw-story-heading" className="hiw-story__title">
              Every plan starts with a <em>provider review</em>
            </h2>
            <p className="hiw-story__sub">
              Complete intake, clinician review, and pharmacy fulfillment — only when treatment is appropriate.
            </p>
          </div>

          <div className="hiw-milestone-rail" aria-hidden="true">
            {[
              { phase: 'Phase 01', title: 'Intake & Lab Review' },
              { phase: 'Phase 02', title: 'MD Consultation' },
              { phase: 'Phase 03', title: '503A Compounding' },
              { phase: 'Phase 04', title: 'Ongoing Oversight' },
            ].map((step, idx) => (
              <div key={step.phase} className="hiw-milestone-rail__item">
                <div className="hiw-milestone-rail__copy">
                  <span className="hiw-milestone-rail__num">0{idx + 1}</span>
                  <div>
                    <p className="hiw-milestone-rail__phase">{step.phase}</p>
                    <p className="hiw-milestone-rail__label">{step.title}</p>
                  </div>
                </div>
                {idx < 3 ? <span className="hiw-milestone-rail__arrow">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hiw-why">
        <div className="container">
          <h2 className="hiw-why__title" data-reveal="up">
            Why Nexa Rx
          </h2>
          <div className="hiw-why-grid">
            {howWhy.map((item, i) => (
              <article
                key={item.title}
                className="hiw-why-card"
                data-reveal="up"
                style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}
              >
                <div className="hiw-why-card__media">
                  <SiteImage src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 768px) 92vw, 360px" />
                </div>
                <div className="hiw-why-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hiw-experience">
        <div className="container">
          <div className="hiw-experience__panel">
            <div className="hiw-experience__media">
              <SiteImage
                src={media.medicalTeamHero.src}
                alt={media.medicalTeamHero.alt}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                quality={74}
              />
            </div>
            <div className="hiw-experience__copy">
              <h2>Exceptional experience is our priority</h2>
              <ul>
                {[
                  'Stay in touch with your physician',
                  'Update your protocol when clinically appropriate',
                  'Track follow-up with clear accountability',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw-faq">
        <div className="container">
          <div className="hiw-faq__head" data-reveal="up">
            <p className="eyebrow">FAQ</p>
            <h2>Clear answers before you begin</h2>
            <p>Telehealth, protocols, and compounding — without the jargon.</p>
          </div>
          <div className="hiw-faq__list">
            {howFaqPreview.map((item, i) => (
              <details
                key={item.q}
                className="hiw-faq__item"
                data-reveal="up"
                style={{ '--delay': `${i * 40}ms` } as React.CSSProperties}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="hiw-faq__more">
            <Link href="/faq">See all FAQs →</Link>
          </div>
        </div>
      </section>

      <section className="hiw-closing">
        <div className="container">
          <div className="hiw-closing__panel">
            <div className="hiw-closing__media">
              <SiteImage
                src={media.heroHomeDesktop.src}
                alt={media.heroHomeDesktop.alt}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                quality={72}
              />
            </div>
            <div className="hiw-closing__copy">
              <p className="eyebrow eyebrow--teal">Begin care</p>
              <h2>Ready for a physician-led plan?</h2>
              <p>Start intake. Meet your physician. Build a protocol around your labs.</p>
              <div className="hiw-closing__actions">
                <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                  Check Eligibility
                </Link>
                <Link href="/#treatments" className="btn btn--outline btn--lg btn--on-dark">
                  Explore treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
