import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const program = programs.find((item) => item.slug === 'mens-hormone-health')!

export const metadata = pageMetadata({
  title: "Men's Hormone Health | Nexa Rx",
  description: 'Testosterone evaluation and care with licensed clinicians, labs, and clear pricing before enrollment.',
  path: '/mens-hormone-health',
  image: media.trt.src,
})

export default function Page() {
  return <ProgramPage program={program} />
}
