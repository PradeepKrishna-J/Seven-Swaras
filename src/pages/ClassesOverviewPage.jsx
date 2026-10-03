import { useOutletContext } from 'react-router-dom'
import { CLASSES } from '../data.js'
import { CalendarIcon, LaptopNoteIcon, CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { useSeo } from '../useSeo.js'
import { useHashScroll } from '../useSectionNav.js'

const ICONS = {
  weekend: <CalendarIcon days="weekend" />,
  weekday: <CalendarIcon days="weekday" />,
  online: <LaptopNoteIcon />,
}

export default function ClassesOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Classes — Schedules',
    description: 'Compare Seven Swaras Music Academy’s Weekend Warriors, Daily Practice Program and Live Online Classes, with schedules, pricing and what a typical week looks like.',
  })

  useHashScroll()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Classes' }]} />

      <section className="ssma-classes-head">
        <p className="ssma-classes-eyebrow">Classes</p>
        <h1>Find Your Perfect Schedule</h1>
        <p>Three ways to learn, one structured curriculum. Pick the rhythm that fits your life.</p>
        <nav className="ssma-classes-jump" aria-label="Class types">
          {CLASSES.map((c) => (
            <a key={c.slug} href={`#${c.slug}`}>{c.name}</a>
          ))}
        </nav>
      </section>

      <div className="ssma-classes">
        {CLASSES.map((c, i) => (
          <section key={c.slug} id={c.slug} className="ssma-class-seg">
            <header className="ssma-class-seg-head">
              <span className="ssma-class-seg-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>
                  {c.name}
                  {c.badge && <span className="ssma-class-seg-badge">{c.badge}</span>}
                </h2>
                <p>{c.tagline}</p>
              </div>
            </header>

            <div className="ssma-class-row">
              <article className="ssma-class-card">
                <div className="ssma-class-card-top">
                  <span className="ssma-class-icon">{ICONS[c.slug]}</span>
                  <div>
                    <p className="ssma-class-label">Schedule</p>
                    <p className="ssma-class-sched">{c.schedule}</p>
                    <p className="ssma-class-levels">{c.levels}</p>
                  </div>
                </div>
                <ul className="ssma-class-list">
                  {c.features.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
                </ul>
                <div className="ssma-class-foot">
                  <div className="ssma-class-price">
                    <span className="ssma-class-price-amt">₹{c.price}</span>
                    <span className="ssma-class-price-per">/ month</span>
                  </div>
                  <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
                </div>
              </article>

              <article className="ssma-class-card">
                <p className="ssma-class-label">Who it’s for</p>
                <p className="ssma-class-who">{c.desc}</p>
                <p className="ssma-class-label">A typical week</p>
                <ol className="ssma-class-week">
                  {c.sampleWeek.map((s) => {
                    const [title, ...rest] = s.split(':')
                    return (
                      <li key={s}>
                        {rest.length ? <><strong>{title}:</strong>{rest.join(':')}</> : s}
                      </li>
                    )
                  })}
                </ol>
              </article>
            </div>
          </section>
        ))}
      </div>

      <section className="ssi-cta-banner">
        <p>Not sure which fits you?</p>
        <h3>Try a free demo class. All three follow the same curriculum, so you can switch later.</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a Free Demo</button>
        </div>
      </section>
    </>
  )
}
