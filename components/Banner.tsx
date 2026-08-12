export default function Banner() {
  return (
    <div style={{ position: 'relative', zIndex: 200, lineHeight: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/banner.png"
        alt="HarryGezza — Soul through Struggle"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}
