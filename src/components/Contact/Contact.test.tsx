import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'
import type { ContactInfo, OnlineProfile } from '@/types/portfolio.types'

const mockContact: ContactInfo = {
  phone: '929 760 277',
  email: 'vmmichael6@gmail.com',
  location: 'Lima, Perú',
}

const mockProfiles: OnlineProfile[] = [
  { label: 'github.com/Michaelabx01', url: 'https://github.com/Michaelabx01', icon: 'github' },
  { label: 'linkedin.com/in/michael', url: 'https://linkedin.com/in/michael', icon: 'linkedin' },
]

describe('Contact', () => {
  it('renders phone number', () => {
    render(<Contact contact={mockContact} profiles={mockProfiles} />)
    expect(screen.getByText('929 760 277')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Contact contact={mockContact} profiles={mockProfiles} />)
    expect(screen.getByText('vmmichael6@gmail.com')).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<Contact contact={mockContact} profiles={mockProfiles} />)
    expect(screen.getByText('Lima, Perú')).toBeInTheDocument()
  })

  it('renders profile link labels', () => {
    render(<Contact contact={mockContact} profiles={mockProfiles} />)
    expect(screen.getByText('github.com/Michaelabx01')).toBeInTheDocument()
    expect(screen.getByText('linkedin.com/in/michael')).toBeInTheDocument()
  })

  it('renders the section with id "contacto"', () => {
    const { container } = render(<Contact contact={mockContact} profiles={mockProfiles} />)
    expect(container.querySelector('#contacto')).toBeInTheDocument()
  })
})
