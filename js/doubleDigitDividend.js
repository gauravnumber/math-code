const doubleDigitDividend = (dividend, divisor) => {
  let quotient

  dividend = dividend.split("")
  divisor = divisor.split("")

  if (!isDecimal(dividend) && !isDecimal(divisor)) {
    if (isGt(divisor, divisor)) {
      quotient = divisibleFor(dividend, divisor)
      mul = divisor * quotient
      remainder = dividend - mul

      if (rem === 0) {
        return quotient
      } else {
        //? Here is 10 times limit
        q = singleDigitDiv(remainder, divisor)
      }
    }
  }
}

export default doubleDigitDividend
