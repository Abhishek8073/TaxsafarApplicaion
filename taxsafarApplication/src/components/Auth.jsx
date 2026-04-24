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

function validateLogin(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return errors
}

function validateRegister(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.mobile.trim()) {
    errors.mobile = 'Mobile number is required.'
  } else if (!mobilePattern.test(values.mobile)) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  } else if (!/[A-Z]/.test(values.password) || !/\d/.test(values.password)) {
    errors.password = 'Use at least 1 uppercase letter and 1 number.'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (values.confirmPassword !== values.password) {
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

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const errors = validateLogin(loginValues)
    setLoginErrors(errors)

    if (Object.keys(errors).length === 0) {
      setMessage('Login form validated successfully.')
      setLoginValues(loginInitial)
    } else {
      setMessage('')
    }
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    const errors = validateRegister(registerValues)
    setRegisterErrors(errors)

    if (Object.keys(errors).length === 0) {
      setMessage('Register form validated successfully.')
      setRegisterValues(registerInitial)
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
                <input
                  className={inputStyle(Boolean(loginErrors.password))}
                  onChange={(event) =>
                    setLoginValues((current) => ({ ...current, password: event.target.value }))
                  }
                  placeholder="Enter your password"
                  type="password"
                  value={loginValues.password}
                />
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
                <input
                  className={inputStyle(Boolean(registerErrors.password))}
                  onChange={(event) =>
                    setRegisterValues((current) => ({ ...current, password: event.target.value }))
                  }
                  placeholder="Create a password"
                  type="password"
                  value={registerValues.password}
                />
                {registerErrors.password ? (
                  <span className="mt-2 block text-xs font-semibold text-rose-600">
                    {registerErrors.password}
                  </span>
                ) : null}
              </label>

              <label className="block text-sm font-semibold text-slate-900 sm:col-span-2">
                Confirm Password
                <input
                  className={inputStyle(Boolean(registerErrors.confirmPassword))}
                  onChange={(event) =>
                    setRegisterValues((current) => ({
                      ...current,
                      confirmPassword: event.target.value,
                    }))
                  }
                  placeholder="Confirm your password"
                  type="password"
                  value={registerValues.confirmPassword}
                />
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
