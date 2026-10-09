import { useEffect } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { InstrumentIcon, CheckIcon, WhatsAppIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'

const WA_NUMBER = '919361623134'

function waLink(name) {
  const text = encodeURIComponent(`Hi! I'm interested in ${name} classes at Seven Swaras Music Academy. Could you share more details?`)
  return `https://wa.me/${WA_NUMBER}?text=${text}`
}

function InstrumentPopup({ instrument, onClose, onBookDemo }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const { key, name, desc, about, highlights, genres } = instrument

  return (
    <div className="ssma-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="ssma-modal-card ssma-inst-popup" role="dialog" aria-modal="true" aria-labelledby="ssma-inst-popup-title">
        <div className="ssma-modal-accent" />
        <button className="ssma-modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="ssma-modal-content">
          <div className="ssma-inst-popup-head">
            <span className="ssma-inst-popup-icon"><InstrumentIcon instrumentKey={key} size={64} /></span>
            <div>
              <h3 id="ssma-inst-popup-title">{name}</h3>
              <p className="ssma-inst-popup-desc">{desc}</p>
            </div>
          </div>

          <p className="ssma-inst-popup-about">{about}</p>

          <ul className="ssma-inst-popup-list">
            {highlights.map((h) => <li key={h}><CheckIcon /> {h}</li>)}
          </ul>

          <div className="ssma-inst-popup-genres">
            {genres.map((g) => <span key={g} className="ssma-rack-tag">{g}</span>)}
          </div>

          <div className="ssi-cta-row">
            <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo(name)}>Book a FREE {name} Demo</button>
            <a className="ssma-btn ssma-btn-whatsapp" href={waLink(name)} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InstrumentsOverviewPage() {
  const { onBookDemo } = useOutletContext()
  const { hash } = useLocation()
  const navigate = useNavigate()

  // The open popup lives in the URL (/instruments#guitar) so nav links and old per-instrument URLs can deep-link to it
  const active = INSTRUMENTS.find((i) => `#${i.key}` === hash)
  const openInstrument = (key) => navigate(`/instruments#${key}`, { replace: !!active })
  const closePopup = () => navigate('/instruments', { replace: true })

  useSeo({
    title: active ? `${active.name} Classes` : 'Instruments We Teach',
    description: active
      ? `Live 1-to-1 online and offline ${active.name} classes in Chennai — ${active.desc.toLowerCase()}.`
      : 'Explore Keyboard, Guitar, Drums, Western Vocals, Carnatic Vocals and Carnatic Mandolin classes at Seven Swaras Music Academy, taught online and offline in Chennai.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Instruments' }]} />

      <PageHero
        eyebrow="Instruments We Teach"
        title="Find Your Instrument"
        subtitle="Six core instruments across Carnatic and Western styles, each with its own structured curriculum. Tap any instrument to learn more."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-inst-grid">
          {INSTRUMENTS.map((inst) => (
            <button
              key={inst.key}
              id={inst.key}
              type="button"
              className="ssma-inst-widget"
              onClick={() => openInstrument(inst.key)}
              aria-haspopup="dialog"
            >
              <span className="ssma-inst-widget-icon"><InstrumentIcon instrumentKey={inst.key} size={56} /></span>
              <span className="ssma-inst-widget-name">{inst.name}</span>
              <span className="ssma-inst-widget-desc">{inst.desc}</span>
              <span className="ssma-inst-widget-tags">
                {inst.genres.slice(0, 3).map((g) => <span key={g} className="ssma-rack-tag">{g}</span>)}
              </span>
              <span className="ssma-inst-widget-more">Learn more →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Choosing the Right Instrument</h2>
          <p>A quick guide if you're not sure where to start.</p>
        </div>
        <div className="ssi-advantage-list" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="ssi-advantage-item">
            <div>
              <h4>Just starting out, especially with a young child?</h4>
              <p>Keyboard is the gentlest entry point — visual layout, instant feedback, and a curriculum that transfers directly into other instruments later.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Want to perform solo, at gatherings or on stage?</h4>
              <p>Guitar and Western Vocals are the most versatile for solo performance, covering pop, rock and contemporary repertoire.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Drawn to Indian classical training specifically?</h4>
              <p>Carnatic Vocals and Carnatic Mandolin both build a full classical foundation, from varnams to kritis.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Looking for something physical and rhythm-first?</h4>
              <p>Drums builds coordination and timing fast, and pairs well as a second instrument alongside any of the above.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ssi-cta-banner">
        <p>Not Sure Which Instrument Is Right For You?</p>
        <h3>Book a Free Demo and Ask Us Directly</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>

      {active && (
        <InstrumentPopup
          instrument={active}
          onClose={closePopup}
          onBookDemo={(name) => { closePopup(); onBookDemo(name) }}
        />
      )}
    </>
  )
}
