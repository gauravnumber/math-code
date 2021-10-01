import isDecimal from './isDecimal.js'
import decimalPosition from './decimalPosition.js'
import split from './split.js'

const decimalShift = (value, shift) => {
  let valueDecimalPosition,
    decimalPositionTemp,
    lastDecimalDigit,
    numberOfAddingZero

  value = split(value)
  shift = Number(shift)

  if (!shift) {
    return value.join("")
  }

  // if (!isDecimal(value) || !shift) {
  //   return value.join("")
  // }

  if (shift) {
    valueDecimalPosition = decimalPosition(value)
    decimalPositionTemp = valueDecimalPosition + shift

    if (decimalPositionTemp < value.length) {
      value.splice(valueDecimalPosition, 1)
      if (decimalPositionTemp !== value.length) {
        value.splice(decimalPositionTemp, 0, ".")
      }
    } else {
      valueDecimalPosition = decimalPosition(value)
      lastDecimalDigit = value.length - valueDecimalPosition
      numberOfAddingZero = shift - lastDecimalDigit + 1

      let numberOfAddingZeroAbs = Math.abs(numberOfAddingZero)

      value.splice(valueDecimalPosition, 1)

      for (let i = 0; i < numberOfAddingZeroAbs; i++) {
        value.push("0")
      }

      return value.join("")
    }

    if (decimalPositionTemp === 0) {
      value.unshift("0")
      return value.join("")
    }

    if (decimalPositionTemp < 0) {
      let decimalPositionTempAbs = Math.abs(decimalPositionTemp)
      value.splice(decimalPosition(value), 1)

      for (let i = 0; i <= decimalPositionTempAbs; i++) {
        value.unshift("0")
      }

      value.splice(1, 0, ".")
      return value.join("")
    }

    return value.join("")
  }

  return value
}

export default decimalShift