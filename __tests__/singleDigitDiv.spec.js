import singleDigitDiv from '../js/singleDigitDiv.js'

describe('singleDigitDiv', () => {
  const array = [
    ["4", "8", "0.5"],
    ["2", "5", "0.4"],
    ["3", "7", "0.4285714285"],
    ["2", "8", "0.25"],
    ["1", "33", "0.0303030303"],
    ["1", "36", "0.0277777777"],
    ["1", "35", "0.0285714285"],

    ["9", "8", "1.125"],
    ["34", "12", "2.8333333333"],
    ["9", "7", "1.2857142857"],
  ]

  const threeArgument = [
    ["22", "7", "40", "3.1428571428571428571428571428571428571428"],
    ["40", "13", "40", "3.0769230769230769230769230769230769230769"],
    ["1667", "1222", "90", "1.364157119476268412438625204582651391162029459901800327332242225859247135842880523731587561"],
  ]

  const isGt = [
    ["8642", "2", "4321"],
    ["1242", "2", "621"],
    ["3186", "3", "1062"],
  ]

  it.each(array)('singleDigitDiv(%s, %s)', (a, b, expected) => {
    expect(singleDigitDiv(a, b)).toBe(expected)
  })

  describe('Three arguments', () => {
    it.each(threeArgument)('singleDigitDiv(%s, %s, %s)', (a, b, numberOfDecimal, expected) => {
      expect(singleDigitDiv(a, b, numberOfDecimal)).toBe(expected)
    })
  });

  describe('Dividend >= Divisor', () => {
    it.each(isGt)('singleDigitDiv(%s, %s)', (a, b, expected) => {
      expect(singleDigitDiv(a, b)).toBe(expected)
    })
  });

  // it.only('should 9/7 ', () => {
  //   expect(singleDigitDiv("9", "7")).toBe("1.2857142857");
  // })
});