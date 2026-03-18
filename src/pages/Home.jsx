import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { stats, awardCategories, authors, testimonials, blogPosts } from '../data/index.js'

function Counter({ value, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value.replace(/,/g, '').replace(/\+/g, ''))
      if (start === end) return
      
      let totalMiliseconds = duration * 1000
      let incrementTime = (totalMiliseconds / end)
      
      let timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, Math.max(incrementTime, 10))
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

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
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black
                    text-crimson-800/10 leading-none select-none pointer-events-none tracking-tighter
                    text-[22vw]">TALA</motion.p>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div {...fadeInUp}>
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
            <Link to="/awards"  className="btn-crimson shine-effect">Nominate a Work</Link>
            <Link to="/authors" className="btn-outline-ivory">Meet the Authors</Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-20 bg-gold-500/20">
          {stats.map(s => (
            <motion.div 
              variants={fadeInUp}
              key={s.label} className="bg-crimson-950/60 backdrop-blur-sm px-5 py-8 text-center border border-gold-500/5">
              <p className="font-display font-bold text-gradient-gold text-4xl lg:text-5xl">
                <Counter value={s.value} />
              </p>
              <p className="font-display text-[10px] tracking-[2px] uppercase text-ivory-100/40 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AwardsPreview() {
  return (
    <section className="bg-ivory-300 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="section-label justify-center">Award Categories</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Six Paths to Recognition</h2>
          <div className="gold-divider mx-auto" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-crimson-700/5">
          {awardCategories.map((a, i) => (
            <motion.div 
              variants={fadeInUp}
              key={i} className="bg-white/60 backdrop-blur-sm p-12 border-t-4 border-transparent hover:border-crimson-700 hover:bg-white transition-all duration-500 group">
              <span className="text-4xl block mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">{a.icon}</span>
              <h3 className="font-display text-base tracking-widest text-crimson-900 mb-4 uppercase">{a.title}</h3>
              <p className="font-body text-base text-crimson-800/70 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center mt-16">
          <Link to="/awards" className="btn-crimson shine-effect">View Full Award Details</Link>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedAuthors() {
  return (
    <section className="bg-ivory-100 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div>
            <p className="section-label">Laureates</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Featured Authors</h2>
          </div>
          <Link to="/authors" className="btn-outline-crimson hover-glow !py-3 !px-8 !text-[11px] !tracking-[3px] font-display uppercase border-2 border-crimson-900 text-crimson-900 transition-all no-underline">All Authors →</Link>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.slice(0, 3).map((a, i) => (
            <motion.div 
              variants={fadeInUp}
              key={i} className="card p-10 hover-glow">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crimson-800 to-crimson-600 flex items-center justify-center flex-shrink-0 font-display text-2xl font-bold text-gold-300 shadow-xl">
                  {a.initial}
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-crimson-950 leading-tight">{a.name}</p>
                  <p className="font-display text-[10px] tracking-[2px] uppercase text-crimson-700 mt-1">{a.country} · {a.genre}</p>
                </div>
              </div>
              <div className="bg-crimson-700/5 border border-crimson-700/10 px-4 py-2 mb-6 inline-block">
                <p className="font-display text-[11px] tracking-widest text-crimson-700 font-bold uppercase">✦ {a.award}</p>
              </div>
              <p className="font-body text-base text-crimson-800/70 leading-relaxed italic">"{a.bio}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  return (
    <section className="relative bg-crimson-950 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_50%,rgba(153,0,17,0.1)_0%,transparent_60%)]" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="section-label justify-center text-gold-400">Author Voices</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 tracking-wide mb-16">What Our Laureates Say</h2>
        
        <motion.div 
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md border border-gold-500/10 p-16 mb-12 relative shadow-2xl">
          <span className="absolute top-0 left-10 -translate-y-6 font-serif text-9xl text-gold-500/20 leading-none select-none">"</span>
          <p className="font-serif text-2xl lg:text-3xl italic text-ivory-100 leading-relaxed mb-10">{testimonials[active].quote}</p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center font-display text-xl font-bold text-crimson-950 shadow-lg">
              {testimonials[active].initial}
            </div>
            <div className="text-left">
              <p className="font-serif text-xl font-semibold text-ivory-100">{testimonials[active].name}</p>
              <p className="font-display text-[10px] tracking-[3px] uppercase text-gold-400/80">{testimonials[active].role} · {testimonials[active].country}</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-500 border-none cursor-pointer
                          ${active === i ? 'w-12 bg-gold-400' : 'w-4 bg-white/20 hover:bg-white/40'}`} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function BlogPreview() {
  return (
    <section className="bg-ivory-200 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div>
            <p className="section-label">Insights</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Latest from the Blog</h2>
          </div>
          <Link to="/blog" className="btn-outline-crimson hover-glow !py-3 !px-8 !text-[11px] !tracking-[3px] font-display uppercase border-2 border-crimson-900 text-crimson-900 transition-all no-underline">All Posts →</Link>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map(p => (
            <motion.article 
              variants={fadeInUp}
              key={p.id} className="card p-10 cursor-pointer group">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-crimson-700/10 border border-crimson-700/20 text-crimson-700 font-display text-[10px] tracking-[2px] uppercase px-4 py-1.5">{p.category}</span>
                <span className="font-display text-[11px] text-crimson-800/40 uppercase tracking-tighter">{p.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-crimson-950 leading-tight mb-4 group-hover:text-crimson-700 transition-colors">{p.title}</h3>
              <p className="font-body text-base text-crimson-800/60 leading-relaxed mb-8">{p.excerpt}</p>
              <div className="border-t border-crimson-700/10 pt-6 flex justify-between items-center">
                <span className="font-display text-[11px] text-crimson-800/40 uppercase tracking-wider">{p.date}</span>
                <span className="font-display text-[11px] tracking-[2px] uppercase text-crimson-700 font-bold group-hover:translate-x-1 transition-transform">Read More →</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTABand() {
  return (
    <section className="relative bg-crimson-950 py-32 overflow-hidden text-center">
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-30" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="section-label justify-center text-gold-400">Nominations Open</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 tracking-wide mb-6">Is Your Book Ready for Recognition?</h2>
        <p className="font-serif text-xl text-ivory-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Submit your work across six award categories. Independent and self-published authors across Africa are welcome. Free to enter.
        </p>
        <Link to="/awards" className="btn-gold shine-effect px-12 py-5 text-sm tracking-[4px]">Submit Your Nomination</Link>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-ivory-100">
      <Hero />
      <AwardsPreview />
      <FeaturedAuthors />
      <Testimonials />
      <BlogPreview />
      <CTABand />
    </motion.div>
  )
}
