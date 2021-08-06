import * as mc from '../js/math-code.js'
import { add } from '../js/math-code.js'

describe("addition", () => {
  it("input both is Number type", () => {
    expect(mc.add(1, 2)).toBe("3")
  })

  it("input both is String type", () => {
    expect(mc.add("1", "2")).toBe("3")
  })

  it("directly import add()", () => {
    expect(add("23", "11")).toBe("34")
  })
})

