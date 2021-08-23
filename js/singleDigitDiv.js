import isDecimal from './.internal/isDecimal.js'
import split from './.internal/split.js'
import { sub } from './sub.js'
import { mul } from './mul.js'
import { isLt } from './isLt.js'
import { isEq } from './isEq.js'
import divisibleFor from './divisibleFor.js'

/**
 * Dividend smaller than divisor
 * @param {string} dividend 
 * @param {string} divisor 
 * @returns quotient
 * @example
 *  input: 2/4, 5/6 
 */

const singleDigitDiv = (dividend, divisor) => {
  let quotient,
    quotientTemp,
    mulTemp

  dividend = split(dividend)
  divisor = split(divisor)

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      quotient = "0."
      quotient = split(quotient)

      for (let i = 0; i < 10; i++) {
        dividend = split(dividend)
        dividend.push("0")
        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        mulTemp = mul(divisor.join(""), quotientTemp)
        // console.log('dividend before sub', dividend)
        dividend = sub(dividend.join(""), mulTemp)
        quotient.push(quotientTemp)

        // console.log('quotientTemp, mulTemp, quotient', quotientTemp, mulTemp, quotient)
        // console.log('dividend', dividend)
        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")
    }
  } else { return null }
}

export default singleDigitDiv