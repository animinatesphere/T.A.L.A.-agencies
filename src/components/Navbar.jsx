import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/index.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* ── Navbar — z-[60] so it always sits ABOVE the overlay ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300
                    py-6 px-10 flex justify-between items-center
                    border-b border-white/5
                    ${scrolled ? 'backdrop-blur-md' : ''}`}
        style={{ backgroundColor: '#003D2B' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img 
            src="/blackquill-logo.png" 
            alt="BlackQuill Logo" 
            className="w-10 h-10 object-contain rounded-sm"
          />
          <span className="font-display text-white text-lg font-bold tracking-widest uppercase">
            BlackQuill
          </span>
        </Link>

        {/* Menu Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 text-white font-display text-[10px]
                     tracking-[4px] uppercase border-none bg-transparent cursor-pointer group"
        >
          <span
            className="transition-colors duration-200"
            style={{ color: open ? '#00C853' : 'white' }}
          >
            {open ? 'Close' : 'Menu'}
          </span>
          <div className="flex flex-col gap-1 w-6">
            <span
              className="h-px bg-white transition-all duration-300 block"
              style={{ transform: open ? 'rotate(45deg) translateY(5px)' : 'none' }}
            />
            <span
              className="h-px bg-white transition-all duration-300 block"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="h-px bg-white transition-all duration-300 block"
              style={{ transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none' }}
            />
          </div>
        </button>
      </nav>

      {/* ── Full-screen overlay — z-[55] so navbar stays on top ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Left Panel */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="w-full lg:w-[45%] p-12 lg:p-24 flex flex-col justify-center
                         border-r border-white/5 overflow-y-auto"
              style={{ backgroundColor: '#003D2B' }}
            >
              <div className="space-y-12">
                {/* Schedule block */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/40 font-display text-[9px] tracking-[4px] uppercase">
                    <span className="text-xl">📅</span> Let's talk about your goals
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight">
                    Schedule time <br /> to talk
                  </h2>
                  <a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-8 py-4 text-white font-display text-[10px] tracking-[3px]
                               uppercase font-bold hover:opacity-90 transition-opacity mt-4 no-underline"
                    style={{ backgroundColor: '#00C853' }}
                  >
                    Book 30 Minutes
                  </a>
                  <p className="text-white/60 font-body text-sm mt-6">
                    Want to talk now? Call us on{' '}
                    <span className="text-white font-bold">0703 815 1723</span>
                  </p>
                </div>

                {/* Strategy block */}
                <div className="pt-12 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-4 text-white/40 font-display text-[9px] tracking-[4px] uppercase">
                    <span className="text-xl">⚡</span> Limited Time Offer
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-display font-bold text-white">
                    Get a FREE <br /> Strategy Session
                  </h3>
                  <p className="text-white/50 font-body text-sm max-w-sm leading-relaxed">
                    We will understand your business and goals, review your existing
                    activity, and share strategies to help you get better results.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 text-white font-display text-[10px]
                               tracking-[3px] uppercase font-bold hover:opacity-90
                               transition-opacity mt-4 no-underline"
                    style={{ backgroundColor: '#00C853' }}
                  >
                    Get Started
                  </Link>
                  <p className="text-white/40 font-display text-[9px] tracking-[2px] mt-6 uppercase">
                    Got a brief or RFP? Send it to{' '}
                    <span className="text-white/80 lowercase">hello@blackquill.digital</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Panel — Nav links */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="w-full lg:w-[55%] p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden"
              style={{ backgroundColor: '#E7F3EF' }}
            >
              <p className="font-display text-[9px] tracking-[4px] uppercase mb-10"
                style={{ color: 'rgba(0,61,43,0.4)' }}>
                How may we help you?
              </p>

              <div className="flex flex-col gap-6 lg:gap-10">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-display font-black uppercase tracking-tighter
                       transition-all duration-300 no-underline
                       text-4xl lg:text-7xl
                       ${isActive
                         ? 'opacity-100'
                         : 'opacity-30 hover:opacity-100 hover:translate-x-4'
                       }`
                    }
                    style={{ color: '#003D2B' }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Decorative watermark */}
              <div
                className="absolute bottom-12 right-0 font-display font-black uppercase
                           leading-none whitespace-nowrap select-none pointer-events-none
                           text-[12vh] overflow-hidden"
                style={{ color: 'rgba(0,61,43,0.06)' }}
              >
                Digital Studio
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}