import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { teamMembers, values } from '../data/index.js'

export default function About() {
  return (
    <>
      <PageHero label="Our Story" title="About T.A.L.A."
        subtitle="The Africa Laureate Awards was founded on a single conviction — that Africa's independent literary voices deserve a world-class stage." />

      <section className="bg-ivory-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-crimson-900 tracking-wide mb-5 leading-snug">Africa's Platform for Independent Authors</h2>
              <p className="font-body text-base text-crimson-800/68 leading-relaxed mb-4">Founded in 2017 in Lagos, Nigeria, T.A.L.A. was born out of a frustration — and a vision. Frustration that self-published and independently published African authors were systematically excluded from major literary recognition.</p>
              <p className="font-body text-base text-crimson-800/68 leading-relaxed mb-4">In eight years we have grown from a Lagos-based initiative into a continental platform, recognising authors from 18 African countries across six award categories.</p>
              <p className="font-body text-base text-crimson-800/68 leading-relaxed mb-8">We work with a volunteer panel of 30+ literary judges — authors, editors, academics, and journalists — whose commitment to African literature matches our own.</p>
              <Link to="/awards" className="btn-crimson">View the Awards</Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-crimson-950 to-crimson-700 aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,168,76,0.15)_0%,transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display font-black text-crimson-800/22 leading-none text-[18vw] lg:text-[10vw]">T.A.</p>
                    <p className="font-display font-black text-crimson-800/22 leading-none text-[18vw] lg:text-[10vw]">L.A.</p>
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-400 mx-auto mt-4 flex items-center justify-center text-2xl text-crimson-900">✦</div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-serif italic text-lg text-ivory-100/78 leading-relaxed">"Every great African story deserves to be read."</p>
                  <p className="font-display text-[10px] tracking-[2px] text-gold-400 mt-2">— DR. AMINA KOYA, FOUNDER</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-gold-500 to-gold-400 p-5">
                <p className="font-display text-3xl font-bold text-crimson-900 leading-none">2017</p>
                <p className="font-display text-[10px] tracking-wide text-crimson-900 mt-0.5">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-300 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">What Drives Us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Our Values</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-crimson-700/10">
            {values.map((v, i) => (
              <div key={i} className="bg-ivory-200 p-10 text-center">
                <p className="text-2xl text-crimson-700 mb-4">{v.icon}</p>
                <h3 className="font-display text-[13px] tracking-[2px] uppercase text-crimson-900 mb-3">{v.title}</h3>
                <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label justify-center">The People</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-crimson-900 tracking-wide">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <div key={i} className="text-center p-8 border border-crimson-700/8">
                <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-br from-crimson-700 to-crimson-600 flex items-center justify-center font-display text-2xl font-bold text-gold-500">{m.initial}</div>
                <h3 className="font-serif text-lg font-semibold text-crimson-950 mb-1">{m.name}</h3>
                <p className="font-display text-[10px] tracking-wide uppercase text-crimson-700 mb-3">{m.role}</p>
                <p className="font-body text-[14px] text-crimson-800/58 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson-950 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ivory-100 tracking-wide mb-4">Be Part of the Story</h2>
          <p className="font-serif text-lg text-ivory-100/65 mb-9 leading-relaxed">Whether you're an author, a reader, or a literary professional — there's a place for you at T.A.L.A.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-crimson">Get in Touch</Link>
            <Link to="/authors" className="btn-outline-ivory">Meet Our Authors</Link>
          </div>
        </div>
      </section>
    </>
  )
}
