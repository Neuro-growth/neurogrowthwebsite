'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'What can ROW do for my business?',
  'How does AI help with lead generation?',
  'What is the Monday CEO Brief?',
  'How do I get started?',
]

export default function RowAssistant() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I'm ROW — your AI Marketing Strategist. I watch your customers, monitor your social media, track your leads and campaigns, and tell you exactly what to do next.\n\nHow can I help your business grow today?",
    },
  ])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef             = useRef<HTMLDivElement>(null)
  const inputRef              = useRef<HTMLInputElement>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const send = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || loading) return

    const userMsg: Message = { role: 'user', content }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/row', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply ?? data.error ?? 'Something went wrong. Please try again.',
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I had a connection issue. Please try again.',
      }])
    } finally {
      setLoading(false)
    }
  }

  const showSuggestions = messages.length === 1

  return (
    <>
      {/* ── CHAT PANEL ── */}
      <div style={{
        position: 'fixed',
        bottom: 96,
        right: 24,
        width: 360,
        maxHeight: 560,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid rgba(0,212,255,0.2)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.08)',
        background: '#050D1A',
        transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        transformOrigin: 'bottom right',
      }}>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,170,255,0.12), rgba(0,255,204,0.07))',
          borderBottom: '1px solid rgba(0,212,255,0.15)',
          padding: '16px 20px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
            boxShadow: '0 0 16px rgba(0,212,255,0.4)',
          }}>🧠</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Sora',system-ui,sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>ROW</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FFCC', boxShadow: '0 0 6px #00FFCC', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: '#7A90B8' }}>AI Marketing Strategist · Online</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7A90B8', fontSize: 20, padding: 4, lineHeight: 1 }}
            aria-label="Close ROW"
          >×</button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '16px 16px 8px',
          display: 'flex', flexDirection: 'column', gap: 12,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,212,255,0.2) transparent',
        }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
            }}>
              {m.role === 'assistant' && (
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, flexShrink: 0, marginRight: 8, marginTop: 2,
                }}>🧠</div>
              )}
              <div style={{
                maxWidth: '78%',
                padding: '10px 14px',
                borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: m.role === 'user'
                  ? 'linear-gradient(135deg, #00a83a, #007025)'
                  : 'rgba(255,255,255,0.06)',
                border: m.role === 'user' ? 'none' : '1px solid rgba(0,212,255,0.12)',
                color: '#fff',
                fontSize: 13,
                lineHeight: 1.7,
                fontFamily: "'Sora','Inter',system-ui,sans-serif",
                whiteSpace: 'pre-wrap',
              }}>
                {m.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, #00AAFF, #00FFCC)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
              }}>🧠</div>
              <div style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(0,212,255,0.12)',
                borderRadius: '16px 16px 16px 4px',
                display: 'flex', gap: 4, alignItems: 'center',
              }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#00D4FF',
                    animation: `rowDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}

          {/* Suggestion chips */}
          {showSuggestions && !loading && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  style={{
                    background: 'rgba(0,212,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.25)',
                    borderRadius: 999, padding: '6px 12px',
                    fontSize: 11, color: '#00D4FF', cursor: 'pointer',
                    fontFamily: "'Sora','Inter',system-ui,sans-serif",
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.15)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.07)' }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(0,212,255,0.1)',
          display: 'flex', gap: 8, alignItems: 'center',
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
            placeholder="Ask ROW anything..."
            disabled={loading}
            style={{
              flex: 1, background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(0,212,255,0.18)',
              borderRadius: 999, padding: '9px 16px',
              fontSize: 13, color: '#fff',
              fontFamily: "'Sora','Inter',system-ui,sans-serif",
              outline: 'none',
            }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: input.trim() && !loading
                ? 'linear-gradient(135deg, #00a83a, #007025)'
                : 'rgba(255,255,255,0.06)',
              border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15, transition: 'all 0.2s',
              boxShadow: input.trim() && !loading ? '0 0 12px rgba(0,140,46,0.4)' : 'none',
            }}
            aria-label="Send"
          >
            ➤
          </button>
        </div>

        {/* Footer */}
        <div style={{
          padding: '8px 16px 12px',
          textAlign: 'center',
          fontSize: 10, color: '#4A5568',
          fontFamily: "'Sora','Inter',system-ui,sans-serif",
        }}>
          ROW by NeuroGrowth Tech · <a href="/contact" style={{ color: '#00D4FF', textDecoration: 'none' }}>Book a Call</a>
        </div>
      </div>

      {/* ── FAB BUTTON ── */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close ROW' : 'Open ROW AI Assistant'}
        style={{
          position: 'fixed', bottom: 24, right: 24,
          width: 60, height: 60, borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, #333, #111)'
            : 'linear-gradient(135deg, #00AAFF, #00FFCC)',
          border: 'none', cursor: 'pointer', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24,
          boxShadow: open
            ? '0 4px 20px rgba(0,0,0,0.4)'
            : '0 0 24px rgba(0,212,255,0.5), 0 4px 20px rgba(0,170,255,0.3)',
          transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
          transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
        }}
      >
        {open ? '✕' : '🧠'}
      </button>

      {/* Pulse ring when closed */}
      {!open && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24,
          width: 60, height: 60, borderRadius: '50%',
          border: '2px solid rgba(0,212,255,0.4)',
          zIndex: 9998, pointerEvents: 'none',
          animation: 'rowPulse 2.5s ease-out infinite',
        }} />
      )}

      <style>{`
        @keyframes rowDot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes rowPulse {
          0%   { transform: scale(1);    opacity: 0.6; }
          100% { transform: scale(1.8);  opacity: 0; }
        }
        @media (max-width: 480px) {
          /* full-width on mobile */
        }
      `}</style>
    </>
  )
}
