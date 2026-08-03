import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import MediaFrame from '../../components/MediaFrame'
import { medicalTeamRoles } from '../../lib/site-data'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Medical Team | Nexa Rx',
  description: 'Licensed clinicians, care coordination, and pharmacy partnerships behind Nexa Rx patient-first standards.',
  path: '/medical-team',
  image: media.medicalTeamHero.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Medical Team', path: '/medical-team' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Medical Team</p>
            <h1>Licensed clinicians, patient-first standards.</h1>
            <p className="lede">
              Nexa Rx connects eligible adults with licensed clinicians who evaluate symptoms, history, and labs when
              required before making treatment decisions.
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
          <MediaFrame
            src={media.medicalTeamHero.src}
            alt={media.medicalTeamHero.alt}
            priority
            caption="Licensed clinical care"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <section className="container program-detail-grid">
          {medicalTeamRoles.map((role, index) => (
            <article
              key={role.title}
              className="program-detail-card"
              data-reveal="up"
              style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
            >
              <p className="eyebrow">Care network</p>
              <h2>{role.title}</h2>
              <p>{role.text}</p>
            </article>
          ))}
        </section>

        <section className="container medical-team-note" data-reveal="up">
          <div className="quality__supplement-note">
            <h2>Licensure &amp; transparency</h2>
            <p>
              Clinician identities, credentials, and state licensure are confirmed inside the secure clinical portal
              during evaluation. Prescription treatment is not guaranteed. Nexa Rx is a care platform — not a pharmacy.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Named clinician profiles will appear here as the provider network is published for each state and program.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
