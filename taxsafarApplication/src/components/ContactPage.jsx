import { Link } from 'react-router-dom'
import { Contact } from './Contact'
import { Reveal } from './Reveal'
import { contactOptions } from '../data'

export function ContactPage() {
  return (
    <main className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition duration-300 hover:text-teal-800 mb-6"
          >
            ← Back to Home
          </Link>
        </Reveal>
      </div>
      <Contact items={contactOptions} />
      
      <footer className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 border-t border-slate-200/70 pt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-600">
            <Link className="transition hover:text-teal-700" to="/page/terms-of-use">
              Terms of Use
            </Link>
            <Link className="transition hover:text-teal-700" to="/page/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-teal-700" to="/page/payment-policy">
              Payment Policy
            </Link>
            <Link className="transition hover:text-teal-700" to="/page/help-center">
              Help Center
            </Link>
            <p>Email: <a className="transition hover:text-teal-700" href="mailto:support@taxsafar.com">
              support@taxsafar.com
            </a></p>
            <p className="transition hover:text-teal-700">Phone: +91 97848 18899</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
