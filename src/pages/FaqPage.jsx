import { FAQS } from '../data.js'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { FaqAccordion } from '../components/FaqAccordion.jsx'
import { useSeo } from '../useSeo.js'

export default function FaqPage() {
  useSeo({
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about ages, online vs offline classes, free demos, exam preparation, rescheduling and fees at Seven Swaras Music Academy.',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: 'FAQs' }]} />

      <PageHero
        eyebrow="Resources"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your first class."
      />

      <section className="ssma-section">
        <FaqAccordion items={FAQS} />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
