import { sub } from '../js/sub.js';

describe("substraction", () => {
	const array = [
		["1", "2", "-1"],
		["34", "12", "22"],
		["17", "2", "15"],
		["0", "-2", "2"],
		["-2", "0", "-2"],
		["2", "0", "2"],
		["12", "12", "0"]
	]

	it.each(array)('sub(%i, %i)', (a, b, expected) => {
		expect(sub(a, b)).toEqual(expected)
	})

	it('multiple arguments', () => {
		expect(sub("2323232323", "09999908", "3434469")).toBe("2309797946");
	})
})
