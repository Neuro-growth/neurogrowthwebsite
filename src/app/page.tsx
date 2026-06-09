import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'NeuroGrowth Tech — AI Solutions & Marketing Engineering',
}

const faqItems = [
  {
    q: 'What makes NeuroGrowth Tech different from a marketing agency?',
    a: 'We are not a traditional marketing agency. We are an AI engineering firm that builds intelligent growth systems — automated, data-driven, and tailored to your business. Where agencies run campaigns, we build infrastructure that works 24/7 and compounds results over time.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most clients begin seeing measurable results within 30–60 days of deployment. Full ROI compounding typically becomes clear within 90 days as the AI systems learn and optimize.',
  },
  {
    q: 'Do you integrate with our existing tools?',
    a: 'Yes. We integrate with virtually every major platform — HubSpot, Salesforce, Shopify, Klaviyo, Google Analytics, Meta Ads, and more. We audit your current stack during onboarding and connect everything into a unified AI-powered system.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work with e-commerce, SaaS, fintech, healthtech, real estate, and professional services businesses. Our frameworks are industry-agnostic and custom-built for each client.',
  },
  {
    q: 'What is the first step to getting started?',
    a: "The first step is a free Strategy Consultation. We'll spend 30–45 minutes understanding your business, current systems, and growth goals. From there, we'll map out a custom AI growth plan — even if you decide not to move forward with us.",
  },
  {
    q: 'Is my business data safe and private?',
    a: 'Absolutely. All client data is handled under NDA, and our AI systems are built with security-first architecture. We never share, sell, or use your data for any purpose outside your engagement with us.',
  },
]

const services = [
  { icon: '🧠', title: 'AI Strategy & Consulting', desc: 'Custom AI roadmaps built around your business goals and growth stage.' },
  { icon: '⚡', title: 'AI Marketing Automation', desc: 'End-to-end automated marketing workflows that nurture and convert 24/7.' },
  { icon: '🎯', title: 'Customer Personalization', desc: 'Hyper-personalized experiences across every touchpoint in the customer journey.' },
  { icon: '📊', title: 'Predictive Analytics', desc: 'AI models that forecast customer behavior, churn, and revenue opportunities.' },
  { icon: '🤖', title: 'AI Chatbots & Support Agents', desc: 'Intelligent conversational agents that handle support and sales around the clock.' },
  { icon: '🔗', title: 'CRM Automation', desc: 'Automate your entire CRM pipeline — from lead capture to deal close.' },
]

const stats = [
  { num: '10x', label: 'Faster Growth' },
  { num: '300%', label: 'Avg. ROI Increase' },
  { num: '50+', label: 'Businesses Transformed' },
  { num: '24/7', label: 'AI Systems Running' },
]

const whyCards = [
  { title: 'Systems, Not Campaigns', body: "We don't run one-off campaigns. We build permanent AI infrastructure that generates compounding returns over time." },
  { title: 'Fully Tailored to Your Business', body: 'No templates. Every AI system we build is engineered specifically around your data, customers, and growth goals.' },
  { title: 'Measurable ROI, Always', body: 'Every system we deploy is tied to trackable KPIs — so you always know exactly what your AI investment is returning.' },
  { title: 'Cross-Platform Integration', body: 'We integrate with your existing stack — HubSpot, Salesforce, Shopify, Meta, Google, and more.' },
]

const testimonials = [
  {
    quote: '"NeuroGrowth Tech completely transformed how we acquire and retain customers. Their AI automation system cut our cost per lead by 60% in 90 days."',
    name: 'Sarah L.', role: 'Head of Growth, E-commerce Brand', initials: 'SL',
  },
  {
    quote: '"The predictive analytics dashboard alone changed how we make decisions. We went from guessing to knowing — and revenue jumped 40% in Q1."',
    name: 'James M.', role: 'CEO, SaaS Company', initials: 'JM',
  },
  {
    quote: '"Their AI chatbot handles 80% of our customer support tickets automatically. Our team now focuses on high-value work while the AI handles the rest."',
    name: 'Aisha R.', role: 'Operations Director, FinTech Startup', initials: 'AR',
  },
]

