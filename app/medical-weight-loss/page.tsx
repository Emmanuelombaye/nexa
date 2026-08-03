import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const program = programs.find((item) => item.slug === 'medical-weight-loss')!

export const metadata = pageMetadata({
  title: 'Medical Weight Loss | Nexa Rx',
  description: 'Clinician-guided weight management with transparent pricing and clear eligibility steps.',
  path: '/medical-weight-loss',
  image: media.weightLoss.src,
})

export default function Page() {
  return <ProgramPage program={program} />
}
