export default function Divider({ bg }: { bg?: string }) {
  return (
    <div
      className="relative flex items-center justify-center gap-4 py-10 md:py-14"
      style={{ zIndex: 1, background: bg }}
    >
      <div
        className="h-px w-16 sm:w-24"
        style={{ background: 'linear-gradient(90deg,transparent,var(--gold))' }}
      />
      <span style={{ color: 'var(--gold)', fontSize: '1.15rem', lineHeight: 1 }}>✾</span>
      <div
        className="h-px w-16 sm:w-24"
        style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }}
      />
    </div>
  )
}
