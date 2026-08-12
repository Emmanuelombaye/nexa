import { notFound } from 'next/navigation'
import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'
import { programImages } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

const programImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = programImages

export function generateStaticParams() {
  return programs.map((program) => ({ programSlug: program.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ programSlug: string }> }) {
  const { programSlug } = await params
  const program = programs.find((item) => item.slug === programSlug)
  if (!program) return {}

  const image = programImagesRecord[program.slug]

  return pageMetadata({
    title: `${program.navLabel} | Nexa Rx`,
    description: program.description,
    path: `/${program.slug}`,
    image: image?.src,
  })
}

export default async function Page({ params }: { params: Promise<{ programSlug: string }> }) {
  const { programSlug } = await params
  const program = programs.find((item) => item.slug === programSlug)
  if (!program) notFound()

  return <ProgramPage program={program} />
}
