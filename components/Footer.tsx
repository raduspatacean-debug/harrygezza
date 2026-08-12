export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t py-10 px-6" style={{ borderColor: 'rgba(255,215,0,.12)', zIndex: 1 }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          {['#about','#releases','#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-[.66rem] tracking-[.1em] uppercase transition-colors duration-200"
              style={{ color: 'var(--cream3)', fontFamily: 'DM Sans, system-ui' }}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        <p className="text-[.68rem] italic font-display" style={{ color: 'var(--cream3)' }}>
          © {year} HarryGezza. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
