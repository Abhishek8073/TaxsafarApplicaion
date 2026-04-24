import { Reveal } from './Reveal'

export function WhyUs({ items }) {
  return (
    <section
      className="bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.12),_transparent_28rem)] px-4 py-12 sm:px-6 lg:px-8"
      id="why-us"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="section-badge inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            Why This Redesign Works
          </div>
          <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            A calmer interface with stronger conversion flow.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            The new layout uses better spacing, typography and content grouping
            so visitors feel guided instead of overloaded.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {items.map((item, index) => (
            <Reveal
              as="article"
              className="interactive-card rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-1"
              delay={index * 110}
              key={item.title}
            >
              <h3 className="font-heading text-xl font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
