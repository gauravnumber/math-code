import { mcSubSection } from './mcSubSection.js'

export function mcSub() {
	var third = mcSubSection(arguments[0], arguments[1]);

	for (var i = 2, j = arguments.length; i < j; i += 1) {
		third = mcSubSection(third, arguments[i]);
	}
	return third;
}
