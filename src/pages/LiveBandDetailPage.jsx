import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { LIVE_BAND_EVENTS, VIDEOS } from '../data.js'
import { CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { FaqAccordion } from '../components/FaqAccordion.jsx'
import { useSeo } from '../useSeo.js'

export default function LiveBandDetailPage() {
  const { slug } = useParams()
  const { onBookDemo } = useOutletContext()
  const event = LIVE_BAND_EVENTS.find((e) => e.slug === slug)

  useSeo({
    title: event ? event.name : 'Live Band',
    description: event ? event.tagline : undefined,
  })

  if (!event) return <Navigate to="/live-band" replace />

  const otherEvents = LIVE_BAND_EVENTS.filter((e) => e.slug !== slug)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Live Band', to: '/live-band' }, { label: event.name }]} />

      <PageHero image={event.heroImage} eyebrow="Live Band" title={event.name} subtitle={event.tagline}>
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book Our Band</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>What We Offer</h2>
          <p>{event.desc}</p>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 640, margin: '0 auto' }}>
          {event.included.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
        </ul>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>See Our Performances</h2>
        </div>
        <div className="ssma-gallery-grid">
          {VIDEOS.slice(0, 3).map((v) => (
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

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>{event.name} FAQs</h2>
        </div>
        <FaqAccordion items={event.faqs} />
      </section>

      <section className="ssi-cta-banner">
        <p>Planning a {event.name.replace(/s$/, '')}?</p>
        <h3>Enquire About Booking Our Band</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book Our Band</button>
        </div>
      </section>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Explore Other Occasions</h2>
        </div>
        <div className="ssi-other-row">
          {otherEvents.map((e) => (
            <Link key={e.slug} to={`/live-band/${e.slug}`} className="ssma-chip">{e.name}</Link>
          ))}
        </div>
      </section>
    </>
  )
}
