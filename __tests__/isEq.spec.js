import { isEq } from '../js/isEq.js'

describe('isEq', () => {
  const easy = [
    ["050", "50", true],
    ["3", "3", true],
    ["12", "2", false],
    // ["100", "2", "50"],
    // ["360", "3", "120"],
    // ["70", "35", "2"],
  ]

  const negative = [
    ["-15", "-15", true],
    ["-012", "-0012", true],
    ["-12", "-2", false],
  ]

  const decimal = [
    // ["1.0", "4.0", false],
    // ["9.25", "9.25", true],
    // ["8.5", "8.5000", true],
    // ["3.657", "3.657", true],
    ["9.3", "34.5", false],
    ["12.34", "56.78", false],
  ]

  it.each(easy)("Easy isEq(%s, %s)", (a, b, expected) => {
    expect(isEq(a, b)).toBe(expected);
  })

  it.each(negative)("Negative isEq(%s, %s)", (a, b, expected) => {
    expect(isEq(a, b)).toBe(expected);
  })

  it.only.each(decimal)("Decimal isEq(%s, %s)", (a, b, expected) => {
    expect(isEq(a, b)).toBe(expected);
  })

});