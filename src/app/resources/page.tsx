import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free AI resources, guides, and fundamentals for African businesses — from NeuroGrowth Tech.',
  alternates: { canonical: 'https://neurogrowthtech.com/resources' },
}

const resources = [
  {
    icon: '🧠',
    badge: 'BEGINNER',
    title: 'AI Fundamentals',
    desc: 'A beginner-friendly guide to understanding artificial intelligence — what it is, how it works, and how your business can start using it today.',
    href: '/resources/ai-fundamentals',
    color: '#00D4FF',
    time: '10 min read',
  },
  {
    icon: '⚡',
    badge: 'GUIDE',
    title: 'Marketing Automation 101',
    desc: 'Learn how to automate your marketing workflows — email sequences, lead nurturing, and customer segmentation without writing a single line of code.',
    href: '/contact',
    color: '#00FFCC',
    time: 'Coming Soon',
  },
  {
    icon: '📊',
    badge: 'DEEP DIVE',
    title: 'Predictive Analytics for Business',
    desc: 'How AI can forecast customer behavior, predict churn, and identify your next best revenue opportunity using data you already have.',
    href: '/contact',
    color: '#00AAFF',
    time: 'Coming Soon',
  },
  {
    icon: '🤖',
    badge: 'PRACTICAL',
    title: 'Building Your First AI Chatbot',
    desc: 'A step-by-step practical guide to deploying an AI chatbot for customer support or lead generation on your website or WhatsApp.',
    href: '/contact',
    color: '#00D4FF',
    time: 'Coming Soon',
  },
  {
    icon: '🌍',
    badge: 'AFRICA FOCUS',
    title: 'AI for African Businesses',
    desc: 'How businesses across Africa are using AI to compete globally — real case studies from e-commerce, fintech, agritech, and healthcare.',
    href: '/contact',
    color: '#00FFCC',
    time: 'Coming Soon',
  },
  {
    icon: '💰',
    badge: 'ROI',
    title: 'Calculating Your AI ROI',
    desc: 'A practical framework for measuring the return on investment of your AI initiatives — so you can justify the investment and track real results.',
    href: '/contact',
    color: '#00AAFF',
    time: 'Coming Soon',
  },
]

const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }
const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20 }

export default function ResourcesPage() {
  return (
    <>
      <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 2 }}>
          <p style={labelStyle}>[ RESOURCES ]</p>
          <h1 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>
            Learn AI.<br />
            <span style={{ background: 'linear-gradient(135deg, #00AAFF 0%, #00D4FF 45%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Grow Your Business.</span>
          </h1>
          <p style={{ maxWidth: 600, margin: '0 auto', color: '#7A90B8', fontSize: 18, lineHeight: 1.8 }}>
            Free guides, frameworks, and tutorials to help African businesses understand and apply AI — from complete beginners to advanced practitioners.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {resources.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <Link href={r.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div style={{
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
                      <span style={{ fontSize: 32 }}>{r.icon}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', color: r.color, border: `1px solid ${r.color}40`, padding: '3px 10px', borderRadius: 20 }}>{r.badge}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{r.title}</h3>
                    <p style={{ fontSize: 14, color: '#7A90B8', lineHeight: 1.7, flex: 1 }}>{r.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: '#7A90B8' }}>{r.time}</span>
                      <span style={{ color: r.color, fontSize: 16 }}>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .three-col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
