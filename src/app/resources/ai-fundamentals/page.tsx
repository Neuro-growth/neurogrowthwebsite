import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'AI Fundamentals',
  description: 'A beginner-friendly guide to Artificial Intelligence — what it is, how it works, and how your business can start using AI today.',
  alternates: { canonical: 'https://neurogrowthtech.com/resources/ai-fundamentals' },
}

const chapters = [
  {
    num: '01',
    icon: '🧠',
    title: 'What is Artificial Intelligence?',
    body: 'Artificial Intelligence (AI) is technology that enables computers to perform tasks that normally require human intelligence — like understanding language, recognising patterns, making decisions, and learning from experience. AI is not one single thing. It is a broad field that includes machine learning, natural language processing, computer vision, and more. Think of AI as a very fast, very consistent assistant that never sleeps, never makes emotional decisions, and gets smarter the more data it sees.',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'How Does AI Actually Work?',
    body: 'At its core, AI works by finding patterns in large amounts of data. You feed the system examples — thousands or millions of them — and it learns the relationships between inputs and outputs. For example, you show it 10,000 emails labelled "spam" or "not spam" and it learns to predict which new emails are spam. This process is called Machine Learning. The more quality data you give it, the more accurate and useful it becomes. Modern AI like ChatGPT is trained on billions of text examples, which is why it can have human-like conversations.',
  },
  {
    num: '03',
    icon: '💼',
    title: 'How Can AI Help Your Business?',
    body: 'AI can help your business in four main ways: Automation — doing repetitive tasks faster and more accurately than humans (sending emails, categorising support tickets, updating records). Intelligence — turning your data into insights you can act on (which customers are about to leave, which products will sell best next month). Personalisation — giving every customer a tailored experience at scale (product recommendations, personalised messages, custom pricing). Speed — doing in seconds what would take your team hours or days.',
  },
  {
    num: '04',
    icon: '🌍',
    title: 'AI in the African Business Context',
    body: 'AI is not just for Silicon Valley. African businesses are already using AI to solve uniquely African problems — from M-Pesa fraud detection to crop yield prediction in agriculture, to multilingual customer support across 50+ languages. The opportunity for African businesses is enormous. Labour costs are rising. Competition is increasing. Customers expect faster, more personalised service. AI allows you to do more with less, compete with larger companies, and serve your customers better — regardless of your business size.',
  },
  {
    num: '05',
    icon: '🚀',
    title: 'Where to Start with AI',
    body: 'The biggest mistake businesses make is trying to do everything at once. Start with one specific problem that AI can solve. Good starting points are: Customer support (an AI chatbot that answers common questions 24/7), Lead qualification (AI that scores your leads so your sales team focuses on the hottest prospects), Email marketing automation (sequences that trigger based on customer behaviour), or Data analysis (a dashboard that tells you what is working and what is not). Pick one. Implement it. Measure the results. Then expand.',
  },
  {
    num: '06',
    icon: '⚠️',
    title: 'Common AI Myths — Debunked',
    body: 'Myth 1: "AI will replace all my employees." Reality: AI replaces tasks, not people. It frees your team to focus on creative, strategic, and relationship work. Myth 2: "AI is only for big companies." Reality: Some of the highest ROI AI use cases are in small and medium businesses. Myth 3: "I need to be technical to use AI." Reality: Most modern AI tools require zero coding. Myth 4: "AI is too expensive." Reality: Many AI tools start free or cost less than one employee\'s monthly salary. Myth 5: "AI makes mistakes." Reality: All systems make mistakes. AI makes fewer than humans on repetitive tasks, and it improves over time.',
  },
  {
    num: '07',
    icon: '📊',
    title: 'Key AI Terms You Should Know',
    body: 'Machine Learning — AI that learns from data without being explicitly programmed. Natural Language Processing (NLP) — AI that understands and generates human language. Large Language Model (LLM) — AI trained on massive text datasets (like ChatGPT or Gemini). Automation — using technology to perform tasks without human intervention. Predictive Analytics — using historical data to forecast future outcomes. Chatbot — a programme that simulates conversation with users. API — a connector that lets different software systems talk to each other. Data Pipeline — the process of collecting, cleaning, and moving data from one place to another.',
  },
  {
    num: '09',
    icon: '🤖',
    title: 'Meet ROW — Your AI Marketing Strategist',
    body: 'ROW is an AI agent built by NeuroGrowth Tech. Think of ROW as having 6 brains working together inside your business — watching your customers, monitoring your social media, tracking your leads, analysing your campaigns, sending you alerts, and building your marketing strategy. ROW doesn\'t just report numbers. It connects the dots between everything happening in your business and tells you exactly what to do next. From data → to insight → to action.',
  },
]

