import isDecimal from './.internal/isDecimal.js'
import { isLt } from './isLt.js'
import doubleDigitDividend from './doubleDigitDividend.js'

const singleDigitDiv = (dividend, divisor) => {
  // dividend = dividend.split("")
  // divisor = divisor.split("")
  let quotient, q1

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      quotient = "0."
      dividend.push("0")

      q1 = doubleDigitDividend(dividend, divisor)
      quotient.concat(q1)
      return quotient
    }
  } else { return null }
}

export default singleDigitDiv