import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Education } from './Education'
import type { Education as EducationType, Language } from '@/types/portfolio.types'

const mockEducation: EducationType[] = [
  { degree: 'Ingeniería de Software', institution: 'UTP', period: '2019 – 2025' },
]

const mockLanguages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2' },
]

describe('Education', () => {
  it('renders education items', () => {
    render(<Education items={mockEducation} languages={mockLanguages} />)
    expect(screen.getByText('Ingeniería de Software')).toBeInTheDocument()
    expect(screen.getByText('UTP')).toBeInTheDocument()
    expect(screen.getByText('2019 – 2025')).toBeInTheDocument()
  })

  it('renders language names inside the code block', () => {
    const { container } = render(<Education items={mockEducation} languages={mockLanguages} />)
    // Names are rendered as text nodes split by quote spans
    expect(container.textContent).toContain('Español')
    expect(container.textContent).toContain('Inglés')
  })

  it('renders the section with id "educacion"', () => {
    const { container } = render(<Education items={mockEducation} languages={mockLanguages} />)
    expect(container.querySelector('#educacion')).toBeInTheDocument()
  })
})
