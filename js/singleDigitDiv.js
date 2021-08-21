import isDecimal from './.internal/isDecimal.js'
import { isLt } from './isLt.js'
import doubleDigitDividend from './doubleDigitDividend.js'

const singleDigitDiv = (dividend, divisor) => {
  // dividend = dividend.split("")
  // divisor = divisor.split("")
  let quotient, q1

  // console.log('dividend, typeof dividend', dividend, typeof dividend)

  // if (Object.prototype.toString.call(dividend) != '[object Array]') {
  //   dividend = dividend.split("")
  // }

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

      // return quotient
    }
  } else { return null }
}

export default singleDigitDiv