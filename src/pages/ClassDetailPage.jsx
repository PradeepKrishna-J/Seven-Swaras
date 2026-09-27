import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { CLASSES, EXAM_TRACKS } from '../data.js'
import { CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { FaqAccordion } from '../components/FaqAccordion.jsx'
import { useSeo } from '../useSeo.js'

export default function ClassDetailPage() {
  const { slug } = useParams()
  const { onBookDemo } = useOutletContext()
  const batch = CLASSES.find((c) => c.slug === slug)
  const examTrack = !batch ? EXAM_TRACKS.find((t) => t.slug === slug) : null
  const item = batch || examTrack
  const isExam = Boolean(examTrack)

  useSeo({
    title: item ? (isExam ? `${item.name} Exams` : `${item.name} Schedule`) : 'Classes',
    description: item ? item.tagline : undefined,
  })

  if (!item) return <Navigate to="/classes" replace />

  const otherClasses = CLASSES.filter((c) => c.slug !== slug)
  const otherExams = EXAM_TRACKS.filter((t) => t.slug !== slug)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes', to: '/classes' }, { label: item.name }]} />

      <PageHero
        image={item.heroImage}
        eyebrow={isExam ? 'Grade Exams & Curriculums' : (batch.badge || 'Class Schedule')}
        title={item.name}
        subtitle={item.tagline}
      >
        <button className="ssma-btn ssma-btn-indigo" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        <Link className="ssma-btn ssma-btn-outline" to="/classes">{isExam ? 'Compare All Options' : 'Compare All Schedules'}</Link>
      </PageHero>

      {!isExam && (
        <section className="ssma-section">
          <div className="ssma-section-head">
            <h2>Schedule &amp; Pricing</h2>
            <p className="ssma-schedule-time" style={{ marginBottom: 4 }}>{batch.schedule}</p>
            <p className="ssma-schedule-levels">{batch.levels}</p>
          </div>
          <div className="ssma-price-row ssma-price-blurred" style={{ justifyContent: 'center', maxWidth: 260, margin: '0 auto' }}>
            <span className="ssma-price-currency">₹</span>
            <span className="ssma-price-amount">{batch.price}</span>
            <span className="ssma-price-period">/ month</span>
          </div>
        </section>
      )}

      {isExam && (
        <section className="ssma-section">
          <div className="ssma-section-head">
            <h2>Grades Offered</h2>
            <p>{examTrack.levels}</p>
          </div>
        </section>
      )}

      <section className={`ssma-section ${isExam ? '' : 'ssma-section-tint'}`}>
        <div className="ssma-section-head">
          <h2>Who Is This For?</h2>
        </div>
        <p style={{ maxWidth: 720, margin: '0 auto', fontSize: 15, lineHeight: 1.7, color: '#3f3d4d', textAlign: 'center' }}>
          {item.whoFor}
        </p>
      </section>

      <section className={`ssma-section ${isExam ? 'ssma-section-tint' : ''}`}>
        <div className="ssma-section-head">
          <h2>What to Expect</h2>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 640, margin: '0 auto 40px' }}>
          {item.features.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
        </ul>
        {!isExam && (
          <>
            <div className="ssma-section-head">
              <h3 style={{ color: '#1E1B4B', fontSize: 20 }}>A Typical Week</h3>
            </div>
            <ul className="ssma-feature-list" style={{ maxWidth: 720, margin: '0 auto' }}>
              {batch.sampleWeek.map((s) => <li key={s}><CheckIcon color="#312E81" /> {s}</li>)}
            </ul>
          </>
        )}
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>{item.name} FAQs</h2>
        </div>
        <FaqAccordion items={item.faqs} />
      </section>

      <section className="ssi-cta-banner">
        <p>Experience Seven Swaras Music Academy</p>
        <h3>Book a Free Demo — {item.name}</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
        </div>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>{isExam ? 'Explore Other Grade Tracks' : 'Explore Other Schedules'}</h2>
        </div>
        <div className="ssi-other-row">
          {(isExam ? otherExams : otherClasses).map((c) => (
            <Link key={c.slug} to={`/classes/${c.slug}`} className="ssma-chip">{c.name}</Link>
          ))}
        </div>
      </section>
    </>
  )
}
