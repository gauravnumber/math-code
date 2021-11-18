import { isGte } from '../js/isGte.js'

describe('isGte', () => {
  const easy = [
    ["1", "2", false],
    ["34", "12", true],
    ["12", "12", true],
    ["0", "12", false],
    ["23", "22", true],
    ["0", "0", true],
  ]

  const negative = [
    ["4", "-12", true],
    ["-4", "12", false],
    ["-4", "-12", true],
    ["-2.5", "-5.8", true],
  ]

  const decimal = [
    ["12.3", "23", false],
    ["1342.3", "23", true],
    ["1343", "9923.8", false],
    ["343", "23.8", true],
    ["34.3", "23.8", true],
    ["9.3", "34.5", false],
    ["2.3", "2.3", true],
    ["34.3", "34", true],
  ]

  it.each(easy)('isGte(%s, %s)', (a, b, expected) => {
    expect(isGte(a, b)).toBe(expected)
  })

  it.each(negative)('Negative isGte(%s, %s)', (a, b, expected) => {
    expect(isGte(a, b)).toBe(expected);
  })

  it.each(decimal)('Decimal isGte(%s, %s)', (a, b, expected) => {
    expect(isGte(a, b)).toBe(expected);
  })


});