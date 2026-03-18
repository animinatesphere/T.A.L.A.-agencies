import React from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Awards',   to: '/awards'   },
  { label: 'Authors',  to: '/authors'  },
  { label: 'Services', to: '/services' },
  { label: 'Blog',     to: '/blog'     },
  { label: 'About',    to: '/about'    },
]

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-dark pt-24 pb-20 px-6">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-texture pointer-events-none" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[12%] w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-0 right-[12%] w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />

      {/* Huge background 404 */}
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    font-display font-black text-crimson-800/20 leading-none
                    select-none pointer-events-none tracking-tighter
                    text-[45vw] sm:text-[32vw] lg:text-[22vw]">
        404
      </p>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        {/* Diamond icon */}
        <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-gold-500 to-gold-400
                        flex items-center justify-center text-crimson-900 text-2xl">
          ✦
        </div>

        <p className="font-display text-[11px] tracking-[4px] uppercase text-gold-500 mb-4">
          Page Not Found
        </p>

        <h1 className="font-display font-bold text-ivory-100 tracking-wide leading-tight mb-5
                       text-4xl sm:text-5xl lg:text-6xl">
          This Page Has<br />Gone Silent
        </h1>

        <p className="font-serif text-lg text-ivory-100/65 leading-relaxed mb-12 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to a story worth reading.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <Link to="/"       className="btn-crimson">Back to Home</Link>
          <Link to="/awards" className="btn-outline-ivory">View the Awards</Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-gold-500/15 pt-10">
          <p className="font-display text-[10px] tracking-[3px] uppercase text-gold-500/55 mb-5">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map(l => (
              <Link key={l.to} to={l.to}
                className="font-display text-[11px] tracking-[2px] uppercase
                           text-ivory-100/48 no-underline
                           hover:text-gold-400 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
