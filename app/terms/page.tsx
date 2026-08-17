import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Terms of Use | Nexa Rx',
  description:
    'Terms governing access to and use of the Nexa RX websites, assessments, checkout flows, and related non-clinical services.',
  path: '/terms',
})

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }]} />
      <main className="legal-page">
        <section className="container legal-page__hero">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Use</h1>
          <p className="lede">
            These Terms of Use govern your access to and use of the websites, online services, assessments, checkout
            flows, patient-facing technology, communications, and related non-clinical services provided by Nexa RX LLC
            d/b/a Nexa RX (the “Company,” “we,” “our,” or “us”) (collectively, the “Services”). By accessing or using the
            Services, you agree to these Terms.
          </p>
          <p className="hero__stats-note">Last updated: August 14, 2026</p>
        </section>

        <section className="container legal-prose">
          <article>
            <h2>1. Introduction</h2>
            <p>
              These Terms of Use govern your access to and use of the websites, online services, assessments, checkout
              flows, patient-facing technology, communications, and related non-clinical services provided by Nexa RX LLC
              d/b/a Nexa RX (the “Company,” “we,” “our,” or “us”) (collectively, the “Services”). By accessing or using
              the Services, you agree to these Terms.
            </p>
          </article>
          <article>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms, our <Link href="/privacy">Privacy Policy</Link>, and any additional disclosures, consents,
              or policies presented to you. If you do not agree, do not use the Services.
            </p>
          </article>
          <article>
            <h2>3. About the Services</h2>
            <p>
              The Company provides a technology and administrative platform that may connect eligible users with
              independent or affiliated U.S.-licensed healthcare providers, licensed pharmacies, laboratories, and other
              healthcare service providers. Unless expressly identified otherwise, the Company is not a medical practice
              or pharmacy and does not itself diagnose, treat, prescribe, dispense, manufacture, or compound medication.
            </p>
            <p>
              Clinical services are provided by licensed healthcare providers practicing through one or more affiliated
              or contracted medical practices. Pharmacy services are provided by appropriately licensed pharmacy
              partners. The identity of the applicable clinical practice, treating provider, and dispensing pharmacy will
              be disclosed as required by applicable law and during the applicable care or fulfillment process.
            </p>
            <p>
              Prescription treatment is available only after evaluation by a licensed healthcare provider and only when
              the provider determines, in the provider’s independent professional judgment, that treatment is clinically
              appropriate and legally permitted.
            </p>
          </article>
          <article>
            <h2>4. Eligibility and Patient Location</h2>
            <p>
              You must be at least 18 years old, be a resident of the United States, be physically located in a
              jurisdiction in which the applicable provider is authorized to provide care at the time clinical services
              are rendered, and be able to form a legally binding contract. By using the Services, you represent that you
              meet these requirements and that all information you provide, including your identity, age, location,
              contact information, and health information, is accurate, current, and complete.
            </p>
            <p>
              You may be asked to verify your identity, age, location, or other eligibility information. The Company or a
              healthcare provider may suspend or decline access to the Services if required information cannot be
              verified.
            </p>
          </article>
          <article>
            <h2>5. Nationwide Availability and Service Limitations</h2>
            <p>
              Access to at least some Services is offered in all 50 U.S. states through affiliated or contracted
              healthcare providers and pharmacy partners, subject to applicable law, provider licensure, pharmacy
              authorization, patient eligibility, clinical appropriateness, and operational availability.
            </p>
            <p>
              Nationwide availability does not mean that every provider, treatment category, medication, dosage form,
              laboratory service, pharmacy, shipping method, or subscription option is available in every state.
              Availability may change without notice. A provider may require a synchronous video or telephone
              consultation, laboratory testing, medical records, an in-person examination, or other information before
              making a treatment decision.
            </p>
          </article>
          <article>
            <h2>6. Not for Emergencies</h2>
            <p>
              The Services are not designed for medical emergencies. If you are experiencing a medical emergency, call
              911 or seek emergency medical care immediately. Do not use the Services to communicate urgent or
              life-threatening symptoms.
            </p>
          </article>
          <article>
            <h2>7. Separate Medical and Pharmacy Services</h2>
            <p>
              The Company does not control or direct the independent clinical judgment of healthcare providers. Providers
              are solely responsible for evaluating patients, determining whether treatment is appropriate, issuing
              prescriptions, directing care, and providing clinical follow-up.
            </p>
            <p>
              The Company does not control a pharmacy’s professional judgment, dispensing decisions, compounding
              decisions, labeling, counseling, fulfillment practices, or compliance obligations. A pharmacy may decline
              or delay fulfillment when legally or clinically required.
            </p>
            <p>
              Your relationship with a healthcare provider or pharmacy may also be governed by separate notices,
              consents, policies, or terms provided by that provider, medical practice, or pharmacy.
            </p>
          </article>
          <article>
            <h2>8. Telehealth and Asynchronous Care</h2>
            <p>
              Clinical care may be delivered through telehealth, including secure questionnaires, uploaded records or
              images, secure messaging, telephone calls, video visits, remote monitoring, or other legally permitted
              methods. In some circumstances, care may be provided asynchronously, meaning that the provider reviews
              submitted information without a simultaneous live interaction.
            </p>
            <p>
              Telehealth and asynchronous care are not appropriate for every patient or condition. A provider may request
              additional information, require a live consultation or laboratory testing, decline treatment, discontinue
              treatment, or recommend in-person or emergency care. You must complete any state-specific telehealth
              informed consent presented to you before receiving clinical services.
            </p>
          </article>
          <article>
            <h2>9. Provider Review; No Guarantee of a Prescription</h2>
            <p>
              Completing an assessment, creating an account, submitting payment information, or completing checkout does
              not create a guarantee of treatment or a prescription. A licensed healthcare provider must first provide an
              appropriate clinical evaluation and determine that treatment is clinically appropriate and permitted by
              applicable law.
            </p>
            <p>
              No prescription or prescription medication will be issued, dispensed, or shipped before the required
              provider evaluation and issuance of a valid prescription by an authorized prescriber.
            </p>
          </article>
          <article>
            <h2>10. Prescription and Compounded Medications</h2>
            <p>
              Certain products accessible through the Services require a valid prescription. Prescription medications are
              dispensed only by appropriately licensed pharmacy partners pursuant to a valid prescription issued after an
              appropriate provider evaluation.
            </p>
            <p>
              Some treatment plans may involve compounded medications when prescribed for an identified patient and
              permitted by applicable federal and state law. Compounded medications are not approved by the U.S. Food and
              Drug Administration (“FDA”), and the FDA does not review compounded medications for safety, effectiveness,
              or quality before they are marketed. A compounded medication is not an FDA-approved generic medication and
              should not be represented as identical or therapeutically equivalent to an FDA-approved product unless such
              a statement is legally authorized and substantiated.
            </p>
            <p>
              Any reference on the Services to an active ingredient, brand-name medication, or commercially available
              medication is for identification or informational purposes and does not imply that a compounded product is
              FDA-approved, is a generic version of an FDA-approved product, or is equivalent to a branded product.
              Medication availability is subject to applicable law, pharmacy authorization, ingredient availability,
              patient-specific clinical need, and the provider’s independent judgment.
            </p>
          </article>
          <article>
            <h2>11. Health Information You Provide</h2>
            <p>
              You agree to provide accurate, current, and complete health information through assessments, intake forms,
              uploads, laboratory results, and communications with providers. You must disclose relevant diagnoses,
              symptoms, allergies, medications, supplements, pregnancy status, medical history, and other information
              requested by your provider.
            </p>
            <p>
              Providing inaccurate, incomplete, or misleading information may result in delayed or declined treatment,
              inappropriate treatment, suspension of access, or risks to your health. You agree to promptly notify your
              provider of material changes in your health or medications.
            </p>
          </article>
          <article>
            <h2>12. Account Registration and Security</h2>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of your credentials and
              for activity under your account. You may not share your account, impersonate another person, create an
              account using false information, or submit health information on behalf of another person unless expressly
              authorized and legally permitted.
            </p>
            <p>You agree to promptly notify us of suspected unauthorized account access or security incidents.</p>
          </article>
          <article>
            <h2>13. Payment, Billing, and Refunds</h2>
            <p>
              Prescription required. Treatment is not guaranteed. Your information is submitted for licensed provider
              review in connection with the checkout process. The prices, consultation fees, medication charges, shipping
              charges, taxes, recurring charges, and any other material fees applicable to your purchase will be
              disclosed before you authorize payment.
            </p>
            <p>
              You authorize the Company and its payment processors to charge your selected payment method for the amounts
              disclosed to you. If a provider determines that prescription treatment is not clinically appropriate,
              amounts paid for medication that will not be dispensed will be handled according to the refund policy
              disclosed at checkout. Consultation, technology, administrative, laboratory, or other fees may be
              nonrefundable when clearly disclosed and permitted by law.
            </p>
            <p>
              Once an approved prescription has been transmitted to a pharmacy or entered into fulfillment, prescription
              products may not be cancelable, returnable, or refundable except as required by law or expressly stated in
              the applicable refund policy. The refund and cancellation terms displayed at checkout are incorporated into
              these Terms.
            </p>
          </article>
          <article>
            <h2>14. Shipping and Fulfillment</h2>
            <p>
              Shipping and delivery estimates are not guaranteed. Timing may vary based on provider review, pharmacy
              processing, product or ingredient availability, prescription clarification, address verification, carrier
              delays, weather, holidays, and applicable law.
            </p>
            <p>
              Medications will be shipped only to locations where the dispensing pharmacy is authorized to dispense and
              ship the medication. You are responsible for providing a complete and accurate delivery address and for
              following storage, handling, and use instructions provided by the pharmacy or provider.
            </p>
          </article>
          <article>
            <h2>15. Refills, Subscriptions, Pauses, and Cancellations</h2>
            <p>
              If a plan includes recurring billing, recurring clinical review, refills, or subscription services, the
              billing cadence, renewal terms, cancellation process, refill conditions, and applicable fees will be
              disclosed at checkout or in your account.
            </p>
            <p>
              Recurring payment does not guarantee a prescription or refill. A provider may decline or modify treatment,
              require updated information, require laboratory testing or a consultation, or recommend alternative or
              in-person care. You may cancel recurring non-clinical services through the method disclosed at checkout or
              in your account, subject to any lawful cutoff periods for prescriptions already submitted for fulfillment.
            </p>
          </article>
          <article>
            <h2>16. No Guarantees</h2>
            <p>
              Neither the Company nor any provider or pharmacy guarantees eligibility, treatment approval, issuance of a
              prescription, medication availability, a particular formulation or dose, shipping timing, or any specific
              clinical, cosmetic, or wellness outcome.
            </p>
            <p>
              The Services do not guarantee weight loss, hair growth, improved energy, improved performance, hormone
              changes, laboratory results, symptom improvement, or any other result. Individual results vary, and all
              treatments involve potential risks, limitations, and alternatives that should be discussed with a licensed
              healthcare provider.
            </p>
          </article>
          <article>
            <h2>17. Site Content Is Informational</h2>
            <p>
              Except for communications from a licensed healthcare provider concerning your individual care, content
              available through the Services is provided for general informational and educational purposes. It is not
              medical advice, diagnosis, treatment, or a substitute for professional medical judgment.
            </p>
            <p>
              Do not disregard or delay seeking professional medical advice because of information presented through the
              Services.
            </p>
          </article>
          <article>
            <h2>18. User Conduct and Prohibited Use</h2>
            <p>You agree not to misuse the Services. Prohibited conduct includes:</p>
            <ul>
              <li>submitting false, misleading, incomplete, or fraudulent information</li>
              <li>
                impersonating another person or misrepresenting your identity, age, location, medical history, or
                eligibility
              </li>
              <li>attempting to obtain medication for resale, diversion, misuse, sharing, or any unlawful purpose</li>
              <li>interfering with the security, availability, or integrity of the Services</li>
              <li>scraping, harvesting, copying, or using automated means to access the Services without permission</li>
              <li>reverse engineering or attempting to derive source code, architecture, or proprietary logic</li>
              <li>uploading viruses, malicious code, or harmful materials</li>
              <li>violating applicable law, third-party rights, or these Terms</li>
            </ul>
          </article>
          <article>
            <h2>19. Intellectual Property and Trademarks</h2>
            <p>
              The Services, including names, logos, graphics, product names, designs, software, workflows, and content,
              are owned by or licensed to the Company and may not be copied, modified, distributed, or used without
              written permission. All rights not expressly granted are reserved. Third-party names and trademarks remain
              the property of their respective owners.
            </p>
          </article>
          <article>
            <h2>20. Third-Party Services, Providers, and Partners</h2>
            <p>
              The Services may link to or integrate with healthcare providers, medical practices, pharmacies,
              laboratories, payment processors, identity-verification vendors, shipping carriers, analytics providers,
              and other third parties. These third parties are responsible for their own services and may provide
              separate terms and privacy notices.
            </p>
            <p>
              The Company seeks to work only with appropriately licensed and authorized partners. The inclusion of a
              third party does not constitute a guarantee regarding the availability of that third party or any specific
              service.
            </p>
          </article>
          <article>
            <h2>21. Privacy and Security</h2>
            <p>
              Your use of the Services is governed by our <Link href="/privacy">Privacy Policy</Link>. Clinical
              providers, medical practices, laboratories, and pharmacies may also provide separate privacy notices or
              Notices of Privacy Practices describing how they use and disclose protected health information.
            </p>
            <p>
              The Company and its applicable partners will process personal and health information in accordance with
              applicable privacy and security laws. Sensitive information transmitted through the Services will be
              protected using reasonable administrative, technical, and physical safeguards, including encryption in
              transit where required by applicable law.
            </p>
          </article>
          <article>
            <h2>22. Disclaimers</h2>
            <p>
              To the fullest extent permitted by law, the Company’s non-clinical Services are provided on an “as is” and
              “as available” basis without warranties of any kind, whether express or implied, including warranties of
              merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, or course of
              dealing.
            </p>
            <p>
              Nothing in this section disclaims or limits duties that cannot lawfully be disclaimed, including duties
              owed by licensed healthcare providers or pharmacies under applicable professional and consumer-protection
              laws.
            </p>
          </article>
          <article>
            <h2>23. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Company and its officers, directors, employees, contractors,
              affiliates, licensors, and non-clinical service providers will not be liable for indirect, incidental,
              special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, data, goodwill,
              or business opportunity, arising from use of or inability to use the Company’s non-clinical Services.
            </p>
            <p>
              This limitation does not apply where prohibited by law and does not limit liability for professional
              negligence, willful misconduct, fraud, or other liability that cannot lawfully be limited.
            </p>
          </article>
          <article>
            <h2>24. Indemnification</h2>
            <p>
              To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless the Company and
              its affiliates, officers, directors, employees, contractors, licensors, and non-clinical service providers
              from claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising from
              your unlawful use of the Services, material violation of these Terms, violation of third-party rights, or
              submission of fraudulent or intentionally misleading information.
            </p>
          </article>
          <article>
            <h2>25. Changes to the Services or Terms</h2>
            <p>
              We may modify, suspend, or discontinue portions of the Services when reasonably necessary. We may update
              these Terms from time to time. The updated Terms will be posted with a revised “Last updated” date. Where
              required by law, we will provide additional notice or obtain consent before material changes become
              effective.
            </p>
          </article>
          <article>
            <h2>26. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Arizona, without regard to conflict-of-law principles,
              except where applicable law requires otherwise. Any arbitration agreement, venue provision, class-action
              waiver, or other dispute-resolution requirement should be inserted here only after review by qualified
              legal counsel and must comply with applicable law.
            </p>
          </article>
          <article>
            <h2>27. States Served</h2>
            <p>
              Subject to the qualifications and limitations in Section 5, access to at least some Services is offered in
              each of the following 50 states:
            </p>
            <ul className="legal-states">
              {states.map((state) => (
                <li key={state}>{state}</li>
              ))}
            </ul>
            <p>
              You must be physically located in the applicable state at the time clinical services are provided. The
              treating provider must be authorized to practice in that state, and the dispensing pharmacy must be
              authorized to dispense and ship the prescribed medication to that state. Not every treatment, medication,
              provider, pharmacy, or fulfillment option is available in every listed state.
            </p>
          </article>
          <article>
            <h2>28. Important Notices</h2>
            <ul>
              <li>
                The Company is not a pharmacy, drug manufacturer, outsourcing facility, or compounding facility unless
                expressly identified otherwise.
              </li>
              <li>
                Prescription treatment is provided only when clinically appropriate after an evaluation by a licensed
                healthcare provider.
              </li>
              <li>
                Clinical services are provided through affiliated or contracted medical practices and licensed healthcare
                providers. Provider availability varies by state, treatment category, and patient eligibility.
              </li>
              <li>
                Prescription medication is dispensed by an appropriately licensed pharmacy pursuant to a valid
                prescription.
              </li>
              <li>
                Compounded medications, when prescribed, are not FDA-approved and are not reviewed by the FDA for safety,
                effectiveness, or quality before marketing.
              </li>
              <li>
                Final treatment, formulation, dose, pharmacy, and pricing may vary based on provider review,
                patient-specific needs, pharmacy availability, and applicable law.
              </li>
              <li>
                Product imagery is illustrative and does not imply that the Company manufactures, compounds, dispenses,
                or physically fulfills medication. Actual packaging and pharmacy labeling may differ.
              </li>
              <li>In an emergency, call 911 or seek immediate emergency care.</li>
            </ul>
          </article>
          <article>
            <h2>29. Contact Us</h2>
            <p>Questions about these Terms may be directed to:</p>
            <p>
              Nexa RX LLC
              <br />
              22238 N Calle Royale
              <br />
              Scottsdale, AZ 85255
              <br />
              <a href="mailto:support@nexarx.com">support@nexarx.com</a>
              <br />
              <a href="tel:+17752629279">775-262-9279</a>
            </p>
          </article>
          <p className="legal-page__cta">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/privacy" className="btn btn--outline">
              Privacy Policy
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  )
}
