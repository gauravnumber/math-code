import { mcMulOne } from './mcMulOne.js';
import { mcAdd } from './mcAdd.js'

import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import removeZeroFromRight from './.internal/removeZeroFromRight.js'
import isDecimal from './.internal/isDecimal.js'
import isNegative from './.internal/isNegative.js'
import isZero from './.internal/isZero.js'
import decimalPosition from './.internal/decimalPosition.js'
import decimalShift from './.internal/decimalShift.js'
import split from './.internal/split.js'

export function mcMulSection(first, second) {
	var lengthno,
		i, j,
		secondLastIndex,
		firstpos, secondpos,
		third,
		firstLastDecimalPosition,
		secondLastDecimalPosition,
		lastDecimalPosition,
		positionOfDecimalAfterCalculation

	third = [];
	firstpos = secondpos = -1;

	if (isZero(first) || isZero(second)) {
		return "0"
	}

	first = split(first);
	second = split(second);

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

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

	if (!isDecimal(first) && !isDecimal(second)) {
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
		firstLastDecimalPosition = first.length - firstpos - 1
		secondLastDecimalPosition = second.length - secondpos - 1
		lastDecimalPosition = firstLastDecimalPosition + secondLastDecimalPosition

		first.splice(firstpos, 1)
		second.splice(secondpos, 1)

		third = mcMulSection(first, second);
		third = decimalShift(third, -lastDecimalPosition)
		third = removeZeroFromRight(third)

		return third
	} else if (isDecimal(first) && !isDecimal(second)) {
		first.splice(firstpos, 1)
		third = mcMulSection(first, second).split("")

		firstLastDecimalPosition = first.length - firstpos - 1
		positionOfDecimalAfterCalculation = third.length - firstLastDecimalPosition - 1

		third.splice(positionOfDecimalAfterCalculation, 0, ".")

		third = removeZeroFromRight(third)

		return third
	}
	else if (!isDecimal(first) && isDecimal(second)) {
		second.splice(secondpos, 1)
		third = mcMulSection(first, second).split("")

		secondLastDecimalPosition = second.length - secondpos - 1
		positionOfDecimalAfterCalculation = third.length - secondLastDecimalPosition - 1

		third.splice(positionOfDecimalAfterCalculation, 0, ".")

		third = removeZeroFromRight(third)

		return third
	}

	return "Something went wrong";
}