const tickerItems = [
  'AI Marketing Automation', 'Predictive Analytics', 'Customer Personalization',
  'Lead Generation', 'CRM Automation', 'AI Chatbots', 'AI Content Generation',
]
const tickerDouble = [...tickerItems, ...tickerItems]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '140px 0 80px', overflow: 'hidden',
      }}>
        {/* grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(100,255,218,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />
        {/* glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>

            {/* badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 20px',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.20)',
              borderRadius: 50, fontSize: 13, fontWeight: 600, color: '#00D4FF',
              letterSpacing: '1px',
            }}>
              <span className="pulse-dot" style={{
                width: 8, height: 8, background: '#00D4FF', borderRadius: '50%', flexShrink: 0,
              }} />
              AI-Powered Growth Systems
            </div>

            {/* ticker */}
            <div style={{
              width: '100%', overflow: 'hidden',
              borderTop: '1px solid rgba(0,212,255,0.12)',
              borderBottom: '1px solid rgba(0,212,255,0.12)',
              padding: '14px 0',
            }} aria-hidden="true">
              <div className="ticker-animate" style={{ display: 'inline-flex', whiteSpace: 'nowrap', gap: 0 }}>
                {tickerDouble.map((item, i) => (
                  <span key={i} style={{ padding: '0 8px', fontSize: 14, fontWeight: 500, color: i % 2 === 0 ? '#8892B0' : '#00D4FF' }}>
                    {i % 2 === 0 ? item : '·'}
                  </span>
                ))}
                {tickerDouble.map((item, i) => (
                  <span key={`b${i}`} style={{ padding: '0 8px', fontSize: 14, fontWeight: 500, color: i % 2 === 0 ? '#8892B0' : '#00D4FF' }}>
                    {i % 2 === 0 ? item : '·'}
                  </span>
                ))}
              </div>
            </div>

            {/* headline */}
            <h1 style={{
              fontFamily: 'var(--font-space), sans-serif',
              fontSize: 'clamp(38px, 7vw, 80px)',
              fontWeight: 800, lineHeight: 1.1, color: '#fff',
              letterSpacing: '-2px', maxWidth: 900,
            }}>
              We Build{' '}
              <span className="text-gradient">AI-Powered</span>
              <br />Growth Systems
            </h1>

            <p style={{ maxWidth: 620, color: '#8892B0', fontSize: 18, lineHeight: 1.8 }}>
              NeuroGrowth Tech is not a traditional agency. We engineer intelligent growth infrastructure — automating marketing, personalizing customer journeys, and maximizing ROI through AI.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" style={btnPrimary}>Schedule a Consultation</Link>
              <Link href="/services" style={btnGhost}>Explore Services</Link>
            </div>

            {/* stats bar */}
            <div style={{
              display: 'flex', alignItems: 'center', flexWrap: 'wrap',
              justifyContent: 'center', marginTop: 16, padding: '28px 40px',
              background: 'rgba(5,26,62,0.75)',
              border: '1px solid rgba(0,212,255,0.12)',
              borderRadius: 20, backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              gap: 0,
            }}
              className="stats-bar"
            >
              {stats.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 36px' }}
                    className="stat-item"
                  >
                    <span style={{
                      fontFamily: 'var(--font-space), sans-serif',
                      fontSize: 32, fontWeight: 800, color: '#00D4FF', lineHeight: 1,
                    }}>{s.num}</span>
                    <span style={{ fontSize: 12, color: '#8892B0', marginTop: 4, letterSpacing: '0.5px' }}>{s.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="stat-div" style={{ width: 1, height: 48, background: 'rgba(0,212,255,0.12)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#8892B0',
        }}>
          <span>Scroll</span>
          <div className="scroll-line-animate" style={{
            width: 1, height: 50,
            background: 'linear-gradient(to bottom, #00D4FF, transparent)',
          }} />
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{
        padding: '40px 0',
        borderTop: '1px solid rgba(0,212,255,0.08)',
        borderBottom: '1px solid rgba(0,212,255,0.08)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{
            fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#8892B0', textAlign: 'center', marginBottom: 24,
          }}>[ TRUSTED BY GROWTH-FOCUSED BUSINESSES ]</p>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexWrap: 'wrap', gap: '12px 40px',
          }}>
            {['Shopify Partners', 'HubSpot Certified', 'OpenAI Ecosystem', 'Google Analytics', 'Salesforce Ready', 'Meta Ads Certified'].map(t => (
              <span key={t} style={{ fontSize: 13, fontWeight: 600, color: '#8892B0', letterSpacing: '1px', opacity: 0.7 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <RevealOnScroll>
              <p style={labelStyle}>[ IN NUMBER ]</p>
              <h2 style={h2Style}>At NeuroGrowth Tech, we don&apos;t run campaigns — we build AI growth engines tailored to your business.</h2>
              <p style={bodyStyle}>We combine deep AI expertise with marketing engineering to create systems that work around the clock — generating leads, nurturing customers, and converting at scale.</p>
              <Link href="/about" style={btnOutline}>Learn About Us</Link>
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

      {/* ── PROCESS ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ HOW IT WORKS ]</p>
          <MarqueeHeading text="Intelligent Problem-Solving for Your Business Growth     " />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {[
              { n: '01', title: 'Diagnose Your Growth Gaps', body: 'We start with a deep audit of your marketing systems, data infrastructure, and customer journey to identify exactly where AI can drive the biggest gains.' },
              { n: '02', title: 'Engineer Your AI Growth System', body: 'Our team designs and builds a fully custom AI stack — from automation workflows and predictive models to chatbots and personalization engines.' },
              { n: '03', title: 'Scale, Optimize & Compound', body: 'We deploy, monitor, and continuously optimize your AI systems so they compound results over time — more leads, better retention, higher ROI.' },
            ].map((c, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <ProcessCard {...c} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ SOLUTIONS ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            Transforming Businesses with<br />
            <span className="text-gradient">AI-Powered Solutions</span>
          </h2>
          <p style={{ ...bodyStyle, textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            We specialize in 10 core AI services that cover every part of your growth engine — from top-of-funnel awareness to bottom-of-funnel conversion and retention.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="three-col">
            {services.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <Link href="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <ServiceCard {...s} />
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" style={btnOutline}>View All 10 Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }} className="two-col">
            <RevealOnScroll>
              <p style={labelStyle}>[ WHY NEUROGROWTH TECH ]</p>
              <h2 style={h2Style}>
                Not an Agency.<br />An AI Growth<br />
                <span className="text-gradient">Engineering Firm.</span>
              </h2>
            </RevealOnScroll>
            <div>
              {whyCards.map((c, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div style={{
                    display: 'flex', gap: 20, alignItems: 'flex-start',
                    padding: '28px 0',
                    borderBottom: i < whyCards.length - 1 ? '1px solid rgba(0,212,255,0.12)' : 'none',
                  }}>
                    <span style={{ fontSize: 20, color: '#00D4FF', flexShrink: 0, marginTop: 2 }}>◈</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{c.title}</h3>
                      <p style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.7 }}>{c.body}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ CLIENT RESULTS ]</p>
          <MarqueeHeading text="Real Results, Trusted Partnerships     " />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={cardStyle}>
                  <div style={{ fontSize: 60, lineHeight: 0.8, color: '#00D4FF', opacity: 0.4, fontFamily: 'Georgia, serif', marginBottom: 16 }}>&ldquo;</div>
                  <p style={{ fontSize: 15, color: '#CCD6F6', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>{t.quote}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 700, color: '#020B2D', flexShrink: 0,
                    }}>{t.initials}</div>
                    <div>
                      <strong style={{ display: 'block', color: '#fff', fontSize: 15 }}>{t.name}</strong>
                      <span style={{ fontSize: 13, color: '#8892B0' }}>{t.role}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ FREQUENTLY ASKED ]</p>
          <MarqueeHeading text="F A Q S     F A Q S     F A Q S     F A Q S     " slow />
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <RevealOnScroll>
            <div style={{
              ...cardStyle,
              textAlign: 'center', padding: '80px 60px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                width: 600, height: 400,
                background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ GET STARTED ]</p>
              <h2 style={{ ...h2Style, position: 'relative' }}>Transform Your Business with AI-Powered Growth</h2>
              <p style={{ ...bodyStyle, maxWidth: 500, margin: '0 auto 36px', position: 'relative' }}>
                Book a free strategy consultation and let&apos;s map out your custom AI growth system today.
              </p>
              <Link href="/contact" style={{ ...btnPrimary, position: 'relative' }}>Schedule a Consultation</Link>
              <span style={{ display: 'block', marginTop: 16, fontSize: 13, color: '#8892B0', position: 'relative' }}>
                Free 30-min strategy call &nbsp;·&nbsp; No commitment required
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <GridStyles />
    </>
  )
}

/* ── SHARED SUB-COMPONENTS ── */

function MarqueeHeading({ text, slow }: { text: string; slow?: boolean }) {
  return (
    <div style={{
      overflow: 'hidden', width: '100%', marginBottom: 60,
      borderTop: '1px solid rgba(0,212,255,0.12)',
      borderBottom: '1px solid rgba(0,212,255,0.12)',
      padding: '16px 0',
    }}>
      <div
        className={slow ? 'marquee-slow' : 'marquee-animate'}
        style={{
          display: 'inline-flex', whiteSpace: 'nowrap',
          fontFamily: 'var(--font-space), sans-serif',
          fontSize: 'clamp(22px, 4vw, 40px)',
          fontWeight: 700, color: '#fff',
        }}
      >
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </div>
    </div>
  )
}

function ProcessCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div style={{ ...cardStyle, padding: '40px 32px' }}>
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        border: '1px solid rgba(0,212,255,0.20)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-space), sans-serif',
        fontSize: 16, fontWeight: 700, color: '#00D4FF',
        marginBottom: 20,
      }}>{n}</div>
      <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.8 }}>{body}</p>
    </div>
  )
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{
      ...cardStyle,
      display: 'flex', flexDirection: 'column', gap: 14,
      padding: '36px 28px', height: '100%',
    }}>
      <div style={{ fontSize: 32, lineHeight: 1 }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.7, flex: 1 }}>{desc}</p>
      <span style={{ color: '#00D4FF', fontSize: 18 }}>→</span>
    </div>
  )
}

