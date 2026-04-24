import { Reveal } from './Reveal'

export function Reviews({ items }) {
  return (
    <section
      className="bg-[radial-gradient(circle_at_right_top,_rgba(16,185,129,0.08),_transparent_24rem)] px-4 py-12 sm:px-6 lg:px-8"
      id="reviews"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="section-badge inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            Reviews
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              as="article"
              className="interactive-card rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-1"
              delay={index * 110}
              key={item.name}
            >
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              <div className="mt-5">
                <strong className="block text-base font-extrabold text-slate-900">{item.name}</strong>
                <span className="text-sm text-slate-500">{item.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
