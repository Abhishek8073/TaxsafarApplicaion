import { Reveal } from './Reveal'

export function Process({ items }) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="process">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="section-badge inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            Process
          </div>
          <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Simple steps that are easy to explain in an interview.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Each step is placed in a clean sequence so the journey from interest
            to enquiry feels smooth on desktop and mobile.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              as="article"
              className="interactive-card rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-1"
              delay={index * 90}
              key={item.step}
            >
              <span className="text-sm font-extrabold tracking-[0.2em] text-teal-700">{item.step}</span>
              <h3 className="font-heading mt-3 text-xl font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
