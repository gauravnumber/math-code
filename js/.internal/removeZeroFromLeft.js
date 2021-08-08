/**
 * 
 * @param {string} convert into array call itself eg. "001"
 * @param {array} of numbers eg. ["0", "0", "1"]
 * @returns removing zero form left
 * @example 
 *  input: 001
 *  output: 1
 */

const removeZeroFromLeft = (value) => {
  if (Object.prototype.toString.call(value) == "[object Array]") {
    while (Number(value[0]) == 0) {
      value.shift();
    }
    return value
  } else if (value && typeof value.valueOf() === "string") {
    value = value.split("")
    return removeZeroFromLeft(value)
  }
}

export default removeZeroFromLeft