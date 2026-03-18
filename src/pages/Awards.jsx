import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { awardCategories, awardTimeline, judgingCriteria, faqs } from '../data/index.js'

export default function Awards() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <PageHero label="Awards" title="The T.A.L.A. Awards"
        subtitle="Six categories. One purpose — to elevate the finest voices in African independent publishing.">
        <div className="flex flex-wrap gap-4 mt-8">
          <Link to="/contact" className="btn-crimson">Submit a Nomination</Link>
          <a href="#criteria"  className="btn-outline-ivory">Judging Criteria</a>
        </div>
      </PageHero>

      {/* Categories */}
      <section className="bg-ivory-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">2026 Categories</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Award Categories</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {awardCategories.map((a, i) => (
              <div key={i} className="flex gap-6 items-start p-8 border border-crimson-700/10 bg-ivory-100 hover:border-crimson-700 hover:bg-ivory-200 transition-all duration-300">
                <div className="w-14 h-14 flex-shrink-0 bg-crimson-700/6 border border-crimson-700/12 flex items-center justify-center text-2xl">{a.icon}</div>
                <div>
                  <h3 className="font-display text-sm tracking-wide text-crimson-900 mb-2">{a.title}</h3>
                  <p className="font-body text-[15px] text-crimson-800/58 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-crimson-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">2026 Calendar</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 tracking-wide">Award Timeline</h2>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold-500/20" />
            <div className="space-y-10">
              {awardTimeline.map((t, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-12 h-12 flex-shrink-0 z-10 bg-gradient-to-br from-gold-500 to-gold-400 text-crimson-900 flex items-center justify-center font-display text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-2">
                    <p className="font-display text-[10px] tracking-[2px] text-gold-500 mb-1">{t.date}</p>
                    <h3 className="font-display text-base tracking-wide text-ivory-100 mb-1.5">{t.phase}</h3>
                    <p className="font-body text-[15px] text-ivory-100/55 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section id="criteria" className="bg-ivory-300 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">How We Judge</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Judging Criteria</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {judgingCriteria.map((c, i) => (
              <div key={i} className="flex gap-5 items-start bg-ivory-100 border border-crimson-700/8 p-6">
                <span className="text-gold-500 text-base flex-shrink-0 mt-0.5">◆</span>
                <div>
                  <h4 className="font-display text-[12px] tracking-wide text-crimson-700 mb-1.5">{c.title}</h4>
                  <p className="font-body text-[15px] text-crimson-800/58 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-100 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Questions</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Frequently Asked</h2>
          </div>
          <div className="divide-y divide-crimson-700/10">
            {faqs.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer">
                  <span className="font-serif text-lg font-semibold text-crimson-950 hover:text-crimson-700 transition-colors">{f.q}</span>
                  <span className={`text-crimson-700 text-xl font-bold flex-shrink-0 ml-4 transition-transform duration-300 inline-block ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="pb-5">
                    <p className="font-body text-base text-crimson-800/65 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson-700 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ivory-100 tracking-wide mb-4">Ready to Submit Your Work?</h2>
          <p className="font-serif text-lg text-ivory-100/70 mb-9">Nominations for 2026 are open now. No submission fee. No barriers.</p>
          <Link to="/contact" className="btn-outline-ivory">Begin Your Nomination →</Link>
        </div>
      </section>
    </>
  )
}