const rowBrains = [
  {
    icon: '👂',
    title: 'Customer Intelligence',
    body: 'ROW continuously analyses customer complaints, FAQs, WhatsApp conversations, website enquiries, social media comments, DMs, reviews, and support conversations. Instead of reading 500 comments, ROW tells you: "Pricing is the biggest objection among new leads" or "Negative sentiment around customer support has increased 23% this week."',
  },
  {
    icon: '📱',
    title: 'Social Media Intelligence',
    body: 'ROW monitors Instagram, Facebook, TikTok, LinkedIn, X and YouTube — tracking followers, reach, engagement, sentiment and top-performing content. It doesn\'t just say "Instagram engagement increased 18%." It says: "Educational posts generated 2.4× more saves than promotional posts. Recommendation: Increase educational Reels from 2 → 4 per week."',
  },
  {
    icon: '🎯',
    title: 'Lead Intelligence',
    body: 'ROW monitors leads across all connected channels and identifies high-intent prospects. It alerts your sales team: "Sarah has asked about pricing twice, visited the pricing page and requested a consultation — Contact today." That makes ROW part of the sales process, not just marketing.',
  },
  {
    icon: '📊',
    title: 'Campaign Intelligence',
    body: 'ROW connects to campaign data and watches ad spend, impressions, CTR, CPC, leads, conversions and ROAS. But it explains the numbers: "Your campaign received 18,400 clicks but only 213 bookings. Your biggest drop-off occurs between landing-page visit and booking. Recommendation: Test a shorter booking form." That\'s the difference between analytics and marketing intelligence.',
  },
  {
    icon: '🚨',
    title: 'ROW Alerts',
    body: 'ROW comes to you — you don\'t have to open it every morning. Hot lead alerts, campaign alerts, reputation alerts, opportunity alerts, and product alerts. When a client adds a new product, ROW prepares an Instagram launch post, LinkedIn announcement, WhatsApp campaign, email announcement, FAQ updates and a 7-day content plan — and asks: "Approve campaign?"',
  },
  {
    icon: '🧠',
    title: 'Marketing Strategy Intelligence',
    body: 'ROW takes everything it sees and connects the dots. If customers are asking about financing, financing posts have high engagement, the financing FAQ gets lots of visits, and leads mention financing before purchasing — ROW concludes: "Financing is a major purchase consideration. Create a financing campaign, add financing to your landing page, create 3 educational Reels, and retarget customers who viewed the financing page."',
  },
]

const container: React.CSSProperties = { maxWidth: 860, margin: '0 auto', padding: '0 24px' }
const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#00D4FF', marginBottom: 20 }

