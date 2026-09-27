import { Link, useOutletContext } from 'react-router-dom'
import { LIVE_BAND_EVENTS, VIDEOS } from '../data.js'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

export default function LiveBandOverviewPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Live Band',
    description: 'Book Seven Swaras Music Academy’s performers and senior students for live music at corporate events, birthday parties, weddings, and concerts in Chennai.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Live Band' }]} />

      <PageHero
        image={HERO_IMAGES.liveBand}
        eyebrow="Live Band"
        title="Music for Your Events"
        subtitle="Beyond the classroom, our performers and senior students perform live at corporate events, birthday parties, weddings and concerts across Chennai."
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book Our Band</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-why-grid">
          {LIVE_BAND_EVENTS.map((e) => (
            <Link key={e.slug} to={`/live-band/${e.slug}`} className="ssma-why-card">
              <h3>{e.name}</h3>
              <p>{e.tagline}</p>
              <span className="ssma-card-arrow">View Details →</span>
            </Link>
          ))}
        </div>
      </section>

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
