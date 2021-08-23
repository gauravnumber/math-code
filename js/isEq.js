import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import isNegative from './.internal/isNegative.js'
import isDecimal from './.internal/isDecimal.js'
import decimalPosition from './.internal/decimalPosition.js'
import split from './.internal/split.js'

export function isEq(first, second) {
	var lengthno,
		i,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf, thirdslice;

	third = [];
	firstpos = secondpos = -1;

	first = split(first);
	second = split(second);

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

	if (isNegative(first) && isNegative(second)) {
		first = first.slice(1);
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = isEq(first, second);
		return third;
	} else if (!isNegative(first) && isNegative(second)) {
		return false;
	} else if (isNegative(first) && !isNegative(second)) {
		return false;
	}

	while (first[first.length - 1] == 0 && isDecimal(first)) {
		first.pop();
	}
	while (second[second.length - 1] == 0 && isDecimal(second)) {
		second.pop();
	}
	while (first[first.length - 1] == ".") {
		first.pop();
	}
	while (second[second.length - 1] == ".") {
		second.pop();
	}

	firstpos = decimalPosition(first)
	secondpos = decimalPosition(second)

	if (!isDecimal(first) && !isDecimal(second)) {
		if (first.length == second.length) {
			lengthno = first.length;
			for (i = 0; i < lengthno; i++) {
				if (first[i] != second[i]) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	} else if (isDecimal(first) && !isDecimal(second)) {
		return false;
	} else if (!isDecimal(first) && isDecimal(second)) {
		return false;
	} else if (isDecimal(first) && isDecimal(second)) {
		firstslice = first.slice(firstpos + 1);
		secondslice = second.slice(secondpos + 1);
		firsthalf = first.slice(0, firstpos);
		secondhalf = second.slice(0, secondpos);
		firsthalf = firsthalf.join("");
		secondhalf = secondhalf.join("");
		firstslice = firstslice.join("");
		secondslice = secondslice.join("");
		if (firstslice.length == secondslice.length) {
			thirdslice = isEq(firstslice, secondslice);
		} else {
			thirdslice = false;
		}
		thirdhalf = isEq(firsthalf, secondhalf);
		if (thirdhalf == thirdslice) {
			return true;
		} else {
			return false;
		}
	}
	return "Something went wrong";
}
