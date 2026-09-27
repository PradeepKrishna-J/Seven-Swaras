import { Link, useOutletContext } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { InstrumentIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

export default function AboutPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'About Us',
    description: 'Seven Swaras Music Academy has offered Carnatic, Western and Fusion music classes in Chennai since 2014 — read our story.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="About Us"
        title="Our Story"
        subtitle="Nurturing musical talent in Chennai since 2014."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
      </PageHero>

      <section className="ssma-section">
        <div style={{ maxWidth: 760, margin: '0 auto', fontSize: 15.5, lineHeight: 1.8, color: '#3f3d4d' }}>
          <p style={{ marginBottom: 20 }}>
            Seven Swaras Music Academy started in 2014 with a single classroom in Dayalu Nagar, Chennai, and a simple
            belief: that a structured, patient approach matters more than raw natural talent when it comes to
            learning music. More than a decade later, that belief still shapes every class, whether the student is
            five years old or fifty-five.
          </p>
          <p style={{ marginBottom: 20 }}>
            Our name comes from the seven swaras of Indian classical music — Sa, Re, Ga, Ma, Pa, Dha, Ni — the same
            seven notes that, in different combinations, become every raga, every melody, every song a student will
            ever learn. We build our entire curriculum on that same idea: strong fundamentals, repeated and layered
            carefully, become real musicianship over time.
          </p>
          <p>
            Today we offer Keyboard, Guitar, Drums, Western Vocals, Carnatic Vocals and Carnatic Mandolin classes, to
            more than 500 students in Chennai and across 10+ countries online — without ever losing the classroom
            feel we started with in 2014.
          </p>
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>What We Offer</h2>
          <p>Six instruments, one structured curriculum.</p>
        </div>
        <div className="ssma-why-grid ssma-why-grid-3">
          {INSTRUMENTS.map((inst) => (
            <Link key={inst.key} to={`/instruments/${inst.key}`} className="ssma-why-card">
              <span className="ssma-why-icon"><InstrumentIcon instrumentKey={inst.key} size={26} color="#fff" /></span>
              <h3>{inst.name}</h3>
              <p>{inst.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="ssi-cta-banner">
        <p>Come Meet Us</p>
        <h3>Book a Free Demo Class Today</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>
    </>
  )
}
