import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a free AI strategy consultation with NeuroGrowth Tech. Let\'s map out your custom AI growth system.',
}

const steps = [
  { icon: '📖', title: 'Step 1 — Diagnose', body: 'We audit your current stack, campaigns, and customer data to find the highest-leverage AI opportunities.' },
  { icon: '⚙️', title: 'Step 2 — Strategize', body: "We map out a custom AI growth plan showing exactly what we'd build, the timeline, and the expected ROI." },
  { icon: '🚀', title: 'Step 3 — Decide', body: 'You decide if you\'d like to move forward. No pressure, no sales tactics — just a clear, honest plan.' },
]

const contactInfo = [
  { icon: '✉️', title: 'Email Us', content: <a href="mailto:info@neurogrowthtech.com" style={{ fontSize: 14, color: '#8892B0', textDecoration: 'none' }}>info@neurogrowthtech.com</a> },
  { icon: '🌍', title: 'Serving Clients Globally', content: <span style={{ fontSize: 14, color: '#8892B0' }}>Remote-first — we work with businesses worldwide</span> },
  { icon: '🕐', title: 'Response Time', content: <span style={{ fontSize: 14, color: '#8892B0' }}>We respond to all inquiries within 24 business hours</span> },
]

const whyBook = [
  { icon: '🔍', title: 'AI Opportunity Audit', body: "We'll identify the top 3 areas in your business where AI can drive the fastest, highest-impact results — specific to your industry and growth stage." },
  { icon: '📌', title: 'Custom Growth Roadmap', body: "You'll leave with a clear, actionable AI growth roadmap — outlining what to build, in what order, and what ROI to expect from each initiative." },
  { icon: '📈', title: 'ROI Projection', body: "We'll model out realistic ROI projections based on your current data and industry benchmarks — so you can make an informed, confident decision." },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        headline={<>Let&apos;s Build Your<br /><span className="text-gradient">AI Growth Engine</span></>}
        sub="Schedule a free 30-minute strategy consultation. We'll analyze your business, identify your biggest AI growth opportunities, and map out a custom plan — no commitment required."
      />

      {/* CONTACT SECTION */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: 80, alignItems: 'start',
          }} className="contact-grid">

            {/* LEFT */}
            <RevealOnScroll>
              <p style={labelStyle}>[ WHAT TO EXPECT ]</p>
              <h2 style={h2Style}>Your Free Strategy Consultation</h2>
              <p style={bodyStyle}>
                In 30–45 minutes, we&apos;ll walk through your current marketing systems, identify where AI can have the biggest impact, and give you a clear picture of what we&apos;d build — and what it would return.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 40 }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      border: '1px solid rgba(0,212,255,0.12)',
                      background: 'rgba(0,212,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, flexShrink: 0,
                    }}>{s.icon}</div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{s.title}</h4>
                      <span style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.7 }}>{s.body}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* contact info box */}
              <div style={{
                marginTop: 48, padding: '28px 32px',
                background: 'rgba(5,26,62,0.75)',
                border: '1px solid rgba(0,212,255,0.12)',
                borderRadius: 16,
              }}>
                <p style={labelStyle}>[ CONTACT INFO ]</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 8 }}>
                  {contactInfo.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 10,
                        border: '1px solid rgba(0,212,255,0.12)',
                        background: 'rgba(0,212,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, flexShrink: 0,
                      }}>{c.icon}</div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{c.title}</h4>
                        {c.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* RIGHT — FORM */}
            <RevealOnScroll delay={100}>
              <div style={{
                background: 'rgba(5,26,62,0.75)',
                border: '1px solid rgba(0,212,255,0.12)',
                borderRadius: 20, padding: '48px 40px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-space), sans-serif',
                  fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8,
                }}>Schedule Your Free Consultation</h3>
                <p style={{ color: '#8892B0', fontSize: 15, marginBottom: 32 }}>
                  Fill out the form below and we&apos;ll reach out within 24 hours to confirm your call time.
                </p>
                <ContactForm />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* WHY BOOK */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={container}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ WHY BOOK A CALL ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            What You Get From<br /><span className="text-gradient">Your Free Strategy Call</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }} className="three-col">
            {whyBook.map((c, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(2,11,45,0.8)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  borderRadius: 20, padding: '40px 32px',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    border: '1px solid rgba(0,212,255,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, marginBottom: 20,
                  }}>{c.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.8 }}>{c.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function PageHero({ label, headline, sub }: { label: string; headline: React.ReactNode; sub: string }) {
  return (
    <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
      <div style={{ ...container, position: 'relative', zIndex: 2 }}>
        <p style={labelStyle}>[ {label} ]</p>
        <h1 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>{headline}</h1>
        <p style={{ maxWidth: 600, margin: '0 auto', color: '#8892B0', fontSize: 18, lineHeight: 1.8 }}>{sub}</p>
      </div>
    </section>
  )
}

const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }
const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20 }
const h2Style: React.CSSProperties = { fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 20 }
const bodyStyle: React.CSSProperties = { color: '#8892B0', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }
