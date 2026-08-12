'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', event: '', message: '' })
  const [sent, setSent]  = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '.82rem 1.1rem',
    background: 'rgba(255,245,204,.04)',
    border: '1px solid rgba(255,215,0,.15)',
    borderRadius: 10,
    color: 'var(--cream)',
    fontFamily: '"Playfair Display", Georgia, serif',
    fontStyle: 'italic',
    fontSize: '1rem',
    outline: 'none',
  }

  return (
    <section id="contact" className="relative py-16 md:py-28 px-5 md:px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[.22em] uppercase mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--pink)', fontFamily: 'DM Sans, system-ui' }}>
            <span style={{ color: 'var(--gold)' }}>✿</span> Get in Touch
          </p>
          <h2 className="font-display font-black italic uppercase leading-[.92]" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>
            Book a <span className="gradient-text-warm">Show</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Form */}
          <div
            className="rounded-2xl p-5 sm:p-8 relative"
            style={{
              background: 'rgba(255,245,204,.03)',
              border: '1px solid rgba(255,215,0,.2)',
              boxShadow: '0 0 60px rgba(155,48,255,.08)',
            }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 text-[.6rem] font-bold tracking-[.18em] uppercase whitespace-nowrap"
              style={{ background: 'var(--bg)', color: 'var(--gold)', fontFamily: 'DM Sans, system-ui' }}
            >
              ✿ Booking ✿
            </div>

            {sent ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">✿</p>
                <h3 className="font-display font-black italic text-2xl gradient-text-warm mb-2">Message sent!</h3>
                <p style={{ color: 'var(--cream2)', fontFamily: 'DM Sans, system-ui' }}>I'll get back to you within 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[.6rem] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Name</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-[.6rem] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-[.6rem] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Event type</label>
                  <select name="event" value={form.event} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" style={{ background: '#1c0040' }}>Select event type</option>
                    {['Club night','Festival','Private event','Corporate','Other'].map(o => (
                      <option key={o} value={o.toLowerCase()} style={{ background: '#1c0040' }}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[.6rem] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Message</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Date, venue, details..." style={{ ...inputStyle, resize: 'none', lineHeight: 1.65 }} />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold), var(--amber))',
                    color: '#1a0030',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'DM Sans, system-ui',
                  }}
                >
                  ✿ Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
