import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import hero from '../assets/hero.png'
import {
  INSTRUMENTS, TEACHERS, FAQS, WHY_STATS, SWARAS, CLASSES, BLOG_POSTS,
  TESTIMONIALS_ROW1, TESTIMONIALS_ROW2, VIDEOS,
} from '../data.js'
import {
  CalendarIcon, LaptopNoteIcon, ChevronIcon,
  GraduationCapIcon, UsersIcon, GlobeIcon, CertificateIcon, StarIcon, TrophyIcon, MapPinIcon,
} from '../icons.jsx'
import { SCROLL_TARGET_KEY } from '../useSectionNav.js'
import { useSeo } from '../useSeo.js'
import { instrumentHeroImage } from '../heroImages.js'

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero({ onBookDemo }) {
  return (
    <section id="home" className="ssma-hero">
      <div className="ssma-hero-staff" aria-hidden="true" />
      <div className="ssma-hero-inner">
        <div className="ssma-hero-copy">
          <p className="ssma-eyebrow">Chennai's Most Loved Music School</p>
          <h1 className="ssma-hero-title">Where Every Note Tells a Story</h1>
          <p className="ssma-hero-sub">
            Learn Carnatic, Western &amp; Fusion music — in person or online — from India's finest certified instructors.
          </p>
          <div className="ssma-hero-ctas">
            <a
              className="ssma-btn ssma-btn-indigo"
              href="#instruments"
              onClick={(e) => { e.preventDefault(); document.getElementById('instruments')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explore Classes
            </a>
            <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
          </div>
          <div className="ssma-trust-row">
            <span><GraduationCapIcon size={16} color="#312E81" /> 500+ Students Trained</span>
            <span><StarIcon size={16} /> 4.9 Google Rating</span>
            <span><TrophyIcon size={16} color="#312E81" /> 10+ Years of Musical Excellence</span>
            <span><MapPinIcon size={16} /> Online &amp; Offline Classes</span>
          </div>
        </div>

        <div className="ssma-hero-art">
          <img src={hero} alt="Piano, guitars, drums and saxophone in a music classroom" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Instruments — "Looking for the best music teacher?"                 */
/* ------------------------------------------------------------------ */

function InstrumentsSection() {
  return (
    <section id="instruments" className="ssma-section">
      <div className="ssma-section-head">
        <h2>Looking for the Best Music Teacher?</h2>
        <p>Learn from our certified faculty across every instrument at Seven Swaras Music Academy</p>
      </div>

      <div className="ssma-teacher-grid">
        {INSTRUMENTS.slice(0, 6).map((inst) => (
          <Link key={inst.key} to={`/instruments/${inst.key}`} className="ssma-teacher-row">
            <span className="ssma-teacher-avatar">
              <img src={instrumentHeroImage(inst)} alt={`${inst.name} teacher`} loading="lazy" />
            </span>
            <span className="ssma-teacher-info">
              <strong>{inst.name} Teachers</strong>
              <span>{inst.teacher} · {inst.experience}</span>
            </span>
            <span className="ssma-teacher-arrow"><ChevronIcon /></span>
          </Link>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/instruments" className="ssma-amber-link-inline">View All {INSTRUMENTS.length} Instruments →</Link>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Expert Teachers                                                      */
/* ------------------------------------------------------------------ */

function ExpertTeachers() {
  return (
    <section className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Meet Our Expert Teachers</h2>
        <p>Certified, experienced faculty who make every class personal.</p>
      </div>

      <div className="ssma-experts-grid">
        {TEACHERS.map((t) => (
          <div className="ssma-expert-card" key={t.name}>
            <span className="ssma-expert-avatar">
              <img src={t.photo} alt={t.name} loading="lazy" />
            </span>
            <strong>{t.name}</strong>
            <p>{t.role}</p>
            <span className="ssma-expert-meta">{t.meta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Class schedule                                                       */
/* ------------------------------------------------------------------ */

const CLASS_ICONS = {
  weekend: <CalendarIcon days="weekend" />,
  weekday: <CalendarIcon days="weekday" />,
  online: <LaptopNoteIcon />,
}

function ClassSchedule({ onBookDemo }) {
  return (
    <section id="classes" className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Find Your Perfect Schedule</h2>
        <p>Flexible batches designed around your life, not the other way around.</p>
      </div>

      <div className="ssma-schedule-grid">
        {CLASSES.map((c) => (
          <div className={`ssma-schedule-card ${c.slug === 'weekend' ? 'ssma-card-indigo-top' : c.slug === 'weekday' ? 'ssma-card-amber-top' : 'ssma-card-gradient-top'}`} key={c.slug}>
            {c.badge && <span className={`ssma-badge ${c.slug === 'online' ? 'ssma-badge-indigo' : 'ssma-badge-amber'}`}>{c.badge}</span>}
            {CLASS_ICONS[c.slug]}
            <h3>{c.name}</h3>
            <p className="ssma-schedule-time">{c.schedule}</p>
            <p className="ssma-schedule-levels">{c.levels}</p>
            <p className="ssma-schedule-desc">{c.desc}</p>
            <div className="ssma-price-row ssma-price-blurred">
              <span className="ssma-price-currency">₹</span>
              <span className="ssma-price-amount">{c.price}</span>
              <span className="ssma-price-period">/ month</span>
            </div>
            <div className="ssma-card-ctas">
              <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
              <Link className="ssma-btn ssma-btn-outline" to={`/classes/${c.slug}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/classes" className="ssma-amber-link-inline">Compare All Schedules In Detail →</Link>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why choose                                                          */
/* ------------------------------------------------------------------ */

const WHY_ICONS = {
  graduation: GraduationCapIcon,
  users: UsersIcon,
  globe: GlobeIcon,
  certificate: CertificateIcon,
}

function WhyChoose() {
  return (
    <section className="ssma-section">
      <div className="ssma-section-head">
        <h2>Why Seven Swaras?</h2>
        <p>We don't just teach notes. We build musicians.</p>
      </div>

      <div className="ssma-why-grid">
        {WHY_STATS.map((s) => {
          const Icon = WHY_ICONS[s.icon]
          return (
            <div className="ssma-why-card" key={s.title}>
              <span className="ssma-why-icon"><Icon size={26} /></span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="ssma-swara-bar">
        <div className="ssma-swara-words">
          {SWARAS.map((s, i) => (
            <span key={s} style={{ animationDelay: `${i * 200}ms` }}>{s}</span>
          ))}
        </div>
        <p>The Seven Swaras. Your journey through all 7 starts here.</p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Testimonials marquee                                                 */
/* ------------------------------------------------------------------ */

function TestimonialCard({ t }) {
  return (
    <div className="ssma-testimonial-card">
      <div className="ssma-stars">
        {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} size={13} />)}
      </div>
      <p className="ssma-quote">{t.quote}</p>
      <div className="ssma-testimonial-divider" />
      <p className="ssma-testimonial-name">{t.name}</p>
      <p className="ssma-testimonial-meta">{t.meta}</p>
    </div>
  )
}

function Testimonials() {
  const row1 = [...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1]
  const row2 = [...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2]
  return (
    <section id="testimonials" className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>What Our Students Say</h2>
      </div>

      <div className="ssma-marquee-viewport">
        <div className="ssma-marquee-row ssma-marquee-row-rev">
          {row1.map((t, i) => <TestimonialCard t={t} key={i} />)}
        </div>
      </div>
      <div className="ssma-marquee-viewport">
        <div className="ssma-marquee-row">
          {row2.map((t, i) => <TestimonialCard t={t} key={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const preview = FAQS.slice(0, 3)

  return (
    <section id="faq" className="ssma-section">
      <div className="ssma-section-head">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before booking your first class.</p>
      </div>

      <div className="ssma-faq-list">
        {preview.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div className={`ssma-faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                className="ssma-faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="ssma-faq-toggle">{isOpen ? '−' : '+'}</span>
              </button>
              <div className="ssma-faq-answer">
                <div className="ssma-faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p style={{ textAlign: 'center', marginTop: 24 }}>
        <Link to="/resources/faqs" className="ssma-amber-link-inline">View All FAQs →</Link>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* About / Services / Blog teasers                                     */
/* ------------------------------------------------------------------ */

function AboutTeaser() {
  return (
    <section className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Since 2014, in Chennai</h2>
        <p>
          Seven Swaras Music Academy started with a single classroom and a belief that structured, patient teaching
          builds musicians faster than raw talent alone. Today that same philosophy reaches 500+ students across
          Chennai and 10+ countries online.
        </p>
        <p style={{ marginTop: 16 }}>
          <Link to="/about-us" className="ssma-amber-link-inline">Read Our Full Story →</Link>
        </p>
      </div>
    </section>
  )
}

function LiveBandTeaser({ onBookDemo }) {
  return (
    <section className="ssma-section">
      <div className="ssma-section-head">
        <h2>Live Band for Your Events</h2>
        <p>
          Beyond the classroom, our faculty and senior students perform live at corporate events, birthday parties,
          weddings and concerts across Chennai.
        </p>
      </div>
      <div className="ssi-cta-row ssi-cta-row-center">
        <Link className="ssma-btn ssma-btn-indigo" to="/live-band">Explore Live Band</Link>
        <button className="ssma-btn ssma-btn-outline" onClick={onBookDemo}>Book Our Band</button>
      </div>
    </section>
  )
}

function BlogTeaser() {
  const latest = BLOG_POSTS.slice(0, 3)
  return (
    <section className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>From Our Blog</h2>
        <p>Notes on our academy and the instruments we teach — written by our faculty.</p>
      </div>
      <div className="ssma-blog-grid">
        {latest.map((post) => (
          <Link className="ssma-blog-card" to={`/blog/${post.slug}`} key={post.slug}>
            <span className="ssma-pill ssma-blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="ssma-blog-foot">
              <span>{post.readTime}</span>
              <span>Continue Reading →</span>
            </div>
          </Link>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/blog" className="ssma-amber-link-inline">View All Articles →</Link>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

function Gallery() {
  return (
    <section id="gallery" className="ssma-section">
      <div className="ssma-section-head">
        <h2>See the Music Come Alive</h2>
        <p>Student performances, recitals, and class highlights from our community.</p>
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
  )
}

/* ------------------------------------------------------------------ */
/* Find us                                                              */
/* ------------------------------------------------------------------ */

function FindUs({ onBookDemo }) {
  return (
    <section id="find-us" className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Visit Seven Swaras</h2>
        <p>49 Hrishikesa Garden, Dayalu Nagar, Chennai – 600099 · +91 93616 23134</p>
        <p style={{ marginTop: 16 }}>
          <Link to="/resources/contact" className="ssma-amber-link-inline">Map, Hours &amp; Full Contact Details →</Link>
        </p>
      </div>
      <div className="ssi-cta-row ssi-cta-row-center">
        <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
        <Link className="ssma-btn ssma-btn-outline" to="/resources/join-us">How to Join</Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const { onBookDemo } = useOutletContext()

  useSeo({
    title: "Chennai's Premier Music School",
    description: 'Learn Carnatic, Western and Fusion music online and offline in Chennai at Seven Swaras Music Academy. Keyboard, Guitar, Piano, Violin, Drums, Vocal and Music Theory classes. Book a free demo today.',
  })

  useEffect(() => {
    const target = sessionStorage.getItem(SCROLL_TARGET_KEY)
    if (target) {
      sessionStorage.removeItem(SCROLL_TARGET_KEY)
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Hero onBookDemo={onBookDemo} />
      <InstrumentsSection />
      <ExpertTeachers />
      <ClassSchedule onBookDemo={onBookDemo} />
      <WhyChoose />
      <AboutTeaser />
      <Testimonials />
      <LiveBandTeaser onBookDemo={onBookDemo} />
      <BlogTeaser />
      <FAQSection />
      <Gallery />
      <FindUs onBookDemo={onBookDemo} />
    </>
  )
}
