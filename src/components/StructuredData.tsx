export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuroGrowth Tech',
    url: 'https://neurogrowthtech.com',
    logo: 'https://neurogrowthtech.com/logo.png',
    description: 'NeuroGrowth Tech builds AI solutions and engineering systems for African businesses — automating operations, accelerating growth, and transforming business performance through custom artificial intelligence.',
    foundingDate: '2024',
    areaServed: { '@type': 'Place', name: 'Africa' },
    contactPoint: { '@type': 'ContactPoint', email: 'info@neurogrowthtech.com', contactType: 'customer service' },
    sameAs: ['https://linkedin.com/company/neurogrowth-tech', 'https://twitter.com/neurogrowthtech'],
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
    url: 'https://neurogrowthtech.com',
    description: 'AI Solutions & Engineering for African Businesses',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://neurogrowthtech.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'NeuroGrowth Tech AI Services',
    description: 'AI solutions and engineering services offered by NeuroGrowth Tech',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AI Strategy & Consulting', description: 'Custom AI roadmaps and strategy for business transformation' },
      { '@type': 'ListItem', position: 2, name: 'AI Marketing Automation', description: 'End-to-end automated marketing systems powered by AI' },
      { '@type': 'ListItem', position: 3, name: 'Customer Personalization', description: 'AI-powered personalization across every customer touchpoint' },
      { '@type': 'ListItem', position: 4, name: 'Predictive Analytics', description: 'Machine learning models for business forecasting and intelligence' },
      { '@type': 'ListItem', position: 5, name: 'AI Chatbots & Support Agents', description: 'Intelligent conversational AI for customer support and sales' },
      { '@type': 'ListItem', position: 6, name: 'CRM Automation', description: 'AI-driven CRM systems for sales and marketing pipeline management' },
      { '@type': 'ListItem', position: 7, name: 'AI Content Generation', description: 'Automated content creation systems for marketing at scale' },
      { '@type': 'ListItem', position: 8, name: 'Lead Generation Systems', description: 'AI-powered lead identification, qualification and conversion' },
      { '@type': 'ListItem', position: 9, name: 'Digital Advertising Optimization', description: 'AI optimization for paid advertising across all platforms' },
      { '@type': 'ListItem', position: 10, name: 'Marketing Analytics Dashboards', description: 'Real-time unified marketing intelligence dashboards' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  )
}
