import isDecimal from './.internal/isDecimal.js'
import { isLt } from './isLt.js'
import doubleDigitDividend from './doubleDigitDividend.js'

/**
 * Dividend smaller than divisor
 * @param {*} dividend 
 * @param {*} divisor 
 * @returns quotient
 * @example
 *  input: 2/4, 5/6 
 */

const singleDigitDiv = (dividend, divisor) => {
  let quotient, q1

  if (dividend && typeof dividend.valueOf() === 'string') {
    dividend = dividend.split("")
  }

  if (divisor && typeof divisor.valueOf() === 'string') {
    divisor = divisor.split("")
  }

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      quotient = "0."
      dividend.push("0")

      q1 = doubleDigitDividend(dividend.join(""), divisor.join(""))

      console.log('quotient, q1', quotient, q1)

      return quotient.concat(q1)
    }
  } else { return null }
}

export default singleDigitDiv