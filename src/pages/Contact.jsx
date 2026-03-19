import React from 'react'
import PageHero from '../components/PageHero.jsx'
import OrderForm from '../components/OrderForm.jsx'

const contactInfo = [
  { icon: '✉', label: 'Email',        value: 'hello@blackquill.digital' },
  { icon: '☏', label: 'WhatsApp',     value: '+234 703 815 1723'   },
  { icon: '◎', label: 'Lagos Studio', value: 'Creative Hub, Lagos Island' },
]

export default function Contact() {
  return (
    <div className="bg-quill-light/20 min-h-screen">
      <PageHero 
        label="Start Your Project" 
        title="Secure Your Digital Stage"
        subtitle="Based in Nigeria, serving a global client base. Tell us about your vision and let's build your legacy." 
      />

      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4">
            <p className="section-label !text-quill-dark">Consultation</p>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-quill-dark uppercase tracking-tighter leading-none mb-10">
              Let's Talk <br/> Strategy
            </h2>
            <p className="font-serif text-xl lg:text-2xl text-quill-dark/60 leading-relaxed mb-12 italic">
              "We move beyond the basics and focus on your strategic objectives."
            </p>

            <div className="space-y-10">
              {contactInfo.map(c => (
                <div key={c.label} className="flex gap-6 items-center group">
                  <div className="w-14 h-14 flex-shrink-0 bg-quill-dark text-quill-accent flex items-center justify-center text-2xl shadow-xl group-hover:bg-quill-accent group-hover:text-white transition-all">{c.icon}</div>
                  <div>
                    <p className="font-display text-[10px] tracking-[4px] uppercase text-quill-dark/30 mb-2 font-bold">{c.label}</p>
                    <p className="font-display text-lg font-black text-quill-dark uppercase tracking-tighter leading-none">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 shadow-2xl relative overflow-hidden group" style={{ backgroundColor: '#003D2B' }}>
              <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700" style={{ backgroundColor: 'rgba(0,200,83,0.05)' }} />
              <p className="font-display text-[10px] tracking-[5px] uppercase mb-6 font-bold" style={{ color: '#00C853' }}>Schedule a Consultation</p>
              <p className="font-serif text-white/70 italic leading-relaxed text-lg mb-8">
                Ready to talk about your goals? Book a 30-minute strategy session directly into our calendar.
              </p>
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules" 
                target="_blank" 
                rel="noreferrer"
                className="btn-quill block text-center no-underline"
              >
                Book via Google Calendar
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 shadow-2xl bg-white p-1 lg:p-4">
            <OrderForm />
          </div>

        </div>
      </section>
    </div>
  )
}
