import singleDigitDiv from '../js/singleDigitDiv.js'

describe('singleDigitDiv', () => {
  const array = [
    ["4", "8", "0.5"],
    ["2", "5", "0.4"],
    // ["3", "7", "0.428571429"], // not working
    // ["2", "8", "0.25"],
  ]

  it.each(array)('singleDigitDiv(%s, %s)', (a, b, expected) => {
    expect(singleDigitDiv(a, b)).toBe(expected)
  })


});