import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import logoIcon from './assets/logo-icon.png'
import hero from './assets/hero.png'

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'instruments', label: 'Instruments' },
  { id: 'classes', label: 'Classes' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blog', label: 'Blog' },
  { id: 'find-us', label: 'Find Us' },
  { id: 'contact', label: 'Contact' },
]

const INSTRUMENTS = [
  { key: 'keyboard', name: 'Keyboard', desc: 'The gateway to harmony and melody', imgKeyword: 'keyboard,music', lock: 1, teacher: 'Ananya Subramaniam', experience: '9 years teaching' },
  { key: 'guitar', name: 'Guitar', desc: 'Strum your way from campfires to concert halls', imgKeyword: 'guitar,player', lock: 2, teacher: 'Vikram Das', experience: '7 years teaching' },
  { key: 'piano', name: 'Piano', desc: 'Classical technique and grand piano artistry', imgKeyword: 'piano,grand', lock: 3, teacher: 'Divya Krishnamurthy', experience: '8 years teaching' },
  { key: 'violin', name: 'Violin', desc: 'Pour your soul into every bow stroke', imgKeyword: 'violin,player', lock: 4, teacher: 'Lakshmi Narayanan', experience: '12 years teaching' },
  { key: 'drums', name: 'Drums', desc: 'Feel the heartbeat of every song', imgKeyword: 'drums', lock: 5, teacher: 'Joel Fernandes', experience: '8 years teaching' },
  { key: 'vocal', name: 'Vocal', desc: 'Find your voice, Carnatic and contemporary', imgKeyword: 'singer,microphone', lock: 6, teacher: 'Meera Raghavan', experience: '14 years teaching' },
  { key: 'theory', name: 'Music Theory', desc: 'The language behind every melody you play', imgKeyword: 'sheet,music', lock: 7, teacher: 'Suresh Balakrishnan', experience: '10 years teaching' },
]

const WHY_STATS = [
  { icon: '🎓', title: 'Certified Instructors', desc: 'All India Radio artists & Trinity-graded faculty' },
  { icon: '👨‍👩‍👧', title: '500+ Happy Students', desc: 'From age 5 to 65' },
  { icon: '🌍', title: '10+ Countries', desc: 'Online students worldwide' },
  { icon: '📜', title: 'Trinity & ABRSM', desc: 'Internationally recognised certifications' },
]

const SWARAS = ['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni']

const TESTIMONIALS_ROW1 = [
  { quote: `My daughter started violin at age 7 with zero experience. In 8 months, she performed solo at the school annual day. The teachers here have genuine patience and passion.`, name: 'Priya Menon', meta: 'Violin · 1 year' },
  { quote: `The online classes are surprisingly effective — the teachers ensure you're getting the finger positions right even on screen. I'm in Singapore and never felt the distance.`, name: 'Arjun Nair', meta: 'Guitar · 8 months' },
  { quote: `Weekend batches were the only option for me with my office schedule. Now I play keyboard at family functions and I couldn't be prouder.`, name: 'Kavitha R.', meta: 'Keyboard · 2 years' },
  { quote: `I was 52 when I enrolled for tabla. They made me feel completely welcome. Age is truly no barrier here.`, name: 'Suresh Iyer', meta: 'Tabla · 6 months' },
  { quote: `Seven Swaras helped my son clear his Trinity Grade 5 with Distinction. The structured curriculum and mock exams made all the difference.`, name: 'Meenakshi S.', meta: 'Piano · 3 years' },
  { quote: `The flute classes online have been exceptional. Raga training, breath control exercises — everything is covered with the same depth as offline.`, name: 'Deepa Krishnan', meta: 'Flute · 1 year' },
]

const TESTIMONIALS_ROW2 = [
  { quote: `From a complete beginner to performing Carnatic compositions — Seven Swaras made it possible with structured, patient guidance.`, name: 'Rahul V.', meta: 'Violin · 2 years' },
  { quote: `I joined the weekend batch for electric guitar. The instructors understand both Indian and Western styles. Truly versatile.`, name: 'Karthik M.', meta: 'Electric Guitar · 1 year' },
  { quote: `My 5-year-old now hums ragas at bedtime. She looks forward to every Saturday class. The faculty has a magical way with kids.`, name: 'Anjali Bose', meta: 'Keyboard (Child) · 4 months' },
  { quote: `The online portal, recorded sessions, and PDF notes make it very easy to practice between classes. Very professional setup.`, name: 'Vikram S.', meta: 'Saxophone · 10 months' },
  { quote: `We tried two other music schools before Seven Swaras. The difference in teaching quality was night and day. Highly recommend.`, name: 'Padma R.', meta: 'Carnatic Vocal · 1.5 years' },
  { quote: `Learning harmonium here connected me back to my roots. The Bhajan sessions on weekends are a spiritual experience in themselves.`, name: 'Gopinath K.', meta: 'Harmonium · 8 months' },
]

const VIDEOS = [
  { id: 'F3M0ee3ypOo', title: 'Mutta Kalakki – Keyboard Notes (Youth | GV Prakash)', tag: 'Keyboard Tutorial' },
  { id: 'I7NRlOjbMDc', title: 'Kannadi Poove – Keyboard Notes (Santhosh Narayanan)', tag: 'Keyboard Tutorial' },
  { id: 'GKH9tiDXIrA', title: 'Muththa Mazhai – Piano Tutorial with Chords (Thug Life)', tag: 'Piano Tutorial' },
  { id: '5DtImFMDGx8', title: 'A.R. Rahman Retro – Veena Mashup', tag: 'Veena Cover' },
  { id: 'fJIXAlrktls', title: 'Ninukori Varnam – Flute Instrumental (Ilaiyaraaja)', tag: 'Flute Cover' },
  { id: 'PuJfdT2odMA', title: 'Alankaram Part 7 – Vocal Practice', tag: 'Vocal Practice' },
]

const INSTRUMENT_OPTIONS = [
  'Keyboard', 'Guitar', 'Piano', 'Violin', 'Drums', 'Vocal', 'Music Theory', 'Not sure yet',
]

