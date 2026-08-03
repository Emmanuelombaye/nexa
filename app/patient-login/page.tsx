import PatientLogin from '../../components/PatientLogin'
import { pageMetadata } from '../../lib/seo'
import { media } from '../../lib/media'

export const metadata = pageMetadata({
  title: 'Patient Login | Nexa Rx',
  description: 'Secure patient login for Nexa Rx care updates, messaging, and refill support access.',
  path: '/patient-login',
  image: media.loginSide.src,
})

export default function Page() {
  return <PatientLogin />
}
