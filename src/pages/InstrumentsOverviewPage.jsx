import { Link, useOutletContext } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { ChevronIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES, instrumentHeroImage } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

export default function InstrumentsOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Instruments We Teach',
    description: 'Explore Keyboard, Guitar, Piano, Violin, Drums, Vocals, Flute and Music Theory classes at Seven Swaras Music Academy — Carnatic, Western and Fusion styles, taught online and offline in Chennai.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Instruments' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Instruments We Teach"
        title="Find Your Instrument"
        subtitle="Seven core instruments across Carnatic, Western and Fusion styles, each with its own structured curriculum and certified faculty."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-teacher-grid">
          {INSTRUMENTS.map((inst) => (
            <Link key={inst.key} to={`/instruments/${inst.key}`} className="ssma-teacher-row">
              <span className="ssma-teacher-avatar">
                <img src={instrumentHeroImage(inst)} alt={`${inst.name} teacher`} loading="lazy" />
              </span>
              <span className="ssma-teacher-info">
                <strong>{inst.name} Teachers</strong>
                <span>{inst.teacher} · {inst.experience}</span>
              </span>
              <span className="ssma-teacher-arrow"><ChevronIcon /></span>
            </Link>
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
              <p>Keyboard and Music Theory are the gentlest entry points — visual layouts, instant feedback, and a curriculum that transfers directly into piano, guitar or vocal training later.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Want to perform solo, at gatherings or on stage?</h4>
              <p>Guitar and Vocal are the most versatile for solo performance, covering both Carnatic and contemporary Western repertoire.</p>
            </div>
          </div>
          <div className="ssi-advantage-item">
            <div>
              <h4>Drawn to Indian classical training specifically?</h4>
              <p>Violin and Vocal both offer a full Carnatic track alongside Western styles, taught by faculty with Carnatic grading credentials.</p>
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
        <h3>Book a Free Demo and Ask Our Faculty Directly</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>
    </>
  )
}
