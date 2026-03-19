import React from 'react'
import { motion } from 'framer-motion'
import { pricingPlans } from '../data/index.js'
import { Link } from 'react-router-dom'

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

export default function Pricing() {
  return (
    <section className="bg-white py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-24">
          <p className="section-label justify-center" style={{ color: '#003D2B' }}>Our Packages</p>
          <h2 className="font-display text-4xl lg:text-8xl font-black tracking-tighter uppercase mb-6" style={{ color: '#003D2B' }}>Strategic Plans</h2>
          <div className="gold-divider mx-auto" />
          <p className="font-serif text-xl lg:text-2xl max-w-3xl mx-auto italic leading-relaxed" style={{ color: 'rgba(0,61,43,0.6)' }}>
            Choose the perfect digital foundation for your literary project. Bespoke, scalable, and built for global authors.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <motion.div
              variants={fadeInUp}
              key={plan.name}
              className="relative flex flex-col shadow-xl transition-all duration-500"
              style={{
                padding: '3rem',
                border: plan.isPopular ? '2px solid #00C853' : '2px solid rgba(0,61,43,0.05)',
                backgroundColor: plan.isPopular ? '#003D2B' : '#fff',
                transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.isPopular ? 10 : 1,
              }}>

              {plan.isPopular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 font-display text-[10px] font-black tracking-[4px] uppercase px-5 py-2 shadow-xl"
                  style={{ backgroundColor: '#00C853', color: '#fff' }}>
                  Most Popular
                </div>
              )}

              <p className="font-display text-[11px] tracking-[4px] uppercase mb-4 font-bold"
                style={{ color: plan.isPopular ? '#00C853' : 'rgba(0,61,43,0.4)' }}>
                {plan.name}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl lg:text-7xl font-display font-black tracking-tighter"
                  style={{ color: plan.isPopular ? '#fff' : '#003D2B' }}>
                  {plan.price}
                </span>
                <span className="text-sm font-display tracking-[3px] uppercase"
                  style={{ color: plan.isPopular ? 'rgba(255,255,255,0.4)' : 'rgba(0,61,43,0.3)' }}>
                  {plan.currency}
                </span>
              </div>

              <p className="font-body text-base mb-10 leading-relaxed font-medium"
                style={{ color: plan.isPopular ? 'rgba(255,255,255,0.6)' : 'rgba(0,61,43,0.6)' }}>
                {plan.desc}
              </p>

              <div className="w-full mb-10" style={{ height: '1px', backgroundColor: plan.isPopular ? 'rgba(255,255,255,0.1)' : 'rgba(0,61,43,0.05)' }} />

              <ul className="space-y-5 mb-12 flex-1 list-none p-0 m-0">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-4 text-sm font-body items-start font-medium">
                    <span className="font-bold" style={{ color: '#00C853' }}>✦</span>
                    <span style={{ color: plan.isPopular ? 'rgba(255,255,255,0.8)' : 'rgba(0,61,43,0.8)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/contact?plan=${plan.name}`}
                className="w-full text-center py-5 font-display text-[11px] tracking-[4px] uppercase font-black transition-all no-underline shadow-2xl block hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: plan.isPopular ? '#00C853' : '#003D2B',
                  color: '#fff',
                }}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
