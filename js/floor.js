import decimalPosition from './.internal/decimalPosition.js'
import isDecimal from './.internal/isDecimal.js'
import isNegative from './.internal/isNegative.js'
import split from './.internal/split.js'

const floor = (value) => {
  let valuehalf,
    decimalPos

  if (!isDecimal(value)) return value

  value = split(value)

  if (!isNegative(value)) {
    decimalPos = decimalPosition(value)
    valuehalf = value.slice(0, decimalPos)

    return valuehalf.join("")
  }
  return value
}

export default floor
