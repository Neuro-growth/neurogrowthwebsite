'use client'

import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(0,0,0,0.8)',
  border: '1px solid rgba(0,212,255,0.12)',
  borderRadius: 10,
  padding: '14px 18px',
  fontSize: 15,
  color: '#fff',
  fontFamily: 'var(--font-inter), sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function Field({
  label, id, type = 'text', placeholder, required, span,
}: {
  label: string; id: string; type?: string; placeholder: string;
  required?: boolean; span?: boolean;
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: span ? '1 / -1' : undefined }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: '#CCD6F6', letterSpacing: '0.5px' }}>
        {label}{required && ' *'}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? '#00D4FF' : 'rgba(0,212,255,0.12)',
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.10)' : 'none',
        }}
      />
    </div>
  )
}

function SelectField({ label, id, options }: { label: string; id: string; options: string[] }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: '#CCD6F6', letterSpacing: '0.5px' }}>{label}</label>
      <select
        id={id} name={id}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? '#00D4FF' : 'rgba(0,212,255,0.12)',
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.10)' : 'none',
          appearance: 'auto',
        }}
      >
        <option value="" disabled>Select...</option>
        {options.map(o => <option key={o} value={o} style={{ background: '#0A0A0A', color: '#fff' }}>{o}</option>)}
      </select>
    </div>
  )
}

function TextareaField({ label, id, placeholder }: { label: string; id: string; placeholder: string }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: '#CCD6F6', letterSpacing: '0.5px' }}>{label}</label>
      <textarea
        id={id} name={id} placeholder={placeholder} rows={5}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          resize: 'vertical', minHeight: 130,
          borderColor: focused ? '#00D4FF' : 'rgba(0,212,255,0.12)',
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.10)' : 'none',
        }}
      />
    </div>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  if (submitted) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '60px 20px', gap: 20,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(0,212,255,0.10)',
          border: '2px solid #00D4FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, color: '#00D4FF',
        }}>✓</div>
        <h3 style={{
          fontFamily: 'var(--font-space), sans-serif',
          fontSize: 22, color: '#fff',
        }}>Consultation Request Sent!</h3>
        <p style={{ color: '#8892B0', fontSize: 15, lineHeight: 1.8, maxWidth: 360 }}>
          Thank you! We&apos;ll reach out within 24 hours to confirm your strategy call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
      }}
        className="form-grid"
      >
        <Field label="First Name" id="firstName" placeholder="John" required />
        <Field label="Last Name" id="lastName" placeholder="Smith" required />
        <Field label="Business Email" id="email" type="email" placeholder="john@yourcompany.com" required span />
        <Field label="Company Name" id="company" placeholder="Your Company Inc." required span />
        <SelectField
          label="Primary Interest"
          id="service"
          options={[
            'AI Strategy & Consulting',
            'AI Marketing Automation',
            'Customer Personalization',
            'Predictive Analytics',
            'AI Chatbots & Support Agents',
            'CRM Automation',
            'AI Content Generation',
            'Lead Generation Systems',
            'Digital Advertising Optimization',
            'Marketing Analytics Dashboards',
            'Full AI Growth System',
            'Not sure — need guidance',
          ]}
        />
        <SelectField
          label="Monthly Revenue Range"
          id="revenue"
          options={[
            'Pre-revenue / Early stage',
            '$10k – $50k / month',
            '$50k – $200k / month',
            '$200k – $1M / month',
            '$1M+ / month',
          ]}
        />
        <TextareaField
          label="Tell Us About Your Business & Goals"
          id="message"
          placeholder="Briefly describe your business, current marketing challenges, and what you're hoping AI can help you achieve..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 24, width: '100%', padding: '15px 0',
          background: loading ? 'rgba(100,255,218,0.5)' : '#00D4FF',
          color: '#000000', fontWeight: 700, fontSize: 16,
          borderRadius: 8, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-space), sans-serif',
          transition: 'all 0.25s',
        }}
      >
        {loading ? 'Sending...' : 'Schedule a Consultation'}
      </button>
      <p style={{ fontSize: 13, color: '#8892B0', textAlign: 'center', marginTop: 12 }}>
        By submitting, you agree to our privacy policy. We never share your information.
      </p>
      <style>{`
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  )
}
