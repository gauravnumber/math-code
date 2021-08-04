import { mul } from '../js/mul.js'

describe("substraction", () => {
	const array = [
		[2, 3, "6"],
		[566, 13, "7358"],
		[2, 5, "10"],
		// [2, 0, "0"],
		// [0, -2, "0"],
		// [-2, 0, "0"],
		[2, 10, "20"],
		[12, 12, "144"]
	]

	it.each(array)('mul(%i, %i)', (a, b, expected) => {
		expect(mul(a, b)).toEqual(expected)
	})
})
