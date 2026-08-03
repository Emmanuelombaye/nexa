import PageShell from '../../components/PageShell'
import EligibilityForm from '../../components/EligibilityForm'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'
import { media } from '../../lib/media'

export const metadata = pageMetadata({
  title: 'Check Eligibility | Nexa Rx',
  description: 'Start with a short eligibility check for Nexa Rx programs. Program, state, and contact only.',
  path: '/check-eligibility',
  image: media.eligibilitySide.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Check Eligibility', path: '/check-eligibility' }]} />
      <main className="pricing-page">
        <EligibilityForm />
      </main>
    </PageShell>
  )
}
