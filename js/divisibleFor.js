import { isGt } from './isGt.js'
import { isGte } from './isGte.js'
import { mul } from './mul.js'

/**
 * 
 * @param {string, array} dividend 
 * @param {string, array} divisor 
 * @returns {string}
 * @example
 *  input: 20, 8 
 *  output: 2
 */

const divisibleFor = (dividend, divisor) => {
  let mulTemp
  if (isGte(dividend, divisor)) {
    for (let i = 1; i <= 10; i++) {
      i = String(i)
      // console.log('i', i)
      mulTemp = mul(divisor, i)
      // console.log('i', i)
      if (isGt(mulTemp, dividend)) {
        // console.log('i', i)
        // if (i === "10") {
        //   return "0"
        // }
        return String(--i);
      }
    }
  } else { return null }
}

export default divisibleFor