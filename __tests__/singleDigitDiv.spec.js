import singleDigitDiv from '../js/singleDigitDiv.js'

describe('singleDigitDiv', () => {
  const array = [
    ["4", "8", "0.5"],
    ["2", "5", "0.4"],
    ["3", "7", "0.4285714285"],
    ["2", "8", "0.25"],
  ]

  it.each(array)('singleDigitDiv(%s, %s)', (a, b, expected) => {
    expect(singleDigitDiv(a, b)).toBe(expected)
  })
  
  it.only('should 1/33', () => {
    expect(singleDigitDiv("1", "33")).toBe("43");
  });


});