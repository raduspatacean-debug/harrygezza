'use client'

import { useEffect, useRef } from 'react'
import Playlist, { type Song } from './Playlist'

const songs: Song[] = [
  { title: 'Under Your Spell',            year: '2025', src: '/audio/under-your-spell.mp3',            color: '#FFD700' },
  { title: 'But Baby',                    year: '2026', src: '/audio/but-baby.mp3',                    color: '#7B35E8' },
  { title: "But You're Just a Pretender", year: '2026', src: '/audio/but-youre-just-a-pretender.mp3',   color: '#E82B4A' },
]

// Spotlights hanging over the stage
const BEAMS = [
  { pos: '10%', color: '#FFD700', w: 220, delay: 0   },
  { pos: '30%', color: '#E82B4A', w: 190, delay: 1.2 },
  { pos: '50%', color: '#F5C400', w: 240, delay: 2.4 },
  { pos: '70%', color: '#7B35E8', w: 190, delay: 3.6 },
  { pos: '90%', color: '#5B1FE0', w: 220, delay: 4.8 },
]

const RIG = ['#FFD700','#E82B4A','#7B35E8','#F5C400','#5B1FE0','#FFD700','#E82B4A','#7B35E8','#F5C400','#5B1FE0','#FFD700','#E82B4A']

export default function Releases() {
  const beamsRef = useRef<HTMLDivElement>(null)

  // Fade the beams in on mount, staggered like a rig powering up
  useEffect(() => {
    const els = beamsRef.current?.querySelectorAll<HTMLElement>('.beam')
    els?.forEach((el, i) => setTimeout(() => el.classList.add('on'), i * 180 + 300))
  }, [])

  return (
    <section
      id="releases"
      className="relative overflow-hidden py-20 md:py-32 px-5 md:px-6"
      style={{
        zIndex: 1,
        // Same deep purple wash as About and Studio
        background: `
          radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.42) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.35) 0%, transparent 60%),
          linear-gradient(168deg, #2E1B4D 0%, #3A2354 38%, #43295C 72%, #472D62 100%)
        `,
      }}
    >
      {/* ── Stage rig ── */}
      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Truss bar */}
        <div
          className="relative h-[18px] flex justify-around items-center px-6 sm:px-12"
          style={{ background: 'linear-gradient(to bottom,#171428,#0A0714)', borderBottom: '1px solid rgba(255,255,255,.08)' }}
        >
          {RIG.map((c, i) => (
            <span
              key={i}
              className="rounded-full shrink-0"
              style={{ width: 9, height: 9, background: c, boxShadow: `0 0 10px 2px ${c}` }}
            />
          ))}
        </div>
      </div>

      {/* Spotlight beams */}
      <div ref={beamsRef} className="absolute inset-x-0 top-[18px] bottom-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {BEAMS.map((b, i) => (
          <div
            key={i}
            className="beam absolute top-0"
            style={{ left: b.pos, marginLeft: -b.w / 2, transformOrigin: 'top center' }}
          >
            <div
              style={{
                width: b.w,
                height: '95%',
                clipPath: 'polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)',
                background: `linear-gradient(to bottom, ${b.color}30, ${b.color}0f 45%, transparent 85%)`,
                animation: 'beam-sway 9s ease-in-out infinite',
                animationDelay: `${b.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Haze drifting across the floor */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ zIndex: 0 }}>
        {[
          { h: 150, bg: 'radial-gradient(ellipse at 50% 100%, rgba(155,110,220,.20), transparent 72%)', d: '0s'  },
          { h: 100, bg: 'radial-gradient(ellipse at 25% 100%, rgba(245,196,0,.13), transparent 70%)',  d: '-3s' },
          { h: 80,  bg: 'radial-gradient(ellipse at 78% 100%, rgba(232,43,74,.12), transparent 70%)',  d: '-6s' },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute inset-x-0 bottom-0"
            style={{ height: f.h, background: f.bg, animation: 'fog-drift 11s ease-in-out infinite', animationDelay: f.d }}
          />
        ))}
      </div>

      {/* Lit stage edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
        style={{ zIndex: 0, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,.45), rgba(232,43,74,.35), transparent)' }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto" style={{ zIndex: 2 }}>
        <div className="mb-10 md:mb-14">
          <div
            className="inline-block px-4 py-2 rounded-full mb-5"
            style={{
              background: '#FFD200',
              color: '#2B0D5E',
              fontFamily: 'DM Sans, system-ui',
              fontSize: '.6rem',
              fontWeight: 900,
              letterSpacing: '.16em',
              boxShadow: '0 6px 20px rgba(0,0,0,.35)',
            }}
          >
            MUSIC
          </div>
        </div>

        <Playlist songs={songs} />

        {/* Streaming platforms */}
        <p className="text-center mt-14 mb-4 text-[.6rem] tracking-[.2em] uppercase" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Also on</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Spotify','Apple Music','SoundCloud','Beatport','YouTube Music'].map((p) => (
            <a
              key={p}
              href="#"
              className="px-5 py-2 rounded-full text-[.66rem] font-medium transition-all duration-200"
              style={{ background: 'rgba(255,245,204,.05)', border: '1px solid rgba(255,215,0,.22)', color: 'var(--cream2)', fontFamily: 'DM Sans, system-ui', backdropFilter: 'blur(6px)' }}
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
