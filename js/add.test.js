import { assertEquals, equal } from "https://deno.land/std/testing/asserts.ts";
import { add } from './add.js'

const array = [
	[1, 2, 3],
	[34, 12, 46],
	[12, 12, 24]
]


for (let arr of array) {
	Deno.test(`${arr[0]} + ${arr[1]} = ${arr[2]}`, () => {
		equal(add(arr[0], arr[1]), arr[2])
	})
}
