'use client'

import { useEffect, useRef } from 'react'

const BEAM_DEFS = [
  { pos: '14%', color: '#FFD700', w: 260, delay: 0 },
  { pos: '27%', color: '#F5C400', w: 220, delay: 1 },
  { pos: '41%', color: '#7B35E8', w: 200, delay: 2 },
  { pos: '59%', color: '#E82B4A', w: 200, delay: 3 },
  { pos: '73%', color: '#5B1FE0', w: 220, delay: 4 },
  { pos: '86%', color: '#FFD700', w: 260, delay: 5 },
]

// Vibrant concert stage with bright lights — Howen / Unsplash
const HERO_BG = 'https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = beamsRef.current?.querySelectorAll<HTMLElement>('.beam')
    els?.forEach((el, i) => setTimeout(() => el.classList.add('on'), i * 200 + 400))
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden px-5 md:px-6 py-20 md:py-24"
      style={{ zIndex: 1, maxWidth: '100vw' }}
    >
      {/* ── Autoplay video background ── */}
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Psychedelic colour blend over the photo */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(17,0,37,.82) 0%, rgba(28,0,64,.75) 50%, rgba(17,0,37,.88) 100%)' }} />

      {/* Warm amber tint from below (stage floor glow) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(255,140,0,.18), transparent)' }} />

      {/* ── Stage FX overlays ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Spotlight beams (rig bar lives in LightRig above the nav) */}
        <div ref={beamsRef} className="absolute top-0 inset-x-0 bottom-0">
          {BEAM_DEFS.map((b, i) => (
            <div key={i} className="beam absolute top-0" style={{ left: b.pos, marginLeft: -b.w / 2, transformOrigin: 'top center', opacity: 0, transition: 'opacity .5s' }}>
              <div style={{ width: b.w, height: '80vh', clipPath: 'polygon(50% 0%,0% 100%,100% 100%)', background: `linear-gradient(to bottom,${b.color}28,${b.color}08,transparent)`, animation: `beam-sway 6s ease-in-out infinite`, animationDelay: `${b.delay * .8}s` }} />
            </div>
          ))}
          {BEAM_DEFS.map((b, i) => (
            <div key={`f${i}`} className="absolute bottom-0" style={{ left: b.pos, marginLeft: -70, width: 140, height: 35, borderRadius: '50%', background: b.color, filter: 'blur(32px)', opacity: .28 }} />
          ))}
        </div>

        {/* Fog layers */}
        <div className="absolute bottom-0 left-0 right-0 z-[3] pointer-events-none">
          {[
            { h: 90,  bg: 'radial-gradient(ellipse at 50% 100%,rgba(155,48,255,.25),transparent 70%)', delay: '0s' },
            { h: 55,  bg: 'radial-gradient(ellipse at 30% 100%,rgba(255,140,0,.18),transparent 70%)',  delay: '-3s' },
            { h: 45,  bg: 'radial-gradient(ellipse at 70% 100%,rgba(0,201,201,.14),transparent 70%)', delay: '-5s' },
          ].map((f, i) => (
            <div key={i} className="absolute bottom-0 left-0 right-0" style={{ height: f.h, background: f.bg, borderRadius: '50% 50% 0 0', animation: `fog-drift 8s ease-in-out infinite`, animationDelay: f.delay }} />
          ))}
        </div>

        {/* Curtains */}
        {[
          'linear-gradient(to right,rgba(40,0,70,.88) 0%,rgba(30,0,50,.55) 60%,transparent 100%)',
          'linear-gradient(to left,rgba(40,0,70,.88) 0%,rgba(30,0,50,.55) 60%,transparent 100%)',
        ].map((bg, i) => (
          <div key={i} className={`absolute top-0 bottom-0 w-[11%] z-[4] ${i === 0 ? 'left-0' : 'right-0'}`} style={{ background: bg }} />
        ))}
      </div>

      {/* Hero text */}
      <div className="relative text-center max-w-4xl w-full" style={{ zIndex: 10 }}>
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg,transparent,var(--gold))' }} />
          <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✾</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }} />
        </div>

        <p
          className="font-display italic mb-8 mx-auto"
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
            maxWidth: 620,
            lineHeight: 1.6,
            color: 'rgba(255,245,204,.82)',
            textShadow: '0 2px 18px rgba(13,8,40,.75)',
          }}
        >
          &quot;Our souls do not come with a cover version.<br />
          Let&apos;s play the original!&quot;
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://www.youtube.com/@HarryGezza10"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,var(--gold),var(--amber))', color: '#1a0030', boxShadow: '0 0 30px rgba(255,200,0,.4)', fontFamily: 'DM Sans, system-ui, sans-serif' }}
          >
            ▶ Listen Now
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300" style={{ background: 'rgba(255,245,204,.08)', color: 'var(--cream)', border: '1px solid var(--border2)', backdropFilter: 'blur(8px)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>
            Book a Show
          </a>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2" style={{ zIndex: 10 }}>
        <span className="text-[.58rem] tracking-[.26em] uppercase" style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom,var(--gold),transparent)', animation: 'scroll-line 2s ease-in-out infinite' }} />
      </div>

    </section>
  )
}
