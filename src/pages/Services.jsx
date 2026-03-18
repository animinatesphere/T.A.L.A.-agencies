import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { services, partners } from '../data/index.js'

const mStats = [
  { num: '20',   label: 'Mentees per cohort'  },
  { num: '6',    label: 'Months of mentorship' },
  { num: '100%', label: 'Free of charge'       },
  { num: '4',    label: 'Cohorts completed'    },
]

export default function Services() {
  return (
    <>
      <PageHero label="For Authors" title="Author Services"
        subtitle="Beyond the award — T.A.L.A. offers a suite of support services to help independent African authors build sustainable literary careers.">
        <div className="mt-8"><Link to="/contact" className="btn-crimson">Get Started</Link></div>
      </PageHero>

      <section className="bg-ivory-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">What We Offer</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Built for Independent Authors</h2>
            <div className="gold-divider mx-auto" />
            <p className="font-serif text-lg text-crimson-800/58 max-w-xl mx-auto leading-relaxed">Every service we provide is designed to reduce the friction between talented writers and the audiences they deserve.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-10 border border-crimson-700/10 bg-ivory-100 hover:bg-ivory-200 hover:border-crimson-700/40 transition-all duration-300">
                <div className="w-14 h-14 mb-6 bg-crimson-700/6 border border-crimson-700/12 flex items-center justify-center text-xl text-crimson-700">{s.icon}</div>
                <h3 className="font-display text-sm tracking-wide text-crimson-900 mb-3">{s.title}</h3>
                <p className="font-body text-[15px] text-crimson-800/58 leading-relaxed mb-5">{s.desc}</p>
                <Link to={s.to} className="font-display text-[10px] tracking-[2px] text-crimson-700 border-b border-crimson-700 pb-0.5 no-underline hover:text-crimson-900 transition-colors">{s.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Flagship Programme</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ivory-100 tracking-wide mb-5 leading-snug">The T.A.L.A. Mentorship Programme</h2>
              <p className="font-body text-base text-ivory-100/65 leading-relaxed mb-4">Each year, we match 20 emerging authors with established African literary figures for a structured 6-month mentorship. Mentors include past laureates, literary editors, and publishing professionals.</p>
              <p className="font-body text-base text-ivory-100/65 leading-relaxed mb-8">Sessions are held monthly, covering manuscript development, publishing strategy, marketing, and building a reading audience. Applications open in October each year.</p>
              <Link to="/contact" className="btn-crimson">Apply for 2026 Cohort</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mStats.map(s => (
                <div key={s.label} className="bg-white/5 border border-gold-500/15 p-7 text-center">
                  <p className="font-display text-5xl text-gold-500 mb-2">{s.num}</p>
                  <p className="font-display text-[10px] tracking-[1.5px] uppercase text-ivory-100/48">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-300 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Ecosystem</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Our Partners</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partners.map((p, i) => (
              <div key={i} className="flex bg-ivory-100 border border-crimson-700/8">
                <div className="w-2 flex-shrink-0 bg-crimson-700" />
                <div className="p-7">
                  <p className="font-display text-[10px] tracking-[2px] uppercase text-crimson-700 mb-1.5">{p.type}</p>
                  <h4 className="font-serif text-xl font-semibold text-crimson-950 mb-2">{p.name}</h4>
                  <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
