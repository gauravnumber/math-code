import ceil from '../js/ceil.js'

describe('ceil', () => {
  const array = [
    ["3.4", "4"],
    ["54.3435", "55"],
  ]

  const zero = [
    ["0", "0"],
    // ["-0", "0"]
  ]

  const negative = [
    ["-3.45", "-3"],
    ["-12.51", "-12"],
  ]


  it.each(array)('ceil(%s)', (a, expected) => {
    expect(ceil(a)).toEqual(expected)
  })

  describe('If ceil function recieve zero', () => {
    it.each(zero)('ceil(%s)', (a, expected) => {
      expect(ceil(a)).toBe(expected)
    })
  });

  describe('If number is negative', () => {
    it.each(negative)('ceil(%s)', (a, expected) => {
      expect(ceil(a)).toBe(expected)
    })
  });


});