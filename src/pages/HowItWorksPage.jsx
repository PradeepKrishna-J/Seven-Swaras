import { Link, useOutletContext } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

const STEPS = [
  {
    title: 'Book Your Free Demo',
    desc: 'Fill out the demo form on our website, message us on WhatsApp, or call our academy directly. Tell us the instrument you’re interested in and your preferred schedule — weekend, weekday or online.',
  },
  {
    title: 'Meet Your Teacher',
    desc: 'We match you with a faculty member for your instrument and schedule a free, no-commitment 30–45 minute demo class. You’ll get a real feel for our teaching style, not just a sales pitch.',
  },
  {
    title: 'Get a Personalised Learning Plan',
    desc: 'After the demo, your teacher discusses your goals — casual hobby, exam preparation, or performance — and outlines a curriculum path suited to your level and pace.',
  },
  {
    title: 'Choose Your Batch and Join',
    desc: 'Pick Weekend Warriors, the Daily Practice Program, or Live Online Classes. Confirm your slot, complete payment, and your first structured class is scheduled within the week.',
  },
  {
    title: 'Track Your Progress',
    desc: 'Regular monthly recitals, recorded session access (for online students), and optional Trinity or ABRSM grade exams give you clear, visible milestones as you progress.',
  },
]

export default function HowItWorksPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'How It Works',
    description: 'From your first free demo class to your first recital — here is exactly how enrolment works at Seven Swaras Music Academy.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: 'How It Works' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Resources"
        title="How It Works"
        subtitle="From your first enquiry to your first recital, here is exactly what to expect."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
      </PageHero>

      <section className="ssma-section">
        <ol className="ssma-simple-steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="ssi-step-num">{i + 1}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Have More Questions?</h2>
          <p>
            Read our full <Link to="/resources/faqs" className="ssma-amber-link-inline">FAQ page</Link>, or get in touch
            directly on our <Link to="/resources/contact" className="ssma-amber-link-inline">contact page</Link>.
          </p>
        </div>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>
    </>
  )
}
