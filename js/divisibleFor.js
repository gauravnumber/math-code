import { isGt } from './isGt.js'
import { mul } from './mul.js'

/**
 * 
 * @param {*} dividend 
 * @param {*} divisor 
 * @returns 
 * @example
 *  input: 20, 8 
 *  output: 2
 */

const divisibleFor = (dividend, divisor) => {
  let mulTemp
  if (isGt(dividend, divisor)) {
    for (let i = 1; i < 10; i++) {
      // i = String(i)
      mulTemp = mul(divisor, i)
      if (isGt(mulTemp, dividend)) {
        return String(--i);
      }
    }
  } else { return null }
}

export default divisibleFor