import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { teamMembers, values } from '../data/index.js'

export default function About() {
  return (
    <>
      <PageHero label="Our Mission" title="About BlackQuill"
        subtitle="The Nigeria’s only agency dedicated to delivering bespoke website and e-commerce projects for authors, publishers, and literary organisations." />

      <section className="bg-quill-light/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label !text-quill-dark">Who We Are</p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-quill-dark tracking-tight mb-8 leading-tight uppercase">Specialized Solutions for the Literary World</h2>
              <p className="font-body text-lg text-quill-dark/70 leading-relaxed mb-6">Welcome to BlackQuill Digital Agency. We provide specialized website solutions for the book publishing industry. Based in Nigeria, we serve a global client base with active participation in major industry events.</p>
              <p className="font-body text-lg text-quill-dark/70 leading-relaxed mb-6">Our extensive experience, coupled with active participation in industry events like The Africa Laureate Awards, ensures we have a deep understanding of our clients’ needs. We move beyond the basics and focus on your strategic objectives.</p>
              <p className="font-body text-lg text-quill-dark/70 leading-relaxed mb-10">Whether you are a self-published author or a large publishing house, we design and build beautiful, bespoke websites that are easy to manage and capable of evolving over time.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-quill">Start Your Project</Link>
                <Link to="/services" className="btn-outline-quill">Our Services</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#003D2B' }}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,200,83,0.1)_0%,transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display font-black text-white/5 leading-none text-[18vw] lg:text-[10vw] uppercase tracking-tighter">Black</p>
                    <p className="font-display font-black text-white/5 leading-none text-[18vw] lg:text-[10vw] uppercase tracking-tighter">Quill</p>
                    <div className="w-16 h-16 mx-auto mt-4 flex items-center justify-center text-3xl text-white font-bold shadow-lg" style={{ backgroundColor: '#00C853' }}>Q</div>
                  </div>
                </div>
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="font-serif italic text-xl text-white/80 leading-relaxed">"We don't just build websites; we establish literary legacies."</p>
                  <p className="font-display text-[10px] tracking-[4px] text-quill-accent mt-4 uppercase">— DR. AMINA KOYA, FOUNDER</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 shadow-2xl" style={{ backgroundColor: '#00C853' }}>
                <p className="font-display text-4xl font-black text-white leading-none">500+</p>
                <p className="font-display text-[10px] tracking-widest text-white/80 mt-2 uppercase">Projects delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: '#003D2B' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <p className="section-label justify-center text-quill-accent">What Drives Us</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-white tracking-tight uppercase">Core Values</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/5 p-12 text-center hover:bg-white/10 transition-all group">
              <p className="text-4xl mb-6 group-hover:scale-110 transition-transform" style={{ color: '#00C853' }}>{v.icon}</p>
                <h3 className="font-display text-sm tracking-[3px] uppercase text-white mb-4 font-bold">{v.title}</h3>
                <p className="font-body text-base text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-quill-dark">
            <p className="section-label !text-quill-dark justify-center">The People</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold tracking-tight uppercase">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((m, i) => (
              <div key={i} className="text-center p-12 bg-quill-light/20 border border-quill-dark/5 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center font-display text-4xl font-bold shadow-2xl" style={{ backgroundColor: '#003D2B', color: '#00C853' }}>
                  {m.initial}
                </div>
                <h3 className="font-display text-2xl font-black text-quill-dark uppercase tracking-tighter mb-2">{m.name}</h3>
                <p className="font-display text-[10px] tracking-[4px] uppercase text-quill-accent mb-6 font-bold">{m.role}</p>
                <p className="font-body text-lg text-quill-dark/60 leading-relaxed italic">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center" style={{ backgroundColor: '#003D2B', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6 uppercase">Be Part of the Story</h2>
          <p className="font-serif text-2xl text-white/50 mb-12 leading-relaxed italic max-w-3xl mx-auto">Based in Nigeria, serving a global client base in the worlds of books and publishing.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-quill !px-12 !py-5">Get in Touch</Link>
            <Link to="/authors" className="border-2 border-white/20 text-white px-10 py-5 font-display text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-quill-dark transition-all no-underline">Meet Our Authors</Link>
          </div>
        </div>
      </section>
    </>
  )
}
