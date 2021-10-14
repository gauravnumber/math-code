import floor from './floor.js'

import { div } from './div.js'
import { mul } from './mul.js'
import { sub } from './sub.js'

const rem = (dividend, divisor) => {
  let quotient,
    mulTemp,
    subTemp
  

  console.log('dividend', dividend)
  console.log('divisor', divisor)

  quotient = div(dividend, divisor)
  console.log('quotient', quotient)
  quotient = floor(quotient)
  console.log('quotient', quotient)
  mulTemp = mul(divisor, quotient)
  subTemp = sub(dividend, mulTemp)

  return subTemp
}

export default rem