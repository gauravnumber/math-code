import { add } from '../js/add.js'

describe("addition", () => {
	describe('two parameter', () => {
		const array = [
			["1", "2", "3"],
			["34", "12", "46"],
			["12", "12", "24"]
		]

		it.each(array)('add(%s, %s)', (a, b, expected) => {
			expect(add(a, b)).toBe(expected)
		})
	});

	describe('more than two parameter', () => {
		it('should add three parameter', () => {
			expect(add("1232", "2323", "789")).toBe("4344")
		})
	});
})
