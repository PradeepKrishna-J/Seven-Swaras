import { useOutletContext } from 'react-router-dom'
import { BECOME_A_TUTOR } from '../data.js'
import { CheckIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'

export default function BecomeATutorPage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: 'Become a Tutor',
    description: 'Teach Keyboard, Guitar, Piano, Violin, Drums, Vocals, Flute or Music Theory at Seven Swaras Music Academy — requirements and how to apply.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: 'Become a Tutor' }]} />

      <PageHero
        image={BECOME_A_TUTOR.heroImage}
        eyebrow="Join Our Faculty"
        title="Become a Tutor"
        subtitle={BECOME_A_TUTOR.intro}
      >
        <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Enquire About Teaching</button>
      </PageHero>

      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>What We're Looking For</h2>
        </div>
        <ul className="ssma-feature-list" style={{ maxWidth: 680, margin: '0 auto' }}>
          {BECOME_A_TUTOR.requirements.map((r) => <li key={r}><CheckIcon /> {r}</li>)}
        </ul>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>How to Apply</h2>
        </div>
        <ol className="ssma-simple-steps">
          {BECOME_A_TUTOR.process.map((step, i) => (
            <li key={step.title}>
              <span className="ssi-step-num">{i + 1}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ssi-cta-banner">
        <p>Ready to Teach With Us?</p>
        <h3>Send Us Your Instrument, Experience and Availability</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Enquire About Teaching</button>
        </div>
      </section>
    </>
  )
}
