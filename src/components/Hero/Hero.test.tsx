import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'
import type { ContactInfo, OnlineProfile } from '@/types/portfolio.types'

const mockContact: ContactInfo = {
  phone: '929 760 277',
  email: 'vmmichael6@gmail.com',
  location: 'Lima, Perú',
}

const mockProfiles: OnlineProfile[] = [
  { label: 'github.com/Michaelabx01', url: 'https://github.com/Michaelabx01', icon: 'github' },
]

describe('Hero', () => {
  it('renders firstName and lastName separately', () => {
    render(
      <Hero
        firstName="Michael"
        lastName="Valdiviezo"
        terminalSummary="Mobile Developer"
        contact={mockContact}
        profiles={mockProfiles}
      />,
    )
    expect(screen.getByText('Michael')).toBeInTheDocument()
    expect(screen.getByText('Valdiviezo')).toBeInTheDocument()
  })

  it('renders terminal summary inside terminal card', () => {
    render(
      <Hero
        firstName="Michael"
        lastName="Valdiviezo"
        terminalSummary="Mobile Developer con +3 años"
        contact={mockContact}
        profiles={mockProfiles}
      />,
    )
    expect(screen.getByText(/Mobile Developer con/)).toBeInTheDocument()
  })

  it('renders the location', () => {
    render(
      <Hero firstName="Michael" lastName="V" terminalSummary="Dev" contact={mockContact} profiles={mockProfiles} />,
    )
    expect(screen.getByText('Lima, Perú')).toBeInTheDocument()
  })

  it('renders email as mailto link', () => {
    render(
      <Hero firstName="Michael" lastName="V" terminalSummary="Dev" contact={mockContact} profiles={mockProfiles} />,
    )
    const link = screen.getByText('vmmichael6@gmail.com').closest('a')
    expect(link).toHaveAttribute('href', 'mailto:vmmichael6@gmail.com')
  })

  it('renders // Hola, soy greeting', () => {
    render(
      <Hero firstName="Michael" lastName="V" terminalSummary="Dev" contact={mockContact} profiles={mockProfiles} />,
    )
    expect(screen.getByText('// Hola, soy')).toBeInTheDocument()
  })
})
