import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import HowItWorksFlow from '../../components/HowItWorksFlow'
import HowItWorksTrustTicker from '../../components/HowItWorksTrustTicker'
import PageShell from '../../components/PageShell'
import { brandTagline } from '../../lib/how-it-works'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'How It Works | Nexa Rx',
  description:
    'See how Nexa Rx works — intake, physician review, personalized protocol, 503A compounding when indicated, and ongoing follow-up.',
  path: '/how-it-works',
  image: media.howItWorksHero.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]} />
      <HowItWorksTrustTicker />
      <main className="hiw-page">
        <section className="hiw-page__intro">
          <div className="container">
            <div data-reveal="up">
              <h1>
                Nexa Rx delivers a <span>seamless, patient-first experience</span>
              </h1>
              <p>See how it works below. {brandTagline}</p>
            </div>
          </div>
        </section>

        <section className="hiw-page__flow">
          <div className="container">
            <HowItWorksFlow />
          </div>
        </section>
      </main>
    </PageShell>
  )
}
