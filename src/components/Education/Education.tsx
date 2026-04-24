import { SectionHeader, TerminalWindow } from '@/components/ui'
import type { Education as EducationType, Language } from '@/types/portfolio.types'

interface EducationProps {
  items: EducationType[]
  languages: Language[]
}

export function Education({ items, languages }: EducationProps) {
  return (
    <section id="educacion" style={{ padding: '5rem 24px' }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader subtitle="// Formación" title="Educación & Idiomas" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal education */}
          <div>
            <h3
              className="flex items-center gap-2 font-bold text-base mb-5"
              style={{ color: 'var(--text)' }}
            >
              <GradCapIcon />
              Educación Formal
            </h3>
            <div className="space-y-4">
              {items.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5 transition-all duration-200"
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
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
                    {edu.degree}
                  </p>
                  <p className="text-sm mb-2" style={{ color: 'var(--green)' }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <ClockIcon />
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages — styled as terminal */}
          <div>
            <h3
              className="flex items-center gap-2 font-bold text-base mb-5"
              style={{ color: 'var(--text)' }}
            >
              <GlobeIcon />
              Idiomas
            </h3>
            <TerminalWindow title="idiomas.json" glow>
              <div className="font-mono text-sm space-y-3">
                <div style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--green)' }}>const</span> idiomas = [
                </div>
                {languages.map((lang, i) => (
                  <div key={lang.name} className="pl-4">
                    <span style={{ color: 'var(--text-muted)' }}>{'{ '}</span>
                    <span style={{ color: 'var(--text-muted)' }}>nombre: </span>
                    <span style={{ color: 'var(--green)' }}>"{lang.name}"</span>
                    <span style={{ color: 'var(--text-muted)' }}>, nivel: </span>
                    <span style={{ color: 'var(--green)' }}>"{lang.level}"</span>
                    <span style={{ color: 'var(--text-muted)' }}>{' }'}{i < languages.length - 1 ? ',' : ''}</span>
                  </div>
                ))}
                <div style={{ color: 'var(--text-muted)' }}>];</div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  )
}

function GradCapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: 'var(--green)' }}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: 'var(--green)' }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
