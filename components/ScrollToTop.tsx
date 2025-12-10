'use client'

import { useEffect } from 'react'

/**
 * Component to ensure page starts at top on initial load
 * This only runs on the initial mount of the home page, not on navigation
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration immediately
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Handle any hash in URL - remove it since we don't want auto-scroll on load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      
      // Remove any hash from URL (especially #contact since we use modal now)
      if (hash) {
        window.history.replaceState(null, '', window.location.pathname)
      }
      
      // Force scroll to top with instant behavior (not smooth)
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, []) // Empty deps - only runs on initial mount

  return null
}

