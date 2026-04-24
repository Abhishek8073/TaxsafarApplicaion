import { Reveal } from './Reveal'

export function SupportPage({ page }) {
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
          <a
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5"
            href="#top"
          >
            Back to Home
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <a className="text-sm font-bold text-teal-700 transition hover:text-slate-900" href="#top">
          Back to Home
        </a>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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

          <Reveal
            className="rounded-[2rem] bg-linear-to-br from-teal-700 to-slate-950 p-8 text-cyan-50 shadow-2xl shadow-slate-900/20"
            delay={120}
          >
            <h2 className="font-heading text-2xl font-black">Quick Summary</h2>
            <p className="mt-4 text-sm leading-7 text-cyan-50/80">
              This page is recreated locally using the content from the official
              TaxSafar page so users can read it directly inside the redesigned app.
            </p>

            <div className="mt-6 rounded-3xl bg-white/10 p-5">
              <strong className="block text-lg font-extrabold">Source</strong>
              <a
                className="mt-2 inline-flex text-sm font-semibold text-cyan-100 underline underline-offset-4"
                href={page.sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open original page
              </a>
            </div>

            <div className="mt-5 rounded-3xl bg-white/10 p-5">
              <strong className="block text-lg font-extrabold">Contact</strong>
              <div className="mt-3 space-y-2">
                {page.contact.map((item) => (
                  <p className="text-sm text-cyan-50/80" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
