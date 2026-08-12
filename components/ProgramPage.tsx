import Link from 'next/link'
import PageShell from './PageShell'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import ProgramExplorePage from './program/ProgramExplorePage'
import { stateAvailabilityBySlug } from '../lib/site-data'
import '../src/program-explore.css'

interface ProgramProps {
  slug: string
  navLabel: string
  category: string
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
  medicationStatus?: {
    title: string
    points: string[]
  }
}

export default function ProgramPage({ program }: { program: ProgramProps }) {
  const availability = stateAvailabilityBySlug[program.slug]

  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Treatments', path: '/#treatments' },
          { name: program.navLabel, path: `/${program.slug}` },
        ]}
      />
      <main>
        <ProgramExplorePage program={program} />
        {availability ? (
          <section className="container" style={{ maxWidth: '48rem', margin: '0 auto 4rem', padding: '0 1rem' }}>
            <div className="quality__supplement-note">
              <h2 style={{ marginTop: 0 }}>State availability</h2>
              <p>{availability.summary}</p>
              <p style={{ marginTop: '0.75rem' }}>
                <Link href="/pricing">View full state matrix →</Link>
              </p>
            </div>
          </section>
        ) : null}
      </main>
    </PageShell>
  )
}
