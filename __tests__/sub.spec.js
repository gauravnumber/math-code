// import { assertEquals, equal } from "https://deno.land/std/testing/asserts.ts";
import { sub } from '../js/sub.js';

// const array = [
// 	[17, 2, 15],
// 	[0, -2, 2],
// 	[-2, 0, -2],
// 	[2, 0, 2]
// ]

describe("substraction", () => {
	const array = [
		[1, 2, "-1"],
		[34, 12, "22"],
		// [12, 12, "0"]
	]

	it.each(array)('sub(%i, %i)', (a, b, expected) => {
		expect(sub(a, b)).toEqual(expected)
	})
})



// for (let arr of array) {
// 	Deno.test(`${arr[0]} - ${arr[1]} = ${arr[2]}`, () => {
// 		// assertEquals(sub(arr[0], arr[1]), arr[2])
// 		equal(sub(arr[0], arr[1]), arr[2])
// 		// console.log(arr[0], arr[1], arr[2]);
// 		// console.log(sub(arr[0], arr[1]));
// 	})
// }


// Deno.test('17 - 2 == 15', () => {
// 	// assertEquals(sub(17, 2), '15')
// 	equal(sub(17, 2), '15')
// })

// Deno.test('0 - 2 == -2', () => {
// 	// assertEquals(sub(0, -2), '-2')
// 	equal(sub(0, -2), '-2')
// })
