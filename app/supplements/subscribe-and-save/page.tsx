import ShopSubPage from '../../../components/ShopSubPage'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata({
  title: 'Subscribe & Save | Nexa Rx Shop',
  description: 'Subscribe and save on Nexa Rx dietary supplements with clear recurring terms.',
  path: '/supplements/subscribe-and-save',
})

export default function Page() {
  return <ShopSubPage params={{ slug: 'subscribe-and-save' }} />
}
