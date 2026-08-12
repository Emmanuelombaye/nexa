'use client'

const items = [
  'Board-certified physicians',
  'Nationwide telehealth',
  'Licensed 503A compounding',
  'California supply chain',
  'Physician-directed protocols',
] as const

export default function HowItWorksTrustTicker() {
  const loop = [...items, ...items]

  return (
    <div className="hiw-trust-ticker" aria-label="Trust highlights">
      <div className="hiw-trust-ticker__track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="hiw-trust-ticker__item">
            <span className="hiw-trust-ticker__dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
