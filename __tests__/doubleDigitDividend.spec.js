import doubleDigitDividend from '../js/doubleDigitDividend.js'

describe('doubleDigitDividend', () => {
  const array = [
    ["10", "2", "5"],
    ["25", "5", "5"],
    ["72", "12", "6"],
    ["40", "8", "5"],
  ]

  it.each(array)('doubleDigitDividend(%i, %i)', (a, b, expected) => {
    expect(doubleDigitDividend(a, b)).toBe(expected)
  })

});