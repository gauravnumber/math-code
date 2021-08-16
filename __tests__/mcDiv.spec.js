import { mcDiv } from '../js/mcDiv.js'

describe('Division', () => {
  const easy = [
    ["15", "3", "5"],
    ["12", "2", "6"],
  ]

  const negative = [
    ["-15", "3", "-5"],
    ["12", "-2", "-6"],
    ["-12", "-2", "6"],
  ]

  const decimal = [
    ["10", "4", "2.5"],
    ["9.25", "5", "1.85"],
    ["8.5", "5", "1.7"],
    ["3.657", "1.59", "2.3"],
  ]

  it.only.each(easy)("Easily divisible number %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })

  it.each(negative)("Negative %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })

  it.each(decimal)("Decimal %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })
});
