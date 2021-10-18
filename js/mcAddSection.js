import { mcSubSection } from './mcSubSection.js'

import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import isNegative from './isNegative.js'
import isDecimal from './isDecimal.js'
import decimalPosition from './.internal/decimalPosition.js'
import split from './.internal/split.js'

export function mcAddSection(first, second) {
	var lengthno,
		i,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf, thirdslice;
	third = [];
	firstpos = secondpos = -1;
	// first = String(first);
	// second = String(second);
	// first = first.split("");
	// second = second.split("");

	first = split(first);
	second = split(second);

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

	if (isNegative(first) && isNegative(second)) {
		first = first.slice(1);
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcAddSection(first, second);
		third = third.split("");
		third.unshift("-");
		third = third.join("");
		return third;
	} else if (!isNegative(first) && isNegative(second)) {
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcSubSection(first, second);
		third = third.split("");
		third = third.join("");
		return third;
	} else if (isNegative(first) && !isNegative(second)) {
		first = first.slice(1);
		first = first.join("");
		second = second.join("");
		third = mcSubSection(second, first);
		third = third.split("");
		third = third.join("");
		return third;
	}

	firstpos = decimalPosition(first)
	secondpos = decimalPosition(second)

	if (!isDecimal(first) && !isDecimal(second)) {
		if (first.length > second.length)
			lengthno = first.length;
		else
			lengthno = second.length;
		firstLastIndex = first.length - 1;
		secondLastIndex = second.length - 1;
		for (i = 0; i < lengthno; i++, firstLastIndex--, secondLastIndex--) {
			firstnohold = (firstLastIndex < 0) ? 0 : Number(first[firstLastIndex]);
			secondnohold = (secondLastIndex < 0) ? 0 : Number(second[secondLastIndex]);
			third[i] = (isNaN(third[i])) ? 0 : third[i];
			third[i] = Number(third[i]) + firstnohold + secondnohold;
			third[i] = String(third[i]);
			if (third[i].length == 2) {
				third[i + 1] = third[i].charAt(0);
				third[i] = third[i].charAt(1);
			}
		}
		third = third.reverse();
		third = third.join("");
		return third;
	} else if (isDecimal(first) || isDecimal(second)) {

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
		firstslice = (firstpos < 0) ? 0 : first.slice(firstpos + 1);
		secondslice = (secondpos < 0) ? 0 : second.slice(secondpos + 1);

		// console.log('firstslice', firstslice)
		// console.log('secondslice', secondslice)

		//? eg.
		//? 23.121, 22.0
		//? 22.121, 22.000
		//? 121, 000 in array
		while (firstslice.length > secondslice.length)
			secondslice.push("0");
		while (secondslice.length > firstslice.length)
			firstslice.push("0");

		//? eg.
		//? 23.121, 22.0
		//? 23, 22 in array
		firsthalf = first.slice(0, firstpos);
		secondhalf = second.slice(0, secondpos);

		// console.log('firsthalf', firsthalf)
		// console.log('secondhalf', secondhalf)

		firsthalf = firsthalf.join("");
		secondhalf = secondhalf.join("");
		firstslice = firstslice.join("");
		secondslice = secondslice.join("");

		thirdhalf = mcAddSection(firsthalf, secondhalf);
		thirdslice = mcAddSection(firstslice, secondslice);

		if (firstslice.length == secondslice.length &&
			thirdslice.length == firstslice.length) {

			thirdslice = thirdslice.split("");
			while (thirdslice[thirdslice.length - 1] == 0)
				thirdslice.pop();
			thirdslice = thirdslice.join("");
			third = thirdhalf.concat(".", thirdslice);
			return third;
		}
		else if (firstslice.length == secondslice.length &&
			thirdslice.length == firstslice.length + 1) {

			thirdhalf = mcAddSection(thirdhalf, thirdslice.charAt(0));
			thirdslice = thirdslice.split("");
			thirdslice.shift();
			while (thirdslice[thirdslice.length - 1] == 0)
				thirdslice.pop();
			thirdslice = thirdslice.join("");

			third = thirdhalf.concat(".", thirdslice);
			return third;
		}
	}
	return "Something went wrong";
}
