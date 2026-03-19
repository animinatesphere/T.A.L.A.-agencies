import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import { authors } from '../data/index.js'

const DARK   = '#003D2B'
const ACCENT = '#00C853'
const LIGHT  = '#E7F3EF'

const genres = ['All', 'Fiction', 'Poetry', 'Non-Fiction', 'Debut Fiction', "Children's Lit"]

export default function Authors() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = authors.filter(a => {
    const g = filter === 'All' || a.genre === filter
    const s = a.name.toLowerCase().includes(search.toLowerCase()) ||
              a.country.toLowerCase().includes(search.toLowerCase())
    return g && s
  })

  return (
    <>
      <PageHero label="Author Proposals" title="Our Portfolios"
        subtitle="Discover the bespoke website and e-commerce solutions we have delivered for authors and literary organisations worldwide.">
        <div className="mt-10">
          <Link to="/contact" className="btn-quill !px-12 !py-5">Start Your Project</Link>
        </div>
      </PageHero>

      {/* ── Why Authors Need a Website Section ── */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="font-display text-[10px] tracking-[5px] uppercase mb-4 font-bold" style={{ color: ACCENT }}>Building Your Legacy</p>
              <h2 className="font-display text-4xl lg:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none" style={{ color: DARK }}>
                Why does an author <br/> need a website?
              </h2>
              <p className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-12" style={{ color: 'rgba(0,61,43,0.6)' }}>
                "If you’re reading this you probably have a fairly good idea of why you might need a website already – but here are the three main benefits as we see them:"
              </p>
            </div>
            <div className="space-y-10">
              {[
                {
                  id: 1,
                  title: "Authority & Visibility",
                  text: "It gives you the ability to make it crystal clear to Google and other search engines precisely who you are. Your website is a central hub of information about you, to which both readers and search engines can go for authoritative information."
                },
                {
                  id: 2,
                  title: "Deep Engagement",
                  text: "It gives you a flexible platform from which to engage more deeply with your readers, bloggers and the media. You can use it to gather email signups and only with a website can you reliably and systematically build and own direct relationships. Social media platforms are great but unlike a website you don’t own them and the rules by which they play can change at any time."
                },
                {
                  id: 3,
                  title: "The Logical Hub",
                  text: "It gives a logical place for anybody (e.g. journalists, publishers, bloggers) writing about you to link to."
                }
              ].map(item => (
                <div key={item.id} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-display font-bold text-xl" style={{ backgroundColor: LIGHT, color: DARK }}>
                    {item.id}
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-[3px] uppercase font-bold mb-3" style={{ color: DARK }}>{item.title}</h3>
                    <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(0,61,43,0.7)' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why BlackQuill Section ── */}
      <section className="py-24" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-7xl mx-auto px-10">
          <div className="max-w-3xl">
            <p className="font-display text-[10px] tracking-[5px] uppercase mb-4 font-bold" style={{ color: ACCENT }}>Nigeria's Only Specialist</p>
            <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none" style={{ color: DARK }}>
              So why BlackQuill?
            </h2>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-6" style={{ color: DARK }}>
              BlackQuill is the only digital agency in Nigeria dedicated to delivering projects for publishers, authors and others in the world of books. 
              <strong> We specialise in custom website development.</strong>
            </p>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-10" style={{ color: 'rgba(0,61,43,0.7)' }}>
              We have unrivalled experience in meeting the communications needs of publishers and authors in a way that is both excellent value for money and very easy to use.
            </p>
            <Link to="/contact" className="btn-quill !px-12 !py-5">Discuss Your Proposal</Link>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b py-6 sticky top-16 z-20" style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(0,61,43,0.05)' }}>
        <div className="max-w-7xl mx-auto px-10 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {genres.map(g => (
              <button key={g} onClick={() => setFilter(g)}
                className="font-display text-[10px] tracking-[3px] uppercase px-5 py-2.5 border-2 transition-all duration-300 cursor-pointer font-bold"
                style={{
                  backgroundColor: filter === g ? DARK : 'transparent',
                  color: filter === g ? '#fff' : 'rgba(0,61,43,0.4)',
                  borderColor: filter === g ? DARK : 'rgba(0,61,43,0.1)'
                }}>
                {g}
              </button>
            ))}
          </div>
          <input placeholder="Search projects or authors…" value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full lg:max-w-[300px] border-2 p-3 outline-none transition-all font-body text-sm"
            style={{ backgroundColor: '#fff', borderColor: 'rgba(0,61,43,0.1)' }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-10">
          {filtered.length === 0
            ? <div className="text-center py-40">
                <p className="font-display text-2xl uppercase tracking-widest" style={{ color: 'rgba(0,61,43,0.2)' }}>No projects found matching your search.</p>
              </div>
            : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filtered.map((a, i) => (
                  <div key={i} className="bg-white border overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                    style={{ borderColor: 'rgba(0,61,43,0.05)' }}>
                    <div className="h-1.5 transition-colors" style={{ backgroundColor: DARK }} />
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-sm flex items-center justify-center font-display text-xl font-bold transition-colors"
                          style={{ backgroundColor: DARK, color: ACCENT }}>
                          {a.initial}
                        </div>
                        <div>
                          <p className="font-display text-lg font-black uppercase tracking-tighter leading-none" style={{ color: DARK }}>{a.name}</p>
                          <p className="font-display text-[10px] tracking-widest mt-2 uppercase font-bold" style={{ color: 'rgba(0,61,43,0.4)' }}>{a.country} · {a.genre}</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 mb-6 inline-block" style={{ backgroundColor: 'rgba(0,61,43,0.05)' }}>
                        <p className="font-display text-[10px] tracking-widest font-bold uppercase" style={{ color: DARK }}>✦ {a.award}</p>
                      </div>
                      <p className="font-body text-base leading-relaxed italic" style={{ color: 'rgba(0,61,43,0.6)' }}>"{a.bio}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>

      {/* Footer Band */}
      <section className="py-32 text-center relative overflow-hidden" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="section-label justify-center" style={{ color: ACCENT }}>For Authors & Publishers</p>
          <h2 className="font-display text-4xl lg:text-7xl font-bold text-white tracking-tight mb-8 uppercase leading-none">Establish Your <br/> Digital Authority</h2>
          <p className="font-serif text-2xl text-white/50 mb-12 leading-relaxed italic max-w-2xl mx-auto">Join the hundreds of literary creators who trust BlackQuill to represent their vision to the world.</p>
          <Link to="/contact" className="btn-quill shine-effect text-sm tracking-[4px]">Register Your Project</Link>
        </div>
      </section>
    </>
  )
}