export default function AIFundamentalsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '160px 0 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 2 }}>
          <Link href="/resources" style={{ fontSize: 13, color: '#7A90B8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            ← Back to Resources
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.3)', padding: '4px 12px', borderRadius: 20 }}>BEGINNER FRIENDLY</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#00FFCC', border: '1px solid rgba(0,255,204,0.3)', padding: '4px 12px', borderRadius: 20 }}>9 CHAPTERS</span>
            <span style={{ fontSize: 11, color: '#7A90B8', padding: '4px 12px' }}>~15 min read</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>
            AI Fundamentals
          </h1>
          <p style={{ maxWidth: 580, margin: '0 auto 40px', color: '#7A90B8', fontSize: 18, lineHeight: 1.8 }}>
            Everything you need to understand Artificial Intelligence — explained simply, without the jargon. Built for African business owners, managers, and entrepreneurs.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #00a83a 0%, #008c2e 40%, #007025 100%)', color: '#fff', fontWeight: 700, fontSize: 15, borderRadius: 999, border: 'none', textDecoration: 'none',
            fontFamily: 'var(--font-space), sans-serif',
            boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
          }}>
            📅 Book a Consultation
          </Link>
        </div>
      </section>

      {/* CHAPTERS */}
      <section style={{ padding: '60px 0 100px' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {chapters.map((ch, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div style={{
                  background: 'transparent',
                  border: 'none',
                  borderRadius: 20, padding: '36px 40px',
                  display: 'flex', gap: 28, alignItems: 'flex-start',
                }} className="chapter-card">
                  {/* Chapter number */}
                  <div style={{
                    flexShrink: 0,
                    width: 56, height: 56, borderRadius: '50%',
                    border: '1px solid rgba(0,212,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-space), sans-serif',
                    fontSize: 14, fontWeight: 700, color: '#00D4FF',
                  }}>{ch.num}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 22 }}>{ch.icon}</span>
                      <h2 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{ch.title}</h2>
                    </div>
                    <p style={{ fontSize: 15, color: '#8892B0', lineHeight: 1.85, margin: 0 }}>{ch.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* ROW DEEP DIVE */}
          <RevealOnScroll>
            <div style={{
              marginTop: 60,
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 24, overflow: 'hidden',
            }}>
              {/* ROW Header */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,170,255,0.12), rgba(0,255,204,0.07))',
                padding: '48px 48px 36px',
                borderBottom: '1px solid rgba(0,212,255,0.15)',
              }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', borderRadius: 999, padding: '5px 16px', marginBottom: 20 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00FFCC', display: 'inline-block', boxShadow: '0 0 8px #00FFCC' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#00D4FF' }}>NEUROGROWTH AI AGENT</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
                  ROW — Your AI Marketing Strategist
                </h2>
                <p style={{ color: '#8892B0', fontSize: 17, lineHeight: 1.8, maxWidth: 620, marginBottom: 24 }}>
                  ROW is not a dashboard. ROW is an AI agent that watches your entire business, connects the dots between every data signal, and tells you exactly what to do next — from data → to insight → to action.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['Social Media', 'Customers', 'Leads', 'Campaigns', 'Products', 'Reviews', 'Trends', 'Growth'].map(tag => (
                    <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: '#00FFCC', border: '1px solid rgba(0,255,204,0.25)', borderRadius: 999, padding: '4px 14px' }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* 6 Brains */}
              <div style={{ padding: '40px 48px' }}>
                <p style={{ ...labelStyle, marginBottom: 32 }}>[ THE 6 BRAINS OF ROW ]</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col-row">
                  {rowBrains.map((b, i) => (
                    <div key={i} style={{
                      background: 'rgba(0,212,255,0.03)',
                      border: '1px solid rgba(0,212,255,0.1)',
                      borderRadius: 16, padding: '28px 28px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 24 }}>{b.icon}</span>
                        <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', margin: 0 }}>{b.title}</h3>
                      </div>
                      <p style={{ fontSize: 14, color: '#8892B0', lineHeight: 1.8, margin: 0 }}>{b.body}</p>
                    </div>
                  ))}
                </div>

                {/* Monday CEO Report */}
                <div style={{ marginTop: 40, background: 'rgba(0,255,204,0.04)', border: '1px solid rgba(0,255,204,0.2)', borderRadius: 16, padding: '32px 36px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#00FFCC', marginBottom: 16 }}>SIGNATURE FEATURE</p>
                  <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 }}>📅 The Monday CEO Growth Brief</h3>
                  <p style={{ color: '#8892B0', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                    Every Monday at 8:00 AM, ROW delivers a complete business performance brief — leads, conversions, sentiment, top campaigns, what customers are saying, and 5 specific recommendations. Then gives the CEO one button: <span style={{ color: '#00FFCC', fontWeight: 700 }}>"Let ROW handle it →"</span>
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="four-col-row">
                    {[
                      { num: '143', label: 'Leads', change: '↑ 18%' },
                      { num: '51',  label: 'Qualified', change: '↑ 12%' },
                      { num: '27',  label: 'Appointments', change: '↑ 23%' },
                      { num: '11',  label: 'Conversions', change: '↑ 15%' },
                    ].map((s, i) => (
                      <div key={i} style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,212,255,0.05)', borderRadius: 12 }}>
                        <div style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 28, fontWeight: 800, color: '#00D4FF', lineHeight: 1 }}>{s.num}</div>
                        <div style={{ fontSize: 12, color: '#7A90B8', marginTop: 4 }}>{s.label}</div>
                        <div style={{ fontSize: 12, color: '#00FFCC', fontWeight: 700, marginTop: 2 }}>{s.change}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent Architecture */}
                <div style={{ marginTop: 32 }}>
                  <p style={{ ...labelStyle, marginBottom: 20 }}>[ ROW AGENT ARCHITECTURE ]</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {[
                      { icon: '🧠', label: 'Strategy Agent', desc: 'Understands the business and recommends what to do' },
                      { icon: '📱', label: 'Social Agent',   desc: 'Monitors engagement, comments, DMs and content performance' },
                      { icon: '🎯', label: 'Lead Agent',     desc: 'Captures, qualifies and prioritises leads' },
                      { icon: '📊', label: 'Campaign Agent', desc: 'Analyses advertising and campaign performance' },
                      { icon: '👂', label: 'Customer Intelligence Agent', desc: 'Analyses complaints, FAQs, reviews and conversations' },
                      { icon: '🚨', label: 'Alert Agent',    desc: 'Watches for important changes and sends real-time alerts' },
                      { icon: '✍️', label: 'Content Agent',  desc: 'Turns insights into content and campaign ideas' },
                      { icon: '📑', label: 'Reporting Agent', desc: 'Produces the weekly CEO Growth Brief' },
                    ].map((a, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: i < 7 ? '1px solid rgba(0,212,255,0.08)' : 'none' }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{a.icon}</div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 14, fontWeight: 700, color: '#fff' }}>{a.label}</div>
                          <div style={{ fontSize: 13, color: '#7A90B8' }}>{a.desc}</div>
                        </div>
                        {i < 7 && <div style={{ marginLeft: 'auto', color: '#00D4FF', fontSize: 14 }}>↓</div>}
                      </div>
                    ))}
                    <div style={{ marginTop: 16, padding: '16px 20px', background: 'linear-gradient(135deg, rgba(0,170,255,0.1), rgba(0,255,204,0.06))', border: '1px solid rgba(0,212,255,0.25)', borderRadius: 12, textAlign: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 16, fontWeight: 800, color: '#fff' }}>ROW — AI MARKETING STRATEGIST</span>
                    </div>
                  </div>
                </div>

                {/* Closing statement */}
                <div style={{ marginTop: 40, padding: '32px 36px', background: 'rgba(0,168,58,0.06)', border: '1px solid rgba(0,168,58,0.2)', borderRadius: 16 }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-space), sans-serif' }}>
                    &ldquo;We don&apos;t just give you AI. We put an AI marketing strategist inside your business.&rdquo;
                  </p>
                  <p style={{ fontSize: 14, color: '#7A90B8', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
                    ROW connects customer signals, social data, leads, campaigns and strategy into one intelligent system — built specifically for African businesses and channels including WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* BOTTOM CTA */}
          <RevealOnScroll>
            <div style={{
              marginTop: 60,
              background: 'linear-gradient(135deg, rgba(0,170,255,0.08), rgba(0,255,204,0.05))',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 20, padding: '52px 48px', textAlign: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ ...labelStyle, textAlign: 'center', position: 'relative' }}>[ READY TO GO DEEPER? ]</p>
              <h2 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 16, position: 'relative' }}>
                Turn These Fundamentals Into Real Results
              </h2>
              <p style={{ color: '#7A90B8', fontSize: 16, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 32px', position: 'relative' }}>
                Book a free strategy consultation with our AI team. We&apos;ll assess your business and show you exactly where AI can make the biggest difference — no jargon, no pressure.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 36px',
                  background: 'linear-gradient(135deg, #00a83a 0%, #008c2e 40%, #007025 100%)', color: '#fff', fontWeight: 700, fontSize: 15, borderRadius: 999, border: 'none', textDecoration: 'none',
                  fontFamily: 'var(--font-space), sans-serif',
                  boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
                }}>
                  📅 Book a Consultation
                </Link>
                <Link href="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px',
                  background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 15, border: '1.5px solid rgba(0,160,55,0.50)', borderRadius: 999, textDecoration: 'none',
                  fontFamily: 'var(--font-space), sans-serif',
                }}>
                  Explore Our Services
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .chapter-card { flex-direction: column !important; gap: 16px !important; padding: 28px 24px !important; }
          .two-col-row   { grid-template-columns: 1fr !important; }
          .four-col-row  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .two-col-row  { grid-template-columns: 1fr !important; }
          .four-col-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
