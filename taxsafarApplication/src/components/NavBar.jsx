import { useEffect, useRef, useState } from 'react'
import { navItems, serviceItems } from '../data'

export function NavBar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-amber-50/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3 text-slate-900" href="#top">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br from-teal-700 to-slate-900 text-sm font-extrabold text-white shadow-lg shadow-teal-900/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
            TS
          </span>
          <span className="grid">
            <span className="font-heading text-lg font-extrabold">TaxSafar</span>
            <span className="text-sm text-slate-500">Tax and compliance made simpler</span>
          </span>
        </a>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-5 text-sm font-semibold text-slate-600 lg:order-2 lg:w-auto">
          <div className="relative" ref={menuRef}>
            <button
              className="nav-link-fancy inline-flex items-center gap-2 transition duration-300 hover:text-slate-900"
              onClick={() => setOpen((current) => !current)}
              type="button"
            >
              Services
              <span className={`text-xs transition duration-300 ${open ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {open ? (
              <div className="absolute left-1/2 top-full z-30 mt-3 w-64 -translate-x-1/2 animate-[dropdownIn_220ms_ease-out] rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl shadow-slate-900/10 lg:left-0 lg:translate-x-0">
                {serviceItems.map((item) => (
                  <a
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-amber-50 hover:pl-5 hover:text-slate-900"
                    href={`#service/${item.slug}`}
                    key={item.slug}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {navItems.map((item) => (
            <a className="nav-link-fancy relative transition duration-300 hover:-translate-y-0.5 hover:text-slate-900" key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button-shine inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          href="#contact"
        >
          Book a Call
        </a>
      </div>
    </header>
  )
}
