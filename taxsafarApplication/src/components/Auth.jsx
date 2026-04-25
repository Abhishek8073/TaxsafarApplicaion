// import { useState } from 'react'
// import { Reveal } from './Reveal'


import { useState } from 'react'
import { Reveal } from './Reveal'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobilePattern = /^[6-9]\d{9}$/

const loginInitial = { email: '', password: '' }
const registerInitial = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
}

function inputStyle(hasError) {
  return `mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
    hasError
      ? 'border-rose-300 ring-2 ring-rose-100'
      : 'border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100'
  }`
}

function validateLogin(values = {}) {
  const errors = {}

  const email = values.email?.trim() || ''
  const password = values.password?.trim() || ''

  if (!email) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!password) {
    errors.password = 'Password is required.'
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return errors
}

function validateRegister(values = {}) {
  const errors = {}

  const name = values.name?.trim() || ''
  const email = values.email?.trim() || ''
  const mobile = values.mobile?.trim() || ''
  const password = values.password?.trim() || ''
  const confirmPassword = values.confirmPassword?.trim() || ''

  if (!name) {
    errors.name = 'Full name is required.'
  } else if (name.length < 3) {
    errors.name = 'Name must be at least 3 characters.'
  }

  if (!email) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!mobile) {
    errors.mobile = 'Mobile number is required.'
  } else if (!mobilePattern.test(mobile)) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!password) {
    errors.password = 'Password is required.'
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
    errors.password = 'Use at least 1 uppercase letter and 1 number.'
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}

