/**
 * Given number is zero?
 * @param {string} value "-0000.000"
 * @returns Boolean
 * @example
 *  input: -0.0
 *  output: true
 */

const isZero = (value) => {
  if (/^-?0*\.?0*$/.test(value)) {
    return true
  }

  return false
}

export default isZero