import { isGt } from '../js/isGt.js'

describe('isGt', () => {
  const array = [
    ["1", "2", false],
    ["34", "12", true],
    ["12", "12", false],
    ["0", "12", false],
    ["23", "22", true],
    ["2.3", "2.3", false],
    ["-4", "-12", true],
    ["-2.5", "-5.8", true],
    ["0", "0", false],
    ["34.3", "34", true],
  ]

  it.each(array)('isGt(%s, %s)', (a, b, expected) => {
    expect(isGt(a, b)).toBe(expected)
  })
});