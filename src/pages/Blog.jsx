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
      <PageHero label="Insights & Stories" title="Quill Insights"
        subtitle="Strategic news, industry resources, and author profiles from the bespoke world of BlackQuill." />

      <div className="bg-quill-light border-b border-quill-dark/5 py-6 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-10 flex flex-wrap gap-3">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`font-display text-[10px] tracking-[3px] uppercase px-5 py-2.5 border-2 transition-all duration-300 cursor-pointer font-bold
                          ${filter === c ? 'bg-quill-dark text-white border-quill-dark'
                                         : 'bg-transparent text-quill-dark/40 border-quill-dark/10 hover:border-quill-dark/30 hover:text-quill-dark'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-10">
          {filtered.length === 0
            ? <div className="text-center py-40">
                <p className="font-display text-2xl text-quill-dark/20 uppercase tracking-widest">No posts in this category yet.</p>
              </div>
            : (
              <>
                {featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 border border-quill-dark/5 mb-20 hover:shadow-2xl hover:border-quill-accent/30 transition-all duration-500 group">
                    <div className="relative min-h-[400px] bg-quill-dark flex items-end p-16 overflow-hidden">
                      <div className="absolute inset-0 bg-quill-accent/5" />
                      <div className="relative z-10">
                        <p className="font-display text-[11px] tracking-[5px] uppercase text-quill-accent mb-4 font-bold">Featured Insight</p>
                        <p className="font-display text-[12vw] lg:text-[150px] text-white/5 font-black leading-none absolute -top-10 -left-10 select-none">01</p>
                        <hr className="w-12 border-quill-accent border-2 mb-6" />
                      </div>
                    </div>
                    <div className="p-16 bg-white flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="bg-quill-dark/5 border border-quill-dark/10 text-quill-dark font-display text-[10px] tracking-[3px] uppercase px-4 py-1.5 font-bold transition-all group-hover:bg-quill-accent group-hover:text-white group-hover:border-quill-accent">{featured.category}</span>
                        <span className="font-display text-[10px] tracking-widest text-quill-dark/30 uppercase font-bold">{featured.readTime}</span>
                      </div>
                      <h2 className="font-display text-3xl lg:text-5xl font-black text-quill-dark tracking-tighter leading-none mb-8 group-hover:text-quill-accent transition-colors">{featured.title}</h2>
                      <p className="font-body text-lg text-quill-dark/60 leading-relaxed mb-10 font-medium italic">"{featured.excerpt}"</p>
                      <div className="flex justify-between items-center border-t border-quill-dark/5 pt-8 mt-auto">
                        <span className="font-display text-[10px] tracking-widest text-quill-dark/30 uppercase font-bold">{featured.date}</span>
                        <span className="font-display text-[11px] tracking-[4px] text-quill-dark font-black uppercase border-b-2 border-quill-accent pb-1 group-hover:translate-x-2 transition-transform">Read Insight →</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {rest.map(p => (
                    <article key={p.id} className="bg-white border border-quill-dark/5 overflow-hidden hover:shadow-2xl hover:border-quill-accent/30 transition-all duration-500 group">
                      <div className="h-2 bg-quill-dark group-hover:bg-quill-accent transition-colors" />
                      <div className="p-10">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="bg-quill-dark/5 border border-quill-dark/10 text-quill-dark font-display text-[9px] tracking-[3px] uppercase px-3 py-1 font-bold group-hover:bg-quill-accent group-hover:text-white transition-colors">{p.category}</span>
                          <span className="font-display text-[9px] tracking-widest text-quill-dark/30 uppercase font-bold">{p.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl font-black text-quill-dark tracking-tighter leading-tight mb-4 group-hover:text-quill-accent transition-colors">{p.title}</h3>
                        <p className="font-body text-base text-quill-dark/60 leading-relaxed mb-8 font-medium italic">"{p.excerpt}"</p>
                        <div className="border-t border-quill-dark/5 pt-6 flex justify-between items-center">
                          <span className="font-display text-[9px] tracking-widest text-quill-dark/30 uppercase font-bold">{p.date}</span>
                          <span className="font-display text-[10px] tracking-[3px] text-quill-dark font-black uppercase group-hover:translate-x-1 transition-transform">Read →</span>
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
