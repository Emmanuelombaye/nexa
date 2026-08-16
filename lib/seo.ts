import { siteUrl } from './site-data'

const defaultOgImage = {
  url: '/images/hero-home-desktop.webp',
  width: 1600,
  height: 900,
  alt: 'Nexa Rx personalized telehealth care',
}

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  image?: string | typeof defaultOgImage
}

/** Build title, description, canonical, and Open Graph link-preview metadata (no social account tags). */
export function pageMetadata({ title, description, path, image = defaultOgImage }: PageMetadataOptions) {
  const ogImage = typeof image === 'string' ? { ...defaultOgImage, url: image } : image
  const fullTitle = title.includes('Nexa') ? title : `${title} | Nexa Rx`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Nexa Rx',
      type: 'website' as const,
      images: [ogImage],
    },
  }
}
