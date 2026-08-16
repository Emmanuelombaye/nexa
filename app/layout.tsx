import { Manrope, Cormorant_Garamond } from 'next/font/google'
import '../src/index.css'
import '../src/how-it-works.css'
import { siteUrl } from '../lib/site-data'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-face',
  weight: ['400', '500', '600', '700', '800'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-face',
  weight: ['500', '600'],
  style: ['normal', 'italic'],
})

const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nexa Rx | Semaglutide & Tirzepatide Telehealth',
  description:
    'Connect online with licensed clinicians for semaglutide and tirzepatide weight-management therapy. Availability varies by state.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Nexa Rx | Personalized Telehealth Care',
    description: 'Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.',
    url: siteUrl,
    siteName: 'Nexa Rx',
    type: 'website',
    images: [
      {
        url: '/images/hero-home-desktop.webp',
        width: 1600,
        height: 900,
        alt: 'Nexa Rx telehealth care',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  authors: [{ name: 'Nexa RX LLC' }],
  creator: 'Nexa RX LLC',
  publisher: 'Nexa Rx',
  robots: isPreview ? { index: false, follow: true } : { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0F1722',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalBusiness'],
    name: 'Nexa Rx',
    url: siteUrl,
    description:
      'Personalized telehealth for semaglutide and tirzepatide weight-management therapy.',
    medicalSpecialty: 'Telemedicine',
  }

  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
