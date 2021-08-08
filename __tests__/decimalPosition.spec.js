import decimalPosition from '../js/.internal/decimalPosition.js'

describe('Position of decimal', () => {
  test('should 1234.12 -> 4', () => {
    expect(decimalPosition('1234.12')).toBe(4);
  })
  
})
