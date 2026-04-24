import { SectionHeader, TerminalWindow } from '@/components/ui'
import type { Specialty, ContactInfo } from '@/types/portfolio.types'

interface AboutProps {
  contact: ContactInfo
  languages: { name: string; level: string }[]
  education: { degree: string; institution: string }[]
  specialties: Specialty[]
}

export function About({ contact, languages, education, specialties }: AboutProps) {
  return (
    <section id="sobre-mi" className="section-py" style={{ padding: '5rem 24px' }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader subtitle="// Conóceme" title="Sobre Mí" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: avatar placeholder */}
          <div className="flex justify-center">
            <TerminalWindow title="profile.jpg" className="w-full max-w-sm">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  height: 420,
                  background: 'var(--bg-card-2)',
                  border: '1px solid var(--green-border)',
                  boxShadow: '0 0 30px rgba(0,212,255,0.08)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/avatar.png"
                  alt="Michael Valdiviezo Maza"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    borderRadius: 12,
                    display: 'block',
                  }}
                />
              </div>
            </TerminalWindow>
          </div>

          {/* Right: code block + specialty cards */}
          <div>
            <TerminalWindow title="michael.json" glow className="mb-6">
              <pre
                className="font-mono text-sm leading-loose overflow-x-auto"
                style={{ margin: 0 }}
              >
                <span style={{ color: 'var(--green)' }}>const</span>
                <span style={{ color: 'var(--text)' }}> michael </span>
                <span style={{ color: 'var(--text-muted)' }}>= {'{'}</span>{'\n'}
                {'  '}<span style={{ color: 'var(--text-muted)' }}>rol:</span>
                {' '}<span style={{ color: 'var(--green)' }}>"Mobile Developer"</span>
                <span style={{ color: 'var(--text-muted)' }}>,</span>{'\n'}
                {'  '}<span style={{ color: 'var(--text-muted)' }}>ubicación:</span>
                {' '}<span style={{ color: 'var(--green)' }}>"{contact.location}"</span>
                <span style={{ color: 'var(--text-muted)' }}>,</span>{'\n'}
                {'  '}<span style={{ color: 'var(--text-muted)' }}>idiomas:</span>
                {' '}<span style={{ color: 'var(--text-muted)' }}>[</span>
                {languages.map((l, i) => (
                  <span key={l.name}>
                    <span style={{ color: 'var(--green)' }}>"{l.name}"</span>
                    {i < languages.length - 1 && <span style={{ color: 'var(--text-muted)' }}>, </span>}
                  </span>
                ))}
                <span style={{ color: 'var(--text-muted)' }}>],</span>{'\n'}
                {'  '}<span style={{ color: 'var(--text-muted)' }}>estudios:</span>
                {' '}<span style={{ color: 'var(--green)' }}>"{education[0]?.degree}"</span>
                <span style={{ color: 'var(--text-muted)' }}>,</span>{'\n'}
                <span style={{ color: 'var(--text-muted)' }}>{'}'};</span>
              </pre>
            </TerminalWindow>

            <div className="grid grid-cols-2 gap-4">
              {specialties.map((sp) => (
                <SpecialtyCard key={sp.title} specialty={sp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SpecialtyCardProps {
  specialty: Specialty
}

function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <div
      className="p-4 rounded-xl transition-all duration-200"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--green-border)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div className="mb-2" style={{ color: 'var(--green)' }}>
        <SpecialtyIcon icon={specialty.icon} />
      </div>
      <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
        {specialty.title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {specialty.description}
      </p>
    </div>
  )
}

function SpecialtyIcon({ icon }: { icon: Specialty['icon'] }) {
  switch (icon) {
    case 'mobile':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    case 'layers':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'card':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )
    case 'team':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
  }
}
