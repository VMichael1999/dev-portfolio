import { TerminalWindow } from '@/components/ui'
import type { SkillGroup as SkillGroupType } from '@/types/portfolio.types'

interface SkillGroupProps {
  group: SkillGroupType
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <TerminalWindow>
      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: 'var(--green)' }}>
          <SkillIcon icon={group.icon} />
        </span>
        <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>
          {group.category}
        </h3>
      </div>

      <div
        className="font-mono text-xs mb-4"
        style={{ color: 'var(--green)' }}
      >
        $ ls skills/
      </div>

      <ul className="space-y-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="font-mono text-sm flex items-center gap-2"
          >
            <span style={{ color: 'var(--green)' }}>→</span>
            <span style={{ color: 'var(--text)' }}>{item}</span>
          </li>
        ))}
      </ul>
    </TerminalWindow>
  )
}

function SkillIcon({ icon }: { icon: SkillGroupType['icon'] }) {
  switch (icon) {
    case 'mobile':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    case 'architecture':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'payments':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )
    case 'tools':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      )
    case 'frontend':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'backend':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    case 'globe':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      )
  }
}
