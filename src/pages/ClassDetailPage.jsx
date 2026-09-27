import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { CLASSES } from '../data.js'
import { CalendarIcon, LaptopNoteIcon, CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { FaqAccordion } from '../components/FaqAccordion.jsx'
import { useSeo } from '../useSeo.js'

const ICONS = {
  weekend: <CalendarIcon days="weekend" />,
  weekday: <CalendarIcon days="weekday" />,
  online: <LaptopNoteIcon />,
}

export default function ClassDetailPage() {
  const { slug } = useParams()
  const { onBookDemo } = useOutletContext()
  const batch = CLASSES.find((c) => c.slug === slug)

  useSeo({
    title: batch ? `${batch.name} Schedule` : 'Class Schedule',
    description: batch ? batch.tagline : undefined,
  })

  if (!batch) return <Navigate to="/classes" replace />

  const otherClasses = CLASSES.filter((c) => c.slug !== slug)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes', to: '/classes' }, { label: batch.name }]} />

      <PageHero
        image={batch.heroImage}
        eyebrow={batch.badge || 'Class Schedule'}
        title={batch.name}
        subtitle={batch.tagline}
      >
        <button className="ssma-btn ssma-btn-indigo" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        <Link className="ssma-btn ssma-btn-outline" to="/classes">Compare All Schedules</Link>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <div style={{ marginBottom: 8 }}>{ICONS[batch.slug]}</div>
          <h2>Schedule &amp; Pricing</h2>
          <p className="ssma-schedule-time" style={{ marginBottom: 4 }}>{batch.schedule}</p>
          <p className="ssma-schedule-levels">{batch.levels}</p>
        </div>
        <div className="ssma-price-row" style={{ justifyContent: 'center', maxWidth: 260, margin: '0 auto' }}>
          <span className="ssma-price-currency">₹</span>
          <span className="ssma-price-amount">{batch.price}</span>
          <span className="ssma-price-period">/ month</span>
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Who Is This For?</h2>
        </div>
        <p style={{ maxWidth: 720, margin: '0 auto', fontSize: 15, lineHeight: 1.7, color: '#3f3d4d', textAlign: 'center' }}>
          {batch.whoFor}
        </p>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>What to Expect</h2>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 640, margin: '0 auto 40px' }}>
          {batch.features.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
        </ul>
        <div className="ssma-section-head">
          <h3 style={{ color: '#1E1B4B', fontSize: 20 }}>A Typical Week</h3>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 720, margin: '0 auto' }}>
          {batch.sampleWeek.map((s) => <li key={s}><CheckIcon color="#312E81" /> {s}</li>)}
        </ul>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>{batch.name} FAQs</h2>
        </div>
        <FaqAccordion items={batch.faqs} />
      </section>

      <section className="ssi-cta-banner">
        <p>Experience Seven Swaras Music Academy</p>
        <h3>Book a Free Demo — {batch.name}</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Explore Other Schedules</h2>
        </div>
        <div className="ssi-other-row">
          {otherClasses.map((c) => (
            <Link key={c.slug} to={`/classes/${c.slug}`} className="ssma-chip">{c.name}</Link>
          ))}
        </div>
      </section>
    </>
  )
}
