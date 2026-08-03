import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'
import { media } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const program = programs.find((item) => item.slug === 'peptide-therapy')!

export const metadata = pageMetadata({
  title: 'Peptide Therapy | Nexa Rx',
  description:
    'Clinician-prescribed peptide therapies for eligible patients. No research-use-only products. Clear disclosures before enrollment.',
  path: '/peptide-therapy',
  image: media.peptides.src,
})

export default function Page() {
  return <ProgramPage program={program} />
}
