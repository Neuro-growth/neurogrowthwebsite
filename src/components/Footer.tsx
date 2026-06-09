'use client'

import Link from 'next/link'
import Image from 'next/image'

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services', label: 'AI Strategy' },
  { href: '/services', label: 'Marketing Automation' },
  { href: '/services', label: 'Predictive Analytics' },
  { href: '/services', label: 'AI Chatbots' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid rgba(0,212,255,0.12)',
      padding: '80px 0 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* TOP */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr',
          gap: 80,
          paddingBottom: 60,
          borderBottom: '1px solid rgba(0,212,255,0.12)',
        }}
          className="footer-top-grid"
        >
          {/* BRAND */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image
                src="/logo.png"
                alt="NeuroGrowth Tech"
                width={36}
                height={36}
                style={{ objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'var(--font-space), sans-serif',
                fontSize: 18, fontWeight: 700, color: '#fff',
              }}>
                NeuroGrowth<span style={{ color: '#00D4FF' }}> Tech</span>
              </span>
            </Link>
            <p style={{
              color: '#8892B0', fontSize: 14, lineHeight: 1.8,
              margin: '16px 0 24px', maxWidth: 280,
            }}>
              We build AI solutions and engineering systems for African businesses — automating operations, accelerating growth, and transforming how businesses work.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['in', 'ig', '𝕏'].map((icon, i) => (
                <a key={i} href="#" aria-label={['LinkedIn', 'Instagram', 'Twitter'][i]}
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1px solid rgba(0,212,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: '#8892B0',
                    textDecoration: 'none', transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = '#00D4FF'
                    el.style.color = '#00D4FF'
                    el.style.background = 'rgba(0,212,255,0.10)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(0,212,255,0.12)'
                    el.style.color = '#8892B0'
                    el.style.background = 'transparent'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40,
          }}
            className="footer-links-grid"
          >
            <FooterCol title="Company" links={companyLinks} />
            <FooterCol title="Services" links={serviceLinks} />
            <div>
              <h4 style={{
                fontFamily: 'var(--font-space), sans-serif',
                fontSize: 13, fontWeight: 700, color: '#fff',
                letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 20,
              }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li>
                  <a href="mailto:info@neurogrowthtech.com"
                    style={{ fontSize: 14, color: '#8892B0', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00D4FF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8892B0')}
                  >
                    info@neurogrowthtech.com
                  </a>
                </li>
                <li>
                  <Link href="/contact"
                    style={{ fontSize: 14, color: '#8892B0', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00D4FF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8892B0')}
                  >
                    Schedule a Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 0', fontSize: 13, color: '#8892B0', flexWrap: 'wrap', gap: 12,
        }}>
          <span>© 2026 NeuroGrowth Tech. All rights reserved.</span>
          <span>Built with AI. Powered by Growth.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-top-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-links-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .footer-links-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 style={{
        fontFamily: 'var(--font-space), sans-serif',
        fontSize: 13, fontWeight: 700, color: '#fff',
        letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 20,
      }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}
              style={{ fontSize: 14, color: '#8892B0', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00D4FF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8892B0')}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
