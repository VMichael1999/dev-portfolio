import { SectionHeader, TerminalWindow } from '@/components/ui'
import type { ContactInfo, OnlineProfile } from '@/types/portfolio.types'

interface ContactProps {
  contact: ContactInfo
  profiles: OnlineProfile[]
}

export function Contact({ contact, profiles }: ContactProps) {
  return (
    <section id="contacto" style={{ padding: '5rem 24px' }}>
      <div className="mx-auto max-w-4xl">
        <SectionHeader subtitle="// Hablemos" title="Contacto" allGreen />

        <TerminalWindow title="contacto@michael:~" glow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: contact info */}
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>
                ¡Trabajemos juntos!
              </h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Disponible para proyectos freelance, posiciones full-time o colaboraciones.
                ¡No dudes en contactarme!
              </p>

              <div className="space-y-4">
                <ContactRow icon="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <ContactRow icon="phone" label="Teléfono" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, '')}`} />
                <ContactRow icon="location" label="Ubicación" value={contact.location} />
                {profiles.map((p) => (
                  <ContactRow
                    key={p.url}
                    icon={p.icon}
                    label={p.icon === 'github' ? 'GitHub' : 'LinkedIn'}
                    value={p.label}
                    href={p.url}
                    external
                  />
                ))}
              </div>
            </div>

            {/* Right: CTA panel */}
            <div
              className="flex flex-col items-center justify-center rounded-xl p-6 text-center"
              style={{
                background: 'var(--bg-card-2)',
                border: '1px solid var(--green-border)',
              }}
            >
              <div
                className="mb-4 flex items-center justify-center rounded-full"
                style={{
                  width: 64,
                  height: 64,
                  background: 'var(--green-dim)',
                }}
              >
                <SendIcon />
              </div>
              <p className="font-bold text-base mb-2" style={{ color: 'var(--text)' }}>
                ¿Tienes un proyecto en mente?
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Envíame un email y te respondo a la brevedad.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:brightness-110"
                style={{ background: 'var(--green)', color: '#0c0f0c' }}
              >
                <SendIcon small />
                Enviar Email
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

interface ContactRowProps {
  icon: 'mail' | 'phone' | 'location' | 'github' | 'linkedin'
  label: string
  value: string
  href?: string
  external?: boolean
}

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  const inner = (
    <div className="flex items-start gap-3">
      <div
        className="mt-0.5 flex items-center justify-center rounded-lg shrink-0"
        style={{ width: 36, height: 36, background: 'var(--green-dim)' }}
      >
        <RowIcon icon={icon} />
      </div>
      <div>
        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
        <p className="text-sm" style={{ color: 'var(--text)' }}>{value}</p>
      </div>
    </div>
  )

  if (!href) return inner

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block transition-opacity hover:opacity-75"
    >
      {inner}
    </a>
  )
}

function RowIcon({ icon }: { icon: ContactRowProps['icon'] }) {
  const props = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none' as const, stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': true as const, style: { color: 'var(--green)' } }
  switch (icon) {
    case 'mail':
      return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    case 'phone':
      return <svg {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" /></svg>
    case 'location':
      return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
    case 'github':
      return <svg {...props} fill="currentColor"><path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 0z" /></svg>
    case 'linkedin':
      return <svg {...props} fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" /></svg>
  }
}

function SendIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 28
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={small ? 'currentColor' : 'var(--green)'} strokeWidth="2" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}
