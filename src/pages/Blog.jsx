import React, { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { blogPosts } from '../data/index.js'

const categories = ['All','News','Opinion','Resources','Awards','Culture','Profiles']

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter)
  const [featured, ...rest] = filtered

  return (
    <>
      <PageHero label="Insights & Stories" title="The T.A.L.A. Blog"
        subtitle="News, opinions, resources and author profiles from across the African literary world." />

      <div className="bg-ivory-300 border-b border-crimson-700/8 py-5 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`font-display text-[10px] tracking-[2px] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer
                          ${filter === c ? 'bg-crimson-700 text-ivory-100 border-crimson-700'
                                         : 'bg-transparent text-crimson-700 border-crimson-700/25 hover:border-crimson-700'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0
            ? <p className="text-center py-24 font-serif text-xl text-crimson-800/48">No posts in this category yet.</p>
            : (
              <>
                {featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 border border-crimson-700/10 mb-10 hover:shadow-lg hover:border-crimson-700/30 transition-all duration-300 cursor-pointer">
                    <div className="relative min-h-[260px] bg-gradient-to-br from-crimson-950 to-crimson-700 flex items-end p-10 overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,168,76,0.1)_0%,transparent_60%)]" />
                      <div className="relative z-10">
                        <p className="font-display text-[11px] tracking-[3px] uppercase text-gold-400 mb-3">Featured Post</p>
                        <p className="font-display text-7xl text-gold-500/15 font-black leading-none">01</p>
                      </div>
                    </div>
                    <div className="p-10 bg-ivory-100">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="bg-crimson-700/7 border border-crimson-700/12 text-crimson-700 font-display text-[9px] tracking-[2px] uppercase px-3 py-1">{featured.category}</span>
                        <span className="font-display text-[10px] text-crimson-800/48">{featured.readTime}</span>
                      </div>
                      <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-crimson-950 leading-snug mb-4">{featured.title}</h2>
                      <p className="font-body text-[15px] text-crimson-800/58 leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex justify-between items-center border-t border-crimson-700/8 pt-4">
                        <span className="font-display text-[10px] text-crimson-800/48">{featured.date}</span>
                        <span className="font-display text-[10px] tracking-wide text-crimson-700 border-b border-crimson-700 pb-0.5">Read More →</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map(p => (
                    <article key={p.id} className="bg-ivory-100 border border-crimson-700/8 overflow-hidden hover:shadow-md hover:-translate-y-1 hover:border-crimson-700/30 transition-all duration-300 cursor-pointer">
                      <div className="h-1.5 bg-gradient-to-r from-crimson-700 to-crimson-600" />
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-crimson-700/6 border border-crimson-700/10 text-crimson-700 font-display text-[9px] tracking-[2px] uppercase px-2.5 py-1">{p.category}</span>
                          <span className="font-display text-[10px] text-crimson-800/45">{p.readTime}</span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-crimson-950 leading-snug mb-3">{p.title}</h3>
                        <p className="font-body text-[14px] text-crimson-800/55 leading-relaxed mb-5">{p.excerpt}</p>
                        <div className="border-t border-crimson-700/7 pt-4 flex justify-between items-center">
                          <span className="font-display text-[10px] text-crimson-800/45">{p.date}</span>
                          <span className="font-display text-[10px] tracking-wide text-crimson-700">Read →</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
        </div>
      </section>
    </>
  )
}
