import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'NeuroGrowth Tech pricing plans — choose the AI growth system that fits your business stage and goals.',
}

const faqItems = [
  { q: 'Why is there a 3-month minimum?', a: 'AI growth systems take time to build, integrate, and optimize. Month one is onboarding and build. Month two is launch and early data. Month three is when optimization kicks in and results start compounding. A 3-month minimum ensures you actually see the ROI — not just the setup.' },
  { q: 'Can I start with one service and add more later?', a: 'Yes. While our plans bundle services for efficiency and cost savings, we can scope a custom engagement starting with your highest-priority AI service. Many clients start with AI Marketing Automation or CRM Automation and expand from there.' },
  { q: "What's included in the strategy consultation?", a: "The free strategy consultation is a 30–45 minute call where we analyze your current marketing and tech stack, identify your biggest growth gaps, and map out a custom AI growth plan. You'll walk away with a clear picture of what we'd build and the ROI you could expect." },
  { q: 'Do I need technical staff to work with you?', a: "No. We handle everything end-to-end — strategy, build, integration, and optimization. You don't need a technical team. You just need access to your existing platforms and a point of contact who understands your business goals." },
  { q: 'How do you measure and report ROI?', a: 'We define specific KPIs at the start of every engagement — typically including cost per lead, conversion rate, revenue attributed, and customer retention rate. Every plan includes monthly performance reports tied directly to those KPIs.' },
]

const starterFeatures = [
  'AI Strategy & Consulting (1 roadmap)',
  'AI Marketing Automation (1 channel)',
  'Basic CRM Automation setup',
  '1 AI Chatbot (website)',
  'Monthly performance reporting',
  'Email support',
]
const starterMissing = ['Predictive Analytics', 'Custom Analytics Dashboard', 'Dedicated account manager']

const growthFeatures = [
  'Full AI Strategy & Consulting',
  'AI Marketing Automation (multi-channel)',
  'Customer Personalization Engine',
  'Predictive Analytics models',
  'AI Chatbots & Support Agents',
  'Full CRM Automation',
  'AI Content Generation system',
  'Lead Generation System',
  'Bi-weekly strategy calls',
  'Dedicated account manager',
]

