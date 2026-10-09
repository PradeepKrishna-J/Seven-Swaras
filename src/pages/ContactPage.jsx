import { ContactCard } from '../layout.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'
import { SITE_URL } from '../seo.js'

export default function ContactPage() {
  useSeo({
    title: 'Contact Us',
    description: 'Visit Seven Swaras Music Academy at 49 Hrishikesa Garden, Dayalu Nagar, Chennai, or reach us by phone, email or WhatsApp.',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: 'Seven Swaras Music Academy',
    url: SITE_URL,
    telephone: '+91-93616-23134',
    email: 'sevenswara7@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '49 Hrishikesa Garden, Dayalu Nagar',
      addressLocality: 'Chennai',
      postalCode: '600099',
      addressCountry: 'IN',
    },
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: 'Contact' }]} />

      <PageHero
        eyebrow="Resources"
        title="Visit Seven Swaras"
        subtitle="Come experience a free trial class in person — our doors are always open."
      />

      <section className="ssma-section">
        <div className="ssma-findus-grid">
          <div className="ssma-map-wrap">
            <iframe
              title="Seven Swaras Music Academy location"
              src="https://maps.google.com/maps?q=49+Hrishikesa+Garden%2C+Dayalu+Nagar%2C+Chennai+-+600099&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <ContactCard />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
