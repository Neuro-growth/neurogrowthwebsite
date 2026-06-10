'use client'

import Link from 'next/link'

interface ResourceCardProps {
  icon: string
  badge: string
  title: string
  desc: string
  href: string
  color: string
  time: string
}

export default function ResourceCard({ icon, badge, title, desc, href, color, time }: ResourceCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{
          background: 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(0,212,255,0.12)',
          borderRadius: 20, padding: '36px 28px',
          display: 'flex', flexDirection: 'column', gap: 14,
          height: '100%', transition: 'all 0.25s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.3)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.12)'
          ;(e.currentTarget as HTMLElement).style.transform = ''
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 32 }}>{icon}</span>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
            color, border: `1px solid ${color}40`,
            padding: '3px 10px', borderRadius: 20,
          }}>{badge}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-space), sans-serif',
          fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.3,
        }}>{title}</h3>
        <p style={{ fontSize: 14, color: '#7A90B8', lineHeight: 1.7, flex: 1 }}>{desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#7A90B8' }}>{time}</span>
          <span style={{ color, fontSize: 16 }}>→</span>
        </div>
      </div>
    </Link>
  )
}
