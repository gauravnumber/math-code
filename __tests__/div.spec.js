import { div } from '../js/div.js'
// import div from '../js/div.js'

describe('div', () => {
  const array = [
    ["10945", "12567", "0.8709318055"],
    ["4", "8", "0.5"],
    ["2", "5", "0.4"],
    ["3", "7", "0.4285714285"],
    ["2", "8", "0.25"],
    ["6", "12", "0.5"],
    ["3", "12", "0.25"],
    ["1", "33", "0.0303030303"],
    ["1", "36", "0.0277777777"],
    ["1", "35", "0.0285714285"],

    ["9", "8", "1.125"],
    ["34", "12", "2.8333333333"],
    ["9", "7", "1.2857142857"],
    ["1234567891", "12567", "98238.8709318055"],
  ]

  const threeArgument = [
    ["22", "7", "40", "3.1428571428571428571428571428571428571428"],
    ["40", "13", "40", "3.0769230769230769230769230769230769230769"],
    ["1667", "1222", "90", "1.364157119476268412438625204582651391162029459901800327332242225859247135842880523731587561"],
    ["1252323.2321", "1.23212", "12", "1016397.130230821673"],
  ]

  const isGt = [
    ["1242", "2", "621"],
    ["1251", "12", "104.25"],
    ["8642", "2", "4321"],
    ["3186", "3", "1062"],
    ["14287", "7", "2041"],
    ["11246", "2", "5623"],
    ["20121", "3", "6707"],
    ["37284", "2", "18642"],
    ["155060736", "12345.6", "12560"],
  ]

  const isEq = [
    ["12", "12"],
    ["1.2", "1.2"],
  ]

  const zero = [
    ["0", "123", "0"],
  ]

  const negative = [
    ["-3", "-12", "0.25"],
    ["-1251", "-12", "104.25"],
  ]


  it.each(array)('div(%s, %s)', (a, b, expected) => {
    expect(div(a, b)).toBe(expected)
  })

  describe('Three arguments', () => {
    it.each(threeArgument)('div(%s, %s, %s)', (a, b, numberOfDecimal, expected) => {
      expect(div(a, b, numberOfDecimal)).toBe(expected)
    })
  });

  describe('Dividend >= Divisor', () => {
    it.each(isGt)('div(%s, %s)', (a, b, expected) => {
      expect(div(a, b)).toBe(expected)
    })
  });


  describe('Dividend === Divisor', () => {
    it.each(isEq)('div(%s, %s)', (a, b) => {
      expect(div(a, b)).toBe("1")
    })
  });

  describe('If any dividend or divisor become zero', () => {
    it.each(zero)('div(%s, %s)', (a, b, expected) => {
      expect(div(a, b)).toBe(expected)
    })
  });

  describe('If number is negative', () => {
    it.each(negative)('div(%s, %s, %s)', (a, b, expected) => {
      expect(div(a, b)).toBe(expected)
    })
  });


  describe('If number is decimal', () => {
    const decimal = [
      ["1252323.23231", "1.23212", "1016397.1304012596"],
      // ["1252323.2321", "1.23212", "1016397.130230821"],
    ]

    describe('If number is same decimal digit', () => {
      it.each(decimal)('div(%s, %s, %s)', (a, b, expected) => {
        expect(div(a, b)).toBe(expected)
      })
    });
  });



  // it.only('should 9/7 ', () => {
  //   expect(div("9", "7")).toBe("1.2857142857");
  // })
});