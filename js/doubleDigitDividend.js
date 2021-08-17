import isDecimal from './.internal/isDecimal.js'
import { isGt } from './isGt.js'
import { mul } from './mul.js'
import { sub } from './sub.js'

import singleDigitDiv from './singleDigitDiv.js'
import divisibleFor from './divisibleFor.js'

const doubleDigitDividend = (dividend, divisor) => {
  let quotient, mulTemp, remainder

  dividend = dividend.split("")
  divisor = divisor.split("")
  console.log('dividend, divisor', dividend, divisor)

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isGt(dividend, divisor)) {
      quotient = divisibleFor(dividend, divisor)
      mulTemp = mul(divisor, quotient)
      remainder = sub(dividend, mulTemp)
      // mul = divisor * quotient
      // remainder = dividend - mulTemp
      console.log('quotient, mulTemp, remainder', quotient, mulTemp, remainder)

      if (remainder === 0) {
        return quotient
      } else {
        //? Here is 10 times limit
        quotient = singleDigitDiv(remainder, divisor)
        return quotient
      }
    }
  } else { return null }
}

export default doubleDigitDividend
