'use client'

import { ToastProvider } from '@/components/ui/Toast'
import { ContactProvider } from '@/components/ContactContext'

/**
 * Combined providers for the app
 * Wraps ToastProvider and ContactProvider in a single client component
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ContactProvider>
        {children}
      </ContactProvider>
    </ToastProvider>
  )
}

