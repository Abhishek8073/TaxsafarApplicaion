import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Reveal } from './Reveal'

export function Hero() {
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const cardRef = useRef(null)
  const textRef = useRef(null)

  const handleMove = (event) => {
    const container = heroRef.current
    const card = cardRef.current
    const text = textRef.current

    if (!container || !card || !text) {
      return
    }

    const rect = container.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 10
    const rotateX = (0.5 - y) * 10
    const moveX = (x - 0.5) * 16
    const moveY = (y - 0.5) * 16

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY * -1}px, 0)`
    text.style.transform = `translate3d(${moveX * -0.35}px, ${moveY * -0.2}px, 0)`
  }

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }

    if (textRef.current) {
      textRef.current.style.transform = ''
    }
  }

  return (
    <section className="px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20" id="top">
      <div
        className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(135deg,_rgba(255,255,255,0.92)_0%,_rgba(240,253,250,0.88)_48%,_rgba(226,232,240,0.92)_100%)] px-6 py-8 shadow-xl shadow-slate-900/10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10"
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-white/78"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(252,251,247,0.96)_0%,_rgba(252,251,247,0.88)_46%,_rgba(15,23,42,0.18)_100%)]"></div>
        <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_right,_rgba(15,118,110,0.18),_transparent_34%)]"></div>
        <div className="hero-orb absolute -left-12 top-12 h-36 w-36 rounded-full bg-amber-200/45 blur-3xl"></div>
        <div className="hero-orb hero-orb-delay absolute bottom-10 right-12 h-44 w-44 rounded-full bg-emerald-200/40 blur-3xl"></div>

        <Reveal className="relative z-10">
          <div className="transition-transform duration-300 ease-out" ref={textRef}>
          <div className="section-badge inline-flex animate-[heroFade_700ms_ease-out] rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            One stop for tax and compliance support
          </div>
          <h1 className="font-heading mt-5 max-w-3xl animate-[heroFade_900ms_cubic-bezier(0.22,1,0.36,1)] text-5xl font-black leading-none tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
            Modern tax help for founders, professionals and growing businesses.
          </h1>
          <p className="mt-5 max-w-2xl animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)] text-base leading-8 text-slate-600 sm:text-lg">
            A modern redesign of the TaxSafar experience with better hierarchy,
            cleaner navigation and clearer paths to services, login and
            registration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-[heroFade_1300ms_cubic-bezier(0.22,1,0.36,1)]">
            <button
              className="button-shine inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => navigate('/contact')}
            >
              Request Callback
            </button>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 text-sm font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:text-teal-800"
              href="#services"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 animate-[heroFade_1450ms_cubic-bezier(0.22,1,0.36,1)]">
            {['Fast response time', 'Pan-India support', 'Expert-led service'].map((item, index) => (
              <span
                className="glow-pill inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800"
                key={item}
                style={{ animation: `heroFade 900ms cubic-bezier(0.22,1,0.36,1) ${180 + index * 80}ms both` }}
              >
                {item}
              </span>
            ))}
          </div>
          </div>
        </Reveal>

        <Reveal
          className="relative z-10"
          delay={140}
        >
          <div className="absolute -left-6 top-8 hidden h-20 w-20 rounded-full bg-white/20 blur-2xl lg:block"></div>
          <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-teal-300/20 blur-2xl lg:block"></div>

          <div
            className="interactive-card relative animate-[float_5s_ease-in-out_infinite] rounded-[2rem] bg-linear-to-br from-teal-700 to-slate-950 p-5 text-cyan-50 shadow-2xl shadow-slate-900/20 transition-transform duration-300 ease-out"
            ref={cardRef}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-cyan-50/80">Client dashboard feeling</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-50/80">
                Live design concept
              </span>
            </div>

            <div className="mt-4 grid gap-4 rounded-3xl bg-white/10 p-4 sm:grid-cols-2">
              <div>
                <strong className="block text-3xl font-extrabold">24 hrs</strong>
                <span className="text-sm text-cyan-50/80">Average first response</span>
              </div>
              <div>
                <strong className="block text-3xl font-extrabold">8 Services</strong>
                <span className="text-sm text-cyan-50/80">Organized into simple categories</span>
              </div>
            </div>

            <div className="mt-4 rounded-3xl bg-white/10 p-4">
              {[
                ['Return filing', 'High demand'],
                ['Business registration', 'Popular'],
                ['Notice handling', 'Priority support'],
              ].map(([name, badge]) => (
                <div
                  className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0 last:pb-0 first:pt-0"
                  key={name}
                >
                  <span className="text-sm font-medium">{name}</span>
                  <b className="text-sm">{badge}</b>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-3xl bg-white/10 p-4">
              <div>
                <strong className="block text-3xl font-extrabold">4.8/5</strong>
                <span className="text-sm text-cyan-50/80">Client experience score</span>
              </div>
              <span className="h-4 w-4 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.18)]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
