'use client'

import { useState } from 'react'

type FaqItem = { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(0,212,255,0.12)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '24px 0', background: 'none',
              border: 'none', cursor: 'pointer', gap: 16, textAlign: 'left',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-space), sans-serif',
              fontSize: 16, fontWeight: 600,
              color: open === i ? '#00D4FF' : '#fff',
              transition: 'color 0.2s',
            }}>
              {item.q}
            </span>
            <span style={{
              fontSize: 22, color: '#00D4FF', flexShrink: 0,
              fontWeight: 300, lineHeight: 1,
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s',
              display: 'inline-block',
            }}>+</span>
          </button>
          <div className={`faq-body ${open === i ? 'open' : ''}`}>
            <p style={{
              paddingBottom: 24, color: '#8892B0',
              fontSize: 15, lineHeight: 1.8,
            }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
