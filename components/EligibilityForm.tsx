'use client'

import { useEffect, useMemo, useRef, useState, type FormEvent, type CSSProperties } from 'react'
import { useRouter } from 'next/navigation'
import { getProgramAvailabilityStatus, programs } from '../lib/site-data'
import { programImages, media } from '../lib/media'
import SiteImage from './SiteImage'

const availabilityMessages = {
  available: 'This program is currently available in your state.',
  review: 'This program may require additional clinical review in your state. Continue to confirm eligibility.',
  unavailable: 'This program is not currently available in your state. Choose another program or contact support.',
}

const programImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = programImages

export default function EligibilityForm() {
  const router = useRouter()
  const formRef = useRef<HTMLDivElement>(null)

  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState({
    program: 'Semaglutide',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    sex: 'Male',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    hasConditions: 'No, none apply',
    agreeConsent: false,
    authorizeReview: false,
  })

  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const progParam = params.get('program')
      if (progParam) {
        const found = programs.find(
          (p) =>
            p.slug === progParam ||
            p.title.toLowerCase().includes(progParam.toLowerCase()) ||
            p.navLabel.toLowerCase().includes(progParam.toLowerCase())
        )
        if (found) {
          setForm((prev) => ({ ...prev, program: found.title }))
          setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 350)
        }
      }
    }
  }, [])

  const handleSelectProgram = (programTitle: string) => {
    setForm((prev) => ({ ...prev, program: programTitle }))
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const selectedProgram = useMemo(
    () => programs.find((program) => program.title === form.program || program.navLabel === form.program),
    [form.program]
  )

  const availabilityStatus = useMemo(() => {
    if (!selectedProgram || !form.state.trim()) return null
    return getProgramAvailabilityStatus(selectedProgram.slug, form.state)
  }, [selectedProgram, form.state])

  const validateStep = (step: number) => {
    setError('')
    if (step === 1) {
      if (!form.email.trim() || !form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.dob) {
        setError('Please fill in all required Patient Information fields (Email, First Name, Last Name, Phone, DOB).')
        return false
      }
    } else if (step === 2) {
      if (!form.street.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) {
        setError('Please complete all required Shipping Address fields (Street, City, State, ZIP).')
        return false
      }
      if (availabilityStatus === 'unavailable') {
        setError(availabilityMessages.unavailable)
        return false
      }
    } else if (step === 3) {
      if (!form.hasConditions) {
        setError('Please select whether any medical conditions apply to you.')
        return false
      }
    } else if (step === 4) {
      if (!form.agreeConsent || !form.authorizeReview) {
        setError('Please accept both clinical agreements to complete your intake.')
        return false
      }
    }
    return true
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handlePrevStep = () => {
    setError('')
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return

    const fullIntakeData = {
      ...form,
      name: `${form.firstName} ${form.lastName}`.trim(),
      at: new Date().toISOString(),
    }

    localStorage.setItem('nexa_intake_draft_v2', JSON.stringify(fullIntakeData))
    router.push('/patient-center')
  }

  return (
    <section className="container eligibility-layout">
      <div className="eligibility-layout__copy">
        <p className="eyebrow">Clinical Evaluation</p>
        <h1>Start your care consultation.</h1>
        <p className="lede">
          Select your care program and complete your 4-step medical evaluation below.
        </p>

        {/* Program Cards Selection Grid */}
        <div className="flow-treats-grid" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          {programs.map((program) => {
            const image = programImagesRecord[program.slug]
            const selected = form.program === program.title || form.program === program.navLabel
            return (
              <button
                key={program.slug}
                type="button"
                className={`flow-treat-card ${selected ? 'is-selected' : ''}`}
                onClick={() => handleSelectProgram(program.title)}
              >
                <div className="flow-treat-card__media">
                  {image && (
                    <SiteImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      quality={75}
                    />
                  )}
                  {selected && (
                    <span className="flow-treat-card__selected-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Selected
                    </span>
                  )}
                </div>
                <div className="flow-treat-card__content">
                  <span className="flow-treat-card__cat">{program.category}</span>
                  <h3 className="flow-treat-card__title">{program.navLabel}</h3>
                  <div className="flow-treat-card__pricing">
                    <span className="flow-treat-card__price">{program.price}</span>
                    <span className="flow-treat-card__subline">{program.priceSubline}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Multi-Step Intake Container */}
        <div ref={formRef} className="flow-stepper-container" style={{ scrollMarginTop: '120px' }}>
          {/* Progress Bar & Stepper Tabs */}
          <div className="flow-stepper-header">
            <div className="flow-stepper-track">
              <div
                className="flow-stepper-fill"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
            <div className="flow-stepper-steps">
              {[
                { num: 1, label: 'Patient Info' },
                { num: 2, label: 'Shipping' },
                { num: 3, label: 'Screening' },
                { num: 4, label: 'Agreements' },
              ].map((s) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    if (s.num < currentStep || validateStep(currentStep)) {
                      setCurrentStep(s.num)
                    }
                  }}
                  className={`flow-step-pill ${currentStep === s.num ? 'is-active' : ''} ${
                    currentStep > s.num ? 'is-completed' : ''
                  }`}
                >
                  <span className="flow-step-num">{currentStep > s.num ? '✓' : s.num}</span>
                  <span className="flow-step-label">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <form className="flow-form" onSubmit={handleSubmit}>
            {/* Step 1 — Patient Information */}
            {currentStep === 1 && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Step 1 — Patient Information</h3>

                <div className="flow-form-grid">
                  <label className="flow-field flow-field--full">
                    Email Address *
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex.rivera@example.com"
                      required
                    />
                  </label>

                  <label className="flow-field">
                    First Name *
                    <input
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      placeholder="Alex"
                      required
                    />
                  </label>

                  <label className="flow-field">
                    Last Name *
                    <input
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      placeholder="Rivera"
                      required
                    />
                  </label>

                  <label className="flow-field">
                    Phone Number *
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(305) 555-0142"
                      required
                    />
                  </label>

                  <label className="flow-field">
                    Date of Birth *
                    <input
                      type="date"
                      value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      required
                    />
                  </label>

                  <div className="flow-field flow-field--full">
                    <span className="flow-label-text">Sex Assigned at Birth *</span>
                    <div className="flow-radio-group">
                      <label className={`flow-radio-tile ${form.sex === 'Male' ? 'is-selected' : ''}`}>
                        <input
                          type="radio"
                          name="sex"
                          value="Male"
                          checked={form.sex === 'Male'}
                          onChange={(e) => setForm({ ...form, sex: e.target.value })}
                        />
                        <span>Male</span>
                      </label>
                      <label className={`flow-radio-tile ${form.sex === 'Female' ? 'is-selected' : ''}`}>
                        <input
                          type="radio"
                          name="sex"
                          value="Female"
                          checked={form.sex === 'Female'}
                          onChange={(e) => setForm({ ...form, sex: e.target.value })}
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — Shipping Address */}
            {currentStep === 2 && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Step 2 — Shipping Address</h3>

                <div className="flow-form-grid">
                  <label className="flow-field flow-field--full">
                    Street Address *
                    <input
                      value={form.street}
                      onChange={(e) => setForm({ ...form, street: e.target.value })}
                      placeholder="1248 Ocean Drive"
                      required
                    />
                  </label>

                  <label className="flow-field flow-field--full">
                    Apartment / Suite (Optional)
                    <input
                      value={form.apartment}
                      onChange={(e) => setForm({ ...form, apartment: e.target.value })}
                      placeholder="Apt 4B / Suite 200"
                    />
                  </label>

                  <label className="flow-field">
                    City *
                    <input
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Miami"
                      required
                    />
                  </label>

                  <label className="flow-field">
                    State (2-letter code) *
                    <input
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value.toUpperCase() })}
                      placeholder="FL"
                      maxLength={2}
                      required
                    />
                  </label>

                  <label className="flow-field">
                    ZIP / Postcode *
                    <input
                      value={form.zip}
                      onChange={(e) => setForm({ ...form, zip: e.target.value })}
                      placeholder="33139"
                      required
                    />
                  </label>

                  {availabilityStatus && (
                    <div className="flow-field flow-field--full">
                      <p className={`availability-note availability-note--${availabilityStatus}`}>
                        {availabilityMessages[availabilityStatus]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3 — Medical Screening */}
            {currentStep === 3 && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Step 3 — Medical Screening</h3>

                <div className="flow-screening-box">
                  <p className="flow-screening-question">
                    Do any of the following conditions apply to you? *
                  </p>
                  <ul className="flow-screening-list">
                    <li>History of medullary thyroid carcinoma or MEN 2 syndrome</li>
                    <li>Active pregnancy, nursing, or planning pregnancy within 60 days</li>
                    <li>Severe active liver, kidney, or cardiovascular failure</li>
                    <li>Uncontrolled diabetes or history of severe pancreatitis</li>
                  </ul>

                  <div className="flow-radio-stack">
                    <label
                      className={`flow-radio-card ${
                        form.hasConditions === 'Yes, one or more' ? 'is-selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="hasConditions"
                        value="Yes, one or more"
                        checked={form.hasConditions === 'Yes, one or more'}
                        onChange={(e) => setForm({ ...form, hasConditions: e.target.value })}
                      />
                      <div className="flow-radio-content">
                        <strong>Yes, one or more</strong>
                        <span>Requires custom clinical evaluation before proceeding</span>
                      </div>
                    </label>

                    <label
                      className={`flow-radio-card ${
                        form.hasConditions === 'No, none apply' ? 'is-selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="hasConditions"
                        value="No, none apply"
                        checked={form.hasConditions === 'No, none apply'}
                        onChange={(e) => setForm({ ...form, hasConditions: e.target.value })}
                      />
                      <div className="flow-radio-content">
                        <strong>No, none apply</strong>
                        <span>Cleared for standard prescription intake review</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 — Agreements & Checkout */}
            {currentStep === 4 && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Step 4 — Agreements & Checkout</h3>

                <div className="flow-agreements-stack">
                  <label className="flow-checkbox-card">
                    <input
                      type="checkbox"
                      checked={form.agreeConsent}
                      onChange={(e) => setForm({ ...form, agreeConsent: e.target.checked })}
                    />
                    <div className="flow-checkbox-text">
                      <span>
                        I agree to the Terms of Service, Medical Consent form, and acknowledge the Telehealth Informed Consent for specialized medical protocols. *
                      </span>
                    </div>
                  </label>

                  <label className="flow-checkbox-card">
                    <input
                      type="checkbox"
                      checked={form.authorizeReview}
                      onChange={(e) => setForm({ ...form, authorizeReview: e.target.checked })}
                    />
                    <div className="flow-checkbox-text">
                      <span>
                        I authorize Nexa Rx&apos;s affiliated clinicians to securely review my medical records and prescribe the necessary medication if candidate. *
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {error && <p className="flow-error">{error}</p>}

            {/* Step Navigation Bar */}
            <div className="flow-nav-actions">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={handlePrevStep}
                >
                  ← Back
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={handleNextStep}
                >
                  Next Step →
                </button>
              ) : (
                <button className="btn btn--primary btn--lg" type="submit">
                  Complete Intake &amp; Check Eligibility →
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="hero__stats-note" style={{ marginTop: '1.25rem' }}>
          Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed clinician.
          Availability varies by state and treatment.
        </p>
      </div>

      <div className="eligibility-layout__media" data-reveal="right" aria-hidden="true">
        <SiteImage
          src={media.eligibilitySide.src}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 0px, 42vw"
          quality={70}
        />
      </div>
    </section>
  )
}
