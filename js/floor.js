import decimalPosition from './.internal/decimalPosition.js'
import isDecimal from './isDecimal.js'
import isNegative from './.internal/isNegative.js'
import split from './.internal/split.js'

import { add } from './add.js'

const floor = (value) => {
  let valuehalf,
    valueTemp,
    decimalPos

  if (!isDecimal(value)) return value

  value = split(value)

  if (!isNegative(value)) { // Positive Number
    decimalPos = decimalPosition(value)
    valuehalf = value.slice(0, decimalPos)

    return valuehalf.join("")
  } else { // Negative Number
    valueTemp = value.slice(1)
    decimalPos = decimalPosition(valueTemp)
    valuehalf = valueTemp.slice(0, decimalPos)

    valuehalf = add(valuehalf, "1")

    return `-${valuehalf}`
  }
}

export default floor
