import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import isNegative from './.internal/isNegative.js'
import isDecimal from './.internal/isDecimal.js'
import decimalPosition from './.internal/decimalPosition.js'
import split from './.internal/split.js'



import { isEq } from './isEq.js'

export function isLt(first, second) {
	var lengthno,
		i,
		// firstLastIndex, secondLastIndex,
		// firstnohold, secondnohold,
		// decimalfirst, decimalsecond,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf
	//  thirdslice
	third = [];
	// decimalfirst = false;
	// decimalsecond = false;
	firstpos = secondpos = -1;
	// first = String( first );
	// second = String( second );
	// first = first.split( "" );
	// second = second.split( "" );

	first = split(first);
	second = split(second);

	first = removeZeroFromLeft(first).split("")
	second = removeZeroFromLeft(second).split("")

	// while( Number( first[0] ) == 0 )
	// 	first.shift();
	// while( Number( second[0] ) == 0 )
	// 	second.shift();
	// if( first[0] == "-"  && second[0] == "-" ) {
	if (isNegative(first) && isNegative(second)) {
		first = first.slice(1);
		second = second.slice(1);
		first = first.join("");
		second = second.join("");
		third = isLt(second, first);
		return third;
	} else if (!isNegative(first) && isNegative(second)) {
		// } else if (first[0] != "-" && second[0] == "-") {
		return false;
		// } else if (first[0] == "-" && second[0] != "-") {
	} else if (isNegative(first) && !isNegative(second)) {
		return true;
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
	while (first[first.length - 1] == 0 && isDecimal(first)) {
		first.pop();
	}
	while (second[second.length - 1] == 0 && isDecimal(second)) {
		second.pop();
	}
	while (first[first.length - 1] == ".") {
		first.pop();
		// decimalfirst = false;
	}
	while (second[second.length - 1] == ".") {
		second.pop();
		// decimalsecond = false;
	}

	firstpos = decimalPosition(first)
	secondpos = decimalPosition(second)

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

	// if (decimalfirst == false && decimalsecond == false) {
	if (!isDecimal(first) && !isDecimal(second)) {
		if (first.length == second.length) {
			lengthno = first.length;
			for (i = 0; i < lengthno; i++) {
				if (first[i] < second[i]) {
					return true;
				} else if (first[i] > second[i]) {
					return false;
				}
			}
			return false;
		} else if (first.length < second.length) {
			return true;
		} else if (first.length > second.length) {
			return false;
		}
		// } else if (decimalfirst == true && decimalsecond == false) {
	} else if (isDecimal(first) && !isDecimal(second)) {
		firsthalf = first.slice(0, firstpos);
		if (isEq(firsthalf, second)) {
			return false;
		} else {
			return isLt(firsthalf, second);
		}
		// } else if (decimalfirst == false && decimalsecond == true) {
	} else if (!isDecimal(first) && isDecimal(second)) {
		secondhalf = second.slice(0, secondpos);
		if (isEq(first, secondhalf)) {
			return true;
		} else {
			return isLt(first, secondhalf);
		}
		// } else if (decimalfirst == true && decimalsecond == true) {
	} else if (isDecimal(first) && isDecimal(second)) {
		firstslice = first.slice(firstpos + 1);
		secondslice = second.slice(secondpos + 1);
		firsthalf = first.slice(0, firstpos);
		secondhalf = second.slice(0, secondpos);
		if (isEq(firsthalf.join(""), secondhalf.join(""))) {
			while (firstslice.length > secondslice.length) {
				secondslice.push("0");
			}
			while (firstslice.length < secondslice.length) {
				firstslice.push("0");
			}
			return isLt(firstslice.join(""), secondslice.join(""));
		} else {
			thirdhalf = isLt(firsthalf.join(""), secondhalf.join(""));
			return thirdhalf;
		}
	}
	return "Something went wrong";
}
