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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-quill-dark pt-24 pb-20 px-6">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-texture pointer-events-none opacity-20" />

      {/* Huge background 404 */}
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    font-display font-black text-white/5 leading-none
                    select-none pointer-events-none tracking-tighter
                    text-[45vw] sm:text-[32vw] lg:text-[22vw]">
        404
      </p>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        {/* Quill icon */}
        <div className="w-20 h-20 mx-auto mb-10 bg-quill-accent
                        flex items-center justify-center text-white text-3xl shadow-2xl">
          🖋️
        </div>

        <p className="font-display text-[11px] tracking-[5px] uppercase text-quill-accent mb-6 font-bold">
          Strategic Alert
        </p>

        <h1 className="font-display font-black text-white tracking-tighter uppercase leading-none mb-8
                       text-4xl sm:text-6xl lg:text-8xl">
          Path Not Found
        </h1>

        <p className="font-body text-xl text-white/50 leading-relaxed mb-16 max-w-sm mx-auto font-medium italic">
          "The requested coordinates do not align with our strategic map. Let us redirect you to a more productive destination."
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-20">
          <Link to="/" className="btn-quill !px-12">Return to Base</Link>
          <Link to="/services" className="border-2 border-white/20 text-white px-10 py-3.5 font-display text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-quill-dark transition-all no-underline font-bold">Our Solutions</Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-white/5 pt-12">
          <p className="font-display text-[10px] tracking-[4px] uppercase text-white/20 mb-8 font-bold">
            Redirection Options
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map(l => (
              <Link key={l.to} to={l.to}
                className="font-display text-[11px] tracking-[3px] uppercase
                           text-white/40 no-underline font-bold
                           hover:text-quill-accent transition-colors duration-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
