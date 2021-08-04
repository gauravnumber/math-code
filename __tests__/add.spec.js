import { add } from '../js/add.js'

describe("addition", () => {
	const array = [
		[1, 2, "3"],
		[34, 12, "46"],
		[12, 12, "24"]
	]

	it.each(array)('add(%i, %i)', (a, b, expected) => {
		expect(add(a, b)).toEqual(expected)
		// expect(add(a, b)).not.toBe(expected)
	})
})
