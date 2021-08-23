import isDecimal from './.internal/isDecimal.js'
import split from './.internal/split.js'
import { sub } from './sub.js'
import { mul } from './mul.js'
import { isLt } from './isLt.js'
import { isEq } from './isEq.js'
// import doubleDigitDividend from './doubleDigitDividend.js'
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
    // q1,
    quotientTemp,
    mulTemp

  if (dividend && typeof dividend.valueOf() === 'string') {
    dividend = dividend.split("")
  }

  if (divisor && typeof divisor.valueOf() === 'string') {
    divisor = divisor.split("")
  }

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

        // dividend = split(dividend)
        // dividend.push("0")
        // quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        // mulTemp = mul(dividend.join(""), quotientTemp)
        // dividend = sub(dividend.join(""), mulTemp)
        // quotient.push(quotientTemp)

        // if (isEq(dividend.join(""), "0")) {
        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")

      // q1 = doubleDigitDividend(dividend.join(""), divisor.join(""))

      // console.log('quotient, q1', quotient, q1)

      // return quotient.concat(q1)
    }
  } else { return null }
}

export default singleDigitDiv