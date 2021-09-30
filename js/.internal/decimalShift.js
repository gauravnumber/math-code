import isDecimal from './isDecimal.js'
import decimalPosition from './decimalPosition.js'
import split from './split.js'

import { mul } from '../mul.js'
import { pow } from '../pow.js'

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
    console.log('decimalPositionTemp', decimalPositionTemp)

    if (decimalPositionTemp <= value.length) {
      value.splice(decimalPositionTemp, 0, ".")
      
    }
    // value.splice(shift, 0, ".")

    if (decimalPositionTemp === 0) {
      value.splice(decimalPositionTemp, 0, ".")

      value.unshift("0")
      return value.join("")
    }

    
    if (decimalPositionTemp < 0) {
      // console.log('value', value)
      let decimalPositionTempAbs = Math.abs(decimalPositionTemp)

      // value.splice(decimalPositionTemp, 0, ".")

      value.splice(decimalPosition(value), 1)

      for (let i = 0; i <= decimalPositionTempAbs; i++) {
        value.unshift("0")
      }

      value.splice(1, 0, ".")
      return value.join("")
    }

    // console.log('decimalPositionTemp', decimalPositionTemp)
    // value.splice(shift, 0, ".")
    console.log('value', value)

    // value = mul(value, "100")
    // console.log('value', value)
    // value = mul(value, pow("10", shift))
    // console.log('pow("10", shift)', pow("10", shift))

    // return value
    return value.join("")
  }
  return value
}

export default decimalShift