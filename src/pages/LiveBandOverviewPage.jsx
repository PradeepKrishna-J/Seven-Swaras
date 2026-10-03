import { useOutletContext } from 'react-router-dom'
import { LIVE_BAND_EVENTS, VIDEOS } from '../data.js'
import { CheckIcon, EventIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { useSeo } from '../useSeo.js'
import { useHashScroll } from '../useSectionNav.js'

export default function LiveBandOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Live Band',
    description: 'Book Seven Swaras Music Academy’s performers and senior students for live music at corporate events, birthday parties, weddings, and concerts in Chennai.',
  })

  useHashScroll()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Live Band' }]} />

      <section className="ssma-classes-head">
        <p className="ssma-classes-eyebrow">Live Band</p>
        <h1>Music for Your Events</h1>
        <p>Our performers and senior students play live at corporate events, birthdays, weddings and concerts across Chennai.</p>
        <nav className="ssma-classes-jump" aria-label="Occasions">
          {LIVE_BAND_EVENTS.map((e) => (
            <a key={e.slug} href={`#${e.slug}`}>{e.name}</a>
          ))}
        </nav>
      </section>

      <div className="ssma-classes">
        {LIVE_BAND_EVENTS.map((e, i) => (
          <section key={e.slug} id={e.slug} className="ssma-class-seg">
            <header className="ssma-class-seg-head">
              <span className="ssma-class-seg-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{e.name}</h2>
                <p>{e.tagline}</p>
              </div>
            </header>

            <div className="ssma-class-row">
              <article className="ssma-class-card">
                <div className="ssma-class-card-top">
                  <span className="ssma-class-icon"><EventIcon slug={e.slug} /></span>
                  <p className="ssma-class-label" style={{ margin: 0 }}>What’s included</p>
                </div>
                <ul className="ssma-class-list">
                  {e.included.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
                </ul>
                <div className="ssma-class-foot">
                  <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book Our Band</button>
                </div>
              </article>

              <article className="ssma-class-card">
                <p className="ssma-class-label">About</p>
                <p className="ssma-class-who">{e.desc}</p>
                <p className="ssma-class-label">Good to know</p>
                <dl className="ssma-band-faq">
                  {e.faqs.map((f) => (
                    <div key={f.q}>
                      <dt>{f.q}</dt>
                      <dd>{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          </section>
        ))}
      </div>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>See Our Performances</h2>
          <p>A sample of student and performer highlights from our YouTube channel.</p>
        </div>

        <div className="ssma-gallery-grid">
          {VIDEOS.map((v) => (
            <div className="ssma-video-card" key={v.id}>
              <div className="ssma-video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="ssma-video-info">
                <p className="ssma-video-title">{v.title}</p>
                <span className="ssma-pill">{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ssi-cta-banner">
        <p>Planning an Event?</p>
        <h3>Enquire About Booking Live Music for Your Occasion</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book Our Band</button>
        </div>
      </section>
    </>
  )
}
