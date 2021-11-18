import isZero from '../js/isZero.js'

describe('isZero', () => {
  const array = [
    ["-.", true],
    ["4", false],
    ["1", false],
    ["0", true],
    ["--7", false],
    ["0.00.", false],
    ["-0", true],
  ]

  it.each(array)('isZero(%s)', (a, expected) => {
    expect(isZero(a)).toBe(expected)
  })

})
