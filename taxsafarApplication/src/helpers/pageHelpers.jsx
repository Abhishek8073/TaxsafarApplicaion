import { AuthPage } from '../components/AuthPage'
import {Stats} from "../components/Stats"
import {Hero} from "../components/Hero"
import { ContactPage } from '../components/ContactPage'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Services } from '../components/Services'
import {Process} from "../components/Process"
import {Reviews} from "../components/Reviews"
import { ServicePage } from '../components/ServicePage'
import { SupportPage } from '../components/SupportPage'
import { stats,serviceItems,processSteps,reviews,supportPages} from '../data'

export function ServicePageWrapper() {
  return <ServicePage serviceItems={serviceItems} />
}

export function SupportPageWrapper() {
  return <SupportPage supportPages={supportPages} />
}

export function HomePage() {
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

export function AppLayout() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_transparent_30%),linear-gradient(180deg,_#fcfbf7_0%,_#f4efe4_100%)] text-slate-700">
      <div className="fixed left-[-6rem] top-[-5rem] -z-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="fixed right-[-7rem] top-24 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:slug" element={<ServicePageWrapper />} />
        <Route path="/page/:slug" element={<SupportPageWrapper />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
