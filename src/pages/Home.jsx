import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { stats, awardCategories, authors, testimonials, blogPosts } from '../data/index.js'

function Hero() {
  const words = ['Independent Authors.','African Voices.','Untold Stories.','Literary Excellence.']
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-dark pt-28 pb-20">
      <div className="absolute inset-0 grid-texture pointer-events-none" />
      {['left-[10%]','left-[55%]','left-[85%]'].map((p,i) => (
        <div key={i} className={`absolute top-0 ${p} w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent`} />
      ))}
      <p className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black
                    text-crimson-800/20 leading-none select-none pointer-events-none tracking-tighter
                    text-[22vw]">TALA</p>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="section-label">The Africa Laureate Awards</p>
        <h1 className="font-display font-bold text-ivory-100 leading-[1.02] tracking-wide
                       text-5xl sm:text-6xl lg:text-8xl mb-1">Honouring</h1>
        <h1 className="font-display font-bold text-gradient-gold leading-[1.02] tracking-wide
                       text-5xl sm:text-6xl lg:text-8xl mb-8 min-h-[1.15em]">
          {words[idx]}
        </h1>
        <p className="font-serif text-lg lg:text-xl text-ivory-200 leading-relaxed max-w-xl mb-12">
          T.A.L.A. is the continent's premier award platform celebrating self-published and
          independent authors. We exist to elevate African literature — in every language,
          from every corner of the continent.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/awards"  className="btn-crimson">Nominate a Work</Link>
          <Link to="/authors" className="btn-outline-ivory">Meet the Authors</Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-20 bg-gold-500/20">
          {stats.map(s => (
            <div key={s.label} className="bg-crimson-950/60 backdrop-blur-sm px-5 py-6 text-center">
              <p className="font-display font-bold text-gradient-gold text-4xl lg:text-5xl">{s.value}</p>
              <p className="font-display text-[10px] tracking-[2px] uppercase text-ivory-100/48 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AwardsPreview() {
  return (
    <section className="bg-ivory-300 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label justify-center">Award Categories</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Six Paths to Recognition</h2>
          <div className="gold-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-crimson-700/10">
          {awardCategories.map((a, i) => (
            <div key={i} className="bg-ivory-100 p-10 border-t-4 border-transparent hover:border-crimson-700 hover:bg-ivory-200 transition-all duration-300">
              <span className="text-3xl block mb-4">{a.icon}</span>
              <h3 className="font-display text-sm tracking-wide text-crimson-900 mb-3">{a.title}</h3>
              <p className="font-body text-[15px] text-crimson-800/58 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/awards" className="btn-outline-crimson">View Full Award Details</Link>
        </div>
      </div>
    </section>
  )
}

function FeaturedAuthors() {
  return (
    <section className="bg-ivory-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <p className="section-label">Laureates</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Featured Authors</h2>
          </div>
          <Link to="/authors" className="btn-outline-crimson !py-2.5 !px-6 !text-[10px]">All Authors →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.slice(0, 3).map((a, i) => (
            <div key={i} className="card p-8 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-crimson-700 to-crimson-600 flex items-center justify-center flex-shrink-0 font-display text-xl font-bold text-gold-500">
                  {a.initial}
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-crimson-950 leading-tight">{a.name}</p>
                  <p className="font-display text-[10px] tracking-wide text-crimson-700 mt-0.5">{a.country} · {a.genre}</p>
                </div>
              </div>
              <div className="bg-crimson-700/5 border border-crimson-700/10 px-3 py-1.5 mb-4 inline-block">
                <p className="font-display text-[10px] tracking-wide text-crimson-700">✦ {a.award}</p>
              </div>
              <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed">{a.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  return (
    <section className="relative bg-crimson-700 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="section-label justify-center text-gold-400">Author Voices</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 tracking-wide mb-14">What Our Laureates Say</h2>
        <div className="bg-white/7 border border-gold-500/20 p-12 mb-8 relative">
          <span className="absolute top-0 left-10 -translate-y-4 font-serif text-8xl text-gold-500/38 leading-none select-none">"</span>
          <p className="font-serif text-xl lg:text-2xl italic text-ivory-100 leading-relaxed mb-8">{testimonials[active].quote}</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center font-display text-base font-bold text-crimson-900">
              {testimonials[active].initial}
            </div>
            <div className="text-left">
              <p className="font-serif text-base font-semibold text-ivory-100">{testimonials[active].name}</p>
              <p className="font-display text-[10px] tracking-wide text-gold-400">{testimonials[active].role} · {testimonials[active].country}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-2 transition-all duration-300 border-none cursor-pointer
                          ${active === i ? 'w-8 bg-gold-500' : 'w-2 bg-gold-500/30 hover:bg-gold-500/60'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogPreview() {
  return (
    <section className="bg-ivory-300 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <p className="section-label">Insights</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Latest from the Blog</h2>
          </div>
          <Link to="/blog" className="btn-outline-crimson !py-2.5 !px-6 !text-[10px]">All Posts →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map(p => (
            <article key={p.id} className="card p-8 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-crimson-700/7 border border-crimson-700/12 text-crimson-700 font-display text-[9px] tracking-[2px] uppercase px-3 py-1">{p.category}</span>
                <span className="font-display text-[10px] text-crimson-800/48">{p.readTime}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-crimson-950 leading-snug mb-3">{p.title}</h3>
              <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed mb-5">{p.excerpt}</p>
              <div className="border-t border-crimson-700/8 pt-4 flex justify-between items-center">
                <span className="font-display text-[10px] text-crimson-800/48">{p.date}</span>
                <span className="font-display text-[10px] tracking-wide text-crimson-700">Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABand() {
  return (
    <section className="relative bg-gradient-to-br from-crimson-950 to-crimson-700 py-24 overflow-hidden text-center">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="section-label justify-center text-gold-400">Nominations Open</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 tracking-wide mb-4">Is Your Book Ready for Recognition?</h2>
        <p className="font-serif text-lg text-ivory-100/68 mb-10 max-w-xl mx-auto leading-relaxed">
          Submit your work across six award categories. Independent and self-published authors across Africa are welcome. Free to enter.
        </p>
        <Link to="/awards" className="btn-gold">Submit Your Nomination</Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <AwardsPreview />
      <FeaturedAuthors />
      <Testimonials />
      <BlogPreview />
      <CTABand />
    </>
  )
}
