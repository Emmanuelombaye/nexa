import PatientCenter from '../../components/PatientCenter'
import { pageMetadata } from '../../lib/seo'

export const metadata = {
  ...pageMetadata({
    title: 'Patient Center | Nexa Rx',
    description: 'Patient center for review status, next steps, and care program tracking.',
    path: '/patient-center',
  }),
  robots: { index: false, follow: false },
}

export default function Page() {
  return <PatientCenter />
}
