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
          <a className="transition hover:text-teal-700" href="#page/terms-of-use">
            Terms of Use
          </a>
          <a className="transition hover:text-teal-700" href="#page/privacy-policy">
            Privacy Policy
          </a>
          <a className="transition hover:text-teal-700" href="#page/payment-policy">
            Payment Policy
          </a>
          <a className="transition hover:text-teal-700" href="#page/help-center">
            Help Center
          </a>
          <p>Email:<a className="transition hover:text-teal-700" href="mailto:support@taxsafar.com">
            support@taxsafar.com
          </a></p>
          <p className="transition hover:text-teal-700">Phone: +91 97848 18899</p>
        </div>
      </div>
    </footer>
  )
}
