import { cn } from '@/utils/cn'

interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function TerminalWindow({ title, children, className, glow = false }: TerminalWindowProps) {
  return (
    <div
      className={cn('rounded-xl overflow-hidden', className)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${glow ? 'var(--green-border)' : 'var(--border)'}`,
        boxShadow: glow ? '0 0 30px var(--green-glow)' : undefined,
      }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="terminal-dots">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
        </div>
        {title && (
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            {title}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
