'use client'

import { useState } from 'react'

interface TeamCardProps {
  photo: string
  name: string
  role: string
}

export default function TeamCard({ photo, name, role }: TeamCardProps) {
  const [imgError, setImgError] = useState(false)

  // Generate initials from name
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div style={{
      background: 'rgba(10,10,10,0.85)',
      border: '1px solid rgba(0,212,255,0.12)',
      borderRadius: 20, padding: '32px 20px',
      textAlign: 'center',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 12,
      height: '100%', minHeight: 220,
    }}>
      {/* Photo circle */}
      <div style={{
        width: 90, height: 90, borderRadius: '50%',
        border: '2px solid rgba(0,212,255,0.3)',
        overflow: 'hidden', flexShrink: 0,
        background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 26, fontWeight: 700, color: '#000',
      }}>
        {!imgError ? (
          <img
            src={photo}
            alt={name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--font-space), sans-serif',
          fontSize: 15, fontWeight: 700, color: '#fff',
          marginBottom: 4, lineHeight: 1.3,
        }}>{name}</h3>
        <span style={{ fontSize: 12, color: '#00D4FF', letterSpacing: '0.5px' }}>{role}</span>
      </div>
    </div>
  )
}
