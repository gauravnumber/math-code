import { isGt } from './isGt.js'
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
  if (isGt(dividend, divisor)) {
    for (let i = 1; i < 10; i++) {
      i = String(i)
      // console.log('i', i)
      mulTemp = mul(divisor, i)
      // console.log('i', i)
      if (isGt(mulTemp, dividend)) {
        // console.log('i', i)

        return String(--i);
      }
    }
  } else { return null }
}

export default divisibleFor