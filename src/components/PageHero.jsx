import React from 'react'

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-hero-dark pt-40 pb-24">
      <div className="absolute inset-0 grid-texture pointer-events-none" />
      <div className="absolute top-0 left-[8%] w-px h-full bg-gradient-to-b from-transparent via-gold-500/25 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="section-label">{label}</p>
        <h1 className="font-display font-bold text-ivory-100 leading-tight tracking-wide
                       text-4xl sm:text-5xl lg:text-7xl max-w-3xl mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif text-lg lg:text-xl text-ivory-100/68 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
