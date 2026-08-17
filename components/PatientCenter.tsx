'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PatientSession {
  email?: string
}

interface IntakeDraft {
  name?: string
  email?: string
  program?: string
}

export default function PatientCenter() {
  const [session, setSession] = useState<PatientSession | null>(null)
  const [draft, setDraft] = useState<IntakeDraft | null>(null)
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    try {
      setSession(JSON.parse(localStorage.getItem('nexa_session_v2') || 'null'))
      setDraft(JSON.parse(localStorage.getItem('nexa_intake_draft_v2') || 'null'))
      const checkout = JSON.parse(localStorage.getItem('nexa_checkout_status_v1') || 'null') as { paid?: boolean } | null
      setPaid(Boolean(checkout?.paid))
    } catch {
      setSession(null)
      setDraft(null)
      setPaid(false)
    }
  }, [])

  if (!session && !draft) {
    return (
      <div className="portal-empty">
        <h1>Patient Center</h1>
        <p>Complete eligibility check or log in to continue.</p>
        <div className="flow-nav">
          <Link href="/check-eligibility" className="btn btn--primary">
            Check Eligibility
          </Link>
          <Link href="/patient-login" className="btn btn--outline">
            Patient Login
          </Link>
        </div>
      </div>
    )
  }

  const name = draft?.name?.split(' ')[0] || session?.email?.split('@')[0] || 'Member'
  const program = draft?.program || 'Your care plan'

  return (
    <div className="portal">
      <main className="container portal__main">
        <section className="portal-hero">
          <p className="eyebrow">Patient Center</p>
          <h1>Welcome back, {name}.</h1>
          <p>Your clinician review status and next steps live here.</p>
        </section>
        <div className="portal-grid">
          <article className="portal-card">
            <h2>Current program</h2>
            <p className="portal-stat">{program}</p>
            <span className="pill">{paid ? 'Payment received' : 'Pending clinician review'}</span>
          </article>
          <article className="portal-card">
            <h2>Next step</h2>
            <p>
              {paid
                ? 'A licensed clinician will review your intake. Watch your email for updates, typically within 24 hours.*'
                : 'Watch your email for review updates. Typical review window is within 24 hours.*'}
            </p>
          </article>
          <article className="portal-card portal-card--wide">
            <h2>Care team</h2>
            <p>
              Your care forms and health information are stored securely. Affiliated clinicians review details to determine if treatment is appropriate for you.
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}
