'use client'

import { createContext, useContext, useState, useCallback, useRef } from 'react'
import ContactModal from './ContactModal'

interface ContactContextType {
  openContactModal: () => void
  closeContactModal: () => void
  isContactModalOpen: boolean
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const triggerRef = useRef<HTMLElement>(null)

  const openContactModal = useCallback(() => {
    setIsContactModalOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false)
  }, [])

  return (
    <ContactContext.Provider value={{ openContactModal, closeContactModal, isContactModalOpen }}>
      {children}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        triggerRef={triggerRef}
      />
    </ContactContext.Provider>
  )
}

