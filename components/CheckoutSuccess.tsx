'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CheckoutSuccess() {
  const [hasSession, setHasSession] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')
    setHasSession(Boolean(sessionId))
    try {
      localStorage.setItem(
        'nexa_checkout_status_v1',
        JSON.stringify({ paid: true, at: new Date().toISOString() }),
      )
    } catch {
      /* ignore private-mode storage failures */
    }
  }, [])

  return (
    <section className="container checkout-success">
      <p className="eyebrow">Checkout complete</p>
      <h1>Your intake is in clinical review.</h1>
      <p className="lede">
        Payment was received. A licensed clinician will review your information before any prescription is issued.
        Watch the email you used at checkout for next steps.
      </p>
      {hasSession && (
        <p className="hero__stats-note">A payment confirmation has been recorded for this visit.</p>
      )}
      <div className="hero__cta">
        <Link href="/patient-center" className="btn btn--primary btn--lg">
          Open Patient Center
        </Link>
        <Link href="/" className="btn btn--outline btn--lg">
          Return home
        </Link>
      </div>
    </section>
  )
}
