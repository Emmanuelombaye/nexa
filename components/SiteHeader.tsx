'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const midLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/quality-and-safety', label: 'Quality & Safety' },
]

const endLinks = [{ href: '/faq', label: 'FAQ' }]

interface MenuRow {
  href: string
  heading: string
  caption: string
  thumb?: string
  thumbAlt?: string
  vialBg?: string
  allThumbs?: string[]
}

/** Yucca Treatments mega order: Tirzepatide, Semaglutide, then All */
const treatmentMenuRows: MenuRow[] = [
  {
    href: '/tirzepatide',
    heading: 'GLP-1 + GIP (Tirzepatide)',
    caption: 'Weight Loss',
    thumb: '/images/nexa/vial-tirzepatide.webp?v=5',
    thumbAlt: 'Personalized Tirzepatide vial',
    vialBg: 'linear-gradient(135deg, #d4e8e4 0%, #b8d9d2 100%)',
  },
  {
    href: '/semaglutide',
    heading: 'GLP-1 (Semaglutide)',
    caption: 'Weight Loss',
    thumb: '/images/nexa/vial-semaglutide.webp?v=5',
    thumbAlt: 'Personalized Semaglutide vial',
    vialBg: 'linear-gradient(135deg, #e8e4dc 0%, #d4e8e4 100%)',
  },
  {
    href: '/#treatments',
    heading: 'All Treatments',
    caption: 'Explore all options',
    allThumbs: [
      '/images/nexa/vial-tirzepatide.webp?v=5',
      '/images/nexa/vial-semaglutide.webp?v=5',
      '/images/nexa/vial-tirzepatide.webp?v=5',
    ],
  },
]

const patientMenuRows: MenuRow[] = [
  {
    href: '/how-it-works',
    heading: 'How It Works',
    caption: 'Patient-first experience',
    thumb: '/images/yucca-clone/hiw/How-it-works.avif',
  },
  {
    href: '/faq',
    heading: 'FAQ',
    caption: 'Clear answers before you begin',
    thumb: '/images/yucca-clone/hiw/Get-Started.avif',
  },
  {
    href: '/check-eligibility',
    heading: 'Check Eligibility',
    caption: 'See if you qualify',
    thumb: '/images/nexa/vial-semaglutide.webp?v=5',
    thumbAlt: '',
    vialBg: 'linear-gradient(135deg, #e8e4dc 0%, #d4e8e4 100%)',
  },
  {
    href: '/check-eligibility',
    heading: 'Patient Login',
    caption: 'Complete checkout first',
    thumb: '/images/pax-hiw-step-2.png',
  },
]

/** Shop dropdown mirrors Yucca Treatments mega — same two vials + All */
const shopMenuRows: MenuRow[] = treatmentMenuRows

