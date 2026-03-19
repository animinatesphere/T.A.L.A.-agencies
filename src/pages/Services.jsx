import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Pricing from '../components/Pricing.jsx'
import { services } from '../data/index.js'

const DARK   = '#003D2B'
const ACCENT = '#00C853'
const LIGHT  = '#E7F3EF'

export default function Services() {
  return (
    <>
      <PageHero label="Our Expertise" title="Bespoke Solutions"
        subtitle="We design and build beautiful, bespoke websites for authors, publishers, and literary organisations.">
        <div className="mt-10 flex gap-6 justify-center">
          <Link to="/contact" className="btn-quill !px-12 !py-5">Start Your Project</Link>
          <a href="#plans" className="border-2 border-white/20 text-white px-10 py-5 font-display text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-quill-dark transition-all no-underline">Review Plans ↓</a>
        </div>
      </PageHero>

      <div id="plans" className="bg-quill-light/20">
        <Pricing />
      </div>

      {/* ── Why Authors Need a Website Section ── */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-display text-[10px] tracking-[5px] uppercase mb-4 font-bold" style={{ color: ACCENT }}>Strategic digital presence</p>
              <h2 className="font-display text-4xl lg:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none" style={{ color: DARK }}>
                Why does an author <br/> need a website?
              </h2>
              <p className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-6" style={{ color: 'rgba(0,61,43,0.6)' }}>
                "It gives you the ability to make it crystal clear to Google and other search engines precisely who you are."
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  id: 1,
                  title: "Authoritative Hub",
                  text: "Your website is a central hub of information about you, to which both readers and search engines can go for authoritative information."
                },
                {
                  id: 2,
                  title: "Direct Relations",
                  text: "Only with a website can you reliably and systematically build and own direct relationships through email signups. Social media rules change; your website is yours."
                },
                {
                  id: 3,
                  title: "Logical Linking",
                  text: "It gives a logical place for anybody (e.g. journalists, publishers, bloggers) writing about you to link to."
                }
              ].map(item => (
                <div key={item.id} className="flex gap-5 border-l-4 p-6 bg-quill-light/10" style={{ borderColor: DARK }}>
                  <div>
                    <h3 className="font-display text-sm tracking-[3px] uppercase font-bold mb-2" style={{ color: DARK }}>{item.title}</h3>
                    <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(0,61,43,0.7)' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why BlackQuill ── */}
      <section className="py-24 text-white" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center text-center">
          <p className="font-display text-[10px] tracking-[5px] uppercase mb-4 font-bold" style={{ color: ACCENT }}>Our Specialty</p>
          <h2 className="font-display text-4xl lg:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none">So why BlackQuill?</h2>
          <p className="font-body text-lg lg:text-2xl mb-12 max-w-4xl text-white/70">
            BlackQuill is the only digital agency in Nigeria dedicated to delivering projects for publishers, authors and others in the world of books. 
            We have unrivalled experience in meeting the communications needs of publishers and authors in a way that is both excellent value for money and very easy to use.
          </p>
          <Link to="/contact" className="btn-quill !px-12 !py-5">Discuss Your Proposal</Link>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-quill-dark">
            <p className="section-label !text-quill-dark justify-center">How we can help you</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold tracking-tight uppercase mb-4">Strategic Assets</h2>
            <p className="font-serif text-xl text-quill-dark/60 max-w-2xl mx-auto italic">Developing brand identities and digital platforms for the worlds of books and publishing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div key={i} className="p-12 border border-quill-dark/5 bg-quill-light/10 hover:shadow-2xl transition-all group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                <h3 className="font-display text-xl tracking-tighter text-quill-dark mb-4 uppercase font-black">{s.title}</h3>
                <p className="font-body text-base text-quill-dark/60 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden text-center" style={{ backgroundColor: '#003D2B' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-10" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="font-display text-4xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-10">
            Global Reach?
          </h2>
          <p className="font-serif text-2xl lg:text-4xl text-white/60 mb-16 italic leading-relaxed">
            "We use custom designs to make our sites easy for our clients to manage, capable of evolving over time and good value."
          </p>
          <Link to="/contact" className="btn-quill !px-20 !py-6 text-sm tracking-[4px]">Request Bespoke Quote</Link>
        </div>
      </section>
    </>
  )
}
