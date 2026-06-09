'use client'

// Premium AI Marketing Intelligence Visualization
// Pure CSS/SVG — no external images required
// Deep navy bg · electric blue data streams · neon green highlights · glassmorphism

export default function HeroViz() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 520, userSelect: 'none' }}>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(.92)} }
        @keyframes orbit  { from{transform:rotate(0deg) translateX(110px) rotate(0deg)} to{transform:rotate(360deg) translateX(110px) rotate(-360deg)} }
        @keyframes orbit2 { from{transform:rotate(120deg) translateX(110px) rotate(-120deg)} to{transform:rotate(480deg) translateX(110px) rotate(-480deg)} }
        @keyframes orbit3 { from{transform:rotate(240deg) translateX(110px) rotate(-240deg)} to{transform:rotate(600deg) translateX(110px) rotate(-600deg)} }
        @keyframes streamL{ 0%{stroke-dashoffset:300} 100%{stroke-dashoffset:0} }
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes risebar{ from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes scanline{ 0%{top:10%} 100%{top:90%} }
        @keyframes glowpulse{ 0%,100%{box-shadow:0 0 20px rgba(0,212,255,0.3)} 50%{box-shadow:0 0 50px rgba(0,212,255,0.7)} }
        @keyframes slideIn{ from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        .orbit-dot  { position:absolute; top:50%; left:50%; width:10px; height:10px; margin:-5px 0 0 -5px; border-radius:50%; }
        .od1 { animation: orbit  5s linear infinite; }
        .od2 { animation: orbit2 5s linear infinite; }
        .od3 { animation: orbit3 5s linear infinite; }
      `}</style>

      {/* ── BACKGROUND GLOW ── */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,100,200,0.15) 0%, transparent 70%)',
        borderRadius:24,
      }}/>

      {/* ══════════════════════════════════════════
          CENTRAL AI CORE
      ══════════════════════════════════════════ */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        width:120, height:120,
        animation:'floatA 4s ease-in-out infinite',
        zIndex:10,
      }}>
        {/* outer ring */}
        <div style={{
          position:'absolute', inset:-16,
          borderRadius:'50%',
          border:'1.5px solid rgba(0,212,255,0.25)',
          animation:'pulse 3s ease-in-out infinite',
        }}/>
        {/* mid ring */}
        <div style={{
          position:'absolute', inset:-6,
          borderRadius:'50%',
          border:'1px solid rgba(0,212,255,0.15)',
        }}/>
        {/* core card */}
        <div style={{
          width:'100%', height:'100%',
          borderRadius:'50%',
          background:'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(5,5,5,0.98) 100%)',
          border:'2px solid rgba(0,212,255,0.5)',
          boxShadow:'0 0 40px rgba(0,212,255,0.4), inset 0 0 20px rgba(0,212,255,0.08)',
          display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:2,
          animation:'glowpulse 3s ease-in-out infinite',
        }}>
          <div style={{ fontSize:28 }}>🧠</div>
          <div style={{ fontSize:9, fontWeight:700, color:'#00D4FF', letterSpacing:'1.5px', textTransform:'uppercase' }}>AI Core</div>
        </div>

        {/* orbiting nodes */}
        <div className="orbit-dot od1" style={{ background:'#00D4FF', boxShadow:'0 0 8px #00D4FF' }}/>
        <div className="orbit-dot od2" style={{ background:'#00FFCC', boxShadow:'0 0 8px #00FFCC' }}/>
        <div className="orbit-dot od3" style={{ background:'#00AAFF', boxShadow:'0 0 8px #00AAFF' }}/>
      </div>

      {/* ══════════════════════════════════════════
          SVG DATA STREAMS (connecting nodes to core)
      ══════════════════════════════════════════ */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} viewBox="0 0 600 520">
        <defs>
          <linearGradient id="streamBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00AAFF" stopOpacity="0"/>
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#00FFCC" stopOpacity="0.4"/>
          </linearGradient>
          <linearGradient id="streamGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFCC" stopOpacity="0"/>
            <stop offset="60%" stopColor="#00FFCC" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Stream: top-left node → core */}
        <path d="M 95 110 C 160 110, 220 200, 300 260" stroke="url(#streamBlue)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="240" to="0" dur="2s" repeatCount="indefinite"/>
        </path>

        {/* Stream: left node → core */}
        <path d="M 60 260 C 130 260, 200 260, 300 260" stroke="url(#streamBlue)" strokeWidth="2" fill="none" strokeDasharray="10 5" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="300" to="0" dur="1.8s" repeatCount="indefinite"/>
        </path>

        {/* Stream: bottom-left → core */}
        <path d="M 90 390 C 160 360, 220 320, 300 260" stroke="url(#streamGreen)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="240" to="0" dur="2.4s" repeatCount="indefinite"/>
        </path>

        {/* Stream: core → top-right */}
        <path d="M 300 260 C 380 220, 440 160, 510 120" stroke="url(#streamBlue)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-240" dur="2s" repeatCount="indefinite"/>
        </path>

        {/* Stream: core → right */}
        <path d="M 300 260 C 380 260, 450 260, 530 260" stroke="url(#streamGreen)" strokeWidth="2" fill="none" strokeDasharray="10 5" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="1.8s" repeatCount="indefinite"/>
        </path>

        {/* Stream: core → bottom-right */}
        <path d="M 300 260 C 380 310, 440 360, 510 400" stroke="url(#streamBlue)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-240" dur="2.6s" repeatCount="indefinite"/>
        </path>

        {/* Particle dots moving along streams */}
        <circle r="4" fill="#00D4FF" filter="url(#glow)" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 95 110 C 160 110, 220 200, 300 260"/>
        </circle>
        <circle r="3" fill="#00FFCC" filter="url(#glow)" opacity="0.9">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 60 260 C 130 260, 200 260, 300 260"/>
        </circle>
        <circle r="3" fill="#00AAFF" filter="url(#glow)" opacity="0.8">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M 90 390 C 160 360, 220 320, 300 260"/>
        </circle>
        <circle r="4" fill="#00D4FF" filter="url(#glow)" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 300 260 C 380 220, 440 160, 510 120"/>
        </circle>
        <circle r="3" fill="#00FFCC" filter="url(#glow)" opacity="0.9">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 300 260 C 380 260, 450 260, 530 260"/>
        </circle>
        <circle r="3" fill="#00AAFF" filter="url(#glow)" opacity="0.8">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 300 260 C 380 310, 440 360, 510 400"/>
        </circle>
      </svg>

      {/* ══════════════════════════════════════════
          INPUT NODES (left side — customer data)
      ══════════════════════════════════════════ */}
      {/* Top-left: Social Data */}
      <DataNode
        top={60} left={30}
        icon="📱" label="Social Data"
        value="12.4K" sub="engagements"
        color="#00D4FF"
        delay="0s"
      />
      {/* Mid-left: CRM */}
      <DataNode
        top={220} left={10}
        icon="👥" label="CRM"
        value="8,291" sub="contacts"
        color="#00FFCC"
        delay="0.4s"
      />
      {/* Bottom-left: Ad Spend */}
      <DataNode
        top={370} left={30}
        icon="📣" label="Ad Spend"
        value="$24K" sub="optimized"
        color="#00AAFF"
        delay="0.8s"
      />

      {/* ══════════════════════════════════════════
          OUTPUT NODES (right side — growth metrics)
      ══════════════════════════════════════════ */}
      {/* Top-right: Revenue */}
      <DataNode
        top={60} left={null} right={20}
        icon="📈" label="Revenue"
        value="+312%" sub="this month"
        color="#00FFCC"
        delay="0.2s"
        highlight
      />
      {/* Mid-right: Leads */}
      <DataNode
        top={220} left={null} right={0}
        icon="🎯" label="Leads"
        value="2,847" sub="generated"
        color="#00D4FF"
        delay="0.6s"
      />
      {/* Bottom-right: Retention */}
      <DataNode
        top={370} left={null} right={20}
        icon="🔄" label="Retention"
        value="94%" sub="customer rate"
        color="#00AAFF"
        delay="1s"
      />

      {/* ══════════════════════════════════════════
          FLOATING METRIC CARDS
      ══════════════════════════════════════════ */}
      {/* Top center: AI prediction badge */}
      <div style={{
        position:'absolute', top:10, left:'50%', transform:'translateX(-50%)',
        background:'rgba(10,10,10,0.92)',
        border:'1px solid rgba(0,212,255,0.35)',
        borderRadius:12, padding:'8px 16px',
        backdropFilter:'blur(12px)',
        animation:'floatB 3.5s ease-in-out infinite',
        display:'flex', alignItems:'center', gap:8,
        boxShadow:'0 4px 20px rgba(0,212,255,0.2)',
        zIndex:20,
      }}>
        <span style={{ fontSize:14 }}>⚡</span>
        <div>
          <div style={{ fontSize:10, color:'#7A90B8', letterSpacing:'1px' }}>AI PREDICTION</div>
          <div style={{ fontSize:13, fontWeight:700, color:'#fff', fontFamily:'var(--font-space),sans-serif' }}>Next best action ready</div>
        </div>
        <div style={{ width:8, height:8, borderRadius:'50%', background:'#00FFCC', animation:'blink 1.5s infinite', boxShadow:'0 0 8px #00FFCC' }}/>
      </div>

      {/* Bottom center: cost reduction */}
      <div style={{
        position:'absolute', bottom:10, left:'50%', transform:'translateX(-50%)',
        background:'rgba(0,255,170,0.1)',
        border:'1px solid rgba(0,255,170,0.35)',
        borderRadius:12, padding:'8px 20px',
        backdropFilter:'blur(12px)',
        animation:'floatC 5s ease-in-out infinite',
        display:'flex', alignItems:'center', gap:10,
        zIndex:20,
      }}>
        <span style={{ fontSize:18, fontWeight:800, color:'#00FFCC', fontFamily:'var(--font-space),sans-serif' }}>-41%</span>
        <span style={{ fontSize:12, color:'#C8D8F0' }}>Cost per acquisition</span>
      </div>

      {/* ── MINI CHART inside core area ── */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%, 72px)',
        display:'flex', alignItems:'flex-end', gap:3,
        height:30, zIndex:5,
      }}>
        {[40,55,45,70,62,85,100].map((h,i) => (
          <div key={i} style={{
            width:6, height:`${h}%`,
            background: i===6
              ? 'linear-gradient(to top,#00AAFF,#00FFCC)'
              : `rgba(0,212,255,${0.15 + i*0.08})`,
            borderRadius:'2px 2px 0 0',
            transformOrigin:'bottom',
            animation:`risebar 1s ease-out ${i*0.1}s both`,
          }}/>
        ))}
      </div>

    </div>
  )
}

/* ── reusable node card ── */
function DataNode({ top, left, right, icon, label, value, sub, color, delay, highlight }:{
  top:number; left:number|null; right?:number|null;
  icon:string; label:string; value:string; sub:string;
  color:string; delay:string; highlight?:boolean;
}) {
  return (
    <div style={{
      position:'absolute',
      top, left: left ?? undefined, right: right ?? undefined,
      width:120,
      background: highlight
        ? `linear-gradient(135deg, rgba(0,255,180,0.12), rgba(0,212,255,0.08))`
        : 'rgba(10,10,10,0.92)',
      border:`1px solid ${highlight ? 'rgba(0,255,180,0.4)' : 'rgba(0,212,255,0.2)'}`,
      borderRadius:14,
      padding:'12px 14px',
      backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      boxShadow: highlight
        ? `0 8px 32px rgba(0,255,180,0.15)`
        : '0 4px 20px rgba(0,0,0,0.3)',
      animation:`floatA 4s ease-in-out ${delay} infinite`,
      zIndex:15,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:6 }}>
        <span style={{ fontSize:14 }}>{icon}</span>
        <span style={{ fontSize:9, fontWeight:700, color:'#7A90B8', letterSpacing:'1px', textTransform:'uppercase' }}>{label}</span>
      </div>
      <div style={{
        fontSize:20, fontWeight:800, color, lineHeight:1,
        fontFamily:'var(--font-space),sans-serif',
        textShadow:`0 0 12px ${color}80`,
      }}>{value}</div>
      <div style={{ fontSize:10, color:'#7A90B8', marginTop:3 }}>{sub}</div>
    </div>
  )
}
