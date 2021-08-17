import { mcDiv } from '../js/mcDiv.js'

describe('Division', () => {
  const easy = [
    ["050", "010", "5"],
    ["15", "3", "5"],
    ["12", "2", "6"],
    ["100", "2", "50"],
    ["360", "3", "120"],
    ["70", "35", "2"],
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

  it.each(easy)("Easily divisible number %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })

  it.each(negative)("Negative %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })

  it.only.each(decimal)("Decimal %s/%s", (a, b, expected) => {
    expect(mcDiv(a, b)).toBe(expected);
  })
});
