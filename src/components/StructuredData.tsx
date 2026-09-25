import { siteConfig } from '@/content/site'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuroGrowth Tech',
    legalName: 'NeuroGrowth',
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/neurogrowth-logo.png`,
    description: 'NeuroGrowth Tech builds AI solutions and engineering systems for African businesses — automating operations, accelerating growth, and transforming business performance through custom artificial intelligence.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    areaServed: { '@type': 'Place', name: 'Africa' },
    contactPoint: { '@type': 'ContactPoint', email: siteConfig.email, contactType: 'customer service' },
    sameAs: siteConfig.socials.map((s) => s.href),
    knowsAbout: [
      'Artificial Intelligence', 'Machine Learning', 'Marketing Automation',
      'Predictive Analytics', 'CRM Systems', 'AI Chatbots', 'Business Intelligence',
      'Natural Language Processing', 'Data Science', 'Growth Engineering',
    ],
    offers: {
      '@type': 'AggregateOffer',
      description: 'AI solutions and engineering services for businesses',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NeuroGrowth Tech',
    url: siteConfig.url,
    description: 'AI Solutions & Engineering for African Businesses',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}
