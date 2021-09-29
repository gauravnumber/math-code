import isDecimal from './isDecimal.js'
import decimalPosition from './decimalPosition.js'
import split from './split.js'

const decimalShift = (value, shift) => {
  let valueDecimalPosition

  value = split(value)
  shift = Number(shift)

  if (!isDecimal(value) || !shift) {
    return value
  }
  
  if (shift) {
    valueDecimalPosition = decimalPosition(value)
    shift += valueDecimalPosition
    value.splice(valueDecimalPosition, 1)
    value.splice(shift, 0, ".")
    return value.join("")
  }
  return value
}

export default decimalShift