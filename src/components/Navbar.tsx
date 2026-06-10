'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '18px 0',
      background: scrolled ? 'rgba(0,0,0,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center',
      }}>

        {/* ── LOGO ── */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="N"
            width={28}
            height={28}
            style={{ objectFit: 'contain', width: 'auto', height: '28px' }}
            priority
          />
          <span style={{
            fontFamily: 'var(--font-space), sans-serif',
            fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px',
          }}>
            euroGrowth<span style={{ color: '#00D4FF' }}> Tech</span>
          </span>
        </Link>

        {/* ── DESKTOP LINKS – centred ── */}
        <ul style={{
          display: 'flex', gap: 2, listStyle: 'none', padding: 0,
          margin: '0 auto',
        }} className="desktop-nav">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link href={href} style={{
                  padding: '8px 18px', fontSize: 14, fontWeight: 500,
                  color: active ? '#00D4FF' : '#CCD6F6',
                  borderRadius: 8, textDecoration: 'none', display: 'block',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00D4FF')}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#CCD6F6' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ── BOOK DEMO CTA ── */}
        <Link href="/contact"
          className="desktop-nav"
          style={{
            flexShrink: 0,
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #00AAFF, #00D4FF)',
            color: '#000000', fontWeight: 700, fontSize: 14,
            borderRadius: 8, textDecoration: 'none',
            fontFamily: 'var(--font-space), sans-serif',
            boxShadow: '0 0 20px rgba(0,212,255,0.3)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,212,255,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = ''
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)'
          }}
        >
          Book Demo
        </Link>

        {/* ── HAMBURGER ── */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="hamburger"
          style={{
            display: 'none', flexDirection: 'column', gap: 5,
            padding: 6, background: 'none', border: 'none',
            cursor: 'pointer', marginLeft: 'auto',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: '#CCD6F6', borderRadius: 2,
              transition: 'all 0.25s',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                : 'none'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div style={{
          background: '#0A0A0A', borderTop: '1px solid rgba(0,212,255,0.12)',
          padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              padding: '13px 0', fontSize: 16,
              color: pathname === href ? '#00D4FF' : '#CCD6F6',
              borderBottom: '1px solid rgba(0,212,255,0.08)',
              textDecoration: 'none', display: 'block',
            }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" style={{
            marginTop: 16, padding: '14px 0',
            background: 'linear-gradient(135deg, #00AAFF, #00D4FF)',
            color: '#000000', fontWeight: 700, fontSize: 15,
            borderRadius: 8, textDecoration: 'none',
            textAlign: 'center', display: 'block',
          }}>
            Book Demo
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
