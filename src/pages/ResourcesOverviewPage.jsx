import { Link } from 'react-router-dom'
import { RESOURCE_LINKS } from '../data.js'
import { ChevronIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { HERO_IMAGES } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

export default function ResourcesOverviewPage() {
  useSeo({
    title: 'Resources',
    description: 'How enrolment works, frequently asked questions, contact details and how to become a tutor at Seven Swaras Music Academy.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources' }]} />

      <PageHero
        image={HERO_IMAGES.classroom}
        eyebrow="Resources"
        title="Everything You Need to Know"
        subtitle="Before — and after — you join Seven Swaras Music Academy."
      />

      <section className="ssma-section">
        <div className="ssma-why-grid">
          {RESOURCE_LINKS.map((r) => (
            <Link key={r.slug} to={`/resources/${r.slug}`} className="ssma-why-card">
              <h3>{r.label}</h3>
              <p>{r.desc}</p>
              <span className="ssma-card-arrow">Read More <ChevronIcon size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
