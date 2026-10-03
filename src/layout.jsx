import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './assets/logo.png'
import logoIcon from './assets/logo-icon.png'
import { NAV_LINKS, INSTRUMENT_OPTIONS } from './data.js'
import { useSectionNav } from './useSectionNav.js'
import { InstrumentIcon } from './icons.jsx'
import {
  CheckIcon, WhatsAppIcon, InstagramIcon, YoutubeIcon, FacebookIcon,
  MapPinIcon, PhoneIcon, MailIcon, ClockIcon, GlobeIcon, NoteIcon,
} from './icons.jsx'

/* ------------------------------------------------------------------ */
/* Navbar                                                               */
/* ------------------------------------------------------------------ */

export function Navbar({ scrolled, onBookDemo, mobileOpen, setMobileOpen }) {
  const [openMenu, setOpenMenu] = useState(null)
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => { setOpenMenu(null) }, [location.pathname])
  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const openNow = (to) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(to)
  }
  const closeSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  return (
    <header className={`ssma-nav${scrolled ? ' ssma-nav--scrolled' : ''}`}>
      <div className="ssma-nav-inner">
        <Link to="/" className="ssma-logo">
          <img src={logoIcon} alt="Seven Swaras" className="ssma-logo-img" />
          <span className="ssma-logo-text">
            <span className="ssma-logo-title">Seven Swaras</span>
            <span className="ssma-logo-sub">Music Academy</span>
          </span>
        </Link>

        <nav className="ssma-nav-links">
          {NAV_LINKS.map((l) => (
            <div
              className="ssma-nav-item"
              key={l.to}
              onMouseEnter={() => l.groups && openNow(l.to)}
              onMouseLeave={() => l.groups && closeSoon()}
            >
              <Link to={l.to}>{l.label}</Link>
              {l.groups && (
                <div className={`ssma-dropdown${openMenu === l.to ? ' is-open' : ''}`}>
                  {l.groups.map((g, gi) => (
                    <div className="ssma-dropdown-group" key={gi}>
                      {g.heading && <p className="ssma-dropdown-heading">{g.heading}</p>}
                      {g.items.map((item) => (
                        <Link key={item.to} to={item.to} onClick={(e) => { setOpenMenu(null); e.currentTarget.blur() }}>
                          {item.key && <InstrumentIcon instrumentKey={item.key} size={16} />}
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className="ssma-btn ssma-btn-amber ssma-nav-cta" onClick={onBookDemo}>
          Book a Free Demo
        </button>

        <button
          className={`ssma-hamburger${mobileOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`ssma-mobile-overlay${mobileOpen ? ' is-open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <div className="ssma-mobile-item" key={l.to}>
            <Link to={l.to} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            {l.groups && l.groups.map((g, gi) => (
              <div className="ssma-mobile-group" key={gi}>
                {g.heading && <p className="ssma-mobile-heading">{g.heading}</p>}
                {g.items.map((item) => (
                  <Link key={item.to} to={item.to} className="ssma-mobile-sublink" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            ))}
          </div>
        ))}
        <button className="ssma-btn ssma-btn-amber" onClick={() => { setMobileOpen(false); onBookDemo() }}>
          Book a Free Demo
        </button>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Sticky demo banner                                                   */
/* ------------------------------------------------------------------ */

export function StickyBanner({ visible, onDismiss, onBookDemo }) {
  if (!visible) return null
  return (
    <div className="ssma-banner">
      <p><NoteIcon size={16} /> New batches starting this month — Limited seats available!</p>
      <div className="ssma-banner-actions">
        <button className="ssma-banner-cta" onClick={onBookDemo}>Book Free Demo →</button>
        <button className="ssma-banner-close" onClick={onDismiss} aria-label="Dismiss banner">×</button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

export function Footer({ onBookDemo }) {
  const goToSection = useSectionNav()
  return (
    <footer id="contact" className="ssma-footer">
      <div className="ssma-footer-grid">
        <div className="ssma-footer-col">
          <div className="ssma-footer-logo">
            <img src={logoIcon} alt="Seven Swaras" className="ssma-footer-logo-img" />
            <span>Seven Swaras Music Academy</span>
          </div>
          <p className="ssma-footer-tagline">Sa Re Ga Ma Pa Dha Ni — Every note is a new beginning.</p>
          <p className="ssma-footer-para">
            Nurturing musical talent in Chennai since 2014. Join 500+ students who found their musical voice with us.
          </p>
          <div className="ssma-footer-social">
            <a className="ssma-social-btn ssma-social-instagram" href="https://www.instagram.com/sevenswara26/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a className="ssma-social-btn ssma-social-youtube" href="https://youtube.com/@sevenswaras26" target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
            <a className="ssma-social-btn ssma-social-facebook" href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a className="ssma-social-btn ssma-social-whatsapp" href="#" aria-label="WhatsApp"><WhatsAppIcon size={13} /></a>
          </div>
        </div>

        <div className="ssma-footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/instruments">Instruments</Link>
          <Link to="/instrument-sales">Instrument Sales</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/live-band">Live Band</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about-us">About Us</Link>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); goToSection('gallery') }}>Gallery</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBookDemo() }}>Book a Demo</a>
        </div>

        <div className="ssma-footer-col">
          <h4>Resources</h4>
          <Link to="/resources/how-it-works">How It Works</Link>
          <Link to="/resources/faqs">FAQs</Link>
          <Link to="/resources/contact">Contact Us</Link>
          <Link to="/resources/join-us">Join Us</Link>
          <h4 className="ssma-footer-h4-spaced">Reach Us</h4>
          <p>49 Hrishikesa Garden, Dayalu Nagar, Chennai – 600099</p>
          <p>+91 93616 23134, +91 90030 66873</p>
          <p>sevenswara7@gmail.com</p>
        </div>
      </div>

      <div className="ssma-footer-bottom">
        <p>© 2025 Seven Swaras Music Academy. All rights reserved. | Made in Chennai</p>
        <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></p>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/* Floating WhatsApp button                                             */
/* ------------------------------------------------------------------ */

export function WhatsAppFloat() {
  return (
    <a
      className="ssma-whatsapp-float"
      href="https://wa.me/919361623134"
      target="_blank"
      rel="noreferrer"
    >
      <span className="ssma-whatsapp-tooltip">Chat with us on WhatsApp</span>
      <span className="ssma-whatsapp-icon"><WhatsAppIcon size={28} /></span>
      <span className="ssma-whatsapp-label">Book a Demo</span>
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Demo modal                                                          */
/* ------------------------------------------------------------------ */

export function DemoModal({ open, onClose, presetInstrument }) {
  const emptyForm = {
    name: '', mobile: '', email: '', instrument: '', date: '', timeSlot: '',
  }
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    if (open) {
      setFormData({ ...emptyForm, instrument: presetInstrument || '' })
      setErrors({})
      setSubmitted(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, presetInstrument])

  useEffect(() => {
    if (!submitted) return
    const t = setTimeout(() => onClose(), 3000)
    return () => clearTimeout(t)
  }, [submitted, onClose])

  if (!open) return null

  const update = (field) => (e) => setFormData((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name'
    if (!/^\d{10}$/.test(formData.mobile.trim())) nextErrors.mobile = 'Enter a valid 10-digit number'
    if (!formData.instrument) nextErrors.instrument = 'Please choose an instrument'
    if (!formData.date) nextErrors.date = 'Please choose a date'
    if (!formData.timeSlot) nextErrors.timeSlot = 'Please choose a time slot'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <div className="ssma-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="ssma-modal-card">
        <div className="ssma-modal-accent" />
        <button className="ssma-modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="ssma-modal-content">
          {!submitted ? (
            <>
              <div className="ssma-modal-head">
                <img src={logoIcon} alt="Seven Swaras" className="ssma-modal-logo-img" />
                <h3>Book Your Free Demo Class</h3>
                <div className="ssma-trust-mini">
                  <span><CheckIcon /> No payment needed</span>
                  <span><CheckIcon /> 45-min session</span>
                  <span><CheckIcon /> Any instrument</span>
                </div>
              </div>

              <form className="ssma-form" onSubmit={handleSubmit} noValidate>
                <label>
                  Full Name *
                  <input type="text" placeholder="Your full name" value={formData.name} onChange={update('name')} className={errors.name ? 'has-error' : ''} />
                  {errors.name && <span className="ssma-error">{errors.name}</span>}
                </label>

                <label>
                  Mobile Number *
                  <input type="tel" placeholder="10-digit mobile number" value={formData.mobile} onChange={update('mobile')} className={errors.mobile ? 'has-error' : ''} />
                  {errors.mobile && <span className="ssma-error">{errors.mobile}</span>}
                </label>

                <label>
                  <span>Email <span className="ssma-muted-label">(optional)</span></span>
                  <input type="email" placeholder="your@email.com" value={formData.email} onChange={update('email')} />
                </label>

                <label>
                  Instrument of Interest *
                  <select value={formData.instrument} onChange={update('instrument')} className={errors.instrument ? 'has-error' : ''}>
                    <option value="" disabled>Select an instrument</option>
                    {INSTRUMENT_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.instrument && <span className="ssma-error">{errors.instrument}</span>}
                </label>

                <label>
                  Preferred Date *
                  <input type="date" min={today} value={formData.date} onChange={update('date')} className={errors.date ? 'has-error' : ''} />
                  {errors.date && <span className="ssma-error">{errors.date}</span>}
                </label>

                <label>
                  Preferred Time Slot *
                  <select value={formData.timeSlot} onChange={update('timeSlot')} className={errors.timeSlot ? 'has-error' : ''}>
                    <option value="" disabled>Select a time slot</option>
                    <option>Morning 8:00–10:00 AM</option>
                    <option>Midday 11:00 AM–1:00 PM</option>
                    <option>Evening 5:00–7:00 PM</option>
                    <option>Evening 7:00–9:00 PM</option>
                  </select>
                  {errors.timeSlot && <span className="ssma-error">{errors.timeSlot}</span>}
                </label>

                <button type="submit" className="ssma-btn ssma-btn-amber ssma-btn-full ssma-submit-btn">
                  Reserve My Free Class →
                </button>
              </form>
            </>
          ) : (
            <div className="ssma-modal-success">
              <svg width="72" height="72" viewBox="0 0 72 72" className="ssma-check-draw">
                <circle cx="36" cy="36" r="32" fill="none" stroke="#F59E0B" strokeWidth="3" />
                <path d="M20 37l11 11 21-23" fill="none" stroke="#312E81" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>You're booked!</h3>
              <p>We'll confirm your slot via WhatsApp within 2 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Contact info block (used on Find Us section)                        */
/* ------------------------------------------------------------------ */

export function ContactCard() {
  return (
    <div className="ssma-contact-card">
      <img src={logo} alt="Seven Swaras" className="ssma-contact-logo-img" />

      <div className="ssma-info-row">
        <MapPinIcon />
        <div>
          <strong>Address</strong>
          <p>49 Hrishikesa Garden, Dayalu Nagar, Chennai – 600099</p>
        </div>
      </div>
      <div className="ssma-info-row">
        <PhoneIcon />
        <div>
          <strong>Phone</strong>
          <p>+91 93616 23134, +91 90030 66873</p>
        </div>
      </div>
      <div className="ssma-info-row">
        <MailIcon />
        <div>
          <strong>Email</strong>
          <p>sevenswara7@gmail.com</p>
        </div>
      </div>
      <div className="ssma-info-row">
        <ClockIcon />
        <div>
          <strong>Timings</strong>
          <p>Round-the-clock flexible timings</p>
        </div>
      </div>
      <div className="ssma-info-row">
        <GlobeIcon />
        <div>
          <strong>Online Classes</strong>
          <p>Flexible schedules available 24/7</p>
        </div>
      </div>

      <div className="ssma-social-row">
        <a className="ssma-social-btn ssma-social-instagram" href="https://www.instagram.com/sevenswara26/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
        <a className="ssma-social-btn ssma-social-youtube" href="https://youtube.com/@sevenswaras26" target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
        <a className="ssma-social-btn ssma-social-facebook" href="#" aria-label="Facebook"><FacebookIcon /></a>
      </div>

      <a
        className="ssma-btn ssma-btn-indigo ssma-btn-full"
        href="https://www.google.com/maps/search/?api=1&query=49+Hrishikesa+Garden%2C+Dayalu+Nagar%2C+Chennai+-+600099"
        target="_blank"
        rel="noreferrer"
      >
        Get Directions
      </a>
    </div>
  )
}
