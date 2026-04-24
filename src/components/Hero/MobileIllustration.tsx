export function MobileIllustration() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 440, height: 520 }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      {/* Inner glow */}
      <div
        className="absolute rounded-full blur-xl"
        style={{
          width: 200,
          height: 300,
          background: 'radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Phone */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: 230,
          height: 460,
          background: 'var(--bg-card)',
          border: '2px solid var(--green-border)',
          borderRadius: 36,
          boxShadow:
            '0 0 0 1px rgba(0,212,255,0.05), 0 0 50px rgba(0,212,255,0.12), inset 0 0 30px rgba(0,212,255,0.03)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px 6px',
            fontSize: 8,
            fontFamily: 'var(--mono)',
            color: 'var(--text-muted)',
          }}
        >
          <span>9:41</span>
          <div
            style={{
              width: 50,
              height: 8,
              background: 'var(--bg-card-2)',
              borderRadius: 4,
            }}
          />
          <span>100%</span>
        </div>

        {/* Notch */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
          <div
            style={{
              width: 60,
              height: 5,
              background: 'var(--bg-card-2)',
              borderRadius: 3,
            }}
          />
        </div>

        {/* Screen */}
        <div
          style={{
            flex: 1,
            margin: '0 10px 10px',
            borderRadius: 16,
            background: 'var(--bg-card-2)',
            padding: '12px 10px',
            fontFamily: 'var(--mono)',
            fontSize: 8.5,
            lineHeight: 1.75,
            overflow: 'hidden',
          }}
        >
          {/* File tab */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              marginBottom: 8,
              paddingBottom: 6,
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <Tab active>main.dart</Tab>
            <Tab>repo.dart</Tab>
          </div>

          {/* Code lines */}
          <Code>
            <Cm>// Flutter · Clean Architecture</Cm>
            <Line><Kw>import</Kw> <Str>'package:flutter/material.dart'</Str><Tx>;</Tx></Line>
            <Sp />
            <Line><Kw>void</Kw> <Fn>main</Fn><Tx>() {'{'}</Tx></Line>
            <Line pad={12}><Fn>runApp</Fn><Tx>(</Tx><Cl>MyApp</Cl><Tx>());</Tx></Line>
            <Line><Tx>{'}'}</Tx></Line>
            <Sp />
            <Line><Kw>class</Kw> <Cl>MyApp</Cl> <Kw>extends</Kw> <Cl>StatelessWidget</Cl> <Tx>{'{'}</Tx></Line>
            <Line pad={12}><Kw>final</Kw> <Cl>Repository</Cl> <Tx>repo;</Tx></Line>
            <Sp />
            <Line pad={12}><Kw>const</Kw> <Fn>MyApp</Fn><Tx>({'({'}super.key, </Tx><Kw>required this</Kw><Tx>.repo{'})'}</Tx><Tx>;</Tx></Line>
            <Sp />
            <Line pad={12}><Tx>@</Tx><Cl>override</Cl></Line>
            <Line pad={12}><Cl>Widget</Cl> <Fn>build</Fn><Tx>(</Tx><Cl>BuildContext</Cl> <Tx>ctx) {'{'}</Tx></Line>
            <Line pad={24}><Kw>return</Kw> <Cl>MaterialApp</Cl><Tx>(</Tx></Line>
            <Line pad={32}><Tx>home: </Tx><Cl>HomeScreen</Cl><Tx>(</Tx></Line>
            <Line pad={40}><Tx>bloc: </Tx><Cl>MobileBloc</Cl><Tx>(repo),</Tx></Line>
            <Line pad={32}><Tx>),</Tx></Line>
            <Line pad={24}><Tx>);</Tx></Line>
            <Line pad={12}><Tx>{'}'}</Tx></Line>
            <Line><Tx>{'}'}</Tx><Cursor /></Line>
          </Code>
        </div>
      </div>

      {/* Badges — 6, bien distribuidas */}
      {/* Left — 3 secciones iguales: top:75, top:246, bottom:75 */}
      <Badge top={75}   left={8} delay={0}>Swift</Badge>
      <Badge top={246}  left={8} delay={0.3}>MVVM</Badge>
      <Badge bottom={75} left={8} delay={0.6}>Firebase</Badge>

      {/* Right — misma distribución */}
      <Badge top={75}   right={8} delay={0.15}>Flutter</Badge>
      <Badge top={246}  right={8} delay={0.45}>Kotlin</Badge>
      <Badge bottom={75} right={-35} delay={0.75}>React Native</Badge>
    </div>
  )
}

/* ── Small helpers ── */

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      style={{
        fontSize: 7,
        padding: '2px 8px',
        borderRadius: 4,
        fontFamily: 'var(--mono)',
        background: active ? 'rgba(0,212,255,0.12)' : 'transparent',
        color: active ? 'var(--green)' : 'var(--text-muted)',
        border: active ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
      }}
    >
      {children}
    </span>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

function Line({ children, pad = 0 }: { children: React.ReactNode; pad?: number }) {
  return <div style={{ paddingLeft: pad }}>{children}</div>
}

function Sp() {
  return <div style={{ height: 4 }} />
}

function Cm({ children }: { children: React.ReactNode }) {
  return <div style={{ color: '#4a6741' }}>{children}</div>
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#569cd6' }}>{children}</span>
}

function Fn({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#dcdcaa' }}>{children}</span>
}

function Cl({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#4ec9b0' }}>{children}</span>
}

function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: '#ce9178' }}>{children}</span>
}

function Tx({ children }: { children: React.ReactNode }) {
  return <span style={{ color: 'var(--text)' }}>{children}</span>
}

function Cursor() {
  return (
    <span
      className="cursor-blink"
      style={{ color: 'var(--green)', marginLeft: 1 }}
    />
  )
}

interface BadgeProps {
  children: React.ReactNode
  top?: number
  bottom?: number
  left?: number
  right?: number
  delay?: number
}

function Badge({ children, top, bottom, left, right, delay = 0 }: BadgeProps) {
  return (
    <span
      className="font-mono text-xs font-semibold rounded-full animate-fade-in-up"
      style={{
        position: 'absolute',
        zIndex: 2,
        top,
        bottom,
        left,
        right,
        padding: '5px 14px',
        background: 'var(--green-dim)',
        border: '1px solid var(--green-border)',
        color: 'var(--green)',
        animationDelay: `${delay}s`,
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(4px)',
      }}
    >
      {children}
    </span>
  )
}
