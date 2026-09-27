import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { INSTRUMENTS } from '../data.js'
import { useSectionNav } from '../useSectionNav.js'
import { WhatsAppIcon, NoteIcon } from '../icons.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { instrumentHeroImage } from '../heroImages.js'
import { useSeo } from '../useSeo.js'

const GENRE_COLORS = ['#312E81', '#F59E0B', '#0E7490', '#BE185D', '#65A30D', '#7C3AED']

const WA_NUMBER = '919361623134'

function waLink(name) {
  const text = encodeURIComponent(`Hi! I'm interested in ${name} classes at Seven Swaras Music Academy. Could you share more details?`)
  return `https://wa.me/${WA_NUMBER}?text=${text}`
}

export default function InstrumentPage() {
  const { key } = useParams()
  const { onBookDemo } = useOutletContext()
  const goToSection = useSectionNav()
  const instrument = INSTRUMENTS.find((i) => i.key === key)

  useSeo({
    title: instrument ? `${instrument.name} Classes` : 'Instruments',
    description: instrument ? `Live 1-to-1 online and offline ${instrument.name} classes in Chennai — ${instrument.desc.toLowerCase()}. Certified faculty, Trinity & ABRSM aligned training.` : undefined,
  })

  if (!instrument) return <Navigate to="/instruments" replace />

  const { name, desc, highlights, genres, teachers } = instrument
  // Reuse the exact same image URL everywhere on the page (CSS crops each
  // placement via object-fit) rather than re-requesting the tag at a
  // different pixel size — this photo service picks a different underlying
  // photo per requested size even for the same tag+lock, so re-requesting
  // reliably drifts to an unrelated (or fallback) image.
  const heroImg = instrumentHeroImage(instrument)
  const stepsImg = heroImg
  const advantageImg = heroImg
  const gradeImg = heroImg

  const advantages = [
    { title: `Goal Based ${name} Lessons`, desc: `You will learn from a qualified ${name} teacher who has already done it all — grade exams, stage shows and performances. Set your goals, and your teacher will build the right lesson plan to get you there faster.` },
    { title: 'Play Your Favourite Songs', desc: `The whole point is to enjoy the instrument. Discuss your favourite songs in ${name} with your teacher and they'll help you learn them quickly, so all you have to do is focus on practice.` },
    { title: `Friendly ${name} Teacher`, desc: `Your ${name} teacher keeps you motivated and clears your doubts as they come up. Send recorded videos, ask for feedback, and get the support you need through your musical journey.` },
  ]

  const steps = [
    `Register on our website (or) WhatsApp us DEMO. We will reach out to you and schedule a FREE ${name} class.`,
    `Meet your ${name} teacher, discuss your aspirations and get a sneak peek of a typical ${name} class.`,
    `Liked the demo session? Upgrade and start your structured ${name} lessons.`,
  ]

  const otherInstruments = INSTRUMENTS.filter((i) => i.key !== key)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Instruments', to: '/instruments' }, { label: name }]} />

      {/* Hero */}
      <PageHero
        image={heroImg}
        eyebrow="Live 1 to 1"
        title={`Online ${name} Classes`}
        subtitle={`${desc}. Learn ${name.toLowerCase()} for all age groups from the comfort of your home with our best qualified teachers.`}
      >
        <button className="ssma-btn ssma-btn-indigo" onClick={() => onBookDemo(name)}>Book a FREE Demo</button>
        <a className="ssma-btn ssma-btn-whatsapp" href={waLink(name)} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={16} /> WhatsApp Us
        </a>
      </PageHero>

      {/* How it works */}
      <section className="ssma-section">
        <div className="ssi-steps-grid">
          <div className="ssi-steps-copy">
            <p className="ssi-eyebrow">How it works?</p>
            <h2>Learn {name} Online</h2>
            <p className="ssi-steps-sub">in 3 Simple Steps</p>
            <ol className="ssi-steps-list">
              {steps.map((s, i) => (
                <li key={i}>
                  <span className="ssi-step-num">{i + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <div className="ssi-cta-row">
              <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo(name)}>Book a FREE Demo</button>
              <a className="ssma-btn ssma-btn-whatsapp" href={waLink(name)} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="ssi-steps-art">
            <img src={stepsImg} alt={`Online ${name} class in progress`} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Lessons advantage */}
      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <p className="ssi-eyebrow">Best Online {name} Lessons</p>
          <h2>The Seven Swaras Advantage</h2>
        </div>
        <div className="ssi-advantage-grid">
          <div className="ssi-advantage-media">
            <img src={advantageImg} alt={`${name} student practising`} loading="lazy" />
          </div>
          <div className="ssi-advantage-list">
            {advantages.map((a) => (
              <div className="ssi-advantage-item" key={a.title}>
                <span className="ssi-advantage-icon" aria-hidden="true"><NoteIcon size={20} /></span>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="ssi-cta-banner">
        <p>Experience Seven Swaras Music Academy</p>
        <h3>Book a Free 30 Minute {name} Trial Class Now</h3>
        <div className="ssi-cta-row ssi-cta-row-center">
          <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo(name)}>Book a FREE Demo</button>
          <a className="ssma-btn ssma-btn-whatsapp" href={waLink(name)} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={16} /> WhatsApp Us
          </a>
        </div>
      </section>

      {/* Genres */}
      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Explore {name} Styles &amp; Genres</h2>
          <p>{highlights[0]}</p>
        </div>
        <div className="ssi-genre-grid">
          {genres.map((g, i) => (
            <div className="ssi-genre-item" key={g}>
              <span className="ssi-genre-circle" style={{ background: GENRE_COLORS[i % GENRE_COLORS.length] }}>
                <NoteIcon size={20} />
              </span>
              <span>{g}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers */}
      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>Online {name} Teachers</h2>
          <p>Meet a few of the qualified faculty teaching {name.toLowerCase()} at Seven Swaras.</p>
        </div>
        <div className="ssma-experts-grid">
          {teachers.map((t) => (
            <div className="ssma-expert-card" key={t.name}>
              <span className="ssma-expert-avatar">
                <img src={t.photo} alt={t.name} loading="lazy" />
              </span>
              <strong>{t.name}</strong>
              <p>{t.qualification}</p>
              <span className="ssma-expert-meta">{t.languages}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grade exams */}
      <section className="ssma-section">
        <div className="ssi-grade-grid">
          <div className="ssi-grade-art">
            <img src={gradeImg} alt={`${name} grade exam preparation`} loading="lazy" />
          </div>
          <div className="ssi-grade-copy">
            <h2>Let's Get Serious — Grade Exams</h2>
            <p className="ssi-steps-sub">Give {name} grade exams from the comfort of your home</p>
            <p>
              Whether you are taking your first steps or improving your skills to a higher level, graded music exams help you achieve specific milestones in your {name.toLowerCase()} journey — while learning some of the greatest songs ever written.
            </p>
            <p>
              We have coached students to get certifications from Trinity College London, ABRSM and Rockschool. We take pride in helping students across Chennai and beyond earn recognised, internationally valid certifications.
            </p>
            <button className="ssma-btn ssma-btn-indigo" onClick={() => goToSection('classes')}>Explore Music Grades</button>
          </div>
        </div>
      </section>

      {/* Explore other instruments */}
      <section className="ssma-section">
        <div className="ssma-section-head">
          <h2>Explore Other Instruments</h2>
        </div>
        <div className="ssi-other-row">
          {otherInstruments.map((i) => (
            <Link key={i.key} to={`/instruments/${i.key}`} className="ssma-chip">
              {i.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
