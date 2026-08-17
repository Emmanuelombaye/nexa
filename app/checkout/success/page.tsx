import PageShell from '../../../components/PageShell'
import CheckoutSuccess from '../../../components/CheckoutSuccess'
import { pageMetadata } from '../../../lib/seo'

export const metadata = {
  ...pageMetadata({
    title: 'Checkout complete | Nexa Rx',
    description: 'Your Nexa Rx intake was submitted and is awaiting clinician review.',
    path: '/checkout/success',
  }),
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <main className="pricing-page">
        <CheckoutSuccess />
      </main>
    </PageShell>
  )
}
