import abs from '../js/abs.js'

describe('abs', () => {
  const array = [
    ["3.4", "3.4"],
    ["54.3435", "54.3435"],
  ]

  const zero = [
    ["0", "0"],
    ["-0", "0"]
  ]

  const negative = [
    ["-3.45", "3.45"],
    ["-12.51", "12.51"],
    ["-34523.237", "34523.237"],
  ]


  it.each(array)('abs(%s)', (a, expected) => {
    expect(abs(a)).toEqual(expected)
  })

  describe('If abs function recieve zero', () => {
    it.each(zero)('abs(%s)', (a, expected) => {
      expect(abs(a)).toBe(expected)
    })
  });

  describe('If number is negative', () => {
    it.each(negative)('abs(%s)', (a, expected) => {
      expect(abs(a)).toBe(expected)
    })
  });
});