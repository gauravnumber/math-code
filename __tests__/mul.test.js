import { assertEquals, equal } from "https://deno.land/std/testing/asserts.ts";
import { mul } from '../js/mul.js'

const array = [
	[2, 3, 6],
	[566, 13, 7319],
	[2, 0, 0]
]


for (let arr of array) {
	Deno.test(`${arr[0]} * ${arr[1]} = ${arr[2]}`, () => {
		equal(mul(arr[0], arr[1]), arr[2])
	})
}

	
// Deno.test('2 * 3 = 6', () => {
	// equal(mul(2, 3), 6)
// })

// Deno.test('566 * 13 = 7319', () => {
// 	equal(mul(566, 13), 7319)
// })

// Deno.test('2 * 0 = 0', () => {
// 	equal(mul(2, 0), 0)
// })

