import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { pricingPlans } from '../data'

const DARK   = '#003D2B'
const ACCENT = '#00C853'
const LIGHT  = '#E7F3EF'

const inputStyle = {
  width: '100%',
  backgroundColor: `${LIGHT}33`,
  border: `2px solid rgba(0,61,43,0.05)`,
  padding: '1.25rem',
  outline: 'none',
  fontFamily: 'EB Garamond, serif',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'border-color 0.2s',
  color: DARK,
}

const labelStyle = {
  display: 'block',
  fontFamily: 'Cinzel, serif',
  fontSize: '10px',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  color: `rgba(0,61,43,0.4)`,
  marginBottom: '0.75rem',
  fontWeight: 700,
}

export default function OrderForm() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '',
    plan_type: 'Basic', genre: '', requirements: '',
    manuscript_link: '', social_links: '', project_title: '', target_audience: ''
  })

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan && pricingPlans.find(p => p.name === plan)) {
      setFormData(prev => ({ ...prev, plan_type: plan }))
    }
  }, [searchParams])

  const selectedPlan = pricingPlans.find(p => p.name === formData.plan_type) || pricingPlans[0]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.from('submissions').insert([{
        ...formData, status: 'Pending', created_at: new Date()
      }])
      if (error) throw error
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting:', error.message)
      alert('Submission failed. Check your Supabase configuration or try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 shadow-2xl p-10"
        style={{ backgroundColor: '#fff', border: `1px solid rgba(0,61,43,0.05)` }}>
        <span className="text-7xl mb-10 block">🖋️</span>
        <h2 className="font-display text-4xl font-black uppercase tracking-tighter mb-4" style={{ color: DARK }}>Brief Secured</h2>
        <p className="font-serif text-xl max-w-md mx-auto mb-12 italic" style={{ color: `rgba(0,61,43,0.6)` }}>
          "Your project vision has been transmitted to our strategy team. Expect a comprehensive analysis within 24 hours."
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-quill"
          style={{ padding: '1.25rem 3rem' }}>
          Submit Another Brief
        </button>
      </motion.div>
    )
  }

  return (
    <div className="space-y-10">

      {/* ── Plan Preview ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="p-10 shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: `${ACCENT}08` }} />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <p className="font-display text-[10px] tracking-[5px] uppercase mb-2 font-bold" style={{ color: ACCENT }}>
              Selected Solution
            </p>
            <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter">
              {selectedPlan.name} Plan
            </h3>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl font-black text-white tracking-tighter">{selectedPlan.price}</p>
            <p className="font-display text-[10px] uppercase tracking-widest mt-1 font-bold" style={{ color: ACCENT }}>{selectedPlan.currency}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 relative z-10">
          {selectedPlan.features.slice(0, 6).map((f, i) => (
            <div key={i} className="flex gap-3 items-center text-sm font-body font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="font-bold flex-shrink-0" style={{ color: ACCENT }}>✦</span> {f}
            </div>
          ))}
          {selectedPlan.features.length > 6 && (
            <div className="font-display text-[11px] uppercase tracking-widest font-bold mt-2 col-span-2" style={{ color: ACCENT }}>
              + {selectedPlan.features.length - 6} more features included
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Form ── */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="p-8 lg:p-16 shadow-2xl space-y-10"
        style={{ backgroundColor: '#fff', border: `1px solid rgba(0,61,43,0.05)` }}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label style={labelStyle}>Principal Contact</label>
            <input required type="text" value={formData.full_name}
              onChange={e => setFormData({ ...formData, full_name: e.target.value })}
              style={inputStyle} placeholder="e.g. Dr. Amina Koya"
              onFocus={e => e.target.style.borderColor = ACCENT}
              onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input required type="email" value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle} placeholder="amina@example.com"
              onFocus={e => e.target.style.borderColor = ACCENT}
              onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              style={inputStyle} placeholder="e.g. 0703 815 1723"
              onFocus={e => e.target.style.borderColor = ACCENT}
              onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
          </div>
          <div>
            <label style={labelStyle}>Solution Tier</label>
            <select value={formData.plan_type}
              onChange={e => setFormData({ ...formData, plan_type: e.target.value })}
              style={{ ...inputStyle, cursor: 'pointer', fontFamily: 'Cinzel, serif', fontSize: '12px', letterSpacing: '2px' }}>
              {pricingPlans.map(p => (
                <option key={p.name} value={p.name}>{p.name} — {p.price} {p.currency}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label style={labelStyle}>Project Title</label>
            <input type="text" value={formData.project_title}
              onChange={e => setFormData({ ...formData, project_title: e.target.value })}
              style={inputStyle} placeholder="e.g. Laureate Press"
              onFocus={e => e.target.style.borderColor = ACCENT}
              onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
          </div>
          <div>
            <label style={labelStyle}>Genre / Sector</label>
            <input type="text" value={formData.genre}
              onChange={e => setFormData({ ...formData, genre: e.target.value })}
              style={inputStyle} placeholder="e.g. Fiction, Poetry, Non-fiction"
              onFocus={e => e.target.style.borderColor = ACCENT}
              onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Strategic Vision / Requirements</label>
          <textarea required rows={5} value={formData.requirements}
            onChange={e => setFormData({ ...formData, requirements: e.target.value })}
            style={{ ...inputStyle, resize: 'none', fontStyle: 'italic' }}
            placeholder="Describe your project goals, audience, and any specific features you need..."
            onFocus={e => e.target.style.borderColor = ACCENT}
            onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
        </div>

        <div>
          <label style={labelStyle}>Reference Links (optional)</label>
          <input type="url" value={formData.manuscript_link}
            onChange={e => setFormData({ ...formData, manuscript_link: e.target.value })}
            style={inputStyle} placeholder="https://your-inspiration-site.com"
            onFocus={e => e.target.style.borderColor = ACCENT}
            onBlur={e => e.target.style.borderColor = 'rgba(0,61,43,0.05)'} />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full py-6 font-display text-[12px] tracking-[5px] uppercase font-black flex items-center justify-center gap-4 shadow-2xl transition-all"
          style={{ backgroundColor: loading ? 'rgba(0,61,43,0.6)' : DARK, color: '#fff', cursor: loading ? 'not-allowed' : 'pointer' }}
          onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = ACCENT }}
          onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = DARK }}>
          {loading ? 'Processing...' : 'Launch Project Inquiry '}
          {!loading && <span>→</span>}
        </button>

        <p className="text-[10px] font-display uppercase tracking-[3px] text-center font-bold" style={{ color: 'rgba(0,61,43,0.2)' }}>
          By initiating this inquiry, you agree to BlackQuill's Strategic Partnership terms.
        </p>
      </motion.form>
    </div>
  )
}
