import { mcMulOne } from './mcMulOne.js';
import { mcAdd } from './mcAdd.js'

import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import isDecimal from './.internal/isDecimal.js'
import isNegative from './.internal/isNegative.js'
import isZero from './.internal/isZero.js'
import decimalPosition from './.internal/decimalPosition.js'
import split from './.internal/split.js'

export function mcMulSection(first, second) {
	var lengthno,
		i, j,
		secondLastIndex,
		decimalthirdno,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third,
		firstLastDecimalPosition,
		secondLastDecimalPosition,
		positionOfDecimalAfterCalculation

	third = [];
	firstpos = secondpos = -1;

	if (isZero(first) || isZero(second)) {
		return "0"
	}

	first = split(first);
	second = split(second);

	// console.log('second', second)
	// return 'end'

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

	// console.log('second.join("")', second.join(""))

	if (isNegative(first) && isNegative(second)) {
		first = first.slice(1);
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcMulSection(first, second);
		third = third.split("");
		third = third.join("");
		return third;
	} else if (!isNegative(first) && isNegative(second)) {
		second = second.slice(1);

		first = first.join("");
		second = second.join("");

		third = mcMulSection(first, second);
		third = third.split("");
		third.unshift("-");

		// if (!isEq(third, "0")) {
		// 	third.unshift("-");
		// }

		third = third.join("");
		return third;
	} else if (isNegative(first) && !isNegative(second)) {
		first = first.slice(1);
		first = first.join("");

		second = second.join("");

		third = mcMulSection(second, first);
		third = third.split("");
		third.unshift("-");

		// if (!isEq(third, "0")) {
		// 	third.unshift("-");
		// }

		third = third.join("");
		return third;
	}

	firstpos = decimalPosition(first)
	secondpos = decimalPosition(second)

	// console.log('isDecimal(first)', isDecimal(first))
	// console.log('isDecimal(second)', isDecimal(second))
	// console.log('second.join("")', second.join(""))

	if (!isDecimal(first) && !isDecimal(second)) {
		// return 'hi'
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
	} else if (isDecimal(first) && isDecimal(second)) {
		// return "wow"
		firstLastDecimalPosition = first.length - firstpos - 1
		secondLastDecimalPosition = second.length - secondpos - 1

		// console.log('first', first.join(""))
		// console.log('second', second.join(""))
		// // console.log('firstpos', firstpos)
		// // console.log('secondpos', secondpos)
		// console.log('firstLastDecimalPosition', firstLastDecimalPosition)



		if (!isDecimal(first)) {
			first = first.join("");
			firstpos = first.length;
			first = first.concat(".0");
			first = first.split("");
		} else if (!isDecimal(second)) {
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

		// console.log('firsthalf.join("")', firsthalf.join(""))
		// console.log('secondhalf.join("")', secondhalf.join(""))

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
	} else if(isDecimal(first) && !isDecimal(second)) {
		first.splice(firstpos, 1)
		firstLastDecimalPosition = first.length - firstpos - 1
		third = mcMulSection(first, second).split("")
		positionOfDecimalAfterCalculation = third.length - firstLastDecimalPosition - 1

		third.splice(positionOfDecimalAfterCalculation, 0, ".")

		return third.join("")
	}
	else if(!isDecimal(first) && isDecimal(second)) {
		second.splice(secondpos, 1)
		third = mcMulSection(first, second).split("")

		secondLastDecimalPosition = second.length - secondpos - 1
		positionOfDecimalAfterCalculation = third.length - secondLastDecimalPosition - 1

		third.splice(positionOfDecimalAfterCalculation, 0, ".")

		return third.join("")
	} 
	
	// else {
	// 	// both decimal
	// 	return 'both decimal'
	// }
	// else if (isDecimal(first) || isDecimal(second)) {
	// 	// let firstLastDigit = first.length - firstpos - 1
	// 	// let secondLastDigit = second.length - secondpos - 1

	// 	// console.log('first', first.join(""))
	// 	// console.log('second', second.join(""))
	// 	// // console.log('firstpos', firstpos)
	// 	// // console.log('secondpos', secondpos)
	// 	// console.log('firstLastDigit', firstLastDigit)
	// 	// console.log('secondLastDigit', secondLastDigit)

	// 	if (!isDecimal(first)) {
	// 		first = first.join("");
	// 		firstpos = first.length;
	// 		first = first.concat(".0");
	// 		first = first.split("");
	// 	} else if (!isDecimal(second)) {
	// 		second = second.join("");
	// 		secondpos = second.length;
	// 		second = second.concat(".0");
	// 		second = second.split("");
	// 	}

	// 	firstslice = first.slice(firstpos + 1);
	// 	secondslice = second.slice(secondpos + 1);
	// 	firsthalf = first.slice("0", firstpos);
	// 	secondhalf = second.slice("0", secondpos);
	// 	first = firsthalf.concat(firstslice);
	// 	second = secondhalf.concat(secondslice);

	// 	console.log('firsthalf.join("")', firsthalf.join(""))
	// 	console.log('secondhalf.join("")', secondhalf.join(""))

	// 	first = first.join("");
	// 	second = second.join("");

	// 	third = mcMulSection(first, second);

	// 	third = third.split("");
	// 	decimalthirdno = firstslice.length + secondslice.length;
	// 	third.splice(third.length - decimalthirdno, "0", ".");

	// 	//? removeDecimalAndZeroFromRight()
	// 	while (third[third.length - 1] == 0)
	// 		third.pop();
	// 	if (third[third.length - 1] == ".")
	// 		third.pop();
	// 	third = third.join("");
	// 	return third;
	// }
	
	return "Something went wrong";
}
