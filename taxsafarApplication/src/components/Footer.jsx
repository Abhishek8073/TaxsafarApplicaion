import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 border-t border-slate-200/70 pt-6 text-center">
        <div className="flex flex-col items-center">
          <strong className="font-heading text-lg font-extrabold text-slate-900">TaxSafar</strong>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            © 2026 TaxSafar. All rights reserved.
          </p>
        </div>
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
          <p>Email:<a className="transition hover:text-teal-700" href="mailto:support@taxsafar.com">
            support@taxsafar.com
          </a></p>
          <p className="transition hover:text-teal-700">Phone: +91 97848 18899</p>
        </div>
      </div>
    </footer>
  )
}
