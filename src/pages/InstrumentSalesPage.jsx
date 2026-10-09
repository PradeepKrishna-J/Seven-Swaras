import { useOutletContext } from 'react-router-dom'
import { SALE_ITEMS } from '../data.js'
import { CheckIcon, WhatsAppIcon, InstrumentIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'

const WA_NUMBER = '919361623134'

function waLink(itemName) {
  const what = itemName ? `a ${itemName}` : 'an instrument'
  const text = encodeURIComponent(`Hi! I’d like to enquire about buying or renting ${what} through Seven Swaras Music Academy.`)
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
          <p>Beginner and intermediate instruments, hand-picked by our teachers. Message us for current models and prices.</p>
        </div>
        <div className="ssma-sale-grid">
          {SALE_ITEMS.map((item) => (
            <article key={item.key} className="ssma-sale-card">
              <div className="ssma-sale-top">
                <span className="ssma-sale-icon"><InstrumentIcon instrumentKey={item.key} size={30} /></span>
                <span className="ssma-sale-modes">
                  {item.modes.map((m) => <span key={m} className="ssma-sale-mode">{m}</span>)}
                </span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <ul className="ssma-sale-options">
                {item.options.map((o) => <li key={o}><CheckIcon size={14} /> {o}</li>)}
              </ul>
              <a className="ssma-btn ssma-btn-indigo ssma-sale-cta" href={waLink(item.name)} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={16} /> Enquire
              </a>
            </article>
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
