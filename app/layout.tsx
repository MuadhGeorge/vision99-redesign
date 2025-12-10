import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { ToastProvider } from '@/components/ui/Toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Beyond Walls | Roswell Community Masjid',
  description: 'Building the world\'s first faith-based Living Building certified campus. A sanctuary for generations, a beacon for the community.',
  keywords: ['mosque', 'masjid', 'roswell', 'georgia', 'living building', 'sustainable', 'community', 'islamic center'],
  openGraph: {
    title: 'Beyond Walls | Roswell Community Masjid',
    description: 'Building the world\'s first faith-based Living Building certified campus.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="font-sans overflow-x-hidden">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}

