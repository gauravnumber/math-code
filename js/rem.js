import isNegative from './.internal/isNegative.js'
import floor from './floor.js'
import { isGt } from './isGt.js'
import { isLt } from './isLt.js'

import { div } from './div.js'
import { mul } from './mul.js'
import { sub } from './sub.js'

const rem = (dividend, divisor) => {
  let quotient,
    mulTemp,
    subTemp,
    dividendSlice,
    divisorSlice


  // console.log('dividend', dividend)
  // console.log('divisor', divisor)

  if (isNegative(dividend)) {
    dividendSlice = dividend.slice(1)

    let remTemp = rem(dividendSlice, divisor)
    return `-${remTemp}`
  }

  if (isNegative(divisor)) {
    divisorSlice = divisor.slice(1)
    return rem(dividend, divisorSlice)
  }

  if (isGt(dividend, divisor)) {
    quotient = div(dividend, divisor)
    quotient = floor(quotient)
    mulTemp = mul(divisor, quotient)
    subTemp = sub(dividend, mulTemp)

    return subTemp
  }

  if (isLt(dividend, divisor)) {
    return dividend
  }

  // if dividend and divisor is equal
  return "0"
}

export default rem