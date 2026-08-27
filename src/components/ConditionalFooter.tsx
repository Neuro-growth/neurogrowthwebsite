'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (pathname === '/') return null
  return (
    <>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
