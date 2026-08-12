import PageShell from '../components/PageShell'
import YuccaHome from '../components/home/YuccaHome'
import { pageMetadata } from '../lib/seo'
import '../src/yucca-home-index.css'

export const metadata = pageMetadata({
  title: 'Nexa Rx | Semaglutide & Tirzepatide Telehealth',
  description:
    'Connect online with licensed clinicians for semaglutide and tirzepatide weight-management therapy. Clear pricing and ongoing support. Availability varies by state.',
  path: '/',
})

export default function HomePage() {
  return (
    <PageShell stickyMode="eligibility" headerVariant="home">
      <main>
        <YuccaHome />
      </main>
    </PageShell>
  )
}