/* ── SHARED STYLES ── */
const btnPrimary: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '15px 36px',
  background: '#00D4FF', color: '#020B2D', fontWeight: 700, fontSize: 16,
  borderRadius: 8, textDecoration: 'none',
  fontFamily: 'var(--font-space), sans-serif', transition: 'all 0.25s',
}
const btnGhost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '15px 36px',
  background: 'transparent', color: '#00D4FF', fontWeight: 600, fontSize: 16,
  border: '1.5px solid #00D4FF', borderRadius: 8, textDecoration: 'none',
  fontFamily: 'var(--font-space), sans-serif', transition: 'all 0.25s',
}
const btnOutline: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '12px 28px',
  background: 'transparent', color: '#CCD6F6', fontWeight: 600, fontSize: 15,
  border: '1.5px solid rgba(0,212,255,0.20)', borderRadius: 8, textDecoration: 'none',
  fontFamily: 'var(--font-space), sans-serif', transition: 'all 0.25s',
}
const labelStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, letterSpacing: '3px',
  textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20,
}
const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-space), sans-serif',
  fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700,
  color: '#fff', lineHeight: 1.2, marginBottom: 20,
}
const bodyStyle: React.CSSProperties = {
  color: '#8892B0', fontSize: 17, lineHeight: 1.8, marginBottom: 32,
}
const cardStyle: React.CSSProperties = {
  background: 'rgba(5,26,62,0.75)',
  border: '1px solid rgba(0,212,255,0.12)',
  borderRadius: 20, padding: 36,
}
const statCard: React.CSSProperties = {
  ...cardStyle, padding: '32px 28px',
}

function GridStyles() {
  return (
    <style>{`
      @media (max-width: 1024px) {
        .two-col   { grid-template-columns: 1fr !important; gap: 48px !important; }
        .three-col { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 640px) {
        .three-col { grid-template-columns: 1fr !important; }
        .stats-bar { padding: 20px 16px !important; flex-direction: column !important; gap: 16px !important; }
        .stat-item { padding: 0 !important; }
        .stat-div  { width: 60px !important; height: 1px !important; }
      }
    `}</style>
  )
}
