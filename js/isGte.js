import { isGt } from './isGt.js'
import { isEq } from './isEq.js'

export function isGte(first, second) {
	if (isGt(first, second) || isEq(first, second)) {
		return true
	}

	return false
}
