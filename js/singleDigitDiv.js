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
// import { pow } from './pow.js'
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
  // quotient = split(quotient)

  if (isZero(dividend)) {
    return "0"
  }

  if (isEq(dividend, divisor)) {
    return "1"
  }

  if (isNegative(dividend) && isNegative(divisor)) {
    dividend = dividend.slice(1);
    divisor = divisor.slice(1);
    // dividend = dividend.join("");
    // divisor = divisor.join("");
    quotientTemp = singleDigitDiv(dividend, divisor);
    // quotientTemp = quotientTemp.split("");
    // quotientTemp.unshift("-");
    // quotientTemp = quotientTemp.join("");
    return quotientTemp
    // console.log("hi");
    // return "hi"
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
  // console.log('dividend', dividend)
  // console.log('divisor', divisor)

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isLt(dividend, divisor) && dividend.length === divisor.length) {
      // @example 1/2, 3/9, 4/8, 23/44, 566/899, 1234/5555, 78989/98999
      quotient = "0."
      quotient = split(quotient)

      for (let i = 0; i < defaultDecimalDigit; i++) {
        dividend = split(dividend)
        dividend.push("0")
        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        quotient.push(quotientTemp)

        if (isEq(dividend, "0")) {
          break;
        }
      }

      return quotient.join("")
    } else if (isLt(dividend, divisor)) {
      quotient = "0."
      quotient = split(quotient)

      // console.log('dividend', dividend)
      // console.log('divisor', divisor)

      for (let i = 0; i < defaultDecimalDigit; i++) {
        // console.log('dividend', dividend)
        // console.log('divisor', divisor)
        // console.log('isLt(dividend, divisor)', isLt(dividend, divisor))
        // dividend: 1  
        // dividend: 10 
        // dividend: 100 
        for (let i = 1; isLt(dividend, divisor); i++) {
          // console.log('dividend', dividend)
          // console.log('divisor', divisor)
          // // console.log('quotient', quotient)

          // dividend.push("asdgf")
          dividend.push("0")
          // dividend.push("0")

          // if (dividend.length === 0) {
          //   return "hey buddy"
          // }
          // dividend = mul(dividend, "10").split("")
          if (i >= 2) {
            quotient.push("0")
          }

          // console.log('dividend', dividend)
          // console.log('divisor', divisor)
          // console.log('quotient', quotient)
          // return "by"
        }

        // console.log('dividend', dividend)
        // console.log('divisor', divisor)
        // console.log('quotient', quotient)

        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))

        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        quotient.push(quotientTemp)
        dividend = split(dividend)

        if (isZero(dividend)) {
          return quotient.join("")
        }

        // console.log('dividend', dividend)
        // console.log('divisor', divisor)
        // console.log('quotient', quotient)

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

      // console.log('dividend', dividend)
      // console.log('divisor', divisor)

      quotient = ""
      quotient = quotient.split()

      for (let i = 1; i <= defaultDecimalDigit + 1; i++) {
        quotientTemp = divisibleFor(dividend.join(""), divisor.join(""))
        // mulTemp = mul(divisor.join(""), quotientTemp.toString())
        mulTemp = mul(divisor.join(""), quotientTemp)
        dividend = sub(dividend.join(""), mulTemp)
        dividend = split(dividend)

        // dividend.push("0")
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
      // console.log('dividend', dividend)
      // console.log('divisor', divisor)

      // console.log('dividend', dividend)
      for (let i = 0; i < dividend.length; i++) {
        // console.log('dividend', dividend)
        // console.log('divisor', divisor)

        dividendTemp.push(dividend[i])
        // console.log('dividend', dividend)

        // console.log('i, dividend.length', i, dividend.length)
        if (isGte(dividendTemp, divisor)) {
          // console.log('dividend', dividend)
          // console.log('divisor', divisor)

          quotientTemp = divisibleFor(dividendTemp, divisor)
          quotient.push(quotientTemp)
          mulTemp = mul(divisor, quotientTemp)
          dividendTemp = sub(dividendTemp, mulTemp)
          dividendTemp = dividendTemp.split("")
        }
        // else if (i === dividend.length - 1) {
        //   console.log('quotient', quotient)
        //   quotient.push(".")
        //   quotientTemp = singleDigitDiv(dividendTemp, divisor)
        //   quotient = add(quotient, quotientTemp)
        //   return quotient
        // }
        else {
          quotient.push("0")
        }

        if (i === dividend.length - 1) {
          // console.log('quotient', quotient)
          // console.log('dividend', dividend)
          // console.log('divisor', divisor)

          quotientTemp = singleDigitDiv(dividendTemp, divisor, defaultDecimalDigit)
          // console.log('dividend', dividend)
          // console.log('divisor', divisor)

          // console.log('quotientTemp', quotientTemp)
          if (isZero(quotientTemp)) {
            quotient = removeZeroFromLeft(quotient).split("")
            return quotient.join("")
          }
          quotient.push(".")
          quotient = add(quotient, quotientTemp)
          // quotient = removeZeroFromLeft(quotient)
          return quotient
        }

      }

      quotient = removeZeroFromLeft(quotient)
      return quotient
      // return quotient.join("")
    }
    // else if (isEq(dividend, divisor)) {
    //   return "1"
    // }
  } else if (isDecimal(dividend) && isDecimal(divisor)) {
    dividendDecimalPosition = decimalPosition(dividend)
    divisorDecimalPosition = decimalPosition(divisor)

    dividendLastDecimalPosition = dividend.length - decimalPosition(dividend)
    divisorLastDecimalPosition = divisor.length - decimalPosition(divisor)

    // console.log('dividendLastDecimalPosition', dividendLastDecimalPosition)
    // console.log('divisorLastDecimalPosition', divisorLastDecimalPosition)

    if (dividendLastDecimalPosition === divisorLastDecimalPosition) {
      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)
      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)
      return quotientTemp
    } else if (divisorLastDecimalPosition > dividendLastDecimalPosition) {
      lastDecimalPositionTemp = divisorLastDecimalPosition - dividendLastDecimalPosition
      // console.log('lastDecimalPositionTemp', lastDecimalPositionTemp)
      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)
      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit + 1)

      // console.log('lastDecimalPositionTemp', lastDecimalPositionTemp)
      quotientTemp = decimalShift(quotientTemp, lastDecimalPositionTemp)
      // quotientTemp = mul(quotientTemp, pow("10", lastDecimalPositionTemp))
      return quotientTemp
    } else {
      lastDecimalPositionTemp = dividendLastDecimalPosition - divisorLastDecimalPosition
      // console.log('lastDecimalPositionTemp', lastDecimalPositionTemp)
      dividend.splice(dividendDecimalPosition, 1)
      divisor.splice(divisorDecimalPosition, 1)

      // console.log('dividend', dividend)
      // console.log('divisor', divisor)
      quotientTemp = singleDigitDiv(dividend, divisor, defaultDecimalDigit)
      // console.log('quotientTemp', quotientTemp)

      quotientTemp = decimalShift(quotientTemp, -lastDecimalPositionTemp)

      // console.log('quotientTemp', quotientTemp)
      
      return quotientTemp

      // quotientTemp = singleDigitDiv(quotientTemp, pow("10", lastDecimalPositionTemp))
      // return quotientTemp
      // return 'helluo'
    }

    // console.log('dividendDecimalPosition', dividendDecimalPosition)
    // console.log('divisorDecimalPosition', divisorDecimalPosition)

    // dividend.splice(dividendDecimalPosition, 1)
    // divisor.splice(divisorDecimalPosition, 1)

    // console.log('dividend', dividend)
    // console.log('divisor', divisor)

    // quotientTemp = singleDigitDiv(dividend, divisor)


    // console.log('quotientTemp', quotientTemp)
    // // return dividendDecimalPosition
    // return "end"
  }
  else { return null }
}

export default singleDigitDiv