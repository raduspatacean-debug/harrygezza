export default function Video() {
  return (
    <section
      id="show-must-go-on"
      className="relative py-16 md:py-28 px-5 md:px-6"
      style={{
        zIndex: 1,
        // Same deep purple wash as Studio and Releases, so it bridges flat
        background: `
          radial-gradient(ellipse 90% 70% at 20% 0%, rgba(120,85,160,.42) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 80% 100%, rgba(105,70,150,.35) 0%, transparent 60%),
          linear-gradient(168deg, #2E1B4D 0%, #3A2354 38%, #43295C 72%, #472D62 100%)
        `,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 md:mb-14 text-center">
          <p
            className="text-xs font-bold tracking-[.22em] uppercase mb-2 flex items-center justify-center gap-2"
            style={{ color: 'var(--violet)', fontFamily: 'DM Sans, system-ui' }}
          >
            <span style={{ color: 'var(--gold)' }}>✿</span> Watch
          </p>
          <h2
            className="font-display font-black italic uppercase leading-[.92]"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Show Must <span className="gradient-text-warm">Go On</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: 24,
              border: '1px solid rgba(255,215,0,.25)',
              boxShadow: '0 0 60px rgba(91,31,224,.3), 0 0 110px rgba(245,196,0,.09)',
              aspectRatio: '16/9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/SnSBA_eR1yU"
              title="HarryGezza — Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Accent bar, matching the studio photo */}
          <div
            className="absolute left-8 right-8 -bottom-1 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg,var(--pink),var(--gold),var(--violet))' }}
          />
        </div>
      </div>
    </section>
  )
}
