import { mcMulSection } from './mcMulSection.js'

export function mcMul() {
	var third = "1";

	for (var i = 0, j = arguments.length; i < j; i++) {
		// console.log('mcMul');
		third = mcMulSection(arguments[i], third);
		// console.log('arguments[i]', arguments[i])
		// console.log('third', third)
	}
	return third;
}
