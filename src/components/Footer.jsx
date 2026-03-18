import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks, services, blogPosts } from '../data/index.js'
import logo from '../assets/unnamed (1)-BNgkJFQz.jpg'
export default function Footer() {
  return (
    <footer className="bg-crimson-950 text-ivory-100">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-gold-500/15">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 no-underline mb-5">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                <img src={logo} alt="" />
              </div>
              <div>
                <p className="font-display text-[13px] tracking-[3px] font-bold leading-none">T.A.L.A.</p>
                <p className="font-serif text-gold-500 text-[10px] tracking-wide leading-none mt-0.5">The Africa Laureate Awards</p>
              </div>
            </Link>
            <p className="font-body text-ivory-100/58 text-[15px] leading-relaxed mb-6 max-w-[240px]">
              Celebrating and amplifying independent African authors across the continent since 2017.
            </p>
            <div className="flex gap-2">
              {['X','IG','FB','LI'].map(s => (
                <a key={s} href="#"
                  className="w-8 h-8 border border-gold-500/30 text-gold-500 flex items-center justify-center
                             font-display text-[10px] font-bold no-underline
                             transition-all duration-200 hover:bg-gold-500 hover:text-crimson-900 hover:border-gold-500">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-[10px] tracking-[3px] uppercase text-gold-500 mb-5">Navigate</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="font-body text-[15px] text-ivory-100/58 no-underline hover:text-gold-400 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h4 className="font-display text-[10px] tracking-[3px] uppercase text-gold-500 mb-5">For Authors</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {services.map(s => (
                <li key={s.title}>
                  <Link to={s.to} className="font-body text-[15px] text-ivory-100/58 no-underline hover:text-gold-400 transition-colors duration-200">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest + Contact */}
          <div>
            <h4 className="font-display text-[10px] tracking-[3px] uppercase text-gold-500 mb-5">Latest Posts</h4>
            <ul className="space-y-3 mb-8 list-none p-0 m-0">
              {blogPosts.slice(0, 3).map(p => (
                <li key={p.id}>
                  <Link to="/blog" className="font-body text-[13px] text-ivory-100/55 no-underline leading-snug block hover:text-gold-400 transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display text-[10px] tracking-[3px] uppercase text-gold-500 mb-4">Contact</h4>
            {[
              { icon: '✉', text: 'hello@talawards.org' },
              { icon: '☏', text: '+234 800 TALA ORG'   },
              { icon: '◎', text: 'Lagos, Nigeria'       },
            ].map(c => (
              <div key={c.text} className="flex gap-2.5 items-start mb-3">
                <span className="text-gold-500 text-sm flex-shrink-0 mt-0.5">{c.icon}</span>
                <span className="font-body text-[14px] text-ivory-100/55">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6">
          <p className="font-display text-[11px] tracking-wide text-ivory-100/38">
            © 2026 The Africa Laureate Awards. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Use','Cookie Policy'].map(l => (
              <a key={l} href="#" className="font-display text-[10px] tracking-wide text-ivory-100/38 no-underline hover:text-gold-500 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
