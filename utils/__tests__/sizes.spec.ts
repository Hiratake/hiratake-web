import { breakpoints } from '../sizes'

describe('breakpoints', () => {
  // Valid Type (sm)
  test('Valid Type (sm)', () => {
    expect(breakpoints('sm')).toBe('@media screen and (min-width: 576px)')
  })
  // Valid Type (md)
  test('Valid Type (md)', () => {
    expect(breakpoints('md')).toBe('@media screen and (min-width: 768px)')
  })
  // Valid Type (lg)
  test('Valid Type (lg)', () => {
    expect(breakpoints('lg')).toBe('@media screen and (min-width: 992px)')
  })
  // Valid Type (xl)
  test('Valid Type (xl)', () => {
    expect(breakpoints('xl')).toBe('@media screen and (min-width: 1200px)')
  })
})
