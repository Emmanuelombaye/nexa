import { pricingBeforeEnrollment } from '../lib/site-data'

export default function PricingBeforePay() {
  return (
    <section className="pricing-before-pay">
      <div className="container">
        <div className="pricing-before-pay__inner">
          <div>
            <p className="eyebrow">Before you pay</p>
            <h2>Every charge appears in your enrollment summary.</h2>
            <p className="lede">
              Like leading telehealth platforms, Nexa Rx shows a full itemized breakdown before you confirm enrollment —
              not after.
            </p>
          </div>
          <ul className="pricing-before-pay__list">
            {pricingBeforeEnrollment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
