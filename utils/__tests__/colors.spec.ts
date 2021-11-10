import {
  validateColor,
  convertNameToHex,
  convertHexToRgba,
  getContrastColor,
} from '../colors'

describe('validateColor', () => {
  // Valid Hex (#a83d3d)
  test('Validate Hex (#a83d3d)', () => {
    expect(validateColor('#a83d3d')).toBe(true)
  })
  // Valid Hex (#fff)
  test('Valid Hex (#fff)', () => {
    expect(validateColor('#fff')).toBe(true)
  })
  // Invalid Hex (#a83d)
  test('Invalid Hex (#a83d)', () => {
    expect(validateColor('#a83d')).toBe(false)
  })
  // Valid RGBA (rgba(168, 61, 61, 1))
  test('Valid RGBA (rgba(168, 61, 61, 1))', () => {
    expect(validateColor('rgba(168, 61, 61, 1)')).toBe(true)
  })
  // Valid RGBA (168, 61, 61, 0.5)
  test('Valid RGBA (rgba(168, 61, 61, 0.5))', () => {
    expect(validateColor('rgba(168, 61, 61, 0.5)')).toBe(true)
  })
  // Invalid RGBA (168, 61, 61, 1.5)
  test('Valid RGBA (rgba(168, 61, 61, 1.5))', () => {
    expect(validateColor('rgba(168, 61, 61, 1.5)')).toBe(false)
  })
  // Valid Color Name (primary)
  test('Valid Color Name (primary)', () => {
    expect(validateColor('primary')).toBe(true)
  })
  // Valid Color Name (gray-500)
  test('Valid Color Name (gray500)', () => {
    expect(validateColor('gray500')).toBe(true)
  })
  // Invalid Color Name (hoge)
  test('Invalid Color Name (hoge)', () => {
    expect(validateColor('hoge')).toBe(false)
  })
})

describe('convertNameToHex', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(convertNameToHex('primary')).toBe('#a83d3d')
  })
  // Hex (#a83d3d)
  test('Hex (#a83d3d)', () => {
    expect(convertNameToHex('#a83d3d')).toBe('#a83d3d')
  })
  // RGBA (rgba(168, 61, 61, 1))
  test('RGBA (rgba(168, 61, 61, 1))', () => {
    expect(convertNameToHex('rgba(168, 61, 61, 1)')).toBe(
      'rgba(168, 61, 61, 1)'
    )
  })
})

describe('convertHexToRgba', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(convertHexToRgba('primary')).toBe('primary')
  })
  // Hex (#a83d3d)
  test('Hex (#a83d3d)', () => {
    expect(convertHexToRgba('#a83d3d')).toBe('rgba(168, 61, 61, 1)')
  })
  // RGBA (rgba(168, 61, 61, 1))
  test('RGBA (rgba(168, 61, 61, 1))', () => {
    expect(convertHexToRgba('rgba(168, 61, 61, 1)')).toBe(
      'rgba(168, 61, 61, 1)'
    )
  })
})

describe('getContrastColor', () => {
  // Color Name (primary)
  test('Color Name (primary)', () => {
    expect(getContrastColor('primary')).toBe('#fff')
  })
  // Hex (#fff)
  test('Hex (#fff)', () => {
    expect(getContrastColor('#fff')).toBe('#394147')
  })
  // RGBA (rgba(0, 0, 0, 1))
  test('RGBA (rgba(0, 0, 0, 1))', () => {
    expect(getContrastColor('rgba(0, 0, 0, 1)')).toBe('#fff')
  })
})
