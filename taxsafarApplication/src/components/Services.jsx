import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export function Services({ items }) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="section-badge inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            Services
          </div>
          <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Everything important is easier to scan.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The service layout is redesigned into simple cards, so users can
            understand the offering faster and take action sooner.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              as="article"
              className="interactive-card group rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-2"
              delay={index * 80}
              key={item.title}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(245,158,11,0.14))] text-lg font-extrabold text-teal-700 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.title.slice(0, 1)}
              </div>
              <h3 className="font-heading mt-4 text-xl font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              <Link
                className="mt-5 inline-flex text-sm font-bold text-teal-700 transition duration-300 group-hover:translate-x-1 group-hover:text-teal-800"
                to={`/service/${item.slug}`}
              >
                View service
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