function ShopTreatmentsDropdown({ align = 'right' }: { align?: 'left' | 'right' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpen(false), 140)
  }

  useEffect(() => () => clearCloseTimer(), [])

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      className={`nav-dropdown nav-dropdown--mega ${align === 'right' ? 'nav-dropdown--right' : ''} ${open ? 'is-open' : ''}`}
      ref={rootRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/#treatments"
        className="nav-dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(false)}
        onFocus={openMenu}
      >
        <span>Shop</span>
        <span className="nav-dropdown__chevron" aria-hidden="true" />
      </Link>
      <div id={menuId} className="nav-dropdown__mega" role="menu">
        <div className="nav-dropdown__mega-col">
          <p className="nav-dropdown__mega-label">Explore Treatments</p>
          <ul className="nav-dropdown__mega-list" role="list">
            {shopMenuRows.map((row) => (
              <li key={row.href}>
                <Link
                  href={row.href}
                  className="nav-dropdown__mega-row"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  onFocus={openMenu}
                >
                  {row.allThumbs?.length ? (
                    <span className="nav-dropdown__mega-thumb nav-dropdown__mega-thumb--all" aria-hidden="true">
                      {row.allThumbs.map((src, index) => (
                        <img key={`${src}-${index}`} src={src} alt="" />
                      ))}
                    </span>
                  ) : (
                    <span
                      className="nav-dropdown__mega-thumb nav-dropdown__mega-thumb--vial"
                      style={{ background: row.vialBg }}
                      aria-hidden="true"
                    >
                      <img src={row.thumb} alt="" loading="lazy" />
                    </span>
                  )}
                  <span className="nav-dropdown__mega-text">
                    <span className="nav-dropdown__mega-heading">{row.heading}</span>
                    <span className="nav-dropdown__mega-caption">{row.caption}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-dropdown__mega-col nav-dropdown__mega-col--patients">
          <p className="nav-dropdown__mega-label">For Patients</p>
          <ul className="nav-dropdown__mega-list" role="list">
            {patientMenuRows.slice(0, 4).map((row) => (
              <li key={row.href}>
                <Link
                  href={row.href}
                  className="nav-dropdown__mega-row nav-dropdown__mega-row--plain"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  onFocus={openMenu}
                >
                  {row.thumb ? (
                    <img src={row.thumb} alt="" aria-hidden="true" className="nav-dropdown__mega-thumb" loading="lazy" />
                  ) : (
                    <span className="nav-dropdown__mega-thumb nav-dropdown__mega-thumb--plain" aria-hidden="true" />
                  )}
                  <span className="nav-dropdown__mega-text">
                    <span className="nav-dropdown__mega-heading">{row.heading}</span>
                    <span className="nav-dropdown__mega-caption">{row.caption}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function MobileNavCard({ row, onNavigate }: { row: MenuRow; onNavigate: () => void }) {
  const isAll = Boolean(row.allThumbs?.length)

  return (
    <Link
      href={row.href}
      className={`mobile-nav__card ${isAll ? 'mobile-nav__card--wide' : ''}`}
      onClick={onNavigate}
    >
      {isAll ? (
        <span className="mobile-nav__card-media mobile-nav__card-media--all" aria-hidden="true">
          {row.allThumbs!.slice(0, 2).map((src, index) => (
            <img key={`${src}-${index}`} src={src} alt="" />
          ))}
        </span>
      ) : (
        <span
          className="mobile-nav__card-media"
          style={row.vialBg ? { background: row.vialBg } : undefined}
          aria-hidden="true"
        >
          {row.thumb ? <img src={row.thumb} alt="" loading="lazy" /> : null}
        </span>
      )}
      <span className="mobile-nav__card-text">
        <span className="mobile-nav__card-heading">{row.heading}</span>
        <span className="mobile-nav__card-caption">{row.caption}</span>
      </span>
    </Link>
  )
}

export default function SiteHeader({ variant = 'default' }: { variant?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalReady, setPortalReady] = useState(false)
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const scrollLockY = useRef(0)
  const menuOpenRef = useRef(false)
  menuOpenRef.current = menuOpen

  useEffect(() => {
    let root = document.getElementById('mobile-nav-root')
    if (!root) {
      root = document.createElement('div')
      root.id = 'mobile-nav-root'
      document.documentElement.appendChild(root)
    } else {
      root.replaceChildren()
    }
    setPortalEl(root)
    setPortalReady(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const unlockScroll = () => {
    const html = document.documentElement
    const body = document.body
    html.classList.remove('is-nav-locked')
    body.classList.remove('is-nav-locked')
    body.style.top = ''
    window.scrollTo(0, scrollLockY.current)
  }

  const closeMenu = () => {
    if (!menuOpenRef.current) return
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen((open) => !open)
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1100 && menuOpenRef.current) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) {
      unlockScroll()
      return undefined
    }

    scrollLockY.current = window.scrollY
    document.documentElement.classList.add('is-nav-locked')
    document.body.classList.add('is-nav-locked')
    document.body.style.top = `-${scrollLockY.current}px`
    const frame = requestAnimationFrame(() => {
      closeRef.current?.focus({ preventScroll: true })
    })
    return () => {
      cancelAnimationFrame(frame)
      unlockScroll()
    }
  }, [menuOpen])

  useEffect(
    () => () => {
      unlockScroll()
    },
    [],
  )

  const drawer = (
    <div
      id="mobile-nav-panel"
      className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!menuOpen}
    >
      <button type="button" className="mobile-nav__scrim" aria-label="Close menu" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1} />
      <div className="mobile-nav__sheet">
        <div className="mobile-nav__drawer-header">
          <Link href="/" className="mobile-nav__drawer-logo" aria-label="Nexa Rx home" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <img
              src="/brand/nexa-rx-tm-logo.webp"
              alt="Nexa Rx™"
              width={140}
              height={38}
              className="logo-brand-img"
            />
          </Link>
          <button
            ref={closeRef}
            type="button"
            className="mobile-nav__drawer-close"
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-nav__menu">
          <section className="mobile-nav__menu-group">
            <p className="mobile-nav__menu-label">Treatments</p>
            <div className="mobile-nav__cards">
              {treatmentMenuRows.map((row) => (
                <MobileNavCard key={`treat-${row.heading}`} row={row} onNavigate={closeMenu} />
              ))}
            </div>
          </section>

          <section className="mobile-nav__menu-group">
            <p className="mobile-nav__menu-label">For patients</p>
            <ul className="mobile-nav__text-list" role="list">
              {[
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/quality-and-safety', label: 'Quality & Safety' },
                { href: '/faq', label: 'FAQ' },
                { href: '/check-eligibility', label: 'Patient Login' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mobile-nav__text-link" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                    <span>{item.label}</span>
                    <span className="mobile-nav__text-chevron" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <Link
            href="/check-eligibility"
            className="btn btn--primary mobile-nav__cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Check Eligibility
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={`site-top site-top--${variant} ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}
    >
      <div className="trust-bar" aria-hidden="true">
        <div className="trust-bar__track">
          <span>LICENSED CLINICAL CARE</span>
          <span className="dot" />
          <span>CLEAR PRICING</span>
          <span className="dot" />
          <span>NO INSURANCE REQUIRED</span>
          <span className="dot" />
          <span>DISCREET DELIVERY</span>
          <span className="dot" />
          <span className="trust-bar__dup">LICENSED CLINICAL CARE</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">CLEAR PRICING</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">NO INSURANCE REQUIRED</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">DISCREET DELIVERY</span>
          <span className="dot trust-bar__dup" />
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="logo-brand-img-wrap" aria-label="Nexa Rx home" onClick={closeMenu}>
            <img
              src="/brand/nexa-rx-tm-logo.webp"
              alt="Nexa Rx™"
              width={200}
              height={54}
              className="logo-brand-img"
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link href="/#treatments">Treatments</Link>
            {midLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <ShopTreatmentsDropdown align="right" />
            {endLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link href="/check-eligibility" className="header__signin">
              <span className="header__signin-long">Patient Login</span>
              <span className="header__signin-short">Login</span>
            </Link>
            <Link href="/check-eligibility" className="btn btn--primary header__cta" aria-label="Check Eligibility">
              <span className="header__cta-long">Check Eligibility</span>
              <span className="header__cta-short">Eligibility</span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {portalReady && portalEl && menuOpen ? createPortal(drawer, portalEl) : null}
    </div>
  )
}
