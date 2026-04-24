import { SectionHeader } from '@/components/ui'
import { SkillGroup } from './SkillGroup'
import type { SkillGroup as SkillGroupType } from '@/types/portfolio.types'

interface SkillsProps {
  groups: SkillGroupType[]
}

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" style={{ padding: '5rem 24px' }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader subtitle="// Tecnologías" title="Mi Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
