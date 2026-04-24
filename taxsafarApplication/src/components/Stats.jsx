import { Reveal } from './Reveal'

export function Stats({ items }) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Reveal
            as="article"
            className="interactive-card rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-1"
            delay={index * 90}
            key={item.label}
          >
            <strong className="block text-3xl font-extrabold text-slate-900">{item.value}</strong>
            <span className="mt-2 block text-sm text-slate-600">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
