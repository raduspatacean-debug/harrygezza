'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export interface Track {
  title:  string
  type:   string
  year:   string
  color:  string
  duration: number // seconds
}

const fmtTime = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

export default function MusicPlayer({ track, isPlaying, onPlay }: {
  track: Track
  isPlaying: boolean
  onPlay: (playing: boolean) => void
}) {
  const [elapsed, setElapsed]   = useState(0)
  const [eqHeights, setEqHeights] = useState<number[]>(Array(14).fill(15))
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const eqRef       = useRef<ReturnType<typeof setInterval> | null>(null)
  const { color, duration } = track

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (eqRef.current)       clearInterval(eqRef.current)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setElapsed(e => {
          if (e >= duration) { onPlay(false); return 0 }
          return e + 1
        })
      }, 1000)
      eqRef.current = setInterval(() => {
        setEqHeights(Array(14).fill(0).map(() => 20 + Math.random() * 80))
      }, 110)
    } else {
      clearTimers()
      setEqHeights(Array(14).fill(15))
    }
    return clearTimers
  }, [isPlaying, duration, onPlay, clearTimers])

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - r.left) / r.width
    setElapsed(Math.floor(pct * duration))
  }

  const progressPct = (elapsed / duration) * 100

  // Vinyl grooves (SVG rings)
  const grooves = Array.from({ length: 8 }, (_, i) => (
    <circle key={i} cx="50" cy="50" r={10 + i * 4.5}
      fill="none" stroke="rgba(255,255,255,.04)" strokeWidth={i === 0 ? 0 : 1} />
  ))

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: 'rgba(255,245,204,.035)', border: `1px solid ${color}25` }}
    >
      {/* Vinyl cover */}
      <div className="relative p-5 pb-0">
        <div className="relative w-full pb-[100%] rounded-xl overflow-hidden" style={{ background: `linear-gradient(145deg, ${color}18, ${color}06)` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Spinning vinyl */}
            <div
              className="relative w-4/5 aspect-square rounded-full"
              style={{ animation: isPlaying ? 'spin-vinyl 3s linear infinite' : 'none' }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rounded-full">
                <circle cx="50" cy="50" r="50" fill="#0a0015" />
                {grooves}
                <ellipse cx="38" cy="35" rx="14" ry="8" fill="rgba(255,255,255,.04)" transform="rotate(-25,50,50)" />
              </svg>
              {/* Label */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] rounded-full flex items-center justify-center font-display font-black italic text-xl"
                style={{ background: `radial-gradient(circle, ${color}50, ${color}20)`, border: `2px solid ${color}60`, color }}
              >
                HG
              </div>
            </div>

            {/* Needle */}
            <div
              className="absolute right-[15%] top-[5%] w-0.5 h-[45%] origin-top transition-transform duration-500"
              style={{ transform: isPlaying ? 'rotate(-5deg)' : 'rotate(-20deg)' }}
            >
              <div className="w-0.5 h-full rounded-sm" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,.15), rgba(255,255,255,.4), rgba(255,255,255,.15))' }} />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: '#ccc', border: '1px solid rgba(255,255,255,.3)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 pt-3">
        {/* Meta */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-display font-bold italic leading-tight" style={{ fontSize: '.9rem', color: 'var(--cream)' }}>{track.title}</p>
            <p className="mt-0.5" style={{ fontSize: '.6rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>{track.year}</p>
          </div>
          <span className="text-[.52rem] font-bold tracking-[.12em] uppercase px-2 py-0.5 rounded flex-shrink-0" style={{ background: `${color}18`, color, fontFamily: 'DM Sans, system-ui' }}>
            {track.type}
          </span>
        </div>

        {/* EQ bars */}
        <div className="flex items-end gap-0.5 mb-3" style={{ height: 28 }}>
          {eqHeights.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: color, minHeight: 3, transition: isPlaying ? 'height .1s ease' : 'none' }} />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-0.5 rounded-full mb-2 cursor-pointer overflow-hidden" style={{ background: 'rgba(255,255,255,.1)' }} onClick={seekTo}>
          <div className="h-full rounded-full transition-all" style={{ width: `${progressPct}%`, background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
        </div>

        {/* Time */}
        <div className="flex justify-between mb-3">
          <span style={{ fontSize: '.6rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>{fmtTime(elapsed)}</span>
          <span style={{ fontSize: '.6rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>{fmtTime(duration)}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          {/* Volume */}
          <div className="flex items-center gap-1.5">
            <span style={{ fontSize: '.8rem', color: 'var(--cream3)' }}>🔊</span>
            <input
              type="range" min="0" max="100" defaultValue="75"
              className="w-12 h-0.5 rounded-full outline-none cursor-pointer appearance-none"
              style={{ background: 'rgba(255,255,255,.15)' }}
            />
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => onPlay(!isPlaying)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 border-none cursor-pointer"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}99)`, boxShadow: `0 0 20px ${color}55` }}
          >
            <span style={{ fontSize: '.85rem', marginLeft: isPlaying ? 0 : 2 }}>{isPlaying ? '⏸' : '▶'}</span>
          </button>

          {/* Stop */}
          <button
            onClick={() => { onPlay(false); setElapsed(0) }}
            className="border-none cursor-pointer transition-colors duration-200"
            style={{ background: 'none', color: 'var(--cream3)', fontSize: '.85rem', padding: '.2rem' }}
          >
            ⏹
          </button>
        </div>
      </div>
    </div>
  )
}
