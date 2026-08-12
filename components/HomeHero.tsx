import Link from 'next/link'
import SiteImage from './SiteImage'
import { media } from '../lib/media'

const tickerItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: '2 Min Intake',
    desc: 'Quick online check',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'Under 24h*',
    desc: 'Clinical review',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: 'Self-Pay Care',
    desc: 'No insurance needed',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    title: 'Discreet Delivery',
    desc: 'Shipped to your door',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    title: 'Licensed Doctors',
    desc: 'U.S. board certified',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    title: '24/7 Care Team',
    desc: 'Unlimited messaging',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: 'HIPAA Secure',
    desc: 'Private & encrypted',
  },
]

export default function HomeHero() {
  const marqueeList = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <section className="hero hero--home">
      <div className="hero--home__backdrop" aria-hidden="true" />
      <div className="container hero__shell">
        <div className="hero__copy">
          <p className="eyebrow hero-anim" style={{ '--hero-delay': '0ms' } as React.CSSProperties}>
            PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.
          </p>
          <h1 className="hero-anim" style={{ '--hero-delay': '80ms' } as React.CSSProperties}>
            Your care.
            <br />
            Your way.
          </h1>
          <p className="lede hero-anim" style={{ '--hero-delay': '150ms' } as React.CSSProperties}>
            Connect online with a licensed clinician for semaglutide and tirzepatide weight-management therapy. See your
            options and costs before treatment begins.
          </p>
          <div className="hero__cta hero-anim" style={{ '--hero-delay': '220ms' } as React.CSSProperties}>
            <Link href="/check-eligibility" className="btn btn--primary btn--lg btn--lift">
              Check Eligibility
            </Link>
            <Link href="/#treatments" className="btn btn--outline btn--lg btn--lift">
              View Treatments
            </Link>
          </div>
          <p className="hero__disclosure hero-anim" style={{ '--hero-delay': '280ms' } as React.CSSProperties}>
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
            clinician. Availability varies by state and treatment.
          </p>
        </div>

        <div className="hero__media-col" data-reveal="right">
          <div className="hero__media-frame hero__media-frame--desktop">
            <SiteImage
              src={media.heroHomeDesktop.src}
              alt={media.heroHomeDesktop.alt}
              fill
              priority
              sizes="(max-width: 1023px) 0px, min(50vw, 800px)"
              quality={70}
              className="hero__media-image"
            />
          </div>
          <div className="hero__media-frame hero__media-frame--mobile">
            <SiteImage
              src={media.heroHomeMobile.src}
              alt={media.heroHomeMobile.alt}
              fill
              priority
              sizes="(max-width: 1023px) min(100vw, 460px), 0px"
              quality={68}
              className="hero__media-image"
            />
          </div>

          <article className="hero-feature">
            <span className="pill">Featured Treatment</span>
            <p className="hero-feature__cat">Semaglutide · GLP-1</p>
            <h2>Clinician-Guided Semaglutide Therapy</h2>
            <p className="hero-feature__blurb">
              GLP-1 weight management with ongoing clinical support, refill coordination, and discreet delivery.
            </p>
            <div className="hero-feature__actions">
              <Link href="/semaglutide">View Semaglutide</Link>
              <Link href="/check-eligibility?program=semaglutide" className="btn btn--primary btn--sm">
                Check Eligibility
              </Link>
            </div>
          </article>
        </div>
      </div>

      <div className="container hero__ticker-container">
        <div className="hero__ticker-strip">
          <div className="hero__ticker-track">
            {marqueeList.map((item, idx) => (
              <div key={idx} className="hero__ticker-card">
                <div className="hero__ticker-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="hero__ticker-info">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="hero__stats-note">
          *Timing not guaranteed. Availability varies by state and treatment.
        </p>
      </div>
    </section>
  )
}
