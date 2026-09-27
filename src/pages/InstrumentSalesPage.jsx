import { useOutletContext } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { InstrumentIcon, CheckIcon, WhatsAppIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

const WA_NUMBER = '919361623134'

function waLink() {
  const text = encodeURIComponent('Hi! I’d like to enquire about buying or renting an instrument through Seven Swaras Music Academy.')
  return `https://wa.me/${WA_NUMBER}?text=${text}`
}

export default function InstrumentSalesPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Instrument Sales',
    description: 'Buy or rent a Keyboard, Guitar, Drum kit, or Carnatic Mandolin through Seven Swaras Music Academy, with guidance from our team on the right instrument for your level.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Instrument Sales' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Instrument Sales"
        title="Get the Right Instrument to Start"
        subtitle="Buy or rent a beginner-to-intermediate instrument through Seven Swaras, with guidance on the right pick for your level and budget."
      >
        <a className="ssma-btn ssma-btn-amber" href={waLink()} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={16} /> Enquire on WhatsApp
        </a>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Available for Purchase or Rental</h2>
          <p>Every instrument we teach is also available directly through the academy.</p>
        </div>
        <div className="ssma-why-grid ssma-why-grid-3">
          {INSTRUMENTS.map((inst) => (
            <div className="ssma-why-card" key={inst.key}>
              <span className="ssma-why-icon"><InstrumentIcon instrumentKey={inst.key} size={26} color="#fff" /></span>
              <h3>{inst.name}</h3>
              <p>{inst.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>How It Works</h2>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 640, margin: '0 auto' }}>
          <li><CheckIcon /> Tell us the instrument and your budget on WhatsApp or during your demo class</li>
          <li><CheckIcon /> We recommend a beginner or intermediate model based on your level</li>
          <li><CheckIcon /> Choose to buy outright or rent monthly, with the option to upgrade later</li>
          <li><CheckIcon /> Pickup available at our Chennai academy, or delivery can be arranged</li>
        </ul>
      </section>

      <section className="ssi-cta-banner">
        <p>Ready to Get Your Instrument?</p>
        <h3>Enquire About Buying or Renting Today</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <a className="ssma-btn ssma-btn-whatsapp" href={waLink()} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={16} /> WhatsApp Us
          </a>
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
        </div>
      </section>
    </>
  )
}
