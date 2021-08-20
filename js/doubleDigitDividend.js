import isDecimal from './.internal/isDecimal.js'
import { isGt } from './isGt.js'
import { isEq } from './isEq.js'
import { mul } from './mul.js'
import { sub } from './sub.js'

import singleDigitDiv from './singleDigitDiv.js'
import divisibleFor from './divisibleFor.js'

const doubleDigitDividend = (dividend, divisor) => {
  let quotient, mulTemp, remainder

  dividend = dividend.split("")
  divisor = divisor.split("")

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isGt(dividend, divisor)) {
      quotient = divisibleFor(dividend.join(""), divisor.join(""))
      mulTemp = mul(divisor.join(""), quotient)
      remainder = sub(dividend.join(""), mulTemp)

      if (isEq(remainder, "0")) {
        return quotient
      } else {
        //? Here is 10 times limit
        remainder = remainder.split("")
        quotient = singleDigitDiv(remainder, divisor)
        return quotient
      }
    }
  } else { return null }
}

export default doubleDigitDividend
