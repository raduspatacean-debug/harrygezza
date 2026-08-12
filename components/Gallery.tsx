const photos = [
  { label: 'Untold Festival 2024', id: '1506485854521-3e13d857db0b', c1: '#7B35E8', c2: '#FFD700', tall: true  },
  { label: 'Club Midi, Cluj',      id: '1749724461416-473eb68bc069', c1: '#FFD700', c2: '#F5C400', tall: false },
  { label: 'Neversea 2023',        id: '1760966362386-e1012dbc3657', c1: '#5B1FE0', c2: '#7B35E8', tall: false },
  { label: 'Studio Session',       id: '1663668566893-7a4887f9a41d', c1: '#F5C400', c2: '#E82B4A', tall: false },
  { label: 'Quantic, București',   id: '1724003450383-4016597e31e3', c1: '#E82B4A', c2: '#FFD700', tall: false },
  { label: 'Control Club, BCN',    id: '1755428642736-951036a304ea', c1: '#FFD700', c2: '#5B1FE0', tall: true  },
]

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export default function Gallery() {
  return (
    <>
      {/* Wave top */}
      <div className="wave-divider" style={{ background: 'var(--bg)' }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" height="60">
          <path d="M0,20 C150,50 350,0 600,30 C850,60 1050,10 1200,40 L1200,60 L0,60 Z" fill="#1c0040" />
        </svg>
      </div>

      <section id="gallery" className="relative py-16 md:py-28 px-5 md:px-6" style={{ background: 'var(--bg2)', zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-14">
            <p className="text-xs font-bold tracking-[.22em] uppercase mb-2 flex items-center gap-2" style={{ color: 'var(--violet)', fontFamily: 'DM Sans, system-ui' }}>
              <span style={{ color: 'var(--gold)' }}>✿</span> Live
            </p>
            <h2 className="font-display font-black italic uppercase leading-[.92]" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>
              On <span className="gradient-text-warm">Stage</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p) => (
              <div
                key={p.label}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-square ${p.tall ? 'md:row-span-2 md:aspect-[3/4]' : 'md:aspect-[4/3]'}`}
                style={{ border: '1px solid rgba(255,215,0,.12)' }}
              >
                {/* Real concert photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={unsplash(p.id, p.tall ? 600 : 800)}
                  alt={p.label}
                  loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                  className="group-hover:scale-[1.06]"
                />

                {/* Psychedelic colour tint overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ background: `linear-gradient(145deg, ${p.c1}40, ${p.c2}18, rgba(17,0,37,.35))`, mixBlendMode: 'multiply' }}
                />

                {/* Bottom gradient + label (always visible) */}
                <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: 'linear-gradient(to top, rgba(17,0,37,.9), transparent)' }}>
                  <p className="absolute bottom-3 left-4 text-[.7rem] font-bold" style={{ color: 'var(--gold)', fontFamily: 'DM Sans, system-ui' }}>{p.label}</p>
                </div>

                {/* Colour accent line at base */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${p.c1}, ${p.c2})` }} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/harrygezza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
              style={{
                background: 'transparent',
                color: 'var(--cream)',
                border: '1px solid var(--border2)',
                fontFamily: 'DM Sans, system-ui',
              }}
            >
              ✿ See more on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Wave bottom */}
      <div className="wave-divider" style={{ background: 'var(--bg2)' }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" height="60">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#110025" />
        </svg>
      </div>
    </>
  )
}
