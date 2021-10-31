import isNumber from '../js/isNumber.js'

describe('isNumber', () => {
  const array = [
    ["0", true],
    ["0.0", true],
    ["24233", true],
    ["00003", true],
    ["00340034", true],
    ["34.54", true],
    ["-23", true],
    ["-34-34", false],
    ["3.4.34", false],
    ["34ad", false]
  ]

  it.each(array)('isNumber(%s)', (a, expected) => {
    expect(isNumber(a)).toBe(expected)
  })

});