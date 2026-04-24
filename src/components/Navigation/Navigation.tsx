import { cn } from '@/utils/cn'
import type { NavItem } from '@/types/portfolio.types'

interface NavigationProps {
  items: NavItem[]
  activeId: string
}

export function Navigation({ items, activeId }: NavigationProps) {
  return (
    <nav
      aria-label="Secciones del portafolio"
      className="fixed top-0 z-50 w-full"
      style={{
        background: 'rgba(12,15,12,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--green-border)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-base font-bold"
          style={{ color: 'var(--green)' }}
        >
          &lt;Michael /&gt;
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {items.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeId === sectionId
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'font-mono text-sm transition-colors duration-200',
                    isActive ? '' : 'hover:text-white',
                  )}
                  style={{ color: isActive ? 'var(--green)' : 'var(--text-muted)' }}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
