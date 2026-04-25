import { Link } from 'react-router-dom'
import { Auth } from './Auth'
import { Reveal } from './Reveal'

export function AuthPage() {
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
      <Auth />
    </main>
  )
}
