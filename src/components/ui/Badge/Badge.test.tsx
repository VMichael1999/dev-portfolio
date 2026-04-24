import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>Flutter / Dart</Badge>)
    expect(screen.getByText('Flutter / Dart')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Tag</Badge>)
    expect(screen.getByText('Tag')).toHaveClass('custom-class')
  })

  it('renders as a span', () => {
    render(<Badge>Item</Badge>)
    expect(screen.getByText('Item').tagName).toBe('SPAN')
  })
})
