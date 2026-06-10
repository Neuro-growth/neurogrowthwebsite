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
    num: '08',
    icon: '🎯',
    title: 'Your First 90 Days with AI',
    body: 'Days 1–30: Audit your business. List every repetitive task your team does. Rank them by time cost and frequency. Days 31–60: Pick one task and implement an AI solution. Start simple. A chatbot, an email automation, or a reporting dashboard. Days 61–90: Measure the results. How much time did you save? What was the ROI? What problems came up? Use those answers to plan your next AI initiative. The goal is not to transform overnight. It is to build compounding momentum — each small AI win funds and informs the next one.',
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
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', color: '#00FFCC', border: '1px solid rgba(0,255,204,0.3)', padding: '4px 12px', borderRadius: 20 }}>8 CHAPTERS</span>
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
            background: 'linear-gradient(135deg, #00AAFF, #00D4FF)',
            color: '#000', fontWeight: 700, fontSize: 15,
            borderRadius: 10, textDecoration: 'none',
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
                  background: 'rgba(10,10,10,0.85)',
                  border: '1px solid rgba(0,212,255,0.12)',
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
                  background: 'linear-gradient(135deg, #00AAFF, #00D4FF)',
                  color: '#000', fontWeight: 700, fontSize: 15,
                  borderRadius: 10, textDecoration: 'none',
                  fontFamily: 'var(--font-space), sans-serif',
                  boxShadow: '0 4px 24px rgba(0,212,255,0.3)',
                }}>
                  📅 Book a Consultation
                </Link>
                <Link href="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px',
                  background: 'transparent', color: '#00D4FF',
                  border: '1.5px solid rgba(0,212,255,0.3)',
                  fontWeight: 600, fontSize: 15,
                  borderRadius: 10, textDecoration: 'none',
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
        }
      `}</style>
    </>
  )
}
