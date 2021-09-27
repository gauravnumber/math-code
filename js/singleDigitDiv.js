import isDecimal from './.internal/isDecimal.js'
import removeZeroFromLeft from './.internal/removeZeroFromLeft.js'
import split from './.internal/split.js'
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
    dividendTemp

  dividend = split(dividend)
  divisor = split(divisor)
  defaultDecimalDigit = Number(defaultDecimalDigit)
  quotient = ""
  quotient = quotient.split("")
  dividendTemp = ""
  dividendTemp = dividendTemp.split("")
  // quotient = split(quotient)

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
      for (let i = 0; i < dividend.length; i++) {
        dividendTemp.push(dividend[i])
        // dividendTemp = dividend[i]
        // console.log('dividendTemp', dividendTemp)

        if (isGte(dividendTemp, divisor)) {
          quotientTemp = divisibleFor(dividendTemp, divisor)
          quotient.push(quotientTemp)
          mulTemp = mul(divisor, quotientTemp)
          dividendTemp = sub(dividendTemp, mulTemp)

          // console.log('mulTemp', mulTemp)
          // console.log('quotientTemp', quotientTemp)

          // quotient.push("0")

          // dividendTemp = ""
          // console.log('dividendTemp', dividendTemp)
          // console.log('typeof dividendTemp', typeof dividendTemp)
          dividendTemp = dividendTemp.split("")
        } else {
          // console.log('dividendTemp', dividendTemp)
          // console.log('dividend', dividend)
          // console.log('divisor', divisor)
          quotient.push("0")
          // dividendTemp.push("0")
        }
        // console.log('quotient', quotient)
      }


      quotient = removeZeroFromLeft(quotient)
      return quotient
      // return quotient.join("")
    }
  } else { return null }
}

export default singleDigitDiv