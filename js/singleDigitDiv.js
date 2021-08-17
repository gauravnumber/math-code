import isDecimal from './.internal/isDecimal.js'
import { isLt } from './isLt.js'

const singleDigitDiv = (dividend, divisor) => {
  dividend = dividend.split("")
  divisor = divisor.split("")

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      quotient = "0."
      dividend.push("0")

      q1 = doubleDigitDividend(dividend, divisor)
      q.concat(q1)
      return q
    }
  }
}

export default singleDigitDiv