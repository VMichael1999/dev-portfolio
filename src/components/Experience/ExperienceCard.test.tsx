import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ExperienceCard } from './ExperienceCard'
import type { ExperienceItem } from '@/types/portfolio.types'

const mockItem: ExperienceItem = {
  role: 'Mobile Developer',
  company: 'Toolrides SAC',
  period: 'Nov 2024 – Abr 2026',
  description: 'Desarrollo de apps multiplataforma Android/iOS.',
  tags: ['Flutter', 'Kotlin', 'Stripe'],
}

describe('ExperienceCard', () => {
  it('renders the role', () => {
    render(<ExperienceCard item={mockItem} />)
    expect(screen.getByText('Mobile Developer')).toBeInTheDocument()
  })

  it('renders the company', () => {
    render(<ExperienceCard item={mockItem} />)
    expect(screen.getByText('Toolrides SAC')).toBeInTheDocument()
  })

  it('renders the period', () => {
    render(<ExperienceCard item={mockItem} />)
    expect(screen.getByText('Nov 2024 – Abr 2026')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ExperienceCard item={mockItem} />)
    expect(screen.getByText(mockItem.description)).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<ExperienceCard item={mockItem} />)
    mockItem.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('applies green border on hover', () => {
    const { container } = render(<ExperienceCard item={mockItem} />)
    const card = container.firstChild as HTMLElement
    expect(card.getAttribute('style')).toContain('var(--border)')
  })
})
