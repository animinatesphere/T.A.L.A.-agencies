// ─── Authors ─────────────────────────────────────────────────────────────────
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { authors } from '../data/index.js'

const genres = ['All','Fiction','Poetry','Non-Fiction','Debut Fiction',"Children's Lit"]

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
      <PageHero label="Our Authors" title="The Laureates"
        subtitle="Discover the independent African authors who have been recognised, shortlisted and celebrated by T.A.L.A.">
        <div className="mt-8"><Link to="/awards" className="btn-crimson">Submit for an Award</Link></div>
      </PageHero>

      {/* Filter bar */}
      <div className="bg-ivory-300 border-b border-crimson-700/8 py-5 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {genres.map(g => (
              <button key={g} onClick={() => setFilter(g)}
                className={`font-display text-[10px] tracking-[2px] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer
                            ${filter === g ? 'bg-crimson-700 text-ivory-100 border-crimson-700'
                                           : 'bg-transparent text-crimson-700 border-crimson-700/25 hover:border-crimson-700'}`}>
                {g}
              </button>
            ))}
          </div>
          <input placeholder="Search name or country…" value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input !w-auto !max-w-[220px] !py-2.5 text-[14px]" />
        </div>
      </div>

      <section className="bg-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0
            ? <p className="text-center py-24 font-serif text-xl text-crimson-800/48">No authors found matching your search.</p>
            : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((a, i) => (
                  <div key={i} className="bg-ivory-100 border border-crimson-700/10 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-crimson-700/40 transition-all duration-300 cursor-pointer">
                    <div className="h-1 bg-gradient-to-r from-crimson-700 to-crimson-600" />
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br from-crimson-700 to-crimson-600 flex items-center justify-center font-display text-xl font-bold text-gold-500">{a.initial}</div>
                        <div>
                          <p className="font-serif text-lg font-semibold text-crimson-950 leading-tight">{a.name}</p>
                          <p className="font-display text-[10px] tracking-wide text-crimson-700 mt-0.5">{a.country} · {a.genre}</p>
                        </div>
                      </div>
                      <div className="bg-crimson-700/5 border border-crimson-700/10 px-3 py-1.5 mb-3 inline-block">
                        <p className="font-display text-[10px] tracking-wide text-crimson-700">✦ {a.award}</p>
                      </div>
                      <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed">{a.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>

      <section className="bg-crimson-950 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label justify-center">For Authors</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ivory-100 tracking-wide mb-4">Create Your Author Profile</h2>
          <p className="font-serif text-lg text-ivory-100/65 mb-9 leading-relaxed">Join over 1,200 independent African authors on T.A.L.A. Your work, your awards, your story — all in one permanent profile.</p>
          <Link to="/contact" className="btn-crimson">Register as an Author</Link>
        </div>
      </section>
    </>
  )
}
