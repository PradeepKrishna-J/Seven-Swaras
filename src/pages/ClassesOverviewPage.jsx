import { Link, useOutletContext } from 'react-router-dom'
import { CLASSES, EXAM_TRACKS } from '../data.js'
import { CalendarIcon, LaptopNoteIcon, CheckIcon, CertificateIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

const ICONS = {
  weekend: <CalendarIcon days="weekend" />,
  weekday: <CalendarIcon days="weekday" />,
  online: <LaptopNoteIcon />,
}

export default function ClassesOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Classes — Schedules & Grade Exams',
    description: 'Compare Seven Swaras Music Academy’s Weekend, Weekday and Online schedules, plus Trinity, ABRSM and Rockschool grade exam tracks.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Classes"
        title="Find Your Perfect Schedule"
        subtitle="Flexible batches designed around your life, plus graded exam tracks to benchmark your progress."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Schedules</h2>
          <p>Choose when you learn — the curriculum is the same across all three.</p>
        </div>

        <div className="ssma-schedule-grid">
          {CLASSES.map((c) => (
            <div className={`ssma-schedule-card ${c.slug === 'weekend' ? 'ssma-card-indigo-top' : c.slug === 'weekday' ? 'ssma-card-amber-top' : 'ssma-card-gradient-top'}`} key={c.slug}>
              {c.badge && <span className={`ssma-badge ${c.slug === 'online' ? 'ssma-badge-indigo' : 'ssma-badge-amber'}`}>{c.badge}</span>}
              {ICONS[c.slug]}
              <h3>{c.name}</h3>
              <p className="ssma-schedule-time">{c.schedule}</p>
              <p className="ssma-schedule-levels">{c.levels}</p>
              <p className="ssma-schedule-desc">{c.desc}</p>
              <ul className="ssma-feature-list">
                {c.features.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
              </ul>
              <div className="ssma-price-row ssma-price-blurred">
                <span className="ssma-price-currency">₹</span>
                <span className="ssma-price-amount">{c.price}</span>
                <span className="ssma-price-period">/ month</span>
              </div>
              <div className="ssma-card-ctas">
                <Link className="ssma-btn ssma-btn-indigo" to={`/classes/${c.slug}`}>View Full Details</Link>
                <button className="ssma-btn ssma-btn-outline" onClick={() => onBookDemo()}>Book a Demo</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Grade Exams &amp; Curriculums</h2>
          <p>Benchmark your progress with an internationally recognised exam board.</p>
        </div>

        <div className="ssma-schedule-grid">
          {EXAM_TRACKS.map((t) => (
            <div className="ssma-schedule-card ssma-card-indigo-top" key={t.slug}>
              <CertificateIcon size={32} color="#312E81" />
              <h3>{t.name}</h3>
              <p className="ssma-schedule-desc">{t.tagline}</p>
              <p className="ssma-schedule-levels">{t.levels}</p>
              <div className="ssma-card-ctas">
                <Link className="ssma-btn ssma-btn-indigo" to={`/classes/${t.slug}`}>View Full Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Not Sure Which Fits You?</h2>
          <p>
            Weekend Warriors suits anyone with a packed weekday routine who wants two focused sessions.
            The Daily Practice Program suits students preparing for an exam or performance on a deadline.
            Live Online Classes suit anyone outside Chennai, or anyone who simply prefers learning from home —
            all three follow the same graded curriculum, so switching between them later is always possible.
            Whichever schedule you choose, you can layer on a Trinity, ABRSM or Rockschool exam track whenever you're ready.
          </p>
        </div>
      </section>
    </>
  )
}
