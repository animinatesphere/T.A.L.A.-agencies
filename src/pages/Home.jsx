import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { stats, authors, testimonials } from '../data/index.js'
import Pricing from '../components/Pricing.jsx'

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
  const words = ['Digital Solutions.','Bespoke Websites.','Global Reach.','Book Success.']
  const [idx, setIdx] = useState(0)
  
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      style={{
        backgroundColor: '#003D2B',
        background: `
          radial-gradient(circle at 20% 30%, rgba(0,200,83,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(0,200,83,0.05) 0%, transparent 50%),
          #003D2B
        `
      }}
    >
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-10" />
      {['left-[10%]','left-[55%]','left-[85%]'].map((p,i) => (
        <div key={i} className={`absolute top-0 ${p} w-px h-full bg-gradient-to-b from-transparent via-quill-accent/10 to-transparent`} />
      ))}
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black
                    text-white/5 leading-none select-none pointer-events-none tracking-tighter
                    text-[18vw] uppercase">Quill</motion.p>

      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full text-left">
        <motion.div {...fadeInUp}>
          <p className="flex items-center gap-4 font-display text-[10px] tracking-[5px] uppercase text-quill-accent mb-6">
            Establishing Your Digital Legacy
          </p>
          <h1 className="font-display font-bold text-white leading-[1.02] tracking-wide
                         text-5xl sm:text-6xl lg:text-9xl mb-1 uppercase">BlackQuill</h1>
          <h1 className="font-display font-bold text-gradient-gold leading-[1.02] tracking-wide
                         text-4xl sm:text-5xl lg:text-7xl mb-10 min-h-[1.15em] opacity-80 decoration-quill-accent">
            {words[idx]}
          </h1>
          <p className="font-serif text-lg lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-12">
            Nigeria’s premier agency dedicated to delivering bespoke website and e-commerce 
            projects for authors, publishers, and literary organisations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-quill shine-effect text-[12px] px-12 py-5">Book a Strategy Session</Link>
            <Link to="/authors" className="border-2 border-white/20 text-white px-10 py-5 font-display text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-quill-dark transition-all">Our Work</Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-24 bg-white/10">
          {stats.map(s => (
            <motion.div 
              variants={fadeInUp}
              key={s.label} className="px-5 py-10 text-center border border-white/5 shadow-2xl" style={{ backgroundColor: '#003D2B' }}>
              <p className="font-display font-bold text-gradient-gold text-4xl lg:text-5xl">
                <Counter value={s.value} />
              </p>
              <p className="font-display text-[10px] tracking-[2px] uppercase text-white/40 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedAuthors() {
  return (
    <section className="bg-quill-light/50 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <p className="section-label !text-quill-dark">Curated Excellence</p>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-quill-dark tracking-tight uppercase">Strategic Outcomes</h2>
          </div>
          <Link to="/authors" className="btn-outline-quill !py-4 !px-10">All Projects →</Link>
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
              key={i} className="bg-white p-12 shadow-2xl border border-quill-dark/5 hover:border-quill-accent/30 transition-all group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-sm bg-quill-dark flex items-center justify-center flex-shrink-0 font-display text-2xl font-bold text-quill-accent shadow-xl group-hover:bg-quill-accent group-hover:text-white transition-colors">
                  {a.initial}
                </div>
                <div>
                  <p className="font-display text-xl font-black text-quill-dark tracking-tighter uppercase leading-none">{a.name}</p>
                  <p className="font-display text-[9px] tracking-[2px] uppercase text-quill-dark/40 mt-2">{a.country} · {a.genre}</p>
                </div>
              </div>
              <div className="bg-quill-dark/5 px-4 py-2 mb-8 inline-block">
                <p className="font-display text-[10px] tracking-widest text-quill-dark font-bold uppercase">✦ {a.award}</p>
              </div>
              <p className="font-body text-base text-quill-dark/60 leading-relaxed italic">"{a.bio}"</p>
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
    <section className="relative py-40 overflow-hidden" style={{ backgroundColor: '#003D2B' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(0,200,83,0.05) 0%, transparent 60%)' }} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-display text-[10px] tracking-[5px] uppercase mb-4 font-bold" style={{ color: '#00C853' }}>Client Testimonials</p>
        <h2 className="font-display text-4xl lg:text-7xl font-bold text-white tracking-tight mb-8 uppercase leading-none">
          Don’t just take <br/> our word for it
        </h2>
        <p className="font-serif text-xl lg:text-2xl text-white/50 mb-20 italic">
          "Here are some happy clients to tell you about working with us!"
        </p>

        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md p-16 lg:p-24 mb-16 relative shadow-2xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <span className="absolute top-0 left-10 -translate-y-12 font-serif leading-none select-none italic"
            style={{ fontSize: '15rem', color: 'rgba(0,200,83,0.1)' }}>"</span>
          <p className="font-serif text-2xl lg:text-4xl italic leading-relaxed mb-12" style={{ color: 'rgba(255,255,255,0.9)' }}>{testimonials[active].quote}</p>
          <div className="flex items-center justify-center gap-5">
            <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl font-bold text-white shadow-lg"
              style={{ border: '2px solid #00C853' }}>
              {testimonials[active].initial}
            </div>
            <div className="text-left">
              <p className="font-display text-xl font-black text-white uppercase tracking-tighter">{testimonials[active].name}</p>
              <p className="font-display text-[9px] tracking-[3px] uppercase" style={{ color: 'rgba(0,200,83,0.6)' }}>{testimonials[active].role} · {testimonials[active].country}</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="h-1 transition-all duration-700 border-none cursor-pointer"
              style={{ width: active === i ? '4rem' : '1.5rem', backgroundColor: active === i ? '#00C853' : 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function CTABand() {
  return (
    <section className="relative py-40 overflow-hidden text-center" style={{ backgroundColor: '#003D2B' }}>
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="section-label justify-center" style={{ color: '#00C853' }}>Ready to Start?</p>
        <h2 className="font-display text-5xl lg:text-8xl font-bold text-white tracking-tight mb-8 uppercase">Let's Build Your Legacy</h2>
        <p className="font-serif text-xl lg:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Based in Nigeria, serving a global client base with beautiful, bespoke website solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact" className="btn-quill shine-effect text-sm tracking-[4px]" style={{ padding: '1.5rem 4rem' }}>Get a Free Strategy Session</Link>
          <a href="tel:07038151723"
            className="font-display text-[11px] tracking-[4px] uppercase flex items-center justify-center gap-3 no-underline transition-all"
            style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1.25rem 3rem' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor='#fff'; e.currentTarget.style.color='#003D2B'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#fff'; }}>
            Call Now: 0703 815 1723
          </a>
        </div>
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
      <Pricing />
      <FeaturedAuthors />
      <Testimonials />
      <CTABand />
    </motion.div>
  )
}
