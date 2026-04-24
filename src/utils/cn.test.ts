import { describe, it, expect } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })

  it('returns empty string when all values are falsy', () => {
    expect(cn(false, null, undefined)).toBe('')
  })

  it('handles a single class', () => {
    expect(cn('only')).toBe('only')
  })
})
