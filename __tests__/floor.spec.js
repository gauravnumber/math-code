import floor from '../js/floor.js'

describe('floor', () => {
  const array = [
    ["3.4", "3"],
    ["54.3435", "54"],
  ]

  const zero = [
    ["0", "0"],
    // ["-0", "0"]
  ]

  const negative = [
    ["-3.45", "-4"],
    ["-12.51", "-13"],
  ]


  it.each(array)('floor(%s)', (a, expected) => {
    expect(floor(a)).toEqual(expected)
  })

  describe('If floor function recieve zero', () => {
    it.each(zero)('floor(%s)', (a, expected) => {
      expect(floor(a)).toBe(expected)
    })
  });

  describe('If number is negative', () => {
    it.each(negative)('floor(%s)', (a, expected) => {
      expect(floor(a)).toBe(expected)
    })
  });


});