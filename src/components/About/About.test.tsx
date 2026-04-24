import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'
import type { Specialty, ContactInfo } from '@/types/portfolio.types'

const mockContact: ContactInfo = {
  phone: '929 760 277',
  email: 'vmmichael6@gmail.com',
  location: 'Lima, Perú',
}

const mockSpecialties: Specialty[] = [
  { icon: 'mobile' as const, title: 'Mobile Dev', description: 'Flutter, Android, iOS' },
  { icon: 'layers' as const, title: 'Arquitectura', description: 'Clean Architecture' },
]

const mockLanguages = [{ name: 'Español', level: 'Nativo' }]
const mockEducation = [{ degree: 'Ingeniería de Software', institution: 'UTP', period: '2019-2025' }]

describe('About', () => {
  it('renders specialty titles', () => {
    render(
      <About
        contact={mockContact}
        languages={mockLanguages}
        education={mockEducation}
        specialties={mockSpecialties}
      />,
    )
    expect(screen.getByText('Mobile Dev')).toBeInTheDocument()
    expect(screen.getByText('Arquitectura')).toBeInTheDocument()
  })

  it('renders specialty descriptions', () => {
    render(
      <About
        contact={mockContact}
        languages={mockLanguages}
        education={mockEducation}
        specialties={mockSpecialties}
      />,
    )
    expect(screen.getByText('Flutter, Android, iOS')).toBeInTheDocument()
  })

  it('renders JSON code block with location', () => {
    render(
      <About
        contact={mockContact}
        languages={mockLanguages}
        education={mockEducation}
        specialties={mockSpecialties}
      />,
    )
    expect(screen.getByText(/"Lima, Perú"/)).toBeInTheDocument()
  })

  it('renders section with id "sobre-mi"', () => {
    const { container } = render(
      <About
        contact={mockContact}
        languages={mockLanguages}
        education={mockEducation}
        specialties={mockSpecialties}
      />,
    )
    expect(container.querySelector('#sobre-mi')).toBeInTheDocument()
  })
})
