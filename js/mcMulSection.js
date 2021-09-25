import { mcMulOne } from './mcMulOne.js';
import { mcAdd } from './mcAdd.js'
import { isEq } from './isEq.js'

import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import isDecimal from './.internal/isDecimal.js'
import isNegative from './.internal/isNegative.js'
import isZero from './.internal/isZero.js'
import decimalPosition from './.internal/decimalPosition.js'
import split from './.internal/split.js'

export function mcMulSection(first, second) {
	// console.log('first', first)
	// console.log('second', second)

	var lengthno,
		i, j,
		// firstLastIndex,
		secondLastIndex,
		// decimalfirst, decimalsecond,
		decimalthirdno,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third;
	// , thirdhalf, thirdslice;
	third = [];
	// decimalfirst = false;
	// decimalsecond = false;
	firstpos = secondpos = -1;
	// first = String(first);
	// second = String(second);
	// first = first.split("");
	// second = second.split("");
	// while (Number(first[0]) == 0)
	// 	first.shift();
	// while (Number(second[0]) == 0)
	// 	second.shift();
	if (isZero(first) || isZero(second)) {
		return "0"
	}

	// console.log('first', first)
	// console.log('second', second)


	first = split(first);
	second = split(second);

	// console.log('first', first)

	// console.log('first', first)
	// console.log('second', second)

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

	// if (isZero(first) || isZero(second)) {
	// 	return "0"
	// }

	// console.log('first', first)
	// console.log('second', second)

	if (isNegative(first) && isNegative(second)) {
		// if (first[0] == "-" && second[0] == "-") {
		first = first.slice(1);
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcMulSection(first, second);
		third = third.split("");
		third = third.join("");
		return third;
	} else if (!isNegative(first) && isNegative(second)) {
		// } else if (first[0] != "-" && second[0] == "-") {
		// console.log('first', first)
		// console.log('second', second)

		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcMulSection(first, second);
		third = third.split("");
		// third.unshift("-");

		console.log('third', third)				

		if (!isEq(third, "0")) {
			third.unshift("-");
		}
		

		third = third.join("");
		return third;
	} else if (isNegative(first) && !isNegative(second)) {
		// } else if (first[0] == "-" && second[0] != "-") {
		first = first.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcMulSection(second, first);
		third = third.split("");

		if (!isEq(third, "0")) {
			third.unshift("-");
		}
		
		third = third.join("");
		return third;
	}

	// for (i = 0; i < first.length; i++)
	// 	if (first[i] == ".") {
	// 		decimalfirst = true;
	// 		firstpos = i;
	// 		break;
	// 	}
	// for (i = 0; i < second.length; i++)
	// 	if (second[i] == ".") {
	// 		decimalsecond = true;
	// 		secondpos = i;
	// 		break;
	// 	}

	firstpos = decimalPosition(first)
	secondpos = decimalPosition(second)

	if (!isDecimal(first) && !isDecimal(second)) {
		// if (decimalfirst == false && decimalsecond == false) {
		lengthno = second.length;
		secondLastIndex = second.length - 1;
		first = first.join("");
		for (i = 0; i < lengthno; i++, secondLastIndex--) {
			third[i] = mcMulOne(first, Number(second[secondLastIndex]));
			for (j = 0; j < i; j++)
				third[i] = third[i].concat("0");
		}
		third = mcAdd.apply(null, third);
		return third;
	}
	else if (isDecimal(first) || isDecimal(second)) {
		// else if (decimalfirst == true || decimalsecond == true) {
		if (!isDecimal(first)) {
			// if (decimalfirst == false) {
			first = first.join("");
			firstpos = first.length;
			first = first.concat(".0");
			first = first.split("");
		} else if (!isDecimal(second)) {
			// } else if (decimalsecond == false) {
			second = second.join("");
			secondpos = second.length;
			second = second.concat(".0");
			second = second.split("");
		}
		firstslice = first.slice(firstpos + 1);
		secondslice = second.slice(secondpos + 1);
		firsthalf = first.slice("0", firstpos);
		secondhalf = second.slice("0", secondpos);
		first = firsthalf.concat(firstslice);
		second = secondhalf.concat(secondslice);

		first = first.join("");
		second = second.join("");

		third = mcMulSection(first, second);

		third = third.split("");
		decimalthirdno = firstslice.length + secondslice.length;
		third.splice(third.length - decimalthirdno, "0", ".");

		//? removeDecimalAndZeroFromRight()
		while (third[third.length - 1] == 0)
			third.pop();
		if (third[third.length - 1] == ".")
			third.pop();
		third = third.join("");
		return third;
	}
	return "Something went wrong";
}
