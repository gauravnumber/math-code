import divisibleFor from '../js/divisibleFor.js'

describe('divisibleFor', () => {
  const array = [
    ["10", "2", "5"],
    ["72", "12", "6"],
    ["25", "5", "5"]
  ]

  it.each(array)('divisibleFor(%i, %i)', (a, b, expected) => {
    expect(divisibleFor(a, b)).toBe(expected)
  })

});