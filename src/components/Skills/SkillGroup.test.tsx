import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SkillGroup } from './SkillGroup'
import type { SkillGroup as SkillGroupType } from '@/types/portfolio.types'

const mockGroup: SkillGroupType = {
  category: 'Mobile',
  icon: 'mobile',
  items: ['Flutter / Dart', 'Android (Kotlin · Java)', 'Jetpack Compose'],
}

describe('SkillGroup', () => {
  it('renders the category title', () => {
    render(<SkillGroup group={mockGroup} />)
    expect(screen.getByText('Mobile')).toBeInTheDocument()
  })

  it('renders the terminal command', () => {
    render(<SkillGroup group={mockGroup} />)
    expect(screen.getByText('$ ls skills/')).toBeInTheDocument()
  })

  it('renders all skill items with arrow prefix', () => {
    render(<SkillGroup group={mockGroup} />)
    mockGroup.items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
    const arrows = screen.getAllByText('→')
    expect(arrows).toHaveLength(mockGroup.items.length)
  })
})
