'use client'

import { useEffect } from 'react'

/** Lightweight scroll reveals for [data-reveal] elements. Respects reduced motion. */
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    )

    nodes.forEach((node, index) => {
      if (!node.style.getPropertyValue('--delay')) {
        node.style.setProperty('--delay', `${Math.min(index % 6, 5) * 55}ms`)
      }
      // Already in view on mount (heroes / above-fold) — show immediately
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        node.classList.add('is-in')
      } else {
        observer.observe(node)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
