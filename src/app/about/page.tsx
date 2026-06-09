import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about NeuroGrowth Tech — an AI solutions and marketing engineering company building intelligent growth systems for businesses.',
}

const values = [
  { num: '01', title: 'AI-First Thinking', body: 'We approach every business problem through an AI lens first — asking what\'s possible with intelligent automation before defaulting to manual solutions.' },
  { num: '02', title: 'Results Over Outputs', body: 'We measure our success by your revenue, retention, and ROI — not by deliverables shipped. Every system we build is tied to tangible business outcomes.' },
  { num: '03', title: 'Custom, Always', body: 'No two businesses are alike. We never deploy generic templates or off-the-shelf tools. Every AI system is architected specifically for your data and goals.' },
  { num: '04', title: 'Radical Transparency', body: 'You always know what we\'re building, why we\'re building it, and what it\'s returning. No black boxes, no vanity metrics — just clear, honest reporting.' },
  { num: '05', title: 'Compounding Systems', body: 'We build for the long game. Our AI systems are designed to learn, improve, and compound results over time — not spike and fade like a campaign.' },
  { num: '06', title: 'Partnership Mindset', body: 'We operate as a true extension of your team — embedded in your goals, invested in your growth, and aligned on every metric that matters to your business.' },
]

const differences = [
  { title: 'End-to-End Ownership', body: 'From strategy to deployment to optimization — we own the entire AI growth lifecycle so you don\'t have to manage multiple vendors or stitch together tools yourself.' },
  { title: 'Deep AI Expertise', body: 'Our team combines machine learning, marketing science, and growth engineering — a rare combination that most agencies and consultants simply don\'t have.' },
  { title: 'Built for Scale', body: 'We architect systems that grow with your business. Whether you\'re serving 1,000 or 1,000,000 customers, your AI infrastructure scales without breaking.' },
  { title: 'Continuous Optimization', body: 'We don\'t launch and leave. Our systems are continuously monitored, tested, and refined — so performance compounds month over month.' },
]

const teamRoles = [
  { initials: 'AI', title: 'AI Strategy Lead', role: 'AI Architecture & Roadmapping' },
  { initials: 'ML', title: 'ML Engineering', role: 'Predictive Models & Data Science' },
  { initials: 'MK', title: 'Marketing Engineering', role: 'Automation & Growth Systems' },
  { initials: 'CX', title: 'CX & Personalization', role: 'Customer Journey Design' },
]

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        label="ABOUT US"
        headline={<>Not an Agency.<br /><span className="text-gradient">An AI Growth Engineering Firm.</span></>}
        sub="NeuroGrowth Tech was built on one belief: businesses that harness AI correctly don't just grow — they compound. We're here to make that happen."
      />

      {/* MISSION */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <RevealOnScroll>
              <p style={labelStyle}>[ OUR MISSION ]</p>
              <h2 style={h2Style}>
                We exist to give every business access to enterprise-grade{' '}
                <span className="text-gradient">AI growth infrastructure.</span>
              </h2>
              <p style={bodyStyle}>Most businesses know AI matters. Few know how to actually deploy it in ways that drive measurable, compounding growth. That's the gap we close.</p>
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                We don&apos;t sell software. We don&apos;t run ads. We engineer complete AI-powered growth systems — fully custom, deeply integrated, and relentlessly optimized.
              </p>
              <Link href="/contact" style={btnPrimary}>Work With Us</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { num: '12', label: 'AI Frameworks Built' },
                  { num: '50+', label: 'Businesses Served' },
                  { num: '80%', label: 'Avg. Efficiency Gain' },
                  { num: '$2B+', label: 'Revenue Influenced' },
                ].map((s, i) => (
                  <div key={i} style={statCard}>
                    <span style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 44, fontWeight: 800, color: '#00D4FF', display: 'block', lineHeight: 1, marginBottom: 8 }}>{s.num}</span>
                    <p style={{ fontSize: 14, color: '#8892B0' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ OUR PRINCIPLES ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            The Values Behind<br /><span className="text-gradient">Everything We Build</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }} className="three-col">
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 70}>
                <div style={cardStyle}>
                  <div style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 13, fontWeight: 700, color: '#00D4FF', letterSpacing: '2px', marginBottom: 16 }}>{v.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCES */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }} className="two-col">
            <RevealOnScroll>
              <p style={labelStyle}>[ THE DIFFERENCE ]</p>
              <h2 style={h2Style}>
                Why NeuroGrowth Tech is in a<br />
                <span className="text-gradient">Category of Its Own</span>
              </h2>
              <p style={bodyStyle}>Traditional agencies rent you their team&apos;s time. SaaS tools give you software to figure out yourself. We do neither. We build and operate your AI growth engine end-to-end.</p>
            </RevealOnScroll>
            <div>
              {differences.map((d, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div style={{
                    display: 'flex', gap: 20, alignItems: 'flex-start', padding: '28px 0',
                    borderBottom: i < differences.length - 1 ? '1px solid rgba(0,212,255,0.12)' : 'none',
                  }}>
                    <span style={{ fontSize: 20, color: '#00D4FF', flexShrink: 0, marginTop: 2 }}>◈</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{d.title}</h3>
                      <p style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.7 }}>{d.body}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ THE TEAM ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            Built by AI &amp; Growth<br /><span className="text-gradient">Specialists</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 48 }} className="four-col">
            {teamRoles.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={{ ...cardStyle, textAlign: 'center' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 700, color: '#020B2D', margin: '0 auto 16px',
                  }}>{t.initials}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t.title}</h3>
                  <span style={{ fontSize: 13, color: '#00D4FF' }}>{t.role}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner headline="Ready to Build Your AI Growth Engine?" sub="Book a free strategy call and let's map out exactly what's possible for your business." />

      <GridStyles />
    </>
  )
}

