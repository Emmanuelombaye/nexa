'use client'

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { getProgramAvailabilityStatus, programs } from '../lib/site-data'
import { programImages, media } from '../lib/media'
import {
  INTAKE_PHASES,
  US_STATES,
  getActiveScreeningQuestions,
  isScreeningComplete,
  isValidAdultDob,
  isValidEmail,
  isValidPhone,
  isValidZip,
  questionIsDisqualified,
  screeningHasDisqualifier,
} from '../lib/intake'
import SiteImage from './SiteImage'

const availabilityMessages = {
  available: 'This program is currently available in your state.',
  review: 'This program may require additional clinical review in your state. Continue to confirm eligibility.',
  unavailable: 'This program is not currently available in your state. Choose another program or contact support.',
}

const programImagesRecord: Record<string, { src: string; alt: string; width: number; height: number }> = programImages

const TOTAL_STEPS = INTAKE_PHASES.length

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
    sex: '',
    height: '',
    weight: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    answers: {} as Record<string, string>,
    agreeConsent: false,
    authorizeReview: false,
  })

  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const progParam = params.get('program')
    if (!progParam) return
    const found = programs.find(
      (p) =>
        p.slug === progParam ||
        p.title.toLowerCase().includes(progParam.toLowerCase()) ||
        p.navLabel.toLowerCase().includes(progParam.toLowerCase()),
    )
    if (found) {
      setForm((prev) => ({ ...prev, program: found.title }))
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 350)
    }
  }, [])

  const handleSelectProgram = (programTitle: string) => {
    setForm((prev) => ({ ...prev, program: programTitle }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const selectedProgram = useMemo(
    () => programs.find((program) => program.title === form.program || program.navLabel === form.program),
    [form.program],
  )

  const availabilityStatus = useMemo(() => {
    if (!selectedProgram || !form.state.trim()) return null
    return getProgramAvailabilityStatus(selectedProgram.slug, form.state)
  }, [selectedProgram, form.state])

  const screeningIntake = useMemo(
    () => ({
      answers: form.answers,
      sexAtBirth: form.sex,
    }),
    [form.answers, form.sex],
  )

  const screeningQuestions = useMemo(
    () => getActiveScreeningQuestions(screeningIntake),
    [screeningIntake],
  )

  const setAnswer = (id: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      answers: { ...prev.answers, [id]: value },
    }))
  }

  const validateStep = (step: number) => {
    setError('')
    const phase = INTAKE_PHASES[step - 1]?.id

    if (phase === 'metrics') {
      if (!form.height.trim() || !form.weight || !form.sex || !form.dob) {
        setError('Enter height, weight, date of birth, and sex assigned at birth.')
        return false
      }
      if (!isValidAdultDob(form.dob)) {
        setError('You must be 18 or older to continue.')
        return false
      }
      return true
    }

    if (phase === 'screening') {
      if (!isScreeningComplete(screeningIntake)) {
        if (screeningHasDisqualifier(screeningIntake)) {
          setError(
            'Based on your answers, a physician must review before you can continue. Contact support@nexarx.com.',
          )
          return false
        }
        setError('Please answer all medical screening questions to continue.')
        return false
      }
      return true
    }

    if (phase === 'patient') {
      if (!form.email.trim() || !form.firstName.trim() || !form.lastName.trim() || !form.phone.trim()) {
        setError('Enter your full name, email, and phone number.')
        return false
      }
      if (!isValidEmail(form.email)) {
        setError('Enter a valid email address.')
        return false
      }
      if (!isValidPhone(form.phone)) {
        setError('Enter a valid phone number.')
        return false
      }
      return true
    }

    if (phase === 'shipping') {
      if (!form.street.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) {
        setError('Please complete all required shipping address fields.')
        return false
      }
      if (!US_STATES.some((s) => s.value === form.state)) {
        setError('Select a valid U.S. state.')
        return false
      }
      if (!isValidZip(form.zip)) {
        setError('Enter a valid ZIP code.')
        return false
      }
      if (availabilityStatus === 'unavailable') {
        setError(availabilityMessages.unavailable)
        return false
      }
      return true
    }

    if (phase === 'consent') {
      if (!form.agreeConsent || !form.authorizeReview) {
        setError('Please accept both clinical agreements to complete your intake.')
        return false
      }
      return true
    }

    return true
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    }
  }

  const handlePrevStep = () => {
    setError('')
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateStep(TOTAL_STEPS)) return

    const fullIntakeData = {
      ...form,
      name: `${form.firstName} ${form.lastName}`.trim(),
      sexAtBirth: form.sex,
      clinicalAnswers: form.answers,
      at: new Date().toISOString(),
    }

    localStorage.setItem('nexa_intake_draft_v2', JSON.stringify(fullIntakeData))
    router.push('/patient-center')
  }

  const phase = INTAKE_PHASES[currentStep - 1]

  return (
    <section className="container eligibility-layout">
      <div className="eligibility-layout__copy">
        <p className="eyebrow">Clinical Evaluation</p>
        <h1>Start your medical intake.</h1>
        <p className="lede">
          Select your care program, then complete a clinical questionnaire. A licensed U.S. provider reviews your
          answers before any prescription is issued.
        </p>

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

        <div ref={formRef} className="flow-stepper-container" style={{ scrollMarginTop: '120px' }}>
          <div className="flow-stepper-header">
            <div className="flow-stepper-track">
              <div className="flow-stepper-fill" style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }} />
            </div>
            <div className="flow-stepper-steps">
              {INTAKE_PHASES.map((s, idx) => {
                const num = idx + 1
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      if (num < currentStep || validateStep(currentStep)) setCurrentStep(num)
                    }}
                    className={`flow-step-pill ${currentStep === num ? 'is-active' : ''} ${
                      currentStep > num ? 'is-completed' : ''
                    }`}
                  >
                    <span className="flow-step-num">{currentStep > num ? '✓' : num}</span>
                    <span className="flow-step-label">{s.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <form className="flow-form" onSubmit={handleSubmit}>
            {phase?.id === 'metrics' && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Body metrics</h3>
                <p className="lede" style={{ marginBottom: '1rem' }}>
                  Used by a licensed provider to evaluate whether treatment is appropriate.
                </p>
                <div className="flow-form-grid">
                  <label className="flow-field">
                    Height (e.g. 5&apos;10&quot;) *
                    <input
                      value={form.height}
                      onChange={(e) => setForm({ ...form, height: e.target.value })}
                      placeholder={`5'10"`}
                      required
                    />
                  </label>
                  <label className="flow-field">
                    Weight (lbs) *
                    <input
                      type="number"
                      value={form.weight}
                      onChange={(e) => setForm({ ...form, weight: e.target.value })}
                      placeholder="185"
                      min={50}
                      max={500}
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
                      {['Male', 'Female', 'Other'].map((sex) => (
                        <label key={sex} className={`flow-radio-tile ${form.sex === sex ? 'is-selected' : ''}`}>
                          <input
                            type="radio"
                            name="sex"
                            value={sex}
                            checked={form.sex === sex}
                            onChange={(e) => setForm({ ...form, sex: e.target.value })}
                          />
                          <span>{sex}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {phase?.id === 'screening' && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Medical screening</h3>
                <p className="lede" style={{ marginBottom: '1rem' }}>
                  Answer each question carefully. Some responses require physician review before you can continue.
                </p>
                <div className="flow-q-list">
                  {screeningQuestions.map((q) => {
                    const value = form.answers[q.id] || ''
                    const disqualified = questionIsDisqualified(q, value)
                    return (
                      <div key={q.id} className={`flow-q ${disqualified ? 'flow-q--warn' : ''}`}>
                        <p className="flow-q__prompt">
                          {q.question}
                          {q.required ? ' *' : ''}
                        </p>

                        {q.type === 'boolean' && (
                          <div className="flow-radio-group">
                            {(['yes', 'no'] as const).map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                className={`flow-radio-tile ${value === opt ? 'is-selected' : ''} ${
                                  disqualified && value === opt ? 'is-danger' : ''
                                }`}
                                onClick={() => setAnswer(q.id, opt)}
                              >
                                <span>{opt === 'yes' ? 'Yes' : 'No'}</span>
                              </button>
                            ))}
                          </div>
                        )}

                        {q.type === 'select' && (
                          <div className="flow-radio-stack">
                            {(q.options || []).map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                className={`flow-radio-card ${value === opt ? 'is-selected' : ''}`}
                                onClick={() => setAnswer(q.id, opt)}
                              >
                                <div className="flow-radio-content">
                                  <strong>{opt}</strong>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {(q.type === 'text' || q.type === 'number') &&
                          (q.type === 'text' && q.question.length > 80 ? (
                            <textarea
                              value={value}
                              onChange={(e) => setAnswer(q.id, e.target.value)}
                              rows={3}
                              placeholder="Enter your answer…"
                            />
                          ) : (
                            <input
                              type={q.type === 'number' ? 'number' : 'text'}
                              value={value}
                              onChange={(e) => setAnswer(q.id, e.target.value)}
                              placeholder="Enter your answer…"
                            />
                          ))}

                        {disqualified && (
                          <div className="flow-q__alert" role="alert">
                            <strong>Medical review required</strong>
                            <p>
                              Based on this response, a physician review is required before you can proceed. Contact
                              support@nexarx.com for next steps.
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {phase?.id === 'patient' && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Patient information</h3>
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
                  <label className="flow-field flow-field--full">
                    Phone Number *
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(305) 555-0142"
                      required
                    />
                  </label>
                </div>
              </div>
            )}

            {phase?.id === 'shipping' && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Shipping address</h3>
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
                    State *
                    <select
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {US_STATES.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
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

            {phase?.id === 'consent' && (
              <div className="flow-step-body animate-fade-in">
                <h3 className="flow-step-title">Agreements &amp; consent</h3>
                <div className="flow-agreements-stack">
                  <label className="flow-checkbox-card">
                    <input
                      type="checkbox"
                      checked={form.agreeConsent}
                      onChange={(e) => setForm({ ...form, agreeConsent: e.target.checked })}
                    />
                    <div className="flow-checkbox-text">
                      <span>
                        I agree to the Terms of Service, Medical Consent Form, and acknowledge the Telehealth Informed
                        Consent for provider-guided treatment. *
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
                        I authorize Nexa Rx&apos;s affiliated clinicians to securely review my medical information and
                        prescribe medication only if clinically appropriate. *
                      </span>
                    </div>
                  </label>
                </div>
                <p className="hero__stats-note" style={{ marginTop: '1rem' }}>
                  Submitting this intake does not guarantee a prescription. A licensed provider must approve treatment.
                </p>
              </div>
            )}

            {error && <p className="flow-error">{error}</p>}

            <div className="flow-nav-actions">
              {currentStep > 1 && (
                <button type="button" className="btn btn--outline" onClick={handlePrevStep}>
                  ← Back
                </button>
              )}
              {currentStep < TOTAL_STEPS ? (
                <button type="button" className="btn btn--primary" onClick={handleNextStep}>
                  Next Step →
                </button>
              ) : (
                <button className="btn btn--primary btn--lg" type="submit">
                  Submit medical intake →
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
