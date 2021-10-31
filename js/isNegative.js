/**
 * 
 * @param {array, string} value 
 * @returns Boolean
 * @example
 *  input: "-12"
 *  output: true
 */

const isNegative = (value) => {
  if (Object.prototype.toString.call(value) == '[object Array]') {
    if (value[0] === "-") {
      return true
    }
  } else if (value && typeof value.valueOf() === 'string') {
    value = value.split("")
    return isNegative(value)
  }
  return false
}

export default isNegative