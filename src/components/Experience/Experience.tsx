import { SectionHeader } from '@/components/ui'
import { ExperienceCard } from './ExperienceCard'
import type { ExperienceItem } from '@/types/portfolio.types'

interface ExperienceProps {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experiencia" style={{ padding: '5rem 24px' }}>
      <div className="mx-auto max-w-4xl">
        <SectionHeader subtitle="// Trayectoria" title="Experiencia Profesional" />
        <div className="space-y-5">
          {items.map((item, idx) => (
            <ExperienceCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
