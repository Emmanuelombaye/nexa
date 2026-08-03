import ShopSubPage from '../../../components/ShopSubPage'
import { pageMetadata } from '../../../lib/seo'

export const metadata = pageMetadata({
  title: 'Supplement Bundles | Nexa Rx Shop',
  description: 'Curated dietary supplement bundles for everyday wellness support.',
  path: '/supplements/bundles',
})

export default function Page() {
  return <ShopSubPage params={{ slug: 'bundles' }} />
}
