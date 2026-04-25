import { useParams, Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export function SupportPage({ supportPages }) {
  const { slug } = useParams()
  const page = supportPages.find((p) => p.slug === slug)

  if (!page) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 text-center shadow-xl shadow-slate-900/5">
          <h1 className="font-heading text-4xl font-black tracking-[-0.05em] text-slate-900">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The page you selected is not available right now.
          </p>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link className="text-sm font-bold text-teal-700 transition hover:text-slate-900" to="/">
          Back to Home
        </Link>

        <div className="mt-5">
          <Reveal className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-xl shadow-slate-900/5">
            <div className="section-badge inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
              {page.label}
            </div>
            <h1 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-600">{page.intro}</p>

            <div className="mt-8 space-y-6">
              {page.sections.map((section) => (
                <div
                  className="interactive-card rounded-3xl border border-slate-200/70 bg-white/85 p-5"
                  key={section.heading}
                >
                  <h2 className="font-heading text-xl font-extrabold text-slate-900">
                    {section.heading}
                  </h2>
                  {section.body ? (
                    <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
                  ) : null}
                  {section.points ? (
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      {section.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
