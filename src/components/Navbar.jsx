import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/index.js'
import logo from '../assets/unnamed (1)-BNgkJFQz.jpg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const solid = scrolled || !isHome || open
 
   return (
     <>
       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
         ${solid ? 'bg-crimson-950 shadow-lg border-b border-gold-500/15 py-3'
                 : 'bg-transparent max-lg:bg-crimson-950 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
               <img src={logo} alt="" />
            </div>
            <div>
              <p className="font-display text-ivory-100 text-[13px] tracking-[3px] font-bold leading-none">T.A.L.A.</p>
              <p className="font-serif text-gold-500 text-[10px] tracking-wide leading-none mt-0.5">The Africa Laureate Awards</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) =>
                  `font-display text-[10px] tracking-[2.5px] uppercase no-underline pb-0.5 transition-all duration-200
                   ${isActive ? 'text-gold-500 border-b border-gold-500'
                              : 'text-ivory-200 hover:text-gold-400 border-b border-transparent'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/awards" className="btn-crimson !py-2.5 !px-5 !text-[10px]">Nominate</Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden text-gold-500 text-2xl leading-none p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-crimson-950/98 flex flex-col items-center justify-center gap-8
                       transition-transform duration-300 ease-in-out
                       ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-gold-500 text-2xl bg-transparent border-none cursor-pointer"
          aria-label="Close">✕</button>
        <p className="font-display text-gold-500 text-[11px] tracking-[4px] mb-2">✦ T.A.L.A. ✦</p>
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to}
            className={({ isActive }) =>
              `font-serif text-3xl font-semibold no-underline transition-colors
               ${isActive ? 'text-gold-400' : 'text-ivory-100 hover:text-gold-400'}`}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/awards" className="btn-crimson mt-4">Nominate Your Work</Link>
      </div>
    </>
  )
}
