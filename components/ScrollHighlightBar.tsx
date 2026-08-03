'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import SiteImage from './SiteImage'

interface ActiveProduct {
  slug: string
  name: string
  price: string
  imageSrc: string
  imageAlt: string
  checkoutUrl: string
  detailsUrl: string
}

interface ScrollHighlightBarProps {
  stickyMode?: 'eligibility' | 'shop'
}

export default function ScrollHighlightBar({ stickyMode = 'eligibility' }: ScrollHighlightBarProps) {
  const [activeProduct, setActiveProduct] = useState<ActiveProduct | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-product-card]'))
    if (!cards.length) {
      setActiveProduct(null)
      return undefined
    }

    const visibleMap = new Map<Element, number>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleMap.set(entry.target, entry.intersectionRatio)
            entry.target.classList.add('is-active-card')
          } else {
            visibleMap.delete(entry.target)
            entry.target.classList.remove('is-active-card')
          }
        })

        // Pick card with highest intersection ratio in viewport
        let highestCard: HTMLElement | null = null
        let highestRatio = 0

        visibleMap.forEach((ratio, target) => {
          if (ratio > highestRatio && target instanceof HTMLElement) {
            highestRatio = ratio
            highestCard = target
          }
        })

        if (highestCard && highestRatio > 0.25) {
          const dataset = (highestCard as HTMLElement).dataset
          setActiveProduct({
            slug: dataset.productSlug || 'product',
            name: dataset.productName || 'Supplement',
            price: dataset.productPrice || '',
            imageSrc: dataset.productImage || '',
            imageAlt: dataset.productAlt || dataset.productName || 'Product',
            checkoutUrl: dataset.productCheckout || `/supplements/checkout?product=${dataset.productSlug}`,
            detailsUrl: dataset.productDetails || `/supplements/${dataset.productSlug}`,
          })
        } else {
          setActiveProduct(null)
        }
      },
      {
        rootMargin: '-15% 0px -25% 0px',
        threshold: [0.25, 0.5, 0.75, 1.0],
      }
    )

    cards.forEach((card) => observerRef.current?.observe(card))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="mobile-sticky-cta">
      {activeProduct ? (
        <div key={activeProduct.slug} className="scroll-highlight-bar animate-bounce-in">
          <div className="scroll-highlight-bar__info">
            {activeProduct.imageSrc && (
              <div className="scroll-highlight-bar__thumb">
                <SiteImage
                  src={activeProduct.imageSrc}
                  alt={activeProduct.imageAlt}
                  width={38}
                  height={38}
                />
              </div>
            )}
            <div className="scroll-highlight-bar__text">
              <span className="scroll-highlight-bar__title">{activeProduct.name}</span>
              {activeProduct.price && (
                <span className="scroll-highlight-bar__price">{activeProduct.price}</span>
              )}
            </div>
          </div>
          <div className="scroll-highlight-bar__actions">
            <Link
              href={activeProduct.checkoutUrl}
              className="btn btn--primary btn--sm scroll-highlight-bar__btn"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : stickyMode === 'shop' ? (
        <Link href="/supplements" className="btn btn--primary btn--lg">
          Shop Supplements
        </Link>
      ) : (
        <Link href="/check-eligibility" className="btn btn--primary btn--lg">
          Check Eligibility
        </Link>
      )}
    </div>
  )
}
