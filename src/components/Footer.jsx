import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks, services } from '../data/index.js'

const DARK = '#003D2B'
const ACCENT = '#00C853'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: DARK, color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-10 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 pb-20" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 no-underline mb-8 group">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-2xl shadow-lg transition-transform group-hover:scale-110"
                style={{ backgroundColor: ACCENT, color: '#fff' }}>Q</div>
              <div>
                <p className="font-display text-lg tracking-[4px] font-black leading-none uppercase text-white">BlackQuill</p>
                <p className="font-display text-[9px] tracking-[2px] leading-none mt-2 uppercase font-bold" style={{ color: ACCENT }}>Digital Studio</p>
              </div>
            </Link>
            <p className="font-body text-base leading-relaxed mb-8 max-w-[280px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Nigeria's only agency dedicated to delivering bespoke website and e-commerce projects for the book publishing industry.
            </p>
            <div className="flex gap-3">
              {['X', 'IG', 'FB', 'LI'].map(s => (
                <a key={s} href="#"
                  className="w-10 h-10 flex items-center justify-center font-display text-[10px] font-bold no-underline transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-[10px] tracking-[4px] uppercase mb-8 font-bold" style={{ color: ACCENT }}>Navigate</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to}
                    className="font-display text-sm tracking-widest no-underline uppercase font-medium transition-colors duration-300"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-[10px] tracking-[4px] uppercase mb-8 font-bold" style={{ color: ACCENT }}>Solutions</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {services.slice(0, 5).map(s => (
                <li key={s.title}>
                  <Link to="/services"
                    className="font-display text-sm tracking-widest no-underline uppercase font-medium transition-colors duration-300"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[10px] tracking-[4px] uppercase mb-8 font-bold" style={{ color: ACCENT }}>Contact Us</h4>
            {[
              { icon: '✉', text: 'hello@blackquill.digital' },
              { icon: '☏', text: '0703 815 1723' },
              { icon: '◎', text: 'Lagos, Nigeria' },
            ].map(c => (
              <div key={c.text} className="flex gap-4 items-start mb-6">
                <span className="text-lg flex-shrink-0" style={{ color: ACCENT }}>{c.icon}</span>
                <span className="font-body text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.text}</span>
              </div>
            ))}
            <div className="mt-10 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p className="font-display text-[10px] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>Got a global brief?</p>
              <Link to="/contact" className="font-display text-xs tracking-[2px] uppercase no-underline mt-2 inline-block hover:underline" style={{ color: ACCENT }}>
                Consult with Sales →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-10">
          <p className="font-display text-[10px] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2026 BlackQuill Digital Agency. Nigeria's Literary Web Partner.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#"
                className="font-display text-[10px] tracking-[3px] no-underline uppercase transition-colors"
                style={{ color: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
