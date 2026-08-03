import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const program = programs.find((item) => item.slug === 'womens-hormone-health')!

export const metadata = pageMetadata({
  title: "Women's Hormone Health | Nexa Rx",
  description: 'Menopause and hormone care with personalized evaluation, labs when indicated, and clear pricing.',
  path: '/womens-hormone-health',
  image: media.hrt.src,
})

export default function Page() {
  return <ProgramPage program={program} />
}
