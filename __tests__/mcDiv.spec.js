import { mcDiv } from '../js/mcDiv.js'

describe('Division', () => {
  const array = [
    ["15", "3", "5"]
  ]

  it.each(array)("Divide %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })
});