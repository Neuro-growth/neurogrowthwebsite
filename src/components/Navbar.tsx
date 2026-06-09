'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
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

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 0' : '20px 0',
        background: scrolled ? 'rgba(2,11,45,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', gap: 40,
      }}>
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image
            src="/logo.png"
            alt="NeuroGrowth Tech"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
          <span style={{
            fontFamily: 'var(--font-space), sans-serif',
            fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px',
          }}>
            NeuroGrowth<span style={{ color: '#00D4FF' }}> Tech</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul style={{
          display: 'flex', gap: 4, marginLeft: 'auto', listStyle: 'none',
          padding: 0,
        }}
          className="desktop-nav"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link href={href} style={{
                  padding: '8px 16px', fontSize: 14, fontWeight: 500,
                  color: active ? '#00D4FF' : '#CCD6F6',
                  borderRadius: 6, textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = '#00D4FF' }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = '#CCD6F6' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <Link href="/contact"
          style={{
            flexShrink: 0, padding: '10px 22px', background: '#00D4FF',
            color: '#020B2D', fontWeight: 700, fontSize: 14, borderRadius: 8,
            textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif',
            transition: 'all 0.25s', marginLeft: 8,
          }}
          className="nav-cta desktop-nav"
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = '#00AEDD'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = '#00D4FF'
            ;(e.currentTarget as HTMLElement).style.transform = ''
          }}
        >
          Schedule a Consultation
        </Link>

        {/* HAMBURGER */}
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

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          background: '#051A3E', borderTop: '1px solid rgba(0,212,255,0.12)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              padding: '12px 0', fontSize: 16, color: pathname === href ? '#00D4FF' : '#CCD6F6',
              borderBottom: '1px solid rgba(0,212,255,0.10)', textDecoration: 'none', display: 'block',
            }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" style={{
            marginTop: 12, padding: '13px 0', background: '#00D4FF',
            color: '#020B2D', fontWeight: 700, fontSize: 15, borderRadius: 8,
            textDecoration: 'none', textAlign: 'center', display: 'block',
          }}>
            Schedule a Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
