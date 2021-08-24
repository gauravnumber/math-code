import { isLt } from './isLt.js'
import { isEq } from './isEq.js'

export function isLte(first, second) {
	if (isLt(first, second) || isEq(first, second)) {
		return true
	}

	return false
}
