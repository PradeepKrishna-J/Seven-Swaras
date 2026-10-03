import { useOutletContext } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { InstrumentRack } from '../components/InstrumentRack.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

export default function InstrumentsOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Instruments We Teach',
    description: 'Explore Keyboard, Guitar, Drums, Western Vocals, Carnatic Vocals and Carnatic Mandolin classes at Seven Swaras Music Academy, taught online and offline in Chennai.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Instruments' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Instruments We Teach"
        title="Find Your Instrument"
        subtitle="Six core instruments across Carnatic and Western styles, each with its own structured curriculum."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
      </PageHero>

      <section className="ssma-section">
        <InstrumentRack instruments={INSTRUMENTS} />
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
    </>
  )
}
