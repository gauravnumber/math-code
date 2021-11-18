import { isLt } from '../js/isLt.js'

describe('isLt', () => {
  const easy = [
    ["1", "2", true],
    ["34", "12", false],
    ["12", "12", false],
    ["0", "12", true],
    ["23", "22", false],
    ["0", "0", false],
  ]

  const negative = [
    ["4", "-12", false],
    ["-4", "12", true],
    ["-4", "-12", false],
    ["-2.5", "-5.8", false],
  ]

  const decimal = [
    ["12.3", "23", true],
    ["1342.3", "23", false],
    ["1343", "9923.8", true],
    ["343", "23.8", false],
    ["34.3", "23.8", false],
    ["9.3", "34.5", true],
    ["2.3", "2.3", false],
    ["34.3", "34", false],
  ]

  it.each(easy)('isLt(%s, %s)', (a, b, expected) => {
    expect(isLt(a, b)).toBe(expected)
  })

  it.each(negative)('Negative isLt(%s, %s)', (a, b, expected) => {
    expect(isLt(a, b)).toBe(expected);
  })

  it.each(decimal)('Decimal isLt(%s, %s)', (a, b, expected) => {
    expect(isLt(a, b)).toBe(expected);
  })


});