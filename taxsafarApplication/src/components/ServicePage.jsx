import { useParams, Link } from 'react-router-dom'

export function ServicePage({ serviceItems }) {
  const { slug } = useParams()
  const item = serviceItems.find((service) => service.slug === slug)

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
          Back to Services
        </Link>

        <div className="mt-5">
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

            <Link
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5"
              to="/contact"
            >
              Ask About This Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
