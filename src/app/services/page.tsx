import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'AI Services',
  description: 'Explore NeuroGrowth Tech\'s 10 AI services — AI strategy consulting, marketing automation, predictive analytics, AI chatbots, CRM automation, lead generation, and custom AI solutions for African businesses.',
  alternates: { canonical: 'https://neurogrowthtech.com/services' },
}

const services = [
  {
    icon: '🧠',
    title: 'AI Strategy & Consulting',
    desc: 'Before we build anything, we map out a precise AI growth strategy tailored to your business model, data maturity, and competitive landscape.',
    bullets: [
      'AI readiness audit and gap analysis',
      'Custom AI roadmap and prioritization framework',
      'Technology stack recommendations',
      'ROI projection and business case modeling',
      '90-day and 12-month AI implementation plan',
    ],
  },
  {
    icon: '⚡',
    title: 'AI Marketing Automation',
    desc: 'We replace manual, fragmented marketing workflows with intelligent, end-to-end automation systems that run 24/7 — nurturing leads and personalizing outreach at scale.',
    bullets: [
      'Multi-channel automation workflows (email, SMS, social)',
      'Behavioral trigger campaigns and drip sequences',
      'Lead scoring and routing automation',
      'A/B testing frameworks powered by AI',
      'Integration with HubSpot, Klaviyo, ActiveCampaign, and more',
    ],
  },
  {
    icon: '🎯',
    title: 'Customer Personalization',
    desc: 'We deploy AI personalization engines that adapt every customer touchpoint in real time — from website content and product recommendations to email subject lines and ad creative.',
    bullets: [
      'Dynamic website content personalization',
      'AI-powered product and content recommendation engines',
      'Customer segmentation and micro-targeting',
      'Lifecycle stage personalization systems',
      'Real-time behavioral personalization triggers',
    ],
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    desc: 'We build machine learning models that transform your historical data into forward-looking intelligence — so you can make faster, more confident decisions.',
    bullets: [
      'Customer lifetime value (CLV) prediction models',
      'Churn prediction and early warning systems',
      'Revenue forecasting and demand modeling',
      'Propensity-to-buy scoring systems',
      'Custom analytics dashboards with predictive insights',
    ],
  },
  {
    icon: '🤖',
    title: 'AI Chatbots & Customer Support Agents',
    desc: 'We build intelligent conversational AI agents that handle customer support, qualify leads, book appointments, and close sales — operating at scale without additional headcount.',
    bullets: [
      'Custom-trained AI chatbots (website, WhatsApp, Instagram)',
      'Intelligent FAQ and support ticket deflection',
      'Lead qualification and appointment booking bots',
      'Seamless handoff to human agents when needed',
      'Continuous learning and performance improvement',
    ],
  },
  {
    icon: '🔗',
    title: 'CRM Automation',
    desc: 'We turn your CRM from a passive database into an active, AI-driven sales and marketing engine — automatically capturing, scoring, routing, and nurturing every contact.',
    bullets: [
      'Full CRM setup and data architecture (HubSpot, Salesforce)',
      'Automated lead capture and enrichment workflows',
      'AI-powered deal scoring and pipeline management',
      'Automated follow-up sequences and task creation',
      'CRM health audits and data cleanup',
    ],
  },
  {
    icon: '✍️',
    title: 'AI Content Generation',
    desc: 'We deploy AI content systems that produce high-quality, on-brand marketing content at scale — dramatically reducing production time and cost.',
    bullets: [
      'Brand voice training and AI content guidelines',
      'Automated blog, email, and social content pipelines',
      'AI-powered ad copy generation and testing',
      'SEO-optimized content at scale',
      'Content performance tracking and optimization loops',
    ],
  },
  {
    icon: '🔍',
    title: 'Lead Generation Systems',
    desc: 'We engineer end-to-end AI-powered lead generation infrastructure that identifies, attracts, qualifies, and converts your ideal customers — consistently filling your pipeline.',
    bullets: [
      'Ideal customer profile (ICP) modeling with AI',
      'Multi-channel lead generation campaigns',
      'AI-powered lead qualification and scoring',
      'Outbound prospecting automation (LinkedIn, email)',
      'Landing page optimization with AI testing',
    ],
  },
  {
    icon: '📣',
    title: 'Digital Advertising Optimization',
    desc: 'We apply AI to your paid advertising across Meta, Google, LinkedIn, and TikTok — optimizing targeting, creative, bidding, and budget allocation in real time.',
    bullets: [
      'AI-driven audience targeting and lookalike modeling',
      'Automated creative testing and performance analysis',
      'Smart bidding strategy implementation',
      'Cross-channel budget allocation optimization',
      'Real-time performance dashboards and reporting',
    ],
  },
  {
    icon: '💻',
    title: 'Marketing Analytics Dashboards',
    desc: 'We build custom, real-time marketing analytics dashboards that unify data from all your platforms — giving you a single source of truth for performance and decision-making.',
    bullets: [
      'Unified marketing data warehouse and pipeline',
      'Custom KPI dashboards (Looker Studio, Tableau, custom)',
      'Multi-touch attribution modeling',
      'Automated weekly and monthly performance reporting',
      'Anomaly detection and performance alerts',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="OUR SERVICES"
        headline={<>10 AI Services.<br /><span className="text-gradient">One Growth Engine.</span></>}
        sub="Every service we offer is a component of a larger, interconnected AI solutions stack — engineered to automate operations, accelerate growth, and transform how your business works."
      />

      {/* SERVICES GRID */}
      <section style={{ padding: '100px 0' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col-services">
            {services.map((s, i) => (
              <RevealOnScroll key={i} delay={(i % 2) * 80}>
                <div style={{
                  background: 'rgba(10,10,10,0.85)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  borderRadius: 20, padding: '40px 36px',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  height: '100%',
                }}>
                  <div style={{ fontSize: 36, lineHeight: 1 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.8 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 14, color: '#CCD6F6', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ color: '#00D4FF', fontSize: 13, flexShrink: 0, marginTop: 2 }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div style={container}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>[ HOW WE WORK ]</p>
          <h2 style={{ ...h2Style, textAlign: 'center' }}>
            From Strategy to<br /><span className="text-gradient">Deployed AI System</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }} className="three-col">
            {[
              { n: '01', title: 'Discovery & Audit', body: 'We audit your current business systems, data infrastructure, and growth metrics to identify the highest-leverage AI opportunities across your entire operation.' },
              { n: '02', title: 'Design & Architecture', body: 'We design your custom AI growth stack — selecting the right services, tools, and integrations to deliver your specific goals.' },
              { n: '03', title: 'Build & Deploy', body: 'Our engineers build, test, and deploy your AI systems — fully integrated with your existing tools and configured for your business.' },
            ].map((c, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: '40px 32px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space), sans-serif', fontSize: 16, fontWeight: 700, color: '#00D4FF', marginBottom: 20 }}>{c.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.8 }}>{c.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner headline="Ready to Build Your AI Growth Engine?" sub="Schedule a free strategy consultation and let's identify the right AI services for your business." />

      <style>{`
        @media (max-width: 1024px) {
          .two-col-services { grid-template-columns: 1fr !important; }
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

function CtaBanner({ headline, sub }: { headline: string; sub: string }) {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={container}>
        <RevealOnScroll>
          <div style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 20, padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ GET STARTED ]</p>
            <h2 style={{ ...h2Style, position: 'relative' }}>{headline}</h2>
            <p style={{ color: '#8892B0', fontSize: 17, lineHeight: 1.8, maxWidth: 500, margin: '0 auto 36px', position: 'relative' }}>{sub}</p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 36px', background: '#00D4FF', color: '#000000', fontWeight: 700, fontSize: 16, borderRadius: 8, textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif', position: 'relative' }}>Schedule a Consultation</Link>
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
