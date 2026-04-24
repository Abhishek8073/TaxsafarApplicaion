export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-slate-200/70 pt-6 lg:flex-row lg:items-center">
        <div>
          <strong className="font-heading text-lg font-extrabold text-slate-900">TaxSafar</strong>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            Built with React and Tailwind CSS using simple components, stronger
            spacing and clean interview-friendly structure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
          <a className="transition hover:text-slate-900" href="#services">
            Services
          </a>
          <a className="transition hover:text-slate-900" href="#why-us">
            Why Us
          </a>
          <a className="transition hover:text-slate-900" href="#process">
            Process
          </a>
          <a className="transition hover:text-slate-900" href="#auth">
            Auth
          </a>
          <a className="transition hover:text-slate-900" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
