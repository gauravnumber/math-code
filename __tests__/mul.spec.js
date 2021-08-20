import { mul } from '../js/mul.js'

describe("multiplication", () => {
	const array = [
		["2", "3", "6"],
		["566", "13", "7358"],
		["2", "5", "10"],
		// [2, 0, "0"],
		// [0, -2, "0"],
		// [-2, 0, "0"],
		["2", "10", "20"],
		["12", "12", "144"]
	]

	it.each(array)('mul(%i, %i)', (a, b, expected) => {
		expect(mul(a, b)).toBe(expected)
		// expect(mul(a, b)).toEqual(expected)
	})

	it('two arguments', () => {
		expect(mul("12243423", "7365273")).toBe("90176152849479");
	})

	it('multiple arguments', () => {
		expect(mul("12243423", "7365273", "8748347", "87887908")).toBe("69334091797171062698030512404");
	})
})