export function Auth() {
  const [tab, setTab] = useState('login')
  const [loginValues, setLoginValues] = useState(loginInitial)
  const [registerValues, setRegisterValues] = useState(registerInitial)
  const [loginErrors, setLoginErrors] = useState({})
  const [registerErrors, setRegisterErrors] = useState({})
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleLoginSubmit = (event) => {
    event.preventDefault()

    const errors = validateLogin(loginValues)
    setLoginErrors(errors)

    if (Object.keys(errors).length === 0) {
      setLoading(true)

      setTimeout(() => {
        setMessage('Login validated successfully.')
        setLoginValues(loginInitial)
        setLoading(false)
      }, 400)
    } else {
      setMessage('')
    }
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()

    const errors = validateRegister(registerValues)
    setRegisterErrors(errors)

    if (Object.keys(errors).length === 0) {
      setLoading(true)

      setTimeout(() => {
        setMessage('Registration validated successfully.')
        setRegisterValues(registerInitial)
        setLoading(false)
      }, 400)
    } else {
      setMessage('')
    }
  }
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="auth">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        
        <Reveal
          className="auth-shell interactive-card w-full max-w-2xl rounded-[2rem] border border-slate-200/70 bg-white/85 p-5 shadow-xl shadow-slate-900/5 sm:p-7"
          delay={120}
        >
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 to-slate-50 p-6 mb-6 text-center">
            <h2 className="font-heading text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              {tab === 'login' ? 'Login Page' : 'Registration Page'}
            </h2>
          </div>
        
          <div
            className="auth-tabs"
            style={{ '--auth-slider': tab === 'login' ? '0%' : '100%' }}
          >
            <button
              className={`auth-tab rounded-full px-5 py-2 text-sm font-bold transition duration-300 ${
                tab === 'login'
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setTab('login')}
              type="button"
            >
              Login
            </button>
            <button
              className={`auth-tab rounded-full px-5 py-2 text-sm font-bold transition duration-300 ${
                tab === 'register'
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setTab('register')}
              type="button"
            >
              Register
            </button>
          </div>

          {message ? (
            <div className="mt-5 animate-[heroFade_400ms_ease-out] rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              {message}
            </div>
          ) : null}

          {tab === 'login' ? (
            <form
              className="auth-panel mt-6 space-y-4"
              key="login-form"
              onSubmit={handleLoginSubmit}
              noValidate
            >
              <label className="block text-sm font-semibold text-slate-900">
                Email
                <input
                  className={inputStyle(Boolean(loginErrors.email))}
                  onChange={(event) =>
                    setLoginValues((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="Enter your email"
                  type="email"
                  value={loginValues.email}
                />
                {loginErrors.email ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {loginErrors.email}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900">
                Password
                <div className="relative">
                  <input
                    className={inputStyle(Boolean(loginErrors.password))}
                    onChange={(event) =>
                      setLoginValues((current) => ({ ...current, password: event.target.value }))
                    }
                    placeholder="Enter your password"
                    type={showLoginPassword ? 'text' : 'password'}
                    value={loginValues.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
                  >
                    {showLoginPassword ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M15.171 13.576l1.414 1.414A10.016 10.016 0 0020 10c-1.274-4.057-5.064-7-9.542-7a9.958 9.958 0 00-2.053.196l1.586 1.586a4 4 0 015.009 5.009z" />
                      </svg>
                    )}
                  </button>
                </div>
                {loginErrors.password ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {loginErrors.password}
                  </span>
                ) : null}
              </label>

              <button
                className="button-shine inline-flex min-h-12 w-full items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                type="submit"
              >
                Validate Login
              </button>
            </form>
          ) : (
            <form
              className="auth-panel mt-6 grid gap-4 sm:grid-cols-2"
              key="register-form"
              onSubmit={handleRegisterSubmit}
              noValidate
            >
              <label className="block text-sm font-semibold text-slate-900">
                Full Name
                <input
                  className={inputStyle(Boolean(registerErrors.name))}
                  onChange={(event) =>
                    setRegisterValues((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Enter your full name"
                  type="text"
                  value={registerValues.name}
                />
                {registerErrors.name ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.name}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900">
                Email
                <input
                  className={inputStyle(Boolean(registerErrors.email))}
                  onChange={(event) =>
                    setRegisterValues((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="Enter your email"
                  type="email"
                  value={registerValues.email}
                />
                {registerErrors.email ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.email}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900">
                Mobile
                <input
                  className={inputStyle(Boolean(registerErrors.mobile))}
                  onChange={(event) =>
                    setRegisterValues((current) => ({ ...current, mobile: event.target.value }))
                  }
                  placeholder="Enter mobile number"
                  type="tel"
                  value={registerValues.mobile}
                />
                {registerErrors.mobile ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.mobile}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900">
                Password
                <div className="relative">
                  <input
                    className={inputStyle(Boolean(registerErrors.password))}
                    onChange={(event) =>
                      setRegisterValues((current) => ({ ...current, password: event.target.value }))
                    }
                    placeholder="Create a password"
                    type={showRegisterPassword ? 'text' : 'password'}
                    value={registerValues.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
                  >
                    {showRegisterPassword ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M15.171 13.576l1.414 1.414A10.016 10.016 0 0020 10c-1.274-4.057-5.064-7-9.542-7a9.958 9.958 0 00-2.053.196l1.586 1.586a4 4 0 015.009 5.009z" />
                      </svg>
                    )}
                  </button>
                </div>
                {registerErrors.password ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.password}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900 sm:col-span-2">
                Confirm Password
                <div className="relative">
                  <input
                    className={inputStyle(Boolean(registerErrors.confirmPassword))}
                    onChange={(event) =>
                      setRegisterValues((current) => ({
                        ...current,
                        confirmPassword: event.target.value,
                      }))
                    }
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={registerValues.confirmPassword}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M15.171 13.576l1.414 1.414A10.016 10.016 0 0020 10c-1.274-4.057-5.064-7-9.542-7a9.958 9.958 0 00-2.053.196l1.586 1.586a4 4 0 015.009 5.009z" />
                      </svg>
                    )}
                  </button>
                </div>
                {registerErrors.confirmPassword ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.confirmPassword}
                  </span>
                ) : null}
              </label>

              <button
                className="button-shine inline-flex min-h-12 w-full items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-slate-900 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2"
                type="submit"
              >
                Validate Register
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
