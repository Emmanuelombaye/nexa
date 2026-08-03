'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { getProgramAvailabilityStatus, programStateAvailability, stateAvailabilityNote } from '../lib/site-data'

const usStates = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' },
]

const statusMeta: Record<string, { label: string; badgeClass: string; dotClass: string; desc: string }> = {
  available: {
    label: 'Available',
    badgeClass: 'state-status-badge--available',
    dotClass: 'state-dot--available',
    desc: 'Direct Telehealth & Pharmacy Fulfillment',
  },
  review: {
    label: 'Clinical Review',
    badgeClass: 'state-status-badge--review',
    dotClass: 'state-dot--review',
    desc: 'Requires Clinical Operations Review',
  },
  unavailable: {
    label: 'Unavailable',
    badgeClass: 'state-status-badge--unavailable',
    dotClass: 'state-dot--unavailable',
    desc: 'Not Currently Serviced',
  },
}

export default function StateAvailability({ compact = false }: { compact?: boolean }) {
  const [selectedState, setSelectedState] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const matchedState = useMemo(() => {
    if (!selectedState.trim()) return null
    const query = selectedState.trim().toUpperCase()
    return usStates.find((s) => s.code === query || s.name.toUpperCase().includes(query)) || null
  }, [selectedState])

  const stateProgramStatuses = useMemo(() => {
    if (!matchedState) return []
    return programStateAvailability.map((program) => {
      const status = getProgramAvailabilityStatus(program.slug, matchedState.code)
      return {
        ...program,
        status: status || 'unavailable',
      }
    })
  }, [matchedState])

  const filteredPrograms = useMemo(() => {
    if (activeTab === 'all') return programStateAvailability
    return programStateAvailability.filter((p) => p.slug === activeTab)
  }, [activeTab])

  return (
    <section className={compact ? 'state-availability state-availability--compact' : 'section state-availability'} id="state-availability">
      <div className="container">
        <div className="state-avail__header text-center">
          <p className="eyebrow">State Availability</p>
          <h2>Program availability by state</h2>
          <p className="section__sub max-w-2xl mx-auto">{stateAvailabilityNote}</p>
        </div>

        {/* Interactive Instant Checker Tool */}
        <div className="state-avail__checker">
          <div className="state-avail__checker-box">
            <div className="state-avail__checker-input-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="state-avail__search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search state (e.g. FL, California, Texas, NY)..."
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="state-avail__input"
              />
              {selectedState && (
                <button type="button" onClick={() => setSelectedState('')} className="state-avail__clear-btn" aria-label="Clear search">
                  ✕
                </button>
              )}
            </div>
            <select
              value={matchedState ? matchedState.code : ''}
              onChange={(e) => setSelectedState(e.target.value)}
              className="state-avail__select"
            >
              <option value="">Select State Dropdown...</option>
              {usStates.map((st) => (
                <option key={st.code} value={st.code}>
                  {st.name} ({st.code})
                </option>
              ))}
            </select>
          </div>

          {/* Live Search Results Card */}
          {matchedState && (
            <div className="state-avail__results-card" data-reveal="up">
              <div className="state-avail__results-head">
                <div className="state-avail__results-title">
                  <span className="state-avail__state-flag">{matchedState.code}</span>
                  <div>
                    <h3>{matchedState.name} Telehealth Eligibility</h3>
                    <p>Live clinical operations coverage status for {matchedState.name}</p>
                  </div>
                </div>
                <Link href={`/check-eligibility?state=${matchedState.code}`} className="btn btn--primary btn--sm">
                  Check Eligibility for {matchedState.code}
                </Link>
              </div>

              <div className="state-avail__results-grid">
                {stateProgramStatuses.map((prog) => {
                  const meta = statusMeta[prog.status]
                  return (
                    <div key={prog.slug} className={`state-avail__prog-chip ${meta.badgeClass}`}>
                      <div className="state-avail__prog-chip-head">
                        <span className={`state-dot ${meta.dotClass}`} />
                        <strong>{prog.label}</strong>
                      </div>
                      <span className="state-avail__prog-chip-status">{meta.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Program Filter Tabs */}
        <div className="state-avail__tabs">
          <button
            type="button"
            className={`state-avail__tab ${activeTab === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Programs
          </button>
          {programStateAvailability.map((prog) => (
            <button
              key={prog.slug}
              type="button"
              className={`state-avail__tab ${activeTab === prog.slug ? 'is-active' : ''}`}
              onClick={() => setActiveTab(prog.slug)}
            >
              {prog.label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="state-avail__legend">
          <div className="state-legend-item">
            <span className="state-dot state-dot--available" />
            <span>Direct Telehealth Fulfillment</span>
          </div>
          <div className="state-legend-item">
            <span className="state-dot state-dot--review" />
            <span>Clinical Review Required</span>
          </div>
          <div className="state-legend-item">
            <span className="state-dot state-dot--unavailable" />
            <span>Not Currently Serviced</span>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="state-avail__cards">
          {filteredPrograms.map((program) => (
            <article key={program.slug} className="state-program-card" data-reveal="up">
              <div className="state-program-card__head">
                <div className="state-program-card__title-group">
                  <span className="state-program-card__badge">Care Program</span>
                  <h3>{program.label}</h3>
                </div>
                <Link href={`/check-eligibility?program=${program.slug}`} className="btn btn--outline btn--sm">
                  Select Program
                </Link>
              </div>
              <p className="state-program-card__summary">{program.summary}</p>

              <div className="state-program-card__groups">
                {program.groups.map((group) => {
                  const meta = statusMeta[group.status]
                  const rawList = group.states[0] || ''
                  const stateArray = rawList.split(',').map((s) => s.trim()).filter(Boolean)
                  const count = stateArray.length

                  return (
                    <div key={group.status} className="state-group">
                      <div className="state-group__head">
                        <div className="state-group__label">
                          <span className={`state-dot ${meta.dotClass}`} />
                          <strong>{meta.label}</strong>
                          <span className="state-group__count">({count} {count === 1 ? 'state' : 'states'})</span>
                        </div>
                        <span className="state-group__desc">{meta.desc}</span>
                      </div>
                      <div className="state-chips-wrap">
                        {stateArray.map((stCode) => {
                          const isHighlighted = matchedState && matchedState.code === stCode
                          return (
                            <span
                              key={stCode}
                              className={`state-chip state-chip--${group.status} ${isHighlighted ? 'is-highlighted' : ''}`}
                              title={`${stCode} - ${meta.label}`}
                            >
                              {stCode}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
