import { Link, useOutletContext } from 'react-router-dom'
import { WHY_STATS, TEACHERS } from '../data.js'
import { GraduationCapIcon, UsersIcon, GlobeIcon, CertificateIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

const WHY_ICONS = { graduation: GraduationCapIcon, users: UsersIcon, globe: GlobeIcon, certificate: CertificateIcon }

export default function AboutPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'About Us',
    description: 'Seven Swaras Music Academy has taught Carnatic, Western and Fusion music in Chennai since 2014 — meet our story, our teaching philosophy and our faculty.',
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
            belief: that structured, patient teaching matters more than raw natural talent when it comes to learning
            music. More than a decade later, that belief still shapes every class we teach, whether the student is
            five years old or fifty-five.
          </p>
          <p style={{ marginBottom: 20 }}>
            Our name comes from the seven swaras of Indian classical music — Sa, Re, Ga, Ma, Pa, Dha, Ni — the same
            seven notes that, in different combinations, become every raga, every melody, every song a student will
            ever learn. We build our entire curriculum on that same idea: strong fundamentals, repeated and layered
            carefully, become real musicianship over time.
          </p>
          <p>
            Today we teach Keyboard, Guitar, Piano, Violin, Drums, Vocals, Flute and Music Theory across Carnatic,
            Western and Fusion styles, to more than 500 students in Chennai and across 10+ countries online — without
            ever losing the classroom feel we started with in 2014.
          </p>
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Why Seven Swaras?</h2>
          <p>We don't just teach notes. We build musicians.</p>
        </div>
        <div className="ssma-why-grid">
          {WHY_STATS.map((s) => {
            const Icon = WHY_ICONS[s.icon]
            return (
              <div className="ssma-why-card" key={s.title}>
                <span className="ssma-why-icon"><Icon size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Meet Our Faculty</h2>
          <p>Certified, experienced teachers who make every class personal.</p>
        </div>
        <div className="ssma-experts-grid">
          {TEACHERS.map((t) => (
            <div className="ssma-expert-card" key={t.name}>
              <span className="ssma-expert-avatar">
                <img src={t.photo} alt={t.name} loading="lazy" />
              </span>
              <strong>{t.name}</strong>
              <p>{t.role}</p>
              <span className="ssma-expert-meta">{t.meta}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24 }}>
          <Link to="/instruments" className="ssma-amber-link-inline">See every instrument our faculty teaches →</Link>
        </p>
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
