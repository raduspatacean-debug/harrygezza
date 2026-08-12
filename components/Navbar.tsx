'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// Order must match the section order in app/page.tsx
const links = [
  { href: '#hero',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#studio',   label: 'Behind the Sound' },
  { href: '#releases', label: 'Music' },
  { href: '#contact',  label: 'Booking' },
]

// Matches the hero sound toggle
const circleStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  background: 'rgba(13,8,40,.45)',
  border: '1px solid rgba(255,245,204,.28)',
  backdropFilter: 'blur(8px)',
  color: 'rgba(255,245,204,.85)',
  cursor: 'pointer',
}

export default function Navbar() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('hero')
  const [muted, setMuted]   = useState(true)

  // The hero video lives in another component; drive it by id so this
  // control can ride along in the sticky rail with the menu button.
  const toggleMute = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement | null
    if (!video) return
    const next = !video.muted
    video.muted = next
    setMuted(next)
  }

  // Highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    // Zero-height sticky rail so the button floats over the video
    <nav className="sticky top-0 h-0" style={{ zIndex: 300 }}>
      <div className="relative w-full">

        {/* Floating menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="absolute left-4 sm:left-6 top-6 sm:top-7 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
          style={circleStyle}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>

        {/* Sound toggle — rides the same sticky rail */}
        <button
          onClick={toggleMute}
          title={muted ? 'Unmute' : 'Mute'}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute right-4 sm:right-6 top-6 sm:top-7 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
          style={circleStyle}
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            {muted ? (
              <>
                <line x1="22" y1="9" x2="16" y2="15" />
                <line x1="16" y1="9" x2="22" y2="15" />
              </>
            ) : (
              <>
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 5a9 9 0 0 1 0 14" />
              </>
            )}
          </svg>
        </button>

        {/* Dropdown panel */}
        {open && (
          <div
            className="absolute left-4 sm:left-6 top-[4.6rem] sm:top-[5rem] rounded-2xl overflow-hidden"
            style={{
              minWidth: 230,
              background: 'rgba(13,8,40,.93)',
              border: '1px solid rgba(255,215,0,.22)',
              backdropFilter: 'blur(18px)',
              boxShadow: '0 18px 44px rgba(0,0,0,.5)',
            }}
          >
            <div className="flex flex-col py-2">
              {links.map((l) => {
                const isActive = active === l.href.slice(1)
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-5 py-2.5 text-[.72rem] font-bold tracking-[.14em] uppercase transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--gold)' : 'var(--cream2)',
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      background: isActive ? 'rgba(255,215,0,.06)' : 'transparent',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--gold)' : 'var(--cream2)')}
                  >
                    {l.label}
                  </a>
                )
              })}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mx-5 mt-3 mb-1 py-2.5 rounded-full text-center text-[.68rem] font-black tracking-widest uppercase"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--amber))',
                  color: '#1a0030',
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                }}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
