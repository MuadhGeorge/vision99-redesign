'use client'

import { useEffect } from 'react'

/**
 * Component to ensure page starts at top on load
 * and handles hash navigation properly
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo(0, 0)
    
    // Handle hash in URL (e.g., if someone bookmarked #contact)
    // Remove #contact hash since we use modal now, not scroll-to-section
    if (window.location.hash === '#contact') {
      window.history.replaceState(null, '', window.location.pathname)
      window.scrollTo(0, 0)
    }
    
    // Also handle browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}

