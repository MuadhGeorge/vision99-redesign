import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Walls | Vision99 – The World\'s First Living Building Masjid',
  description: 'Make history with Beyond Walls. A global vision for all - the world\'s first Living Building Masjid by Roswell Community Masjid.',
  keywords: ['Beyond Walls', 'Vision99', 'Roswell Community Masjid', 'RCM', 'Living Building', 'Masjid', 'Islamic Center', 'North Fulton', 'Sustainable Mosque'],
  authors: [{ name: 'Roswell Community Masjid' }],
  openGraph: {
    title: 'Beyond Walls | Vision99 – The World\'s First Living Building Masjid',
    description: 'Make history with Beyond Walls. A global vision for all.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
