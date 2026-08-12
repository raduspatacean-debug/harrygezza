'use client'

import { useEffect, useRef, useState } from 'react'

export interface Song {
  title: string
  year: string
  src: string
  color: string
}

const fmt = (s: number) =>
  Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '--:--'

export default function Playlist({ songs }: { songs: Song[] }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [current, setCurrent]   = useState(0)
  const [playing, setPlaying]   = useState(false)
  const [elapsed, setElapsed]   = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume]     = useState(0.8)

  const track = songs[current]

  // Reflect the audio element's real state back into the UI
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime  = () => setElapsed(a.currentTime)
    const onMeta  = () => setDuration(a.duration)
    const onEnd   = () => setCurrent(i => (i + 1) % songs.length)
    const onPlay  = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
    }
  }, [songs.length])

  // Load and (if we were already playing) start the newly selected track
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    setElapsed(0)
    a.load()
    if (playing) a.play().catch(() => setPlaying(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().catch(() => setPlaying(false))
    else a.pause()
  }

  const select = (i: number) => {
    if (i === current) return toggle()
    setCurrent(i)
    setPlaying(true)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    if (!a || !duration) return
    const r = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - r.left) / r.width) * duration
  }

  const step = (d: number) => {
    setCurrent(i => (i + d + songs.length) % songs.length)
    setPlaying(true)
  }

  const pct = duration ? (elapsed / duration) * 100 : 0

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: 'rgba(10,5,24,.55)',
        border: '1px solid rgba(255,215,0,.18)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 24px 60px rgba(0,0,0,.5)',
      }}
    >
      <audio ref={audioRef} preload="metadata">
        <source src={track.src} />
      </audio>

      {/* ── Now playing ── */}
      <div className="p-6 sm:p-8" style={{ background: `linear-gradient(150deg, ${track.color}1f, transparent 65%)` }}>
        <p
          className="text-[.55rem] font-black tracking-[.24em] uppercase mb-3"
          style={{ color: track.color, fontFamily: 'DM Sans, system-ui' }}
        >
          {playing ? 'Now Playing' : 'Paused'}
        </p>

        <h3
          className="font-display font-black italic leading-tight mb-1"
          style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.4rem)', color: 'var(--cream)' }}
        >
          {track.title}
        </h3>
        <p className="mb-6" style={{ fontSize: '.7rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>
          HarryGezza · {track.year}
        </p>

        {/* Progress */}
        <div
          className="h-1.5 rounded-full cursor-pointer overflow-hidden mb-2"
          style={{ background: 'rgba(255,255,255,.1)' }}
          onClick={seek}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${track.color}, var(--gold))`, transition: 'width .15s linear' }}
          />
        </div>
        <div className="flex justify-between mb-6" style={{ fontSize: '.62rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>
          <span>{fmt(elapsed)}</span>
          <span>{fmt(duration)}</span>
        </div>

        {/* Transport */}
        <div className="flex items-center gap-5">
          <button onClick={() => step(-1)} aria-label="Previous track"
            style={{ background: 'none', border: 'none', color: 'var(--cream2)', cursor: 'pointer', fontSize: '1.1rem' }}>
            ⏮
          </button>

          <button
            onClick={toggle}
            aria-label={playing ? 'Pause' : 'Play'}
            className="rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              width: 54, height: 54, border: 'none', cursor: 'pointer',
              background: `linear-gradient(135deg, ${track.color}, var(--gold))`,
              boxShadow: `0 0 26px ${track.color}66`,
              color: '#12082B', fontSize: '1.1rem',
            }}
          >
            {playing ? '❚❚' : '▶'}
          </button>

          <button onClick={() => step(1)} aria-label="Next track"
            style={{ background: 'none', border: 'none', color: 'var(--cream2)', cursor: 'pointer', fontSize: '1.1rem' }}>
            ⏭
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <span style={{ fontSize: '.85rem', color: 'var(--cream3)' }}>🔊</span>
            <input
              type="range" min="0" max="1" step="0.01" value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              aria-label="Volume"
              className="w-20 h-1 rounded-full appearance-none cursor-pointer"
              style={{ background: 'rgba(255,255,255,.18)' }}
            />
          </div>
        </div>
      </div>

      {/* ── Track list ── */}
      <div style={{ borderTop: '1px solid rgba(255,215,0,.12)' }}>
        {songs.map((s, i) => {
          const active = i === current
          return (
            <button
              key={s.src}
              onClick={() => select(i)}
              className="w-full flex items-center gap-4 px-6 sm:px-8 py-3.5 text-left transition-colors"
              style={{
                background: active ? 'rgba(255,215,0,.07)' : 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,245,204,.05)',
                cursor: 'pointer',
              }}
            >
              <span
                className="shrink-0 text-center"
                style={{ width: 20, fontSize: '.7rem', color: active ? s.color : 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}
              >
                {active && playing ? '❚❚' : i + 1}
              </span>

              <span
                className="font-display italic truncate flex-1"
                style={{ fontSize: '.95rem', color: active ? 'var(--cream)' : 'var(--cream2)' }}
              >
                {s.title}
              </span>

              <span className="shrink-0" style={{ fontSize: '.62rem', color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}>
                {s.year}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
