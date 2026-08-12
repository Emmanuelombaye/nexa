'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { howSteps } from '../lib/how-it-works'
import SiteImage from './SiteImage'

const STICKY_VH = 23
const EXTRA_PX = 350

/** Yucca-style sticky stack: cards scrub to opacity 0 / scale 0.88 as the next step scrolls in. */
export default function HowItWorksStickySteps() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const desktopMq = window.matchMedia('(min-width: 992px)')
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const triggers: ScrollTrigger[] = []

    const clearCards = () => {
      root.querySelectorAll<HTMLElement>('.hiw-step-card').forEach((card) => {
        gsap.set(card, { clearProps: 'opacity,transform' })
      })
    }

    const kill = () => {
      triggers.splice(0).forEach((t) => t.kill())
      clearCards()
      delete root.dataset.hiwInit
    }

    const init = () => {
      kill()
      if (!desktopMq.matches || motionMq.matches) {
        root.dataset.hiwInit = 'skipped'
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      const steps = Array.from(root.querySelectorAll<HTMLElement>('.hiw-step'))
      steps.forEach((step, i) => {
        const card = step.querySelector<HTMLElement>('.hiw-step-card')
        const next = steps[i + 1]
        if (!card || !next) return

        const tween = gsap.to(card, {
          opacity: 0,
          scale: 0.88,
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: () =>
              `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight + EXTRA_PX}px`,
            end: () => `top ${window.innerHeight * (STICKY_VH / 100) + card.offsetHeight / 2}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      root.dataset.hiwInit = 'true'
      ScrollTrigger.refresh()
    }

    init()

    const onChange = () => init()
    desktopMq.addEventListener('change', onChange)
    motionMq.addEventListener('change', onChange)

    return () => {
      desktopMq.removeEventListener('change', onChange)
      motionMq.removeEventListener('change', onChange)
      kill()
    }
  }, [])

  return (
    <section ref={rootRef} className="hiw-hero" aria-label="Care steps">
      <div className="hiw-steps">
        {howSteps.map((step, i) => {
          const isLast = i === howSteps.length - 1
          return (
            <div
              key={step.n}
              className={`hiw-step ${isLast ? 'hiw-step--relative' : 'hiw-step--sticky'}`}
              style={{ zIndex: i + 1 }}
            >
              <article className="hiw-step-card">
                <div className="hiw-step-card__media">
                  <div className="hiw-step-card__frame">
                    <SiteImage
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes={step.image.sizes}
                      priority={i === 0}
                      quality={88}
                    />
                  </div>
                  {step.chips ? (
                    <div className="hiw-step-card__chips">
                      {step.chips.map((chip) => (
                        <span key={chip} className="hiw-step-card__chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="hiw-step-card__copy">
                  <p className="hiw-step-card__label">Step {step.n}</p>
                  <h2 className="hiw-step-card__title">
                    {step.title}{' '}
                    <em>{step.titleItalic}</em>
                  </h2>
                  <p className="hiw-step-card__body">{step.body}</p>

                  {step.callout ? (
                    <div className="hiw-step-card__callout">
                      <p className="hiw-step-card__callout-value">{step.callout.value}</p>
                      <p className="hiw-step-card__callout-label">{step.callout.label}</p>
                    </div>
                  ) : null}

                  {step.n === '01' ? (
                    <Link href="/#treatments" className="hiw-step-card__link">
                      Explore treatments →
                    </Link>
                  ) : null}
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
