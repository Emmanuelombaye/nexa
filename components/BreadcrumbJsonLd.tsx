import { siteUrl } from '../lib/site-data'

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item: BreadcrumbItem, idx: number) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
