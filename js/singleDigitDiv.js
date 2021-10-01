import decimalPosition from './.internal/decimalPosition.js'
import decimalShift from './.internal/decimalShift.js'
import isDecimal from './.internal/isDecimal.js'
import isNegative from './.internal/isNegative.js'
import isZero from './.internal/isZero.js'
import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import split from './.internal/split.js'
import { add } from './add.js'
import { sub } from './sub.js'
import { mul } from './mul.js'
import { isLt } from './isLt.js'
import { isGt } from './isGt.js'
import { isGte } from './isGte.js'
import { isEq } from './isEq.js'
import divisibleFor from './divisibleFor.js'

/**
 * Dividend smaller than divisor
 * @param {string} dividend 
 * @param {string} divisor 
 * @returns quotient
 * @example
 *  input: 2/4, 5/6 
 */

const singleDigitDiv = (dividend, divisor, defaultDecimalDigit = 10) => {
  let quotient,
    quotientTemp,
    mulTemp,
    dividendTemp,
    dividendDecimalPosition,
    divisorDecimalPosition,
    dividendLastDecimalPosition,
    divisorLastDecimalPosition,
    lastDecimalPositionTemp

  dividend = split(dividend)
  divisor = split(divisor)
  defaultDecimalDigit = Number(defaultDecimalDigit)
  quotient = ""
  quotient = quotient.split("")
  dividendTemp = ""
  dividendTemp = dividendTemp.split("")

  if (isZero(dividend)) {
    return "0"
  }

  if (isEq(dividend, divisor)) {
    return "1"
  }

  if (isNegative(dividend) && isNegative(divisor)) {
    dividend = dividend.slice(1);
    divisor = divisor.slice(1);
    quotientTemp = singleDigitDiv(dividend, divisor);

    return quotientTemp
  }
  else if (!isNegative(dividend) && isNegative(divisor)) {
    divisor = divisor.slice(1)
    quotientTemp = singleDigitDiv(dividend, divisor)
    quotientTemp = quotientTemp.split("");
    quotientTemp.unshift("-");
    quotientTemp = quotientTemp.join("");

    return quotientTemp
  }
  else if (isNegative(dividend) && !isNegative(divisor)) {
    dividend = dividend.slice(1)
    quotientTemp = singleDigitDiv(dividend, divisor)
    quotientTemp = quotientTemp.split("");
    quotientTemp.unshift("-");
    quotientTemp = quotientTemp.join("");

    return quotientTemp
  }

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      // @example 1/2, 3/9, 4/8, 23/44, 566/899, 1234/5555, 78989/98999
      quotient = "0."
      quotient = split(quotient)

      // console.log('dividend', dividend)
      for (let i = 0; i < defaultDecimalDigit; i++) {
        dividend = split(dividend)
        // console.log('dividend', dividend)
        dividend.push("0")
        quotientTemp = divisibleFor(dividend, divisor)
        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        quotient.push(quotientTemp)

        // console.log('quotient.join("")', quotient.join(""))
        // console.log('dividend', dividend)
        // console.log('quotientTemp', quotientTemp)
        if (quotientTemp === null) {
          quotient.push("0")
        }

        // if (i >= 2) {
        //   quotient.push("0")
        // }

        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")
    } else if (isLt(dividend, divisor)) {
      quotient = "0."
      quotient = split(quotient)

      for (let i = 0; i < defaultDecimalDigit; i++) {
        // dividend: 1  
        // dividend: 10 
        // dividend: 100 
        for (let i = 1; isLt(dividend, divisor); i++) {
          dividend.push("0")

          if (i >= 2) {
            quotient.push("0")
          }
        }

        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))

        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        quotient.push(quotientTemp)
        dividend = split(dividend)

        if (isZero(dividend)) {
          return quotient.join("")
        }
      }

      return quotient.slice(0, defaultDecimalDigit + 2).join("")  //? "0" and "." it's 2; 10 decimal digit
    } else if (isGt(dividend, divisor) && dividend.length === divisor.length) {
      // @example 9/2, 8/2, 8/3, 355/113, 40/13
      quotient = ""
      quotient = quotient.split()

      for (let i = 1; i <= defaultDecimalDigit + 1; i++) {
        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        // mulTemp = mul(divisor.join(""), quotientTemp.toString())
        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        dividend = split(dividend)

        dividend.push("0")


        quotient.push(quotientTemp === null ? "0" : quotientTemp)

        // for (let i = 1; isLt(dividend, divisor); i++) {
        //   dividend.push("0")
        //   if (i >= 2) {
        //     quotient.push("0")
        //   }
        // }

        if (!isDecimal(quotient)) {
          quotient.push(".")
        }

        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")
    } else if (isGt(dividend, divisor) && (dividend.length === divisor.length || dividend.length === divisor.length + 1)) {
      // @example 22/7, 123/23, 1234/123, 98987/6754
      quotient = ""
      quotient = quotient.split()

      for (let i = 1; i <= defaultDecimalDigit + 1; i++) {
        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        dividend = split(dividend)
        quotient.push(quotientTemp)

        for (let i = 1; isLt(dividend, divisor); i++) {
          dividend.push("0")
          if (i >= 2) {
            quotient.push("0")
          }
        }

        if (!isDecimal(quotient)) {
          quotient.push(".")
        }

        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")
    } else if (isGt(dividend, divisor)) {
      for (let i = 0; i < dividend.length; i++) {
        dividendTemp.push(dividend[i])

        if (isGte(dividendTemp, divisor)) {
          quotientTemp = divisibleFor(dividendTemp, divisor)
          quotient.push(quotientTemp)
          mulTemp = mul(divisor, quotientTemp)
          dividendTemp = sub(dividendTemp, mulTemp)
          dividendTemp = dividendTemp.split("")
        }
        else {
          quotient.push("0")
        }

        if (i === dividend.length - 1) {
          quotientTemp = singleDigitDiv(dividendTemp, divisor, defaultDecimalDigit)

          if (isZero(quotientTemp)) {
            quotient = removeZeroFromLeft(quotient).split("")
            return quotient.join("")
          }
          quotient.push(".")
          quotient = add(quotient, quotientTemp)

          return quotient
        }

      }

      quotient = removeZeroFromLeft(quotient)
      return quotient
    }
  } else if (isDecimal(dividend) && isDecimal(divisor)) {
    dividendDecimalPosition = decimalPosition(dividend)
    divisorDecimalPosition = decimalPosition(divisor)

    dividendLastDecimalPosition = dividend.length - dividendDecimalPosition - 1
    divisorLastDecimalPosition = divisor.length - divisorDecimalPosition - 1

    if (dividendLastDecimalPosition === divisorLastDecimalPosition) {
      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)

      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)

      return quotientTemp
    } else if (divisorLastDecimalPosition > dividendLastDecimalPosition) {
      lastDecimalPositionTemp = divisorLastDecimalPosition - dividendLastDecimalPosition

      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)
      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit + 1)

      quotientTemp = decimalShift(quotientTemp, divisorLastDecimalPosition - dividendLastDecimalPosition)

      return quotientTemp
    } else {
      lastDecimalPositionTemp = dividendLastDecimalPosition - divisorLastDecimalPosition
      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)

      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)
      quotientTemp = decimalShift(quotientTemp, -lastDecimalPositionTemp)

      return quotientTemp
    }
  } else if (isDecimal(dividend) && !isDecimal(divisor)) {
    dividendDecimalPosition = decimalPosition(dividend)
    dividendLastDecimalPosition = dividend.length - dividendDecimalPosition - 1
    dividend.splice(dividendDecimalPosition, 1)
    quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)
    quotientTemp = decimalShift(quotientTemp, -dividendLastDecimalPosition)

    return quotientTemp

  } else if (!isDecimal(dividend) && isDecimal(divisor)) {
    divisorDecimalPosition = decimalPosition(divisor)
    divisorLastDecimalPosition = divisor.length - divisorDecimalPosition - 1
    divisor.splice(divisorDecimalPosition, 1)
    quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)
    quotientTemp = decimalShift(quotientTemp, divisorLastDecimalPosition)

    return quotientTemp
  }
  else { return null }
}

export default singleDigitDiv