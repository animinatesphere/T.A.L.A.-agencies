import React, { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const subjects = ['Award Nomination','Author Registration','Mentorship Application','Partnership / Sponsorship','Press & Media','General Enquiry']
const contactInfo = [
  { icon: '✉', label: 'Email',        value: 'hello@talawards.org' },
  { icon: '☏', label: 'Phone',        value: '+234 800 TALA ORG'   },
  { icon: '◎', label: 'Address',      value: '14 Broad Street, Lagos Island, Lagos, Nigeria' },
  { icon: '◷', label: 'Office Hours', value: 'Mon–Fri, 9:00am – 5:00pm WAT' },
]

export default function Contact() {
  const [form, setForm]       = useState({ firstName:'', lastName:'', email:'', subject:'', message:'', newsletter:false })
  const [errors, setErrors]   = useState({})
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k, v) => { setForm(f => ({...f, [k]:v})); if (errors[k]) setErrors(e => ({...e, [k]:''})) }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim())  e.lastName  = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.subject)          e.subject   = 'Please select a subject'
    if (form.message.trim().length < 20) e.message = 'Please write at least 20 characters'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const inputCls = err =>
    `form-input ${err ? '!border-red-500 focus:!border-red-500' : ''}`

  const Field = ({ label, error, children }) => (
    <div>
      <label className="block font-display text-[10px] tracking-[2px] uppercase text-crimson-700 mb-2">{label}</label>
      {children}
      {error && <p className="font-display text-[10px] text-red-600 mt-1">{error}</p>}
    </div>
  )

  return (
    <>
      <PageHero label="Get in Touch" title="Contact T.A.L.A."
        subtitle="Whether you're nominating a work, joining as an author, or exploring a partnership — we'd love to hear from you." />

      <section className="bg-ivory-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Info */}
            <div className="lg:col-span-2">
              <p className="section-label">Contact Information</p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-crimson-900 tracking-wide mb-4 leading-snug">We're Here for African Authors</h2>
              <p className="font-body text-base text-crimson-800/65 leading-relaxed mb-10">Our team responds within 2 working days. For urgent nomination queries, include "URGENT" in your subject line.</p>
              <div className="space-y-6 mb-10">
                {contactInfo.map(c => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex-shrink-0 bg-crimson-700/7 border border-crimson-700/12 flex items-center justify-center text-crimson-700 text-base">{c.icon}</div>
                    <div>
                      <p className="font-display text-[10px] tracking-[2px] uppercase text-crimson-700/55 mb-0.5">{c.label}</p>
                      <p className="font-body text-[15px] text-crimson-900">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-display text-[10px] tracking-[3px] uppercase text-crimson-700 mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {['Twitter / X','Instagram','Facebook','LinkedIn'].map(s => (
                  <a key={s} href="#" className="bg-crimson-700/7 border border-crimson-700/12 text-crimson-700 font-display text-[9px] tracking-wide px-3 py-2 no-underline transition-all duration-200 hover:bg-crimson-700 hover:text-ivory-100 hover:border-crimson-700">{s}</a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-crimson-700/5 border border-crimson-700 p-16 text-center">
                  <p className="text-4xl text-gold-500 mb-5">✦</p>
                  <h3 className="font-display text-2xl font-bold text-crimson-900 tracking-wide mb-3">Message Received</h3>
                  <p className="font-serif text-lg text-crimson-800/65 leading-relaxed">Thank you for reaching out. A member of our team will respond within 2 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="First Name *" error={errors.firstName}>
                      <input placeholder="First name" value={form.firstName} onChange={e => update('firstName', e.target.value)} className={inputCls(errors.firstName)} />
                    </Field>
                    <Field label="Last Name *" error={errors.lastName}>
                      <input placeholder="Last name" value={form.lastName} onChange={e => update('lastName', e.target.value)} className={inputCls(errors.lastName)} />
                    </Field>
                  </div>
                  <Field label="Email Address *" error={errors.email}>
                    <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} className={inputCls(errors.email)} />
                  </Field>
                  <Field label="Subject *" error={errors.subject}>
                    <select value={form.subject} onChange={e => update('subject', e.target.value)}
                      className={`${inputCls(errors.subject)} cursor-pointer appearance-none ${!form.subject ? 'text-ivory-500' : 'text-crimson-900'}`}>
                      <option value="" disabled>Select a subject…</option>
                      {subjects.map(s => <option key={s} value={s} className="text-crimson-900 bg-ivory-100">{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Your Message *" error={errors.message}>
                    <textarea rows={6} placeholder="Tell us about your enquiry…" value={form.message} onChange={e => update('message', e.target.value)} className={`${inputCls(errors.message)} resize-y`} />
                    <p className="font-display text-[10px] text-crimson-800/38 mt-1 text-right">{form.message.length} / 20 min</p>
                  </Field>
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input type="checkbox" checked={form.newsletter} onChange={e => update('newsletter', e.target.checked)} className="w-4 h-4 accent-crimson-700 cursor-pointer flex-shrink-0" />
                    <span className="font-body text-[15px] text-crimson-800/65">Subscribe to the T.A.L.A. newsletter</span>
                  </label>
                  <button type="submit" disabled={loading}
                    className="btn-crimson w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading
                      ? <><span className="inline-block w-4 h-4 border-2 border-ivory-100/40 border-t-ivory-100 rounded-full animate-spin mr-2" />Sending…</>
                      : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-crimson-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold-500/10">
            {[
              { h: 'Award Nominations', b: 'Nominations for 2026 are open. No fees. Submit via the form above or email nominations@talawards.org' },
              { h: 'Media & Press',     b: 'For interview requests, press kits, or press passes to the annual ceremony contact press@talawards.org' },
              { h: 'Partnerships',      b: 'Interested in sponsoring or partnering with T.A.L.A.? Email partners@talawards.org' },
            ].map(i => (
              <div key={i.h} className="bg-crimson-950 px-8 py-10">
                <p className="font-display text-[11px] tracking-[3px] uppercase text-gold-500 mb-3">{i.h}</p>
                <p className="font-body text-[15px] text-ivory-100/55 leading-relaxed">{i.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
