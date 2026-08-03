import { pricingComparison } from '../lib/site-data'

export default function PricingComparison() {
  return (
    <section className="pricing-comparison">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="eyebrow">Compare programs</p>
          <h2>What&apos;s included — at a glance.</h2>
          <p className="section__sub">No monthly dollar amounts until your personalized quote is ready.</p>
        </div>

        <div className="pricing-comparison__wrap" data-reveal="up">
          <table className="pricing-comparison__table">
            <thead>
              <tr>
                {pricingComparison.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingComparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
