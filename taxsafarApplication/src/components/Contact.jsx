import { useState } from 'react'
import { Reveal } from './Reveal'

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  service: '',
  message: '',
}

export function Contact({ items }) {
  const [form, setForm] = useState(initialForm)
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowPopup(true)
    setForm(initialForm)

    window.setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8" id="contact">
      {showPopup ? (
        <div className="contact-popup fixed right-4 top-24 z-50 max-w-sm rounded-3xl border border-emerald-200 bg-white px-5 py-4 shadow-2xl shadow-slate-900/10">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-700">Details Submitted</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                user details submitted and agent will get back to you soon
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
            Contact
          </div>
          <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Friendly lead capture with less friction.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            The form is shorter, cleaner and easier to complete, which helps the
            website convert better across phones, tablets and desktop screens.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <div className="contact-note min-w-52 rounded-3xl border border-slate-200/70 bg-white/85 px-5 py-4 shadow-lg shadow-slate-900/5">
              <strong className="block text-sm font-bold text-slate-900">Email</strong>
              <span className="mt-1 block text-sm text-slate-600">support@taxsafar.com</span>
            </div>
            <div className="contact-note min-w-52 rounded-3xl border border-slate-200/70 bg-white/85 px-5 py-4 shadow-lg shadow-slate-900/5">
              <strong className="block text-sm font-bold text-slate-900">Phone</strong>
              <span className="mt-1 block text-sm text-slate-600">+91 97848 18899</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="form"
          className="contact-shell grid gap-4 rounded-[2rem] border border-slate-200/70 bg-white/85 p-5 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:grid-cols-2 sm:p-7"
          onSubmit={handleSubmit}
        >
          <label className="block text-sm font-semibold text-slate-900">
            Name
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              type="text"
              value={form.name}
            />
          </label>

          <label className="block text-sm font-semibold text-slate-900">
            Email
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              value={form.email}
            />
          </label>

          <label className="block text-sm font-semibold text-slate-900">
            Mobile
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              name="mobile"
              onChange={handleChange}
              placeholder="Enter mobile number"
              type="tel"
              value={form.mobile}
            />
          </label>

          <label className="block text-sm font-semibold text-slate-900">
            Service
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              name="service"
              onChange={handleChange}
              value={form.service}
            >
              <option value="">Select a service</option>
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-900 sm:col-span-2">
            Message
            <textarea
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              name="message"
              onChange={handleChange}
              placeholder="Tell us what you need help with"
              rows="4"
              value={form.message}
            ></textarea>
          </label>

          <button
            className="button-shine inline-flex min-h-12 w-full items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2"
            type="submit">Submit
          </button>
        </Reveal>
      </div>
    </section>
  )
}
