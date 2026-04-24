import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Section } from './Section'

describe('Section', () => {
  it('renders the section title', () => {
    render(<Section id="test" title="Mi Sección"><p>content</p></Section>)
    expect(screen.getByText('Mi Sección', { exact: false })).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Section id="test" title="Title"><p>Child content</p></Section>)
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('sets the correct id on the section element', () => {
    const { container } = render(<Section id="skills" title="Skills"><div /></Section>)
    expect(container.querySelector('#skills')).toBeInTheDocument()
  })
})
