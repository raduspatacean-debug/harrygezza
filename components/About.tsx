export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative py-16 md:py-28 px-5 md:px-6"
        style={{
          zIndex: 1,
          // Deep purple wash
          background: `
            radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.42) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.35) 0%, transparent 60%),
            linear-gradient(168deg, #2E1B4D 0%, #3A2354 38%, #43295C 72%, #472D62 100%)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2
            className="font-display font-black italic uppercase leading-[.95] mb-10 md:mb-14"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', color: 'var(--cream)' }}
          >
            And, yes, we will make it.
          </h2>

          <div className="grid md:grid-cols-[1.45fr_1fr] gap-10 md:gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 20,
                  border: '1px solid rgba(255,215,0,.25)',
                  boxShadow: '0 0 50px rgba(91,31,224,.28), 0 0 90px rgba(245,196,0,.08)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/sziget-crowd.jpg"
                  alt="Festival crowd in front of the main stage"
                  className="w-full block"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(160deg, rgba(245,196,0,.10), transparent 45%, rgba(91,31,224,.22))' }}
                />
              </div>
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
                ABOUT
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-display italic mb-5" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.6, color: 'var(--cream)' }}>
                This website reflects the journey of HarryGezza, a music creator and lover.
              </p>
              <p className="font-display italic mb-5" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.6, color: 'var(--cream)' }}>
                He is a single dreamer with a passion for music and a heart full of hope.
              </p>
              <p className="font-display italic" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.6, color: 'var(--cream)' }}>
                Now, HarryGezza sets out to create something extraordinary that will be celebrated around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
