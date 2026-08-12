const gear = ['Marshall DSL', 'Fender Strat', 'Analog Pedals', 'Live Looping']

export default function Studio() {
  return (
    <section
      id="studio"
      className="relative py-16 md:py-28 px-5 md:px-6"
      style={{
        zIndex: 1,
        // Same deep purple wash as the About section
        background: `
          radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.42) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.35) 0%, transparent 60%),
          linear-gradient(168deg, #2E1B4D 0%, #3A2354 38%, #43295C 72%, #472D62 100%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Photo (full width) ── */}
        <div className="relative mb-12 md:mb-16">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: 24,
              border: '1px solid rgba(255,215,0,.25)',
              boxShadow: '0 0 60px rgba(91,31,224,.3), 0 0 110px rgba(245,196,0,.09)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/harry-studio.jpg"
              alt="HarryGezza in the studio with his Marshall amp and pedalboard"
              className="w-full block"
              style={{ aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'center 35%' }}
            />
            {/* Warm tint so it sits inside the palette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(160deg, rgba(245,196,0,.10), transparent 45%, rgba(91,31,224,.22))' }}
            />
          </div>

          {/* Accent bar under photo */}
          <div
            className="absolute left-8 right-8 -bottom-1 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg,var(--pink),var(--gold),var(--violet))' }}
          />

          {/* Corner badge */}
          <div
            className="absolute -top-4 left-4 sm:left-6 px-4 py-2 rounded-full"
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
            IN THE STUDIO
          </div>
        </div>

        {/* ── Text underneath ── */}
        <div className="max-w-3xl">
          <h2
            className="font-display font-black italic uppercase leading-[.95] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}
          >
            This is Where the Magic Happens
          </h2>

          <p
            className="font-display italic mb-8"
            style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.6, color: 'var(--cream)' }}
          >
            It&apos;s a small room. But nobody said the dream had to fit.
          </p>

          {/* Gear pills */}
          <div className="flex flex-wrap gap-2.5">
            {gear.map((g) => (
              <span
                key={g}
                className="px-4 py-2 rounded-full text-[.66rem] font-bold tracking-wide"
                style={{
                  background: 'rgba(255,245,204,.04)',
                  border: '1px solid rgba(255,215,0,.22)',
                  color: 'var(--cream2)',
                  fontFamily: 'DM Sans, system-ui',
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
