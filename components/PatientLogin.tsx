'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SiteImage from './SiteImage'
import { media } from '../lib/media'

export default function PatientLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || password.length < 4) {
      setError('Enter email and a password (4+ characters).')
      return
    }
    localStorage.setItem('nexa_session_v2', JSON.stringify({ email, at: new Date().toISOString() }))
    router.push('/patient-center')
  }

  return (
    <div className="auth">
      <div className="auth__visual">
        <SiteImage
          src={media.loginSide.src}
          alt={media.loginSide.alt}
          fill
          priority
          sizes="(max-width: 767px) 0px, 50vw"
          quality={70}
        />
        <div className="auth__overlay">
          <p className="logo__word logo--on-dark">
            Nexa <span className="logo__rx">Rx</span>
          </p>
          <h1>Your care, in one place.</h1>
          <p>Licensed clinical care with clear pricing and discreet delivery.</p>
        </div>
      </div>
      <div className="auth__panel">
        <Link href="/" className="auth__back">
          ← Back to Nexa Rx
        </Link>
        <h2>Patient Login</h2>
        <p className="auth__hint">
          New here? <Link href="/check-eligibility">Check eligibility first</Link> — no account before enrollment.
        </p>
        <form className="flow-form" onSubmit={submit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={4} required />
          </label>
          {error && <p className="flow-error">{error}</p>}
          <button type="submit" className="btn btn--primary btn--lg flow-cta">
            Patient Login
          </button>
        </form>
      </div>
    </div>
  )
}