const enterpriseFeatures = [
  'All Growth plan services',
  'Digital Advertising Optimization',
  'Custom Marketing Analytics Dashboard',
  'Custom ML model development',
  'Cross-platform data warehouse',
  'Dedicated AI engineering team',
  'Weekly strategy & performance reviews',
  'Priority support (24/7 Slack)',
  'Custom SLA and KPI agreements',
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="PRICING"
        headline={<>Invest in AI Growth.<br /><span className="text-gradient">Get Compounding Returns.</span></>}
        sub="Choose the plan that matches your current stage. Every plan includes a dedicated AI growth strategy and hands-on implementation — not just software access."
      />

      {/* PRICING CARDS */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24, alignItems: 'start',
          }} className="three-col">

            {/* STARTER */}
            <RevealOnScroll>
              <div style={cardStyle}>
                <div style={planLabel}>Starter</div>
                <div style={priceStyle}><sup style={{ fontSize: 24, fontWeight: 600, verticalAlign: 'top', marginTop: 10, display: 'inline-block' }}>$</sup>2,500<sub style={{ fontSize: 16, fontWeight: 400, color: '#8892B0' }}>/mo</sub></div>
                <p style={descStyle}>For early-stage businesses ready to deploy their first AI growth systems and automate core marketing workflows.</p>
                <div style={divider} />
                <FeatureList included={starterFeatures} missing={starterMissing} />
                <Link href="/contact" style={btnOutline}>Get Started</Link>
              </div>
            </RevealOnScroll>

            {/* GROWTH (featured) */}
            <RevealOnScroll delay={80}>
              <div style={{ ...cardStyle, border: '1px solid #00D4FF', boxShadow: '0 0 40px rgba(0,212,255,0.12)', background: 'linear-gradient(135deg, rgba(5,26,62,0.9) 0%, rgba(100,255,218,0.03) 100%)', position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: '#00D4FF', color: '#020B2D', fontSize: 12, fontWeight: 700,
                  padding: '5px 18px', borderRadius: 50, letterSpacing: '1px', whiteSpace: 'nowrap',
                }}>Most Popular</div>
                <div style={planLabel}>Growth</div>
                <div style={priceStyle}><sup style={{ fontSize: 24, fontWeight: 600, verticalAlign: 'top', marginTop: 10, display: 'inline-block' }}>$</sup>6,500<sub style={{ fontSize: 16, fontWeight: 400, color: '#8892B0' }}>/mo</sub></div>
                <p style={descStyle}>For growth-stage businesses ready to deploy a full AI growth engine across marketing, sales, and customer experience.</p>
                <div style={divider} />
                <FeatureList included={growthFeatures} missing={[]} />
                <Link href="/contact" style={btnPrimary}>Get Started</Link>
              </div>
            </RevealOnScroll>

            {/* ENTERPRISE */}
            <RevealOnScroll delay={160}>
              <div style={cardStyle}>
                <div style={planLabel}>Enterprise</div>
                <div style={{ ...priceStyle, fontSize: 38, paddingTop: 8 }}>Custom</div>
                <p style={{ ...descStyle, marginTop: 12 }}>For scaling businesses that need a fully custom AI growth infrastructure built and operated end-to-end.</p>
                <div style={divider} />
                <FeatureList included={enterpriseFeatures} missing={[]} />
                <Link href="/contact" style={btnOutline}>Contact Us</Link>
              </div>
            </RevealOnScroll>

          </div>

          <p style={{ textAlign: 'center', marginTop: 48, color: '#8892B0', fontSize: 14, lineHeight: 1.8 }}>
            All plans require a 3-month minimum engagement. Pricing varies based on business size, data complexity, and scope.<br />
            Not sure which plan is right?{' '}
            <Link href="/contact" style={{ color: '#00D4FF', textDecoration: 'none' }}>Book a free strategy call</Link>
            {' '}and we&apos;ll help you decide.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={container}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ EVERY PLAN INCLUDES ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            Built-In Quality &amp;<br /><span className="text-gradient">Partnership Standards</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }} className="three-col">
            {[
              { n: '✓', title: 'Custom-Built, Always', body: 'No off-the-shelf tools or generic templates. Every AI system is architected specifically for your business, data, and growth goals.' },
              { n: '✓', title: 'Full Onboarding & Integration', body: 'We handle the entire setup — from auditing your existing stack to integrating all tools and deploying your first AI workflows.' },
              { n: '✓', title: 'Ongoing Optimization', body: 'AI systems are continuously monitored, tested, and improved each month so performance compounds rather than plateaus.' },
            ].map((c, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={{ background: 'rgba(5,26,62,0.75)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: '40px 32px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#00D4FF', marginBottom: 20 }}>{c.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.8 }}>{c.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ PRICING FAQ ]</p>
          <div style={{ overflow: 'hidden', width: '100%', marginBottom: 60, borderTop: '1px solid rgba(0,212,255,0.12)', borderBottom: '1px solid rgba(0,212,255,0.12)', padding: '16px 0' }}>
            <div className="marquee-slow" style={{ display: 'inline-flex', whiteSpace: 'nowrap', fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 700, color: '#fff' }}>
              <span>F A Q S &nbsp;&nbsp;&nbsp;&nbsp;F A Q S &nbsp;&nbsp;&nbsp;&nbsp;F A Q S &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span aria-hidden="true">F A Q S &nbsp;&nbsp;&nbsp;&nbsp;F A Q S &nbsp;&nbsp;&nbsp;&nbsp;F A Q S &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: '#051A3E' }}>
        <div style={container}>
          <RevealOnScroll>
            <div style={{ background: 'rgba(2,11,45,0.8)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ LET&apos;S TALK ]</p>
              <h2 style={{ ...h2Style, position: 'relative' }}>Not Sure Which Plan Is Right?</h2>
              <p style={{ color: '#8892B0', fontSize: 17, maxWidth: 500, margin: '0 auto 36px', position: 'relative', lineHeight: 1.8 }}>Book a free strategy consultation. We&apos;ll assess your business and recommend the right AI growth investment for your stage and goals.</p>
              <Link href="/contact" style={{ ...btnPrimary, position: 'relative' }}>Schedule a Free Consultation</Link>
              <span style={{ display: 'block', marginTop: 16, fontSize: 13, color: '#8892B0', position: 'relative' }}>Free 30-min strategy call &nbsp;·&nbsp; No commitment required</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}

function FeatureList({ included, missing }: { included: string[]; missing: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
      {included.map((f, i) => (
        <li key={i} style={{ fontSize: 14, color: '#CCD6F6', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span style={{ color: '#00D4FF', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
        </li>
      ))}
      {missing.map((f, i) => (
        <li key={i} style={{ fontSize: 14, color: '#8892B0', opacity: 0.5, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span style={{ flexShrink: 0 }}>—</span>{f}
        </li>
      ))}
    </ul>
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
const cardStyle: React.CSSProperties = { background: 'rgba(5,26,62,0.75)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: '44px 36px' }
const planLabel: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: '#00D4FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }
const priceStyle: React.CSSProperties = { fontFamily: 'var(--font-space), sans-serif', fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }
const descStyle: React.CSSProperties = { fontSize: 14, color: '#8892B0', marginBottom: 32, lineHeight: 1.6 }
const divider: React.CSSProperties = { height: 1, background: 'rgba(0,212,255,0.12)', marginBottom: 28 }
const btnPrimary: React.CSSProperties = { display: 'flex', justifyContent: 'center', padding: '14px 0', background: '#00D4FF', color: '#020B2D', fontWeight: 700, fontSize: 15, borderRadius: 8, textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif', width: '100%' }
const btnOutline: React.CSSProperties = { display: 'flex', justifyContent: 'center', padding: '14px 0', background: 'transparent', color: '#CCD6F6', fontWeight: 600, fontSize: 15, border: '1.5px solid rgba(0,212,255,0.20)', borderRadius: 8, textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif', width: '100%' }
