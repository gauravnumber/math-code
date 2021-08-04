import { pow } from '../js/pow.js'

describe("power", () => {
	const array = [
		[1, 2, "1"],
		[4, 2, "16"],
		[12, 2, "144"],
		// [0, -2, "0"],
		// [-2, 0, "-2"],
		[2, 0, "1"],
		[12, 1, "12"]
	]

	it.each(array)('pow(%i, %i)', (a, b, expected) => {
		expect(pow(a, b)).toEqual(expected)
	})
})
