import { assertEquals, equal } from "https://deno.land/std/testing/asserts.ts";
import { fact } from './fact.js'

const array = [
	[1, 1],
	[4, 24],
	[5, 120]
]

console.log(fact(3));

for (let arr of array) {
	Deno.test(`!${arr[0]} = ${arr[1]}`, () => {
        assertEquals(fact(arr[0]), `${arr[1]}`)
	})
}

