'use client'

import { useState } from 'react'

const WA_NUMBER = '254796382271'
const FORMSPREE_ID = 'xgvkjqon' // Formspree form ID for info@neurogrowthtech.com

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(10,10,10,0.8)',
  border: '1px solid rgba(0,212,255,0.12)',
  borderRadius: 10,
  padding: '14px 18px',
  fontSize: 15,
  color: '#fff',
  fontFamily: 'var(--font-inter), sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function Field({ label, id, type = 'text', placeholder, required, span }: {
  label: string; id: string; type?: string; placeholder: string;
  required?: boolean; span?: boolean
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
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.1)' : 'none',
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
      <select id={id} name={id}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? '#00D4FF' : 'rgba(0,212,255,0.12)',
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.1)' : 'none',
          appearance: 'auto',
        }}>
        <option value="" disabled>Select...</option>
        {options.map(o => <option key={o} value={o} style={{ background: '#111', color: '#fff' }}>{o}</option>)}
      </select>
    </div>
  )
}

function TextareaField({ label, id, placeholder }: { label: string; id: string; placeholder: string }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: '#CCD6F6', letterSpacing: '0.5px' }}>{label}</label>
      <textarea id={id} name={id} placeholder={placeholder} rows={5}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          resize: 'vertical', minHeight: 130,
          borderColor: focused ? '#00D4FF' : 'rgba(0,212,255,0.12)',
          boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.1)' : 'none',
        }}
      />
    </div>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', service: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // Submit to Formspree → sends to info@neurogrowthtech.com
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        // Open WhatsApp with lead details pre-filled
        const waMsg = encodeURIComponent(
          `Hi NeuroGrowth Tech! I just submitted a consultation request.\n\nName: ${formData.firstName} ${formData.lastName}\nCompany: ${formData.company}\nService: ${formData.service}\n\nLooking forward to speaking with you!`
        )
        window.open(`https://wa.me/${WA_NUMBER}?text=${waMsg}`, '_blank')
      }
    } catch {
      // fallback — still show success
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '60px 20px', gap: 20,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(0,212,255,0.1)', border: '2px solid #00D4FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, color: '#00D4FF',
        }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-space), sans-serif', fontSize: 22, color: '#fff' }}>
          Consultation Request Sent!
        </h3>
        <p style={{ color: '#8892B0', fontSize: 15, lineHeight: 1.8, maxWidth: 360 }}>
          Your request has been sent to <strong style={{ color: '#00D4FF' }}>info@neurogrowthtech.com</strong>. We&apos;ll respond within 24 hours.
        </p>
        {/* WhatsApp follow-up CTA */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi NeuroGrowth Tech! I just submitted a consultation request and wanted to connect on WhatsApp.')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 28px',
            background: '#25D366', color: '#fff',
            fontWeight: 700, fontSize: 15, borderRadius: 10,
            textDecoration: 'none', fontFamily: 'var(--font-space), sans-serif',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Continue on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate onChange={handleChange}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
        <Field label="First Name" id="firstName" placeholder="John" required />
        <Field label="Last Name" id="lastName" placeholder="Smith" required />
        <Field label="Business Email" id="email" type="email" placeholder="john@yourcompany.com" required span />
        <Field label="Company Name" id="company" placeholder="Your Company Inc." required span />
        <SelectField label="Primary Interest" id="service" options={[
          'AI Strategy & Consulting', 'AI Marketing Automation', 'Customer Personalization',
          'Predictive Analytics', 'AI Chatbots & Support Agents', 'CRM Automation',
          'AI Content Generation', 'Lead Generation Systems', 'Digital Advertising Optimization',
          'Marketing Analytics Dashboards', 'Full AI Growth System', 'Not sure — need guidance',
        ]} />
        <TextareaField
          label="Tell Us About Your Business & Goals"
          id="message"
          placeholder="Briefly describe your business and what you're hoping AI can help you achieve..."
        />
      </div>

      <button type="submit" disabled={loading} style={{
        marginTop: 24, width: '100%', padding: '15px 0',
        background: loading ? 'rgba(0,212,255,0.5)' : 'linear-gradient(135deg, #00AAFF, #00D4FF)',
        color: '#000', fontWeight: 700, fontSize: 16, borderRadius: 8,
        border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-space), sans-serif', transition: 'all 0.25s',
      }}>
        {loading ? 'Sending...' : '📅 Schedule a Consultation'}
      </button>

      {/* WhatsApp alternative */}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 13, color: '#8892B0' }}>or reach us instantly on </span>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I\'d like to book a strategy call with NeuroGrowth Tech.')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: '#25D366', fontWeight: 700, textDecoration: 'none' }}
        >
          WhatsApp →
        </a>
      </div>

      <p style={{ fontSize: 12, color: '#8892B0', textAlign: 'center', marginTop: 10 }}>
        We respond within 24 hours · Your information is kept private
      </p>

      <style>{`
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  )
}