const BLOG_POSTS = [
  { tag: 'Our Story', title: 'Why Chennai Families Choose Seven Swaras Music Academy', excerpt: 'From a single classroom in 2014 to 500+ students across Chennai and 10+ countries online — here is the story behind our teaching philosophy.', readTime: '4 min read' },
  { tag: 'Keyboard', title: '5 Reasons Keyboard Is the Perfect First Instrument for Kids', excerpt: 'Visual keys, instant feedback and a gentle learning curve make keyboard an ideal starting point for young beginners. Here is what to expect in the first month.', readTime: '3 min read' },
  { tag: 'Guitar', title: 'Acoustic vs Electric Guitar: Which Should You Learn First?', excerpt: 'Finger strength, music style and long-term goals all play a part in this decision. Our instructors break down the trade-offs for new students.', readTime: '5 min read' },
  { tag: 'Violin', title: 'The Discipline Behind Every Bow Stroke: Learning Violin the Carnatic Way', excerpt: 'Carnatic violin training builds ear, posture and rhythm together. A look at how our structured curriculum takes a beginner to their first recital.', readTime: '4 min read' },
  { tag: 'Tabla', title: "Why Tabla Rhythms Build a Musician's Sense of Timing", excerpt: 'Tabla is often the most underrated first instrument. Here is how learning taal early strengthens every other instrument a student picks up later.', readTime: '3 min read' },
  { tag: 'Flute', title: "Breath, Ragas and Bansuri: A Beginner's Guide to Learning Flute", excerpt: 'Breath control is the real starting point for flute, not finger placement. Our faculty share the warm-up routine every new student begins with.', readTime: '4 min read' },
  { tag: 'Drums', title: 'From Bedroom Practice to the Stage: Learning Drums at Seven Swaras', excerpt: 'Dedicated practice rooms, structured grading and regular recitals — here is how our drum students go from their first beat to a live performance.', readTime: '3 min read' },
]

/* ------------------------------------------------------------------ */
/* Small inline icon components                                        */
/* ------------------------------------------------------------------ */

function CheckIcon({ color = '#F59E0B', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon({ days = 'weekend' }) {
  const cells = 7
  const activeIdx = days === 'weekend' ? [5, 6] : [0, 1, 2, 3, 4]
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="8" width="30" height="26" rx="4" stroke="#312E81" strokeWidth="1.6" />
      <line x1="5" y1="15" x2="35" y2="15" stroke="#312E81" strokeWidth="1.6" />
      <line x1="12" y1="5" x2="12" y2="11" stroke="#312E81" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="28" y1="5" x2="28" y2="11" stroke="#312E81" strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: cells }, (_, i) => (
        <rect
          key={i}
          x={8 + i * 3.7}
          y={20}
          width="3"
          height="9"
          rx="1"
          fill={activeIdx.includes(i) ? '#F59E0B' : '#E0E7FF'}
        />
      ))}
    </svg>
  )
}

function LaptopNoteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="7" y="9" width="26" height="17" rx="2" stroke="#312E81" strokeWidth="1.6" />
      <path d="M3 30h34l-3 4H6l-3-4z" stroke="#312E81" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M23 14v6.2a2.4 2.4 0 1 1-1.2-2.1V15l-4 1v5.8a2.4 2.4 0 1 1-1.2-2.1V15l6.4-1z" fill="#F59E0B" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20, color = '#FFFFFF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon({ size = 15, color = '#FFFFFF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  )
}

function YoutubeIcon({ size = 15, color = '#FFFFFF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function FacebookIcon({ size = 15, color = '#FFFFFF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s-7-6.4-7-12a7 7 0 1 1 14 0c0 5.6-7 12-7 12z" stroke="#312E81" strokeWidth="1.6" />
      <circle cx="12" cy="9" r="2.5" stroke="#312E81" strokeWidth="1.6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2L20 14v3a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 2-2z" stroke="#312E81" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="#312E81" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="#312E81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#312E81" strokeWidth="1.6" />
      <path d="M12 7v5.5l4 2" stroke="#312E81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#312E81" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" stroke="#312E81" strokeWidth="1.4" />
    </svg>
  )
}

function InstrumentIcon({ name }) {
  const common = { fill: 'none', stroke: '#312E81', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'keyboard':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <rect x="4" y="14" width="32" height="16" rx="2" />
          <line x1="11" y1="14" x2="11" y2="30" />
          <line x1="18" y1="14" x2="18" y2="30" />
          <line x1="25" y1="14" x2="25" y2="30" />
          <line x1="32" y1="14" x2="32" y2="30" />
        </svg>
      )
    case 'guitar':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <circle cx="16" cy="27" r="9" />
          <circle cx="16" cy="27" r="3.4" />
          <path d="M20 20L27 7" />
          <circle cx="26" cy="6.5" r="1.2" fill="#312E81" />
          <circle cx="29" cy="8.5" r="1.2" fill="#312E81" />
        </svg>
      )
    case 'piano':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <path d="M6 12c0-4 4-7 10-7 9 0 16 6 16 15v6H6V12z" />
          <line x1="6" y1="26" x2="32" y2="26" />
          <line x1="11" y1="26" x2="11" y2="30" />
          <line x1="16" y1="26" x2="16" y2="30" />
          <line x1="21" y1="26" x2="21" y2="30" />
          <line x1="26" y1="26" x2="26" y2="30" />
        </svg>
      )
    case 'violin':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <path d="M18 20c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" />
          <path d="M18 20c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5z" />
          <line x1="18" y1="10" x2="18" y2="6" />
          <path d="M15 6c0-2 6-2 6 0" />
        </svg>
      )
    case 'drums':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <circle cx="14" cy="24" r="8" />
          <circle cx="26" cy="24" r="8" />
          <circle cx="20" cy="14" r="7" />
        </svg>
      )
    case 'vocal':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <rect x="15" y="6" width="10" height="18" rx="5" />
          <path d="M10 18v2a10 10 0 0 0 20 0v-2" />
          <line x1="20" y1="30" x2="20" y2="35" />
          <line x1="14" y1="35" x2="26" y2="35" />
        </svg>
      )
    case 'theory':
      return (
        <svg width="26" height="26" viewBox="0 0 40 40" {...common}>
          <path d="M6 9c4-2 10-2 14 0v22c-4-2-10-2-14 0V9z" />
          <path d="M34 9c-4-2-10-2-14 0v22c4-2 10-2 14 0V9z" />
        </svg>
      )
    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/* Navbar                                                               */
