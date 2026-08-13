const PHONE_DISPLAY = '+40 743 621 133'
const PHONE_HREF    = '+40743621133'

export default function Contact() {
  // Matches the hero tagline's restraint
  const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(.95rem, 2.2vw, 1.5rem)',
    color: 'rgba(255,245,204,.82)',
    textShadow: '0 2px 18px rgba(13,8,40,.75)',
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-36 px-5 md:px-6"
      style={{
        zIndex: 1,
        // Fallback wash, matching the other sections
        background: `
          radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.42) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.35) 0%, transparent 60%),
          linear-gradient(168deg, #2E1B4D 0%, #3A2354 38%, #43295C 72%, #472D62 100%)
        `,
      }}
    >
      {/* ── Subtle looping video, blended into the purple wash ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0, opacity: .34 }}
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
      </video>

      {/* Purple wash on top so the footage blends rather than competes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.55) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.5) 0%, transparent 60%),
            linear-gradient(168deg, rgba(46,27,77,.88) 0%, rgba(58,35,84,.82) 38%, rgba(67,41,92,.82) 72%, rgba(71,45,98,.88) 100%)
          `,
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 2 }}>
        <p
          className="text-xs font-bold tracking-[.22em] uppercase mb-6 flex items-center justify-center gap-2"
          style={{ color: 'var(--gold)', fontFamily: 'DM Sans, system-ui' }}
        >
          <span>✿</span> Get in Touch <span>✿</span>
        </p>

        {/* Flourish divider, same as the hero */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg,transparent,var(--gold))' }} />
          <span style={{ color: 'var(--gold)', fontSize: '1.15rem', lineHeight: 1 }}>✾</span>
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }} />
        </div>

        <div className="flex flex-col items-center">
          <a
            href={`tel:${PHONE_HREF}`}
            className="inline-flex items-center gap-3 font-display font-bold italic transition-opacity hover:opacity-75"
            style={linkStyle}
          >
            <span style={{ color: 'var(--gold)' }}>✆</span> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
