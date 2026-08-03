import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import SiteImage from '../../components/SiteImage'
import MediaFrame from '../../components/MediaFrame'
import { careSteps } from '../../lib/site-data'
import { media, howItWorksStepImages } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'How It Works | Nexa Rx',
  description: 'See the six-step Nexa Rx care path from eligibility to pharmacy fulfillment and ongoing support.',
  path: '/how-it-works',
  image: media.howItWorksHero.src,
})

const stepIcons = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      <path d="m9 14 2 2 4-4"></path>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
      <path d="m8.5 8.5 7 7"></path>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6"></path>
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
    </svg>
  ),
]

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">How It Works</p>
            <h1>Your care path, step by step.</h1>
            <p className="lede">Transparent process. Clinical decisions made by licensed clinicians.</p>
            <div className="hero__cta">
              <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
              <Link href="/#treatments" className="btn btn--outline btn--lg">
                View Treatments
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.howItWorksHero.src}
            alt={media.howItWorksHero.alt}
            priority
            quality={74}
            caption="Step-by-step care"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <section className="container how-steps-section">
          <div className="steps-grid">
            {careSteps.map((step, index) => {
              const image = howItWorksStepImages[index]
              return (
                <article
                  key={step.n}
                  className="step-card"
                  data-reveal="up"
                  style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
                >
                  <div className="step-card__header">
                    <div className="step-card__icon" aria-hidden="true">
                      {stepIcons[index]}
                    </div>
                    <span className="step-card__badge">STEP {step.n}</span>
                  </div>
                  {image && (
                    <div className="step-card__media-thumb">
                      <SiteImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={72}
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                  )}
                  <div className="step-card__body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
