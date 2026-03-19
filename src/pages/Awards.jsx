import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { awardCategories, awardTimeline, judgingCriteria, faqs } from '../data/index.js'

export default function Awards() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <PageHero label="Our Standards" title="Project Excellence"
        subtitle="Specialized website solutions for the book publishing industry. We move beyond the basics and focus on your strategic objectives.">
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          <Link to="/contact" className="btn-quill !px-12 !py-5">Start Your Project</Link>
          <a href="#criteria" className="border-2 border-white/20 text-white px-10 py-5 font-display text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-quill-dark transition-all no-underline font-bold">Our Criteria</a>
        </div>
      </PageHero>

      {/* Categories */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-20 text-quill-dark">
            <p className="section-label !text-quill-dark justify-center">Specializations</p>
            <h2 className="font-display text-4xl lg:text-8xl font-black tracking-tighter uppercase mb-6">Service Pillars</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {awardCategories.map((a, i) => (
              <div key={i} className="flex gap-8 items-start p-10 border border-quill-dark/5 bg-quill-light/10 hover:shadow-2xl hover:border-quill-accent/30 transition-all duration-500 group">
                <div className="w-16 h-16 flex-shrink-0 bg-quill-dark text-quill-accent flex items-center justify-center text-3xl shadow-xl group-hover:bg-quill-accent group-hover:text-white transition-colors">{a.icon}</div>
                <div>
                  <h3 className="font-display text-xl tracking-tighter text-quill-dark mb-4 uppercase font-black">{a.title}</h3>
                  <p className="font-body text-base text-quill-dark/60 leading-relaxed font-medium">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-quill-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-20">
            <p className="section-label justify-center text-quill-accent">Our Process</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-none">Project Lifecycle</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-12">
              {awardTimeline.map((t, i) => (
                <div key={i} className="flex gap-12 items-start group">
                  <div className="w-20 h-20 flex-shrink-0 z-10 bg-white/5 border border-white/10 text-quill-accent flex items-center justify-center font-display text-2xl font-black group-hover:bg-quill-accent group-hover:text-white transition-all shadow-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-4">
                    <p className="font-display text-[10px] tracking-[4px] text-quill-accent mb-3 uppercase font-bold">{t.date}</p>
                    <h3 className="font-display text-2xl tracking-tighter text-white mb-3 uppercase font-black">{t.phase}</h3>
                    <p className="font-body text-lg text-white/50 leading-relaxed italic">"{t.desc}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section id="criteria" className="bg-quill-light/20 py-32">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-20 text-quill-dark">
            <p className="section-label !text-quill-dark justify-center">Quality Guardrails</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold tracking-tight uppercase leading-none">Vetting Process</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-6">
            {judgingCriteria.map((c, i) => (
              <div key={i} className="flex gap-8 items-start bg-white shadow-xl p-10 border border-quill-dark/5 hover:border-quill-accent/30 transition-all group">
                <span className="text-quill-accent text-2xl flex-shrink-0 mt-1 font-bold">◆</span>
                <div>
                  <h4 className="font-display text-lg tracking-tighter text-quill-dark mb-3 uppercase font-black">{c.title}</h4>
                  <p className="font-body text-base text-quill-dark/60 leading-relaxed font-medium">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-32 border-t border-quill-dark/5">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-16 text-quill-dark">
            <p className="section-label !text-quill-dark justify-center">Knowledge Base</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold tracking-tight uppercase leading-none">Common Inquiries</h2>
          </div>
          <div className="divide-y divide-quill-dark/5">
            {faqs.map((f, i) => (
              <div key={i} className="group">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-8 text-left bg-transparent border-none cursor-pointer">
                  <span className="font-display text-xl font-bold text-quill-dark uppercase tracking-tighter group-hover:text-quill-accent transition-colors">{f.q}</span>
                  <span className={`text-quill-accent text-3xl font-black flex-shrink-0 ml-8 transition-transform duration-300 inline-block ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="pb-10">
                    <p className="font-body text-lg text-quill-dark/60 leading-relaxed font-medium italic">"{f.a}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-quill-dark py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl lg:text-8xl font-black text-white tracking-tighter mb-10 uppercase leading-none">Ready to Launch <br/> Your Project?</h2>
          <p className="font-serif text-2xl lg:text-3xl text-white/50 mb-16 italic max-w-3xl mx-auto">Nigeria’s only agency dedicated to delivering bespoke website and e-commerce projects for the literary world.</p>
          <Link to="/contact" className="btn-quill !px-20 !py-6 text-sm tracking-[4px]">Initiate Consultation →</Link>
        </div>
      </section>
    </>
  )
}
