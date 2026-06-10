import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'NeuroGrowth Tech AI-powered products — SmartChama and Gikuyu AI Translator. Built for African businesses and communities.',
  alternates: { canonical: 'https://neurogrowthtech.com/solutions' },
}

const solutions = [
  {
    icon: '💰',
    badge: 'FINTECH · AI',
    name: 'SmartChama',
    tagline: 'AI-Powered Chama Management Platform',
    description: 'SmartChama is an intelligent financial management platform built specifically for African chamas (savings groups) and investment clubs. We bring AI automation, financial intelligence, and digital infrastructure to the heart of African community finance.',
    color: '#00D4FF',
    features: [
      {
        icon: '🤖',
        title: 'AI Financial Assistant',
        body: 'An intelligent chatbot that helps chama members track contributions, check balances, get loan eligibility, and receive personalized financial advice — available 24/7 via WhatsApp and web.',
      },
      {
        icon: '📊',
        title: 'Automated Bookkeeping',
        body: 'Automatically records contributions, loans, repayments, and dividends. No more manual spreadsheets — every transaction is tracked, categorized, and auditable in real time.',
      },
      {
        icon: '🔮',
        title: 'Predictive Analytics',
        body: 'AI models that predict member default risk, forecast group liquidity, and recommend optimal investment windows based on the group\'s savings patterns and market conditions.',
      },
      {
        icon: '📱',
        title: 'M-Pesa & Mobile Integration',
        body: 'Seamless integration with M-Pesa and other African mobile money platforms for automated contribution collection, loan disbursement, and real-time payment notifications.',
      },
      {
        icon: '🗳️',
        title: 'Digital Governance',
        body: 'Digital voting, meeting minutes automation, and constitution management. Run your chama transparently and professionally with full audit trails for every decision.',
      },
      {
        icon: '📈',
        title: 'Investment Intelligence',
        body: 'AI-powered investment recommendations tailored to the chama\'s risk profile and financial goals — from money market funds to real estate pooling opportunities.',
      },
    ],
    stats: [
      { num: '500+', label: 'Chamas Managed' },
      { num: 'KSh 2B+', label: 'Transactions Processed' },
      { num: '98%', label: 'Collection Rate' },
      { num: '24/7', label: 'AI Assistance' },
    ],
    cta: 'Get SmartChama',
    ctaLink: '/contact',
    status: 'Live Product',
    statusColor: '#00FFAA',
  },
  {
    icon: '🗣️',
    badge: 'AI · LANGUAGE · CULTURE',
    name: 'Gikuyu AI Translator',
    tagline: 'Preserving African Languages Through Artificial Intelligence',
    description: 'The Gikuyu AI Translator is a deep learning language platform that enables real-time, accurate translation between Gikuyu and English — and other African languages. Built to preserve cultural heritage while powering modern AI-driven communication for Gikuyu-speaking communities across Kenya and the diaspora.',
    color: '#00FFCC',
    features: [
      {
        icon: '⚡',
        title: 'Real-Time Translation',
        body: 'Instantly translate text, voice, and documents between Gikuyu and English in both directions. Powered by a custom-trained transformer model fine-tuned on authentic Gikuyu language data.',
      },
      {
        icon: '🎙️',
        title: 'Voice-to-Text (Speech Recognition)',
        body: 'Speak in Gikuyu and receive accurate English transcription — and vice versa. Built for low-bandwidth environments common across rural Kenya.',
      },
      {
        icon: '📚',
        title: 'Cultural Context Engine',
        body: 'Unlike generic translators, our AI understands Gikuyu proverbs, idioms, and cultural context — producing translations that respect the depth and nuance of the language.',
      },
      {
        icon: '🏫',
        title: 'Education Integration',
        body: 'Designed to support Gikuyu language education in schools — with vocabulary tools, pronunciation guides, and curriculum-aligned content for teachers and students.',
      },
      {
        icon: '💬',
        title: 'WhatsApp & API Access',
        body: 'Businesses and developers can integrate Gikuyu AI translation directly into their apps, websites, and WhatsApp chatbots via a simple REST API.',
      },
      {
        icon: '🌍',
        title: 'Multi-Language Expansion',
        body: 'Starting with Gikuyu, the platform is being expanded to support Swahili, Luo, Kalenjin, and other African languages — building the continent\'s most comprehensive African language AI.',
      },
    ],
    stats: [
      { num: '50K+', label: 'Translations Daily' },
      { num: '95%', label: 'Accuracy Rate' },
      { num: '12+', label: 'Gikuyu Dialects' },
      { num: '3+', label: 'Languages Coming' },
    ],
    cta: 'Try the Translator',
    ctaLink: '/contact',
    status: 'Beta Available',
    statusColor: '#00D4FF',
  },
]

