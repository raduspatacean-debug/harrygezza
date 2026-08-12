import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HarryGezza — DJ & Producer',
  description: 'Official website of HarryGezza — DJ, producer and live performer. Book shows, listen to mixes and explore the music.',
  keywords: ['HarryGezza', 'DJ', 'producer', 'music', 'booking', 'live', 'house', 'techno'],
  openGraph: {
    title: 'HarryGezza — DJ & Producer',
    description: 'Official website of HarryGezza',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
