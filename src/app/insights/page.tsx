import type { Metadata } from 'next'
import RevealOnScroll from '@/components/RevealOnScroll'
import ResourceCard from '@/components/ResourceCard'
import { PageHero } from '@/components/site/page-hero'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Notes on building with AI in Africa — practical guides from the NeuroGrowth team.',
  alternates: { canonical: '/insights' },
}

const resources = [
  {
    icon: '🧠',
    badge: 'BEGINNER',
    title: 'AI Fundamentals',
    desc: 'A beginner-friendly guide to understanding artificial intelligence — what it is, how it works, and how your business can start using it today.',
    href: '/insights/ai-fundamentals',
    color: '#00D4FF',
    time: '15 min read',
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

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on building with AI in Africa."
        intro="Practical guides from the NeuroGrowth team."
      />

      <section style={{ padding: '60px 0 100px' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {resources.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <ResourceCard {...r} />
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
