import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Admin() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) console.error('Error fetching:', error)
    else setSubmissions(data || [])
    setLoading(false)
  }

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from('submissions')
      .update({ status })
      .eq('id', id)
    
    if (!error) fetchSubmissions()
  }

  return (
    <div className="min-h-screen bg-quill-light/20 pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16 flex justify-between items-end">
          <div>
            <p className="section-label !text-quill-dark">Strategy Hub</p>
            <h1 className="font-display text-4xl lg:text-7xl font-black text-quill-dark uppercase tracking-tighter leading-none">Incoming Projects</h1>
          </div>
          <button 
            onClick={fetchSubmissions}
            className="btn-quill !py-3 !px-8 !text-[11px] !tracking-[3px] shadow-xl">Refresh Feed</button>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-quill-accent"></div>
          </div>
        ) : (
          <div className="bg-white shadow-2xl overflow-hidden border border-quill-dark/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-quill-dark text-quill-accent font-display text-[10px] tracking-[4px] uppercase font-black">
                    <th className="p-8">Date</th>
                    <th className="p-8">Principal Contact</th>
                    <th className="p-8">Solution Tier</th>
                    <th className="p-8">Strategic Brief</th>
                    <th className="p-8">Project Status</th>
                    <th className="p-8">Execution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-quill-dark/5">
                  {submissions.map(s => (
                    <tr key={s.id} className="hover:bg-quill-light/10 transition-colors group">
                      <td className="p-8 text-[11px] text-quill-dark/40 font-display font-bold uppercase tracking-widest">
                        {new Date(s.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-8">
                        <p className="font-display text-base font-black text-quill-dark uppercase tracking-tighter leading-none mb-2">{s.full_name}</p>
                        <p className="text-xs text-quill-dark/40 font-body font-medium italic">{s.email}</p>
                        <p className="text-[10px] text-quill-accent font-display font-bold mt-2 tracking-widest uppercase">{s.phone}</p>
                      </td>
                      <td className="p-8">
                        <p className="font-display text-[11px] font-black text-quill-dark uppercase tracking-widest mb-2">{s.project_title || 'Untitled'}</p>
                        <span className={`px-3 py-1 text-[9px] font-display uppercase tracking-widest font-black shadow-lg
                                       ${s.plan_type === 'Professional' ? 'bg-quill-accent text-white' : 
                                         s.plan_type === 'Hybrid' ? 'bg-quill-dark text-white' : 
                                         'bg-quill-light text-quill-dark'}`}>
                          {s.plan_type}
                        </span>
                        <p className="text-[10px] text-quill-dark/30 font-display uppercase tracking-[2px] font-bold mt-3">{s.genre}</p>
                      </td>
                      <td className="p-8 max-w-sm">
                        <div className="space-y-3">
                          <p className="text-sm text-quill-dark/60 font-body leading-relaxed italic line-clamp-3 font-medium">
                            "{s.requirements}"
                          </p>
                          <div className="flex flex-wrap gap-4 mt-3">
                            {s.manuscript_link && (
                              <a href={s.manuscript_link} target="_blank" rel="noreferrer" 
                                 className="text-[10px] text-quill-accent font-black uppercase tracking-widest border-b border-quill-accent no-underline">View Artifacts →</a>
                            )}
                            {s.social_links && (
                              <p className="text-[9px] text-quill-dark/40 font-display uppercase font-bold border-l-2 border-quill-dark/10 pl-3">
                                {s.social_links}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-8">
                        <span className={`text-[10px] font-display uppercase font-black tracking-widest
                                       ${s.status === 'Completed' ? 'text-green-600' : 
                                         s.status === 'In Progress' ? 'text-quill-accent' : 'text-orange-500'}`}>
                          ● {s.status}
                        </span>
                      </td>
                      <td className="p-8">
                        <select 
                          onChange={(e) => updateStatus(s.id, e.target.value)}
                          className="bg-quill-light/20 border-2 border-quill-dark/5 p-3 text-[10px] font-display uppercase font-black outline-none cursor-pointer hover:border-quill-accent transition-colors">
                          <option value="">Actions...</option>
                          <option value="Pending">Queue</option>
                          <option value="In Progress">Analyze</option>
                          <option value="Completed">Deploy</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {submissions.length === 0 && (
                    <tr>
                      <td colSpan="6" className="p-32 text-center font-serif text-quill-dark/20 italic text-2xl">
                        No strategic briefs detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
