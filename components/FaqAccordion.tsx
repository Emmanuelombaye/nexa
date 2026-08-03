'use client'

import Link from 'next/link'
import { useState, useMemo, useRef, useEffect } from 'react'
import { faqItems } from '../lib/site-data'

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'care', label: 'Clinical Care & Peptides' },
  { id: 'pricing', label: 'Pricing & Billing' },
  { id: 'supplements', label: 'Supplements' },
  { id: 'privacy', label: 'Privacy & Account' },
]

function getCategoryForFaq(q: string) {
  const lower = q.toLowerCase()
  if (lower.includes('supplement')) return 'supplements'
  if (lower.includes('cost') || lower.includes('cancel') || lower.includes('monthly') || lower.includes('price')) return 'pricing'
  if (lower.includes('medical information') || lower.includes('stored') || lower.includes('portal')) return 'privacy'
  return 'care'
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`faq__chevron ${open ? 'is-open' : ''}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const hasInteractedRef = useRef(false)

  const itemsWithCategory = useMemo(() => {
    return faqItems.map((item, originalIndex) => ({
      ...item,
      originalIndex,
      category: getCategoryForFaq(item.q),
    }))
  }, [])

  const filteredFaqs = useMemo(() => {
    return itemsWithCategory.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory
      const matchesSearch =
        !searchQuery.trim() ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [itemsWithCategory, activeCategory, searchQuery])

  useEffect(() => {
    if (!hasInteractedRef.current || openFaq < 0 || !listRef.current) return
    const openItem = listRef.current.querySelector<HTMLElement>(`#faq-button-${openFaq}`)
    if (!openItem) return

    const frame = window.requestAnimationFrame(() => {
      openItem.scrollIntoView({ block: 'nearest', behavior: 'smooth', inline: 'nearest' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [openFaq])

  const openItem = (index: number) => {
    hasInteractedRef.current = true
    setOpenFaq(index)
  }

  return (
    <section className="section faq" id="support">
      <div className="faq__backdrop" aria-hidden="true" />
      <div className="container faq__grid">
        {/* Left Sticky Intro & Support Assistant */}
        <div className="faq__intro" data-reveal="up">
          <div className="faq__badge">
            <span className="faq__badge-dot" />
            <span>TRANSPARENT CARE & SUPPORT</span>
          </div>
          <h2>Common questions regarding your care.</h2>
          <p className="section__sub">
            Clear answers about clinical evaluation, prescription fulfillment, pricing, state availability, and your privacy.
          </p>

          <div className="faq__support-card">
            <div className="faq__support-header">
              <span className="faq__pulse-dot" />
              <span className="faq__support-title">Clinical Support Ready</span>
            </div>
            <p className="faq__support-text">
              Have questions about your care plan? Our team responds within 15 minutes during active care.
            </p>
            <div className="faq__intro-actions">
              <Link href="/check-eligibility" className="btn btn--primary btn--sm">
                Check Eligibility
              </Link>
              <Link href="/patient-center" className="faq__text-link">
                Patient Center →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Accordion & Search / Category Tools */}
        <div className="faq__main" data-reveal="up" style={{ '--delay': '80ms' } as React.CSSProperties}>
          {/* Category Filter Tabs */}
          <div className="faq__categories" role="tablist" aria-label="FAQ Categories">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`faq__cat-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenFaq(-1)
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="faq__search-wrap">
            <svg className="faq__search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M9 17A8 8 0 109 1a8 8 0 000 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setOpenFaq(-1)
              }}
              placeholder="Search questions (e.g. prescription, pricing, peptides...)"
              className="faq__search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="faq__search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Accordion List */}
          <div className="faq__list" ref={listRef}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = openFaq === item.originalIndex
                const panelId = `faq-panel-${item.originalIndex}`
                const buttonId = `faq-button-${item.originalIndex}`
                return (
                  <article
                    key={item.q}
                    className={`faq__item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="faq__button"
                      onClick={() => openItem(isOpen ? -1 : item.originalIndex)}
                    >
                      <span className="faq__question">{item.q}</span>
                      <span className="faq__toggle" aria-hidden="true">
                        <ChevronIcon open={isOpen} />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`faq__panel ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="faq__panel-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </article>
                )
              })
            ) : (
              <div className="faq__no-results">
                <p>No questions match &ldquo;{searchQuery}&rdquo;</p>
                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('all')
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
