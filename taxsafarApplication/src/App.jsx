import { useEffect, useState } from 'react'
import { AuthPage } from './components/AuthPage'
import { ContactPage } from './components/ContactPage'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Process } from './components/Process'
import { Reviews } from './components/Reviews'
import { ServicePage } from './components/ServicePage'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { SupportPage } from './components/SupportPage'
import {
  contactOptions,
  processSteps,
  reviews,
  serviceItems,
  stats,
  supportPages,
} from './data'

function getCurrentHash() {
  return window.location.hash || '#top'
}

function findService(hash) {
  if (!hash.startsWith('#service/')) {
    return null
  }

  const slug = hash.replace('#service/', '')
  return serviceItems.find((item) => item.slug === slug) || null
}

function findSupportPage(hash) {
  if (!hash.startsWith('#page/')) {
    return null
  }

  const slug = hash.replace('#page/', '')
  return supportPages.find((item) => item.slug === slug) || null
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats items={stats} />
      <Services items={serviceItems} />
      <Process items={processSteps} />
      <Reviews items={reviews} />
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(getCurrentHash)

  useEffect(() => {
    const handleHashChange = () => setHash(getCurrentHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const selectedService = findService(hash)
  const selectedSupportPage = findSupportPage(hash)
  const isServicePage = hash.startsWith('#service/')
  const isSupportPage = hash.startsWith('#page/')
  const isAuthPage = hash === '#auth'
  const isContactPage = hash === '#contact-page'

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_transparent_30%),linear-gradient(180deg,_#fcfbf7_0%,_#f4efe4_100%)] text-slate-700">
      <div className="fixed left-[-6rem] top-[-5rem] -z-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="fixed right-[-7rem] top-24 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <NavBar />

      {isServicePage ? (
        <ServicePage item={selectedService} />
      ) : isSupportPage ? (
        <SupportPage page={selectedSupportPage} />
      ) : isAuthPage ? (
        <AuthPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : (
        <HomePage />
      )}

      <Footer />
    </div>
  )
}

export default App
