import isDecimal from './isDecimal.js'
import decimalPosition from './decimalPosition.js'
import split from './split.js'

const decimalShift = (value, shift) => {
  let valueDecimalPosition,
    decimalPositionTemp

  value = split(value)
  shift = Number(shift)

  if (!isDecimal(value) || !shift) {
    return value.join("")
  }
  
  if (shift) {
    valueDecimalPosition = decimalPosition(value)
    decimalPositionTemp = valueDecimalPosition + shift
    // shift += valueDecimalPosition
    value.splice(valueDecimalPosition, 1)
    value.splice(decimalPositionTemp, 0, ".")
    // value.splice(shift, 0, ".")

    if (decimalPositionTemp === 0) {
      value.unshift("0")
      return value.join("")
    }

    if (decimalPositionTemp < 0) {
      // console.log('decimalPositionTemp', decimalPositionTemp)
      let decimalPositionTempAbs = Math.abs(decimalPositionTemp)

      value.splice(decimalPosition(value), 1)

      // console.log('Math.abs(decimalPositionTemp)', Math.abs(decimalPositionTemp))

      for (let i = 0; i <= decimalPositionTempAbs; i++) {
        value.unshift("0")
        // console.log('value', value.join(""))
      }

      value.splice(1, 0, ".")
      // value.splice(Math.abs(decimalPositionTemp), 0, ".")

      return value.join("")
    }


    return value.join("")
  }
  return value
}

export default decimalShift