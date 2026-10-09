import { useEffect, useRef, useState } from 'react'
import { Route, Routes, Navigate, useLocation, useParams, Outlet } from 'react-router-dom'
import { Navbar, StickyBanner, Footer, WhatsAppFloat, DemoModal } from './layout.jsx'
import HomePage from './pages/HomePage.jsx'
import InstrumentsOverviewPage from './pages/InstrumentsOverviewPage.jsx'
import ClassesOverviewPage from './pages/ClassesOverviewPage.jsx'
import ResourcesOverviewPage from './pages/ResourcesOverviewPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import JoinUsPage from './pages/JoinUsPage.jsx'
import InstrumentSalesPage from './pages/InstrumentSalesPage.jsx'
import LiveBandOverviewPage from './pages/LiveBandOverviewPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogListPage from './pages/BlogListPage.jsx'
import BlogArticlePage from './pages/BlogArticlePage.jsx'
import { styles } from './styles.js'
import { SCROLL_TARGET_KEY } from './useSectionNav.js'

// Old per-item pages (/instruments/:slug, /classes/:slug, /live-band/:slug) now live on one page
function SegmentRedirect({ base }) {
  const { slug } = useParams()
  return <Navigate to={`${base}#${slug}`} replace />
}

function Layout({ scrolled, mobileOpen, setMobileOpen, bannerVisible, dismissBanner, openDemoModal }) {
  return (
    <>
      <Navbar
        scrolled={scrolled}
        onBookDemo={() => openDemoModal()}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <StickyBanner visible={bannerVisible} onDismiss={dismissBanner} onBookDemo={() => openDemoModal()} />

      <main>
        <Outlet context={{ onBookDemo: openDemoModal }} />
      </main>

      <Footer onBookDemo={() => openDemoModal()} />
    </>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [presetInstrument, setPresetInstrument] = useState('')
  const [bannerVisible, setBannerVisible] = useState(false)
  const bannerDismissed = useRef(false)
  const location = useLocation()

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

  useEffect(() => { setMobileOpen(false) }, [location.hash])

  useEffect(() => {
    setMobileOpen(false)
    // HomePage handles its own scroll when arriving with a pending section target.
    if (location.pathname === '/' && sessionStorage.getItem(SCROLL_TARGET_KEY)) return
    // Pages with #section links (e.g. /classes#online) scroll themselves.
    if (location.hash) return
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset only on page change, not #hash change
  }, [location.pathname])

  useEffect(() => {
    if (sessionStorage.getItem('ss_demo_shown') === 'true') return
    const timer = setTimeout(() => {
      sessionStorage.setItem('ss_demo_shown', 'true')
      setModalOpen(true)
    }, 20000)
    return () => clearTimeout(timer)
  }, [])

  const openDemoModal = (instrumentName) => {
    setPresetInstrument(instrumentName || '')
    setModalOpen(true)
  }
  const closeDemoModal = () => setModalOpen(false)

  const dismissBanner = () => {
    sessionStorage.setItem('ss_banner_dismissed', 'true')
    bannerDismissed.current = true
    setBannerVisible(false)
  }

  return (
    <>
      <style>{styles}</style>

      <Routes>
        <Route
          element={(
            <Layout
              scrolled={scrolled}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
              bannerVisible={bannerVisible}
              dismissBanner={dismissBanner}
              openDemoModal={openDemoModal}
            />
          )}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/instruments" element={<InstrumentsOverviewPage />} />
          <Route path="/instruments/:slug" element={<SegmentRedirect base="/instruments" />} />
          <Route path="/instrument-sales" element={<InstrumentSalesPage />} />
          <Route path="/classes" element={<ClassesOverviewPage />} />
          <Route path="/classes/:slug" element={<SegmentRedirect base="/classes" />} />
          <Route path="/resources" element={<ResourcesOverviewPage />} />
          <Route path="/resources/how-it-works" element={<HowItWorksPage />} />
          <Route path="/resources/faqs" element={<FaqPage />} />
          <Route path="/resources/contact" element={<ContactPage />} />
          <Route path="/resources/join-us" element={<JoinUsPage />} />
          <Route path="/live-band" element={<LiveBandOverviewPage />} />
          <Route path="/live-band/:slug" element={<SegmentRedirect base="/live-band" />} />
          <Route path="/services" element={<Navigate to="/live-band" replace />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <WhatsAppFloat />
      <DemoModal open={modalOpen} onClose={closeDemoModal} presetInstrument={presetInstrument} />
    </>
  )
}
