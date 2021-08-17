import { isGt } from './isGt.js'

const divisibleFor = (dividend, divisor) => {
  let mul
  if (isGt(dividend, divisor)) {
    for (let i = 1; i < 10; i++) {
      mul = divisor * i
      if (mul > dividend) {
        return --i;
      }
    }
  } else { return null }
}

export default divisibleFor