/* ------------------------------------------------------------------ */

function Navbar({ scrolled, onNavigate, onBookDemo, mobileOpen, setMobileOpen }) {
  return (
    <header className={`ssma-nav${scrolled ? ' ssma-nav--scrolled' : ''}`}>
      <div className="ssma-nav-inner">
        <a href="#home" className="ssma-logo" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>
          <img src={logoIcon} alt="Seven Swaras" className="ssma-logo-img" />
          <span className="ssma-logo-text">
            <span className="ssma-logo-title">Seven Swaras</span>
            <span className="ssma-logo-sub">Music Academy</span>
          </span>
        </a>

        <nav className="ssma-nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNavigate(l.id) }}>
              {l.label}
            </a>
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
          <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNavigate(l.id); setMobileOpen(false) }}>
            {l.label}
          </a>
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

function StickyBanner({ visible, onDismiss, onBookDemo }) {
  if (!visible) return null
  return (
    <div className="ssma-banner">
      <p>🎵 New batches starting this month — Limited seats available!</p>
      <div className="ssma-banner-actions">
        <button className="ssma-banner-cta" onClick={onBookDemo}>Book Free Demo →</button>
        <button className="ssma-banner-close" onClick={onDismiss} aria-label="Dismiss banner">×</button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero({ onNavigate, onBookDemo }) {
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
            <button className="ssma-btn ssma-btn-indigo" onClick={() => onNavigate('classes')}>Explore Classes</button>
            <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
          </div>
          <div className="ssma-trust-row">
            <span>🎓 500+ Students Trained</span>
            <span>⭐ 4.9 Google Rating</span>
            <span>🏆 10+ Years of Musical Excellence</span>
            <span>📍 Online &amp; Offline Classes</span>
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
/* Instruments                                                          */
/* ------------------------------------------------------------------ */

function InstrumentsSection() {
  const [activeChip, setActiveChip] = useState(null)

  return (
    <section id="instruments" className="ssma-section">
      <div className="ssma-section-head">
        <h2>Instruments We Teach</h2>
        <p>From classical ragas to rock riffs — find your sound.</p>
      </div>

      <div className="ssma-instrument-grid">
        {INSTRUMENTS.map((inst) => (
          <div className="ssma-instrument-card" key={inst.key}>
            <div className="ssma-instrument-img-wrap">
              <img src={`https://loremflickr.com/400/400/${inst.imgKeyword}?lock=${inst.lock}`} alt={`Student learning ${inst.name} at Seven Swaras Music Academy`} loading="lazy" />
              <div className="ssma-instrument-overlay">
                <span>Explore {inst.name} →</span>
              </div>
            </div>
            <h3>{inst.name}</h3>
            <p>{inst.desc}</p>
            <p className="ssma-instrument-teacher">{inst.teacher} · {inst.experience}</p>
          </div>
        ))}
      </div>

      <div className="ssma-instrument-chips">
        <div className="ssma-chip-row">
          {INSTRUMENTS.map((inst) => (
            <button
              key={inst.key}
              className={`ssma-chip${activeChip === inst.key ? ' is-active' : ''}`}
              onClick={() => setActiveChip((c) => (c === inst.key ? null : inst.key))}
            >
              <InstrumentIcon name={inst.key} />
              <span>{inst.name}</span>
            </button>
          ))}
        </div>

        {INSTRUMENTS.map((inst) => (
          <div
            key={inst.key}
            className={`ssma-chip-detail${activeChip === inst.key ? ' is-open' : ''}`}
          >
            <div className="ssma-chip-detail-inner">
              <h4>{inst.name}</h4>
              <p className="ssma-chip-teacher">Taught by {inst.teacher} · {inst.experience}</p>
              <p>{inst.desc}</p>
              <a href="#contact" className="ssma-enquire-link" onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>Enquire Now →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Class schedule                                                       */
/* ------------------------------------------------------------------ */

function ClassSchedule({ onBookDemo }) {
  return (
    <section id="classes" className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Find Your Perfect Schedule</h2>
        <p>Flexible batches designed around your life, not the other way around.</p>
      </div>

      <div className="ssma-schedule-grid">
        <div className="ssma-schedule-card ssma-card-indigo-top">
          <span className="ssma-badge ssma-badge-amber">Most Popular</span>
          <CalendarIcon days="weekend" />
          <h3>Weekend Warriors</h3>
          <p className="ssma-schedule-time">Saturday &amp; Sunday | 9:00 AM – 1:00 PM</p>
          <p className="ssma-schedule-levels">Beginner · Intermediate · Advanced</p>
          <p className="ssma-schedule-desc">
            Designed for school students and working professionals who want structured, focused weekend learning without disrupting the weekday routine.
          </p>
          <ul className="ssma-feature-list">
            <li><CheckIcon /> Small batch sizes (max 8 students)</li>
            <li><CheckIcon /> Theory + practical in every session</li>
            <li><CheckIcon /> Monthly progress recitals</li>
          </ul>
          <div className="ssma-price-row ssma-price-blurred">
            <span className="ssma-price-currency">₹</span>
            <span className="ssma-price-amount">2,500</span>
            <span className="ssma-price-period">/ month</span>
          </div>
          <div className="ssma-card-ctas">
            <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
            <a className="ssma-btn ssma-btn-outline" href="tel:+919361623134">Enquiry Call</a>
          </div>
        </div>

        <div className="ssma-schedule-card ssma-card-amber-top">
          <CalendarIcon days="weekday" />
          <h3>Daily Practice Program</h3>
          <p className="ssma-schedule-time">Monday – Friday | Morning 8–11 AM &amp; Evening 5–8 PM</p>
          <p className="ssma-schedule-levels">All levels</p>
          <p className="ssma-schedule-desc">
            Full-immersion daily classes with individual attention, rapid skill building, and one-on-one teacher time built into every session.
          </p>
          <ul className="ssma-feature-list">
            <li><CheckIcon /> Morning &amp; evening time slots</li>
            <li><CheckIcon /> Dedicated practice rooms</li>
            <li><CheckIcon /> Exam preparation support</li>
          </ul>
          <div className="ssma-price-row ssma-price-blurred">
            <span className="ssma-price-currency">₹</span>
            <span className="ssma-price-amount">4,500</span>
            <span className="ssma-price-period">/ month</span>
          </div>
          <div className="ssma-card-ctas">
            <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
            <a className="ssma-btn ssma-btn-outline" href="tel:+919361623134">Enquiry Call</a>
          </div>
        </div>

        <div className="ssma-schedule-card ssma-card-gradient-top">
          <span className="ssma-badge ssma-badge-indigo">Join from Anywhere</span>
          <LaptopNoteIcon />
          <h3>Live Online Classes</h3>
          <p className="ssma-schedule-time">Flexible slots | IST 7 AM – 10 PM</p>
          <p className="ssma-schedule-levels">All levels, All ages</p>
          <p className="ssma-schedule-desc">
            Interactive Zoom-based live sessions with real-time feedback, recorded playback access, digital music notation PDFs, and monthly performance assessments from anywhere in the world.
          </p>
          <ul className="ssma-feature-list">
            <li><CheckIcon /> Recorded sessions for revision</li>
            <li><CheckIcon /> Students across 10+ countries</li>
            <li><CheckIcon /> Tech-assisted audio quality</li>
          </ul>
          <div className="ssma-price-row ssma-price-blurred">
            <span className="ssma-price-currency">₹</span>
            <span className="ssma-price-amount">1,999</span>
            <span className="ssma-price-period">/ month</span>
          </div>
          <div className="ssma-card-ctas">
            <button className="ssma-btn ssma-btn-amber" onClick={onBookDemo}>Book a Free Demo</button>
            <a className="ssma-btn ssma-btn-outline" href="tel:+919361623134">Enquiry Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why choose                                                          */
/* ------------------------------------------------------------------ */

function WhyChoose() {
  return (
    <section className="ssma-section">
      <div className="ssma-section-head">
        <h2>Why Seven Swaras?</h2>
        <p>We don't just teach notes. We build musicians.</p>
      </div>

      <div className="ssma-why-grid">
        {WHY_STATS.map((s) => (
          <div className="ssma-why-card" key={s.title}>
            <span className="ssma-why-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
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
      <div className="ssma-stars">★★★★★</div>
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
/* Blog                                                                 */
/* ------------------------------------------------------------------ */

function Blog({ onNavigate }) {
  return (
    <section id="blog" className="ssma-section">
      <div className="ssma-section-head">
        <h2>From Our Blog</h2>
        <p>Notes on our academy and the instruments we teach — written by our faculty.</p>
      </div>

      <div className="ssma-blog-grid">
        {BLOG_POSTS.map((post) => (
          <article className="ssma-blog-card" key={post.title}>
            <span className="ssma-pill ssma-blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="ssma-blog-foot">
              <span>{post.readTime}</span>
              <a href="#instruments" onClick={(e) => { e.preventDefault(); onNavigate('instruments') }}>Continue Reading →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Find us                                                              */
/* ------------------------------------------------------------------ */

function FindUs() {
  return (
    <section id="find-us" className="ssma-section ssma-section-tint">
      <div className="ssma-section-head">
        <h2>Visit Seven Swaras</h2>
        <p>Come experience a free trial class in person — our doors are always open.</p>
      </div>

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
              <p>Mon–Fri: 8:00 AM – 9:00 PM<br />Sat–Sun: 8:00 AM – 2:00 PM</p>
            </div>
          </div>
          <div className="ssma-info-row">
            <GlobeIcon />
            <div>
              <strong>Online Classes</strong>
              <p>7:00 AM – 10:00 PM IST (All days)</p>
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
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer({ onNavigate, onBookDemo }) {
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
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
          <a href="#instruments" onClick={(e) => { e.preventDefault(); onNavigate('instruments') }}>Instruments</a>
          <a href="#classes" onClick={(e) => { e.preventDefault(); onNavigate('classes') }}>Weekend Classes</a>
          <a href="#classes" onClick={(e) => { e.preventDefault(); onNavigate('classes') }}>Weekday Classes</a>
          <a href="#classes" onClick={(e) => { e.preventDefault(); onNavigate('classes') }}>Online Classes</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery') }}>Gallery</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBookDemo() }}>Book a Demo</a>
        </div>

        <div className="ssma-footer-col">
          <h4>Reach Us</h4>
          <p>49 Hrishikesa Garden, Dayalu Nagar, Chennai – 600099</p>
          <p>+91 93616 23134, +91 90030 66873</p>
          <p>sevenswara7@gmail.com</p>
          <h4 className="ssma-footer-h4-spaced">Follow Along</h4>
          <a href="https://www.instagram.com/sevenswara26/" target="_blank" rel="noreferrer" className="ssma-amber-link">@sevenswara26</a>
        </div>
      </div>

      <div className="ssma-footer-bottom">
        <p>© 2025 Seven Swaras Music Academy. All rights reserved. | Made with ♪ in Chennai</p>
        <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></p>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/* Floating WhatsApp button                                             */
/* ------------------------------------------------------------------ */

function WhatsAppFloat() {
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

function DemoModal({ open, onClose }) {
  const emptyForm = {
    name: '', mobile: '', email: '', instrument: '', date: '', timeSlot: '',
  }
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    if (open) {
      setFormData(emptyForm)
      setErrors({})
      setSubmitted(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

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

        <div className="ssma-modal-image">
          <img src="https://loremflickr.com/500/700/music,lesson?lock=77" alt="Student learning music at Seven Swaras Music Academy" loading="lazy" />
        </div>

        <div className="ssma-modal-content">
          {!submitted ? (
            <>
              <div className="ssma-modal-head">
                <img src={logoIcon} alt="Seven Swaras" className="ssma-modal-logo-img" />
                <h3>Book Your Free Demo Class 🎵</h3>
                <p>Limited slots available each week. Reserve yours today — completely free, no commitment.</p>
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
                  Email Address <span className="ssma-muted-label">(Optional)</span>
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
              <h3>You're booked! 🎉</h3>
              <p>We'll confirm your slot via WhatsApp within 2 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const bannerDismissed = useRef(false)

  useEffect(() => {
    bannerDismissed.current = sessionStorage.getItem('ss_banner_dismissed') === 'true'

    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      if (!bannerDismissed.current) {
        setBannerVisible(window.scrollY > 600)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('ss_demo_shown') === 'true') return
    const timer = setTimeout(() => {
      sessionStorage.setItem('ss_demo_shown', 'true')
      setModalOpen(true)
    }, 20000)
    return () => clearTimeout(timer)
  }, [])

  const openDemoModal = () => setModalOpen(true)
  const closeDemoModal = () => setModalOpen(false)

  const dismissBanner = () => {
    sessionStorage.setItem('ss_banner_dismissed', 'true')
    bannerDismissed.current = true
    setBannerVisible(false)
  }

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{styles}</style>

      <Navbar
        scrolled={scrolled}
        onNavigate={navigate}
        onBookDemo={openDemoModal}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <StickyBanner visible={bannerVisible} onDismiss={dismissBanner} onBookDemo={openDemoModal} />

      <main>
        <Hero onNavigate={navigate} onBookDemo={openDemoModal} />
        <InstrumentsSection />
        <ClassSchedule onBookDemo={openDemoModal} />
        <WhyChoose />
        <Testimonials />
        <Blog onNavigate={navigate} />
        <Gallery />
        <FindUs />
      </main>

      <Footer onNavigate={navigate} onBookDemo={openDemoModal} />

      <WhatsAppFloat />
      <DemoModal open={modalOpen} onClose={closeDemoModal} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Styles                                                               */
/* ------------------------------------------------------------------ */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.ssma-nav, .ssma-nav * ,
main, main *,
.ssma-footer, .ssma-footer *,
.ssma-modal-overlay, .ssma-modal-overlay *,
.ssma-whatsapp-float, .ssma-whatsapp-float *,
.ssma-banner, .ssma-banner * {
  font-family: 'DM Sans', sans-serif;
}

h1, h2, h3, h4, .ssma-logo-title, .ssma-hero-title {
  font-family: 'Playfair Display', serif;
}

section, .ssma-nav, .ssma-footer { box-sizing: border-box; }

/* ---------- shared ---------- */

.ssma-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 22px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.15s ease;
}
.ssma-btn:hover { opacity: 0.9; }
.ssma-btn:active { transform: scale(0.98); }
.ssma-btn-indigo { background: #312E81; color: #fff; }
.ssma-btn-amber { background: #F59E0B; color: #fff; }
.ssma-btn-full { width: 100%; }

.ssma-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.ssma-section-tint { background: #FCFBF6; }
.ssma-section-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}
.ssma-section-head h2 {
  color: #312E81;
  font-size: 34px;
  margin: 0 0 12px;
}
.ssma-section-head p {
  color: #6b6a75;
  font-size: 16px;
  margin: 0;
}
.ssma-pill {
  display: inline-block;
  background: #F3F1FB;
  color: #312E81;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
}
.ssma-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.ssma-badge-amber { background: #FDE9C8; color: #312E81; }
.ssma-badge-indigo { background: #312E81; color: #fff; }

/* ---------- navbar ---------- */

.ssma-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.ssma-nav--scrolled {
  background: #FFFFFF;
  border-bottom: 1px solid #E0E7FF;
}
.ssma-nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 76px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.ssma-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
}
.ssma-logo-img { width: 42px; height: 42px; object-fit: contain; flex: 0 0 auto; }
.ssma-logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.ssma-logo-title { font-size: 20px; font-weight: 700; color: #312E81; }
.ssma-logo-sub { font-size: 11px; color: #6f6ba0; }
.ssma-nav-links {
  display: flex;
  gap: 26px;
}
.ssma-nav-links a {
  color: #33314a;
  font-size: 14.5px;
  font-weight: 500;
}
.ssma-nav-links a:hover { color: #312E81; }
.ssma-nav-cta { white-space: nowrap; }
.ssma-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}
.ssma-hamburger span {
  display: block;
  height: 2px;
  background: #312E81;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.ssma-hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.ssma-hamburger.is-open span:nth-child(2) { opacity: 0; }
.ssma-hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.ssma-mobile-overlay {
  position: fixed;
  inset: 0;
  top: 76px;
  background: #FAFAF8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
}
.ssma-mobile-overlay.is-open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}
.ssma-mobile-overlay a {
  color: #312E81;
  font-size: 22px;
  font-weight: 600;
}

/* ---------- banner ---------- */

.ssma-banner {
  position: fixed;
  top: 76px;
  left: 0; right: 0;
  z-index: 999;
  height: 60px;
  background: #F59E0B;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;
  animation: ssmaBannerSlide 0.2s ease;
}
@keyframes ssmaBannerSlide {
  from { transform: translateY(-60px); }
  to { transform: translateY(0); }
}
.ssma-banner p { font-size: 15px; margin: 0; font-weight: 500; }
.ssma-banner-actions { display: flex; align-items: center; gap: 14px; }
.ssma-banner-cta {
  position: relative;
  overflow: hidden;
  background: #312E81;
  border: 1px solid #312E81;
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
}
.ssma-banner-cta::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  transform: translateX(-220%);
  animation: ssmaShine 10s ease-in-out infinite;
}
@keyframes ssmaShine {
  0% { transform: translateX(-220%); }
  14% { transform: translateX(220%); }
  100% { transform: translateX(220%); }
}
.ssma-banner-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
}

/* ---------- hero ---------- */

.ssma-hero {
  position: relative;
  padding-top: 76px;
  background: #FAFAF8;
  overflow: hidden;
}
.ssma-hero-staff {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 38px,
    #F0EFF0 38px,
    #F0EFF0 39px,
    transparent 39px,
    transparent 46px,
    #F0EFF0 46px,
    #F0EFF0 47px,
    transparent 47px,
    transparent 54px,
    #F0EFF0 54px,
    #F0EFF0 55px,
    transparent 55px,
    transparent 62px,
    #F0EFF0 62px,
    #F0EFF0 63px,
    transparent 63px,
    transparent 70px,
    #F0EFF0 70px,
    #F0EFF0 71px,
    transparent 71px,
    transparent 160px
  );
  opacity: 0.4;
  pointer-events: none;
}
.ssma-hero-inner {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 90px 24px 48px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
.ssma-hero-copy { flex: 0 0 44%; }
.ssma-eyebrow {
  font-size: 13.5px;
  font-weight: 600;
  color: #F59E0B;
  letter-spacing: 0.3px;
  margin: 0 0 14px;
}
.ssma-hero-title {
  font-size: 56px;
  line-height: 1.12;
  color: #1E1B4B;
  margin: 0 0 20px;
  font-weight: 700;
}
.ssma-hero-sub {
  font-size: 18px;
  color: #625f70;
  max-width: 520px;
  margin: 0 0 32px;
  line-height: 1.6;
}
.ssma-hero-ctas { display: flex; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.ssma-trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13.5px;
  color: #4b4959;
}
.ssma-hero-art {
  flex: 0 0 54%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ssma-hero-art img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 24px 32px rgba(30, 27, 75, 0.18));
}

@media (max-width: 768px) {
  .ssma-hero-inner { flex-direction: column; align-items: center; padding: 48px 20px 64px; text-align: center; }
  .ssma-hero-copy { flex: none; }
  .ssma-hero-title { font-size: 36px; }
  .ssma-hero-sub { margin-left: auto; margin-right: auto; }
  .ssma-hero-ctas { justify-content: center; }
  .ssma-trust-row { justify-content: center; }
  .ssma-hero-art { display: none; }
  .ssma-nav-links { display: none; }
  .ssma-nav-cta { display: none; }
  .ssma-hamburger { display: flex; }
}

/* ---------- instruments ---------- */

.ssma-instrument-grid {
  display: none;
}
@media (min-width: 769px) {
  .ssma-instrument-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  }
  .ssma-instrument-chips { display: none; }
}
.ssma-instrument-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-left: 4px solid transparent;
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: border-color 0.25s ease, border-left-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-instrument-card:hover {
  border-color: #312E81;
  border-left-color: #F59E0B;
  transform: translateY(-6px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 20px 36px -8px rgba(49, 46, 129, 0.2);
}
.ssma-instrument-img-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 14px;
}
.ssma-instrument-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.ssma-instrument-card:hover .ssma-instrument-img-wrap img { transform: scale(1.1); }
.ssma-instrument-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 14px;
  background: linear-gradient(to top, rgba(30, 27, 75, 0.78), rgba(30, 27, 75, 0) 60%);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.ssma-instrument-overlay span { color: #fff; font-size: 13px; font-weight: 600; }
.ssma-instrument-card:hover .ssma-instrument-overlay { opacity: 1; }
.ssma-instrument-card h3 { font-size: 17px; margin: 0 0 6px; color: #1E1B4B; }
.ssma-instrument-card p { font-size: 13px; color: #706e7c; margin: 0; }
.ssma-instrument-teacher { font-size: 12px; color: #8582a1; margin-top: 8px !important; padding-top: 8px; border-top: 1px solid #F0EFF8; }

.ssma-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.ssma-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  background: #fff;
  border: 1px solid #E0E7FF;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 13.5px;
  color: #33314a;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}
.ssma-chip.is-active { border-color: #312E81; color: #312E81; background: #F3F1FB; }
.ssma-chip-detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.ssma-chip-detail.is-open { grid-template-rows: 1fr; }
.ssma-chip-detail-inner { overflow: hidden; }
.ssma-chip-detail-inner h4,
.ssma-chip-detail-inner p,
.ssma-chip-detail-inner a { padding-top: 16px; }
.ssma-chip-detail .ssma-chip-detail-inner {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 0 20px 16px;
  margin-top: 12px;
  box-shadow: 0 8px 20px -6px rgba(30, 27, 75, 0.08);
}
.ssma-chip-detail-inner h4 { margin: 0 0 6px; color: #1E1B4B; font-family: 'Playfair Display', serif; }
.ssma-chip-teacher { font-size: 12.5px !important; font-weight: 600; color: #312E81 !important; margin: 0 0 8px !important; }
.ssma-chip-detail-inner p { margin: 0 0 10px; font-size: 13.5px; color: #706e7c; line-height: 1.5; }
.ssma-enquire-link { color: #F59E0B; font-size: 13.5px; font-weight: 600; padding-top: 0 !important; }

/* ---------- class schedule ---------- */

.ssma-schedule-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .ssma-schedule-grid { grid-template-columns: 1fr; }
}
.ssma-schedule-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 4px solid transparent;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 24px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-schedule-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 20px 36px -8px rgba(49, 46, 129, 0.2);
}
.ssma-card-indigo-top { border-top-color: #312E81; }
.ssma-card-amber-top { border-top-color: #F59E0B; }
.ssma-card-gradient-top {
  border-top-color: transparent;
}
.ssma-card-gradient-top::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px; right: -1px;
  height: 4px;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(90deg, #312E81, #F59E0B);
}
.ssma-schedule-card h3 { font-size: 22px; color: #1E1B4B; margin: 14px 0 10px; }
.ssma-schedule-time { font-weight: 600; color: #312E81; font-size: 14.5px; margin: 0 0 4px; }
.ssma-schedule-levels { font-size: 13px; color: #8582a1; margin: 0 0 14px; }
.ssma-schedule-desc { font-size: 14px; color: #625f70; line-height: 1.6; margin: 0 0 18px; }
.ssma-feature-list { list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.ssma-feature-list li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #33314a; }
.ssma-price-row {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin: auto 0 18px;
  padding-top: 16px;
  border-top: 1px solid #E0E7FF;
}
.ssma-price-currency { color: #312E81; font-weight: 700; font-size: 19px; font-family: 'Playfair Display', serif; }
.ssma-price-amount { color: #312E81; font-weight: 700; font-size: 28px; font-family: 'Playfair Display', serif; }
.ssma-price-period { color: #8582a1; font-size: 13px; margin-left: 2px; }
.ssma-price-blurred { filter: blur(6px); user-select: none; pointer-events: none; }
.ssma-card-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
.ssma-card-ctas .ssma-btn { flex: 1 1 130px; font-size: 13.5px; padding: 11px 12px; white-space: nowrap; }
.ssma-btn-outline { background: transparent; border: 1px solid #312E81; color: #312E81; }

/* ---------- why choose ---------- */

.ssma-why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
@media (max-width: 768px) {
  .ssma-why-grid { grid-template-columns: repeat(2, 1fr); }
}
.ssma-why-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 26px 20px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 16px 28px -6px rgba(49, 46, 129, 0.16);
}
.ssma-why-icon { font-size: 32px; display: block; margin-bottom: 12px; }
.ssma-why-card h3 { font-size: 16.5px; color: #1E1B4B; margin: 0 0 6px; }
.ssma-why-card p { font-size: 13px; color: #706e7c; margin: 0; }

.ssma-swara-bar {
  background: #312E81;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  color: #fff;
}
.ssma-swara-words {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  margin-bottom: 10px;
}
.ssma-swara-words span {
  opacity: 0;
  color: #F59E0B;
  animation: ssmaSwaraIn 0.5s ease forwards;
}
@keyframes ssmaSwaraIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.ssma-swara-bar p { margin: 0; font-size: 15px; color: #E0E7FF; }

/* ---------- testimonials ---------- */

.ssma-marquee-viewport {
  overflow: hidden;
  margin-bottom: 24px;
}
.ssma-marquee-row {
  display: flex;
  width: max-content;
  animation: ssmaMarquee 40s linear infinite;
}
.ssma-marquee-row-rev { animation-direction: reverse; }
.ssma-marquee-row:hover { animation-play-state: paused; }
@keyframes ssmaMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.ssma-testimonial-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 14px;
  padding: 14px 16px;
  width: 196px;
  flex: 0 0 196px;
  margin-right: 14px;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 6px 16px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ssma-testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 14px 24px -6px rgba(49, 46, 129, 0.16);
}
.ssma-stars { color: #F59E0B; font-size: 12px; letter-spacing: 1px; margin-bottom: 7px; }
.ssma-quote { font-style: italic; font-size: 12px; color: #33314a; line-height: 1.5; margin: 0 0 11px; }
.ssma-testimonial-divider { height: 1px; background: #E0E7FF; margin-bottom: 8px; }
.ssma-testimonial-name { font-weight: 600; font-size: 12.5px; color: #1E1B4B; margin: 0; }
.ssma-testimonial-meta { font-size: 11px; color: #8582a1; margin: 1px 0 0; }

/* ---------- gallery ---------- */

.ssma-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (min-width: 769px) {
  .ssma-gallery-grid { grid-template-columns: repeat(3, 1fr); }
}
.ssma-video-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 16px 28px -6px rgba(49, 46, 129, 0.16);
}
.ssma-video-frame {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.ssma-video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.ssma-video-info { padding: 12px 16px; }
.ssma-video-title { font-size: 14px; font-weight: 600; color: #1E1B4B; margin: 0 0 8px; }

/* ---------- find us ---------- */

.ssma-findus-grid {
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 28px;
  align-items: start;
}
@media (max-width: 768px) {
  .ssma-findus-grid { grid-template-columns: 1fr; }
}
.ssma-map-wrap { border-radius: 16px; overflow: hidden; border: 1px solid rgba(49, 46, 129, 0.08); box-shadow: 0 8px 24px -6px rgba(30, 27, 75, 0.08); }
.ssma-contact-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px -6px rgba(30, 27, 75, 0.08);
}
.ssma-contact-logo-img { height: 68px; width: auto; display: block; margin: 0 0 20px; }
.ssma-info-row {
  display: flex;
  gap: 14px;
  margin-bottom: 16px;
}
.ssma-info-row strong { display: block; font-size: 13.5px; color: #1E1B4B; margin-bottom: 2px; }
.ssma-info-row p { margin: 0; font-size: 13.5px; color: #706e7c; line-height: 1.5; }
.ssma-social-row { display: flex; gap: 12px; margin: 20px 0; }
.ssma-social-btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 4px rgba(30, 27, 75, 0.1), 0 8px 16px -4px rgba(30, 27, 75, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}
.ssma-social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.14), 0 12px 22px -4px rgba(30, 27, 75, 0.26);
  filter: brightness(1.08);
}
.ssma-social-instagram { background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); }
.ssma-social-youtube { background: #FF0000; }
.ssma-social-facebook { background: #1877F2; }
.ssma-social-whatsapp { background: #25D366; }

/* ---------- footer ---------- */

.ssma-footer {
  background: #1E1B4B;
  color: #E0E7FF;
  padding: 64px 24px 0;
}
.ssma-footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
}
@media (max-width: 768px) {
  .ssma-footer-grid { grid-template-columns: 1fr; }
}
.ssma-footer-logo-img { width: 38px; height: 38px; object-fit: contain; flex: 0 0 auto; }
.ssma-footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 14px;
}
.ssma-footer-tagline { color: #F59E0B; font-size: 14px; margin: 0 0 12px; }
.ssma-footer-para { font-size: 13.5px; line-height: 1.6; color: #c7c5e8; margin: 0 0 18px; }
.ssma-footer-social { display: flex; gap: 12px; }
.ssma-footer-social .ssma-social-btn { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; }
.ssma-footer-col h4 { color: #fff; font-size: 15px; margin: 0 0 16px; font-family: 'DM Sans', sans-serif; }
.ssma-footer-h4-spaced { margin-top: 20px !important; }
.ssma-footer-col a, .ssma-footer-col p {
  display: block;
  color: #c7c5e8;
  font-size: 13.5px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.ssma-footer-col a:hover { color: #F59E0B; }
.ssma-amber-link { color: #F59E0B !important; font-weight: 600; }
.ssma-footer-bottom {
  border-top: 1px solid #312E81;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: #9d9bc7;
}
.ssma-footer-bottom a { color: #9d9bc7; }

/* ---------- whatsapp float ---------- */

.ssma-whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  height: 56px;
  width: 56px;
  border-radius: 28px;
  background: #25D366;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  transition: width 0.2s ease, padding 0.2s ease;
  animation: ssmaWaBounce 8.8s ease-in-out infinite;
}
.ssma-whatsapp-float:hover {
  width: 200px;
  padding: 0 18px 0 0;
}
.ssma-whatsapp-icon {
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ssma-whatsapp-label {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s ease 0.05s;
}
.ssma-whatsapp-float:hover .ssma-whatsapp-label { opacity: 1; }
.ssma-whatsapp-tooltip {
  position: absolute;
  bottom: 66px;
  right: 0;
  background: #1E1B4B;
  color: #fff;
  font-size: 12.5px;
  padding: 6px 12px;
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}
.ssma-whatsapp-float:hover .ssma-whatsapp-tooltip { opacity: 1; }
@keyframes ssmaWaBounce {
  0% { transform: translateY(0); }
  2% { transform: translateY(-6px); }
  4% { transform: translateY(0); }
  6% { transform: translateY(-6px); }
  8% { transform: translateY(0); }
  100% { transform: translateY(0); }
}

/* ---------- demo modal ---------- */

.ssma-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.55);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.ssma-modal-card {
  background: #fff;
  border-radius: 24px;
  max-width: 480px;
  width: 92%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ssmaModalIn 0.35s ease-out;
}
.ssma-modal-image { display: none; }
.ssma-modal-content {
  padding: 32px 32px 28px;
  overflow-y: auto;
}
@media (min-width: 768px) {
  .ssma-modal-card {
    flex-direction: row;
    max-width: 860px;
    height: 640px;
    max-height: 88vh;
  }
  .ssma-modal-image {
    display: block;
    flex: 0 0 320px;
  }
  .ssma-modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ssma-modal-content { flex: 1; }
}
@keyframes ssmaModalIn {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.ssma-modal-accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  border-radius: 24px 24px 0 0;
  background: #F59E0B;
  z-index: 2;
}
.ssma-modal-close {
  position: absolute;
  top: 14px; right: 18px;
  font-size: 26px;
  color: #9a98a8;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  z-index: 3;
}
.ssma-modal-close:hover { color: #312E81; }
.ssma-modal-head { text-align: center; margin-bottom: 24px; }
.ssma-modal-logo-img { width: 40px; height: 40px; object-fit: contain; }
.ssma-modal-head h3 {
  color: #312E81;
  font-size: 24px;
  margin: 12px 0 8px;
}
.ssma-modal-head p {
  font-size: 14px;
  color: #706e7c;
  margin: 0 0 16px;
}
.ssma-trust-mini {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 12.5px;
  color: #33314a;
}
.ssma-trust-mini span { display: inline-flex; align-items: center; gap: 4px; }
.ssma-form { display: flex; flex-direction: column; gap: 16px; }
.ssma-form label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 600;
  color: #33314a;
}
.ssma-muted-label { color: #9a98a8; font-weight: 400; }
.ssma-form input, .ssma-form select {
  height: 44px;
  border: 1px solid #E0E7FF;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: #1E1B4B;
  outline: none;
  transition: border-color 0.15s ease;
}
.ssma-form input:focus, .ssma-form select:focus { border-color: #312E81; }
.ssma-form input.has-error, .ssma-form select.has-error { border-color: #e0574c; }
.ssma-error { color: #e0574c; font-size: 12px; font-weight: 500; }
.ssma-submit-btn { margin-top: 6px; font-size: 16px; font-family: 'Playfair Display', serif; }

.ssma-modal-success {
  text-align: center;
  padding: 24px 0 8px;
}
.ssma-modal-success h3 { color: #312E81; font-size: 24px; margin: 16px 0 8px; }
.ssma-modal-success p { color: #706e7c; font-size: 14px; margin: 0; }
.ssma-check-draw path {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: ssmaDraw 0.6s ease forwards 0.1s;
}
.ssma-check-draw circle {
  stroke-dasharray: 201;
  stroke-dashoffset: 201;
  animation: ssmaDraw 0.6s ease forwards;
}
@keyframes ssmaDraw {
  to { stroke-dashoffset: 0; }
}

/* ---------- blog ---------- */

.ssma-blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .ssma-blog-grid { grid-template-columns: 1fr; }
}
.ssma-blog-card {
  background: #fff;
  border: 1px solid rgba(49, 46, 129, 0.08);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(30, 27, 75, 0.03), 0 8px 20px -6px rgba(30, 27, 75, 0.08);
  transition: border-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.ssma-blog-card:hover {
  border-color: #312E81;
  transform: translateY(-6px);
  box-shadow: 0 4px 8px rgba(30, 27, 75, 0.06), 0 20px 32px -8px rgba(49, 46, 129, 0.18);
}
.ssma-blog-tag { margin-bottom: 14px; align-self: flex-start; }
.ssma-blog-card h3 {
  font-size: 18px;
  color: #1E1B4B;
  margin: 0 0 10px;
  line-height: 1.3;
}
.ssma-blog-card p { font-size: 13.5px; color: #706e7c; line-height: 1.6; margin: 0 0 18px; }
.ssma-blog-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
  color: #8582a1;
}
.ssma-blog-foot a { color: #F59E0B; font-weight: 600; }

section[id] { scroll-margin-top: 90px; }
`