/* ─── shared helpers (copied into each page to avoid cross-page server imports) ─── */
function PageHero({ label, headline, sub }: { label: string; headline: React.ReactNode; sub: string }) {
  return (
    <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 300,
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)',
      }} />
      <div style={{ ...container, position: 'relative', zIndex: 2 }}>
        <p style={labelStyle}>[ {label} ]</p>
        <h1 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>{headline}</h1>
        <p style={{ maxWidth: 600, margin: '0 auto', color: '#8892B0', fontSize: 18, lineHeight: 1.8 }}>{sub}</p>
      </div>
    </section>
  )
}

function CtaBanner({ headline, sub }: { headline: string; sub: string }) {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={container}>
        <RevealOnScroll>
          <div style={{ ...cardStyle, textAlign: 'center', padding: '80px 60px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ GET STARTED ]</p>
            <h2 style={{ ...h2Style, position: 'relative' }}>{headline}</h2>
            <p style={{ ...bodyStyle, maxWidth: 480, margin: '0 auto 36px', position: 'relative' }}>{sub}</p>
            <Link href="/contact" style={{ ...btnPrimary, position: 'relative' }}>Schedule a Consultation</Link>
            <span style={{ display: 'block', marginTop: 16, fontSize: 13, color: '#8892B0', position: 'relative' }}>Free 30-min strategy call &nbsp;·&nbsp; No commitment required</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }
const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20 }
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }
const bodyStyle: React.CSSProperties = { color: '#8892B0', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }
const cardStyle: React.CSSProperties = { background: 'rgba(5,26,62,0.75)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: 36 }
const statCard: React.CSSProperties = { ...cardStyle, padding: '32px 28px' }
const btnPrimary: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', padding: '15px 36px', background: '#00D4FF', color: '#020B2D', fontWeight: 700, fontSize: 16, borderRadius: 8, textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif' }

function GridStyles() {
  return (
    <style>{`
      @media (max-width: 1024px) {
        .two-col   { grid-template-columns: 1fr !important; gap: 48px !important; }
        .three-col { grid-template-columns: 1fr 1fr !important; }
        .four-col  { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 640px) {
        .three-col { grid-template-columns: 1fr !important; }
        .four-col  { grid-template-columns: 1fr 1fr !important; }
      }
    `}</style>
  )
}
