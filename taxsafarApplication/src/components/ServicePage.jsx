export function ServicePage({ item }) {
  if (!item) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 text-center shadow-xl shadow-slate-900/5">
          <h1 className="font-heading text-4xl font-black tracking-[-0.05em] text-slate-900">
            Service not found
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The selected service page is not available right now.
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
        <a className="text-sm font-bold text-teal-700 transition hover:text-slate-900" href="#services">
          Back to Services
        </a>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-8 shadow-xl shadow-slate-900/5">
            <div className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
              Service Details
            </div>
            <h1 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-600">{item.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {item.points.map((point) => (
                <div
                  className="rounded-3xl border border-slate-200/70 bg-amber-50/70 p-4 text-sm font-semibold text-slate-700"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-linear-to-br from-teal-700 to-slate-950 p-8 text-cyan-50 shadow-2xl shadow-slate-900/20">
            <h2 className="font-heading text-2xl font-black">How this page helps</h2>
            <p className="mt-4 text-sm leading-7 text-cyan-50/80">
              Each service now has its own page so users can understand the
              offering better instead of reading everything on one crowded screen.
            </p>

            <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-5">
              <div>
                <strong className="block text-lg font-extrabold">Focused content</strong>
                <span className="text-sm text-cyan-50/80">
                  The page talks only about {item.title.toLowerCase()}.
                </span>
              </div>
              <div>
                <strong className="block text-lg font-extrabold">Better navigation</strong>
                <span className="text-sm text-cyan-50/80">
                  Users can reach this page directly from the navbar dropdown.
                </span>
              </div>
              <div>
                <strong className="block text-lg font-extrabold">Clear CTA</strong>
                <span className="text-sm text-cyan-50/80">
                  The layout makes it easy to continue toward contact or enquiry.
                </span>
              </div>
            </div>

            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5"
              href="#contact"
            >
              Ask About This Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
