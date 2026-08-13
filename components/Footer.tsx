export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-10 px-6" style={{ background: '#FFCF0E', zIndex: 1 }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          {['#about','#releases','#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-[.66rem] tracking-[.1em] uppercase font-bold transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#2B0D5E', fontFamily: 'DM Sans, system-ui' }}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        <p className="text-[.68rem] italic font-display font-bold" style={{ color: '#2B0D5E' }}>
          © {year} HarryGezza. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
