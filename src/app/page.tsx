import type { Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/components/Logo'
import HeroScene3DWrapper from '@/components/HeroScene3DWrapper'

export const metadata: Metadata = {
  title: 'NeuroGrowth Tech — Accelerating Growth Through Intelligence',
}

export default function LandingPage() {
  return (
    <>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}>
        {/* Black background cover — overrides global bg image */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#000',
          zIndex: 0,
        }} />

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }} />

        <div style={{
          maxWidth: 1240, margin: '0 auto', padding: '0 40px',
          width: '100%', position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }} className="landing-grid">

          {/* ── LEFT: LOGO + TAGLINE + CTA ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Logo */}
            <div>
              <Logo height={36} />
            </div>

            {/* Tagline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h1 style={{
                fontFamily: "'Sora', 'Inter', system-ui, sans-serif",
                fontSize: 'clamp(24px, 3.2vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#fff',
                letterSpacing: '-1px',
                margin: 0,
              }}>
                Accelerating<br />
                Growth Through<br />
                <span style={{
                  background: 'linear-gradient(135deg, #00AAFF 0%, #00D4FF 45%, #00FFCC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Intelligence
                </span>
              </h1>

            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex' }}>
                {['SL','JM','AR','KO'].map((init, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
                    border: '2px solid rgba(0,0,0,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 700, color: '#000',
                    marginLeft: i === 0 ? 0 : -10,
                    flexShrink: 0,
                  }}>{init}</div>
                ))}
              </div>
              <span style={{ fontSize: 13, color: '#8892B0' }}>
                <span style={{ color: '#00D4FF', fontWeight: 700 }}>50+</span> African businesses growing with AI
              </span>
            </div>
          </div>

          {/* ── RIGHT: 3D ANIMATION ── */}
          <div style={{ height: 680 }} className="landing-3d">
            <HeroScene3DWrapper />
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .landing-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .landing-3d   { height: 420px !important; }
        }
        @media (max-width: 640px) {
          .landing-3d { height: 320px !important; }
        }
      `}</style>
    </>
  )
}
