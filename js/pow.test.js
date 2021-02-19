import { assertEquals, equal } from "https://deno.land/std/testing/asserts.ts";
import { pow } from './pow.js'

const array = [
	[1, 2, 2],
	[4, 2, 16],
	[12, 2, 144]
]


for (let arr of array) {
	Deno.test(`${arr[0]} ^ ${arr[1]} = ${arr[2]}`, () => {
		equal(pow(arr[0], arr[1]), arr[2])
	})
}

