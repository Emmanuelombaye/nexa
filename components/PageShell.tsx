import { type ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import RevealObserver from './RevealObserver'
import ScrollHighlightBar from './ScrollHighlightBar'

interface PageShellProps {
  children: ReactNode
  stickyMode?: 'eligibility' | 'shop'
  headerVariant?: 'default' | 'home' | string
}

export default function PageShell({ children, stickyMode = 'eligibility', headerVariant = 'default' }: PageShellProps) {
  return (
    <div className="page">
      <SiteHeader variant={headerVariant} />
      {children}
      <SiteFooter />
      <RevealObserver />
      <ScrollHighlightBar stickyMode={stickyMode} />
    </div>
  )
}
