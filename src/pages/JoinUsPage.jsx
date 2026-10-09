import { Link, useOutletContext } from 'react-router-dom'
import { CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'

export default function JoinUsPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Join Us',
    description: 'What to expect on your first day, what to bring, and how to book your free demo class at Seven Swaras Music Academy.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: 'Join Us' }]} />

      <PageHero
        eyebrow="Resources"
        title="Join Us"
        subtitle="Starting is simple — here is exactly what to expect from your first free demo class onward."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssi-advantage-list" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="ssi-advantage-item">
            <div>
              <h4>On the day of your demo</h4>
              <p>Arrive (or log in, for online) five minutes early. Wear comfortable clothing you can move in — this matters especially for drums. No prior preparation is required; we lead the entire session.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>What to bring — in person</h4>
              <p>A notebook for notes is helpful but not required. If you already own your instrument, bring it along; if not, our practice rooms are equipped with keyboards, guitars and a drum kit for the demo and early lessons.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>What to bring — online</h4>
              <p>A laptop or tablet (rather than a phone) gives us a much clearer view of your hands and posture. A quiet room and a stable internet connection (2 Mbps or higher) make the biggest difference to class quality.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Fees and payment</h4>
              <p>Fees are billed monthly and vary by batch type — see our <Link to="/classes" className="ssma-amber-link-inline">class schedules</Link> for current pricing. Payment can be made via UPI, bank transfer or card once you confirm your batch after the demo.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>No pressure, ever</h4>
              <p>The demo class is completely free with no obligation to continue. We would rather you take the time to decide than feel rushed into a batch that isn’t right for you.</p>
            </div>
          </div>
        </div>

        <ul className="ssma-feature-list" style={{ maxWidth: 480, margin: '32px auto 0' }}>
          <li><CheckIcon /> No payment needed for the demo</li>
          <li><CheckIcon /> 45-minute session, any instrument</li>
          <li><CheckIcon /> Confirmation via WhatsApp within 2 hours</li>
        </ul>
      </section>

      <section className="ssi-cta-banner">
        <p>Ready When You Are</p>
        <h3>Book Your Free Demo Class Today</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>
    </>
  )
}
