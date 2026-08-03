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

export function pageMetadata({ title, description, path, image = defaultOgImage }: PageMetadataOptions) {
  const ogImage = typeof image === 'string' ? { ...defaultOgImage, url: image } : image

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Nexa Rx',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImage.url],
    },
  }
}
