import Link from 'next/link'
import HowItWorksStickySteps from './HowItWorksStickySteps'
import SiteImage from './SiteImage'
import { howFaqPreview, howWhy } from '../lib/how-it-works'
import { media } from '../lib/media'

export default function HowItWorksFlow() {
  return (
    <div className="hiw-flow">
      <HowItWorksStickySteps />

      <section className="hiw-process" aria-labelledby="hiw-process-title">
        <div className="container">
          <div className="hiw-process__head">
            <p className="hiw-process__eyebrow">Clinical process</p>
            <h2 className="hiw-process__title" id="hiw-process-title">
              Every plan starts with a <em>provider review</em>
            </h2>
            <p className="hiw-process__sub">
              Complete intake, clinician review, and pharmacy fulfillment — only when treatment is appropriate.
            </p>
          </div>

          <ol className="hiw-process__grid">
            {[
              { step: '01', title: 'Intake & lab review', meta: 'Secure questionnaire' },
              { step: '02', title: 'Licensed provider review', meta: 'Typically within 24 hours' },
              { step: '03', title: 'Pharmacy fulfillment', meta: 'When prescribed' },
              { step: '04', title: 'Ongoing care', meta: 'Follow-up & support' },
            ].map((item) => (
              <li key={item.step} className="hiw-process-card">
                <span className="hiw-process-card__n" aria-hidden="true">
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </li>
            ))}
          </ol>
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
