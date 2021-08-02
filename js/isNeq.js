import { isEq } from './isEq.js'

export function isNeq(first, second) {
   return !isEq(first, second);
}
