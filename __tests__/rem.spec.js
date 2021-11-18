import rem from '../js/rem.js'

describe('rem', () => {
  const array = [
    ["22", "7", "1"],
    ["40", "13", "1"],
    ["123", "34", "21"],
    ["345", "312", "33"],
    ["345", "345", "0"],
    ["345", "414", "345"],
    // ["54.3435", "55"],
  ]

  // const zero = [
  //   ["0", "0"],
  //   // ["-0", "0"]
  // ]

  const negative = [
    ["345", "-312", "33"],
    ["-345", "312", "-33"],
    ["-345", "-312", "-33"],
  ]


  it.each(array)('rem(%s, %s)', (a, b, expected) => {
    expect(rem(a, b)).toEqual(expected)
  })

  // describe('If rem function recieve zero', () => {
  //   it.each(zero)('rem(%s)', (a, expected) => {
  //     expect(rem(a)).toBe(expected)
  //   })
  // });

  describe('If number is negative', () => {
    it.each(negative)('rem(%s, %s)', (a, b, expected) => {
      expect(rem(a, b)).toEqual(expected)
    })
  });


});