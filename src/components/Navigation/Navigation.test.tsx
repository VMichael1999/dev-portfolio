import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navigation } from './Navigation'
import type { NavItem } from '@/types/portfolio.types'

const mockItems: NavItem[] = [
  { label: 'inicio()', href: '#inicio' },
  { label: 'experiencia()', href: '#experiencia' },
  { label: 'skills()', href: '#skills' },
]

describe('Navigation', () => {
  it('renders all nav items', () => {
    render(<Navigation items={mockItems} activeId="" />)
    mockItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('renders the <Michael /> logo', () => {
    render(<Navigation items={mockItems} activeId="" />)
    expect(screen.getByText('<Michael />')).toBeInTheDocument()
  })

  it('applies green color to active link', () => {
    render(<Navigation items={mockItems} activeId="experiencia" />)
    const activeLink = screen.getByText('experiencia()')
    expect(activeLink).toHaveStyle({ color: 'var(--green)' })
  })

  it('has accessible nav landmark', () => {
    render(<Navigation items={mockItems} activeId="" />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('links point to correct hrefs', () => {
    render(<Navigation items={mockItems} activeId="" />)
    const link = screen.getByText('inicio()').closest('a')
    expect(link).toHaveAttribute('href', '#inicio')
  })
})
