import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Providers } from '@/components/Providers'
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable scroll restoration and ensure page starts at top on initial load
              if (typeof window !== 'undefined') {
                if ('scrollRestoration' in window.history) {
                  window.history.scrollRestoration = 'manual';
                }
                // Remove any hash from URL on initial load
                if (window.location.hash) {
                  window.history.replaceState(null, '', window.location.pathname);
                }
                // Force scroll to top immediately
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              }
            `,
          }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