const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }
const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20 }
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }
const cardStyle: React.CSSProperties = { background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: 36 }

export default function SolutionsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 2 }}>
          <p style={labelStyle}>[ OUR SOLUTIONS ]</p>
          <h1 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>
            AI Products Built<br /><span style={{ background: 'linear-gradient(135deg, #00AAFF 0%, #00D4FF 45%, #00FFCC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>For Africa</span>
          </h1>
          <p style={{ maxWidth: 600, margin: '0 auto', color: '#7A90B8', fontSize: 18, lineHeight: 1.8 }}>
            Beyond services — we build AI-powered products that solve real African problems. From community finance to language preservation, our solutions are engineered for impact.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      {solutions.map((sol, idx) => (
        <section key={idx} style={{ padding: '100px 0', background: idx % 2 === 1 ? '#0A0A0A' : '#000000' }}>
          <div style={container}>

            {/* SOLUTION HEADER */}
            <RevealOnScroll>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 40 }}>{sol.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: sol.color, border: `1px solid ${sol.color}40`, padding: '3px 10px', borderRadius: 20 }}>{sol.badge}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: sol.statusColor, background: `${sol.statusColor}15`, border: `1px solid ${sol.statusColor}40`, padding: '3px 10px', borderRadius: 20 }}>● {sol.status}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: 0 }}>{sol.name}</h2>
                  <p style={{ fontSize: 16, color: sol.color, fontWeight: 500, margin: '4px 0 0' }}>{sol.tagline}</p>
                </div>
              </div>
              <p style={{ fontSize: 17, color: '#7A90B8', lineHeight: 1.8, maxWidth: 800, marginBottom: 48 }}>{sol.description}</p>
            </RevealOnScroll>

            {/* STATS */}
            <RevealOnScroll>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 60 }} className="four-col-stats">
                {sol.stats.map((s, i) => (
                  <div key={i} style={{
                    background: `${sol.color}08`,
                    border: `1px solid ${sol.color}20`,
                    borderRadius: 16, padding: '24px 20px', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 32, fontWeight: 800, color: sol.color, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: '#7A90B8' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* FEATURES GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }} className="three-col">
              {sol.features.map((f, i) => (
                <RevealOnScroll key={i} delay={i * 60}>
                  <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <span style={{ fontSize: 28 }}>{f.icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: '#7A90B8', lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* CTA */}
            <RevealOnScroll>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href={sol.ctaLink} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 36px',
                  background: `linear-gradient(135deg, #00AAFF, ${sol.color})`,
                  color: '#000', fontWeight: 700, fontSize: 15,
                  borderRadius: 10, textDecoration: 'none',
                  fontFamily: 'var(--font-space), sans-serif',
                  boxShadow: `0 4px 24px ${sol.color}30`,
                }}>
                  {sol.cta} →
                </Link>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px',
                  background: 'transparent', color: sol.color,
                  border: `1.5px solid ${sol.color}40`,
                  fontWeight: 600, fontSize: 15,
                  borderRadius: 10, textDecoration: 'none',
                  fontFamily: 'var(--font-space), sans-serif',
                }}>
                  Book a Demo
                </Link>
              </div>
            </RevealOnScroll>

          </div>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <RevealOnScroll>
            <div style={{
              ...cardStyle, textAlign: 'center', padding: '80px 60px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ BUILD WITH US ]</p>
              <h2 style={{ ...h2Style, position: 'relative' }}>Have an Idea for an AI Product?</h2>
              <p style={{ color: '#7A90B8', fontSize: 17, lineHeight: 1.8, maxWidth: 500, margin: '0 auto 36px', position: 'relative' }}>
                We partner with entrepreneurs and businesses to engineer AI-powered products from concept to launch. Let&apos;s build something transformative together.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 36px', background: '#00D4FF', color: '#000', fontWeight: 700, fontSize: 16, borderRadius: 8, textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif', position: 'relative' }}>
                Start a Conversation
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .three-col { grid-template-columns: 1fr 1fr !important; }
          .four-col-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .three-col { grid-template-columns: 1fr !important; }
          .four-col-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
