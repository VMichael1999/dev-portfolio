import { TerminalWindow } from '@/components/ui'
import { MobileIllustration } from './MobileIllustration'
import type { ContactInfo, OnlineProfile } from '@/types/portfolio.types'

interface HeroProps {
  firstName: string
  lastName: string
  terminalSummary: string
  contact: ContactInfo
  profiles: OnlineProfile[]
}

export function Hero({ firstName, lastName, terminalSummary, contact, profiles }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
      style={{ padding: '80px 24px 40px' }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(57,255,20,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="animate-fade-in-up">
            <p
              className="font-mono text-sm mb-4"
              style={{ color: 'var(--green)' }}
            >
              // Hola, soy
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span style={{ color: 'var(--text)' }}>{firstName} </span>
              <span style={{ color: 'var(--green)' }}>{lastName}</span>
            </h1>

            {/* Terminal card */}
            <TerminalWindow title="michael@portfolio:~" glow className="mb-6">
              <div className="font-mono text-sm">
                <div className="mb-3" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--green)' }}>$ </span>
                  cat perfil.txt
                </div>
                <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>
                  {terminalSummary.split('Flutter/Dart').map((part, i) =>
                    i === 0 ? (
                      <span key={i}>{part}<span style={{ color: 'var(--green)' }}>Flutter/Dart</span></span>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
                </p>
              </div>
            </TerminalWindow>

            {/* Contact row */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-1.5">
                <LocationIcon />
                {contact.location}
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                <MailIcon />
                {contact.email}
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
                style={{ background: 'var(--green)', color: '#0c0f0c' }}
              >
                <MailIcon />
                Contáctame
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:bg-green-dim"
                style={{
                  border: '1px solid var(--green)',
                  color: 'var(--green)',
                }}
              >
                Ver experiencia ↓
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {profiles.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.label}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg transition-colors"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--green-border)'
                    e.currentTarget.style.color = 'var(--green)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  {p.icon === 'github' ? 'GitHub ↗' : 'LinkedIn ↗'}
                </a>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="animate-fade-in-up delay-200 flex justify-center">
            <MobileIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
