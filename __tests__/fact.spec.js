import { fact } from '../js/fact.js'

describe("factorial", () => {
	const array = [
		[1, "1"],
		[4, "24"],
		[5, "120"],
		[2, "2"],
	]

	it.each(array)('fact(%i)', (a, expected) => {
		expect(fact(a)).toEqual(expected)
	})
})
