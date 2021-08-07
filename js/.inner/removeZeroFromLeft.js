/**
 * 
 * @param {string} convert into array call itself
 * @param {array} remove zero from left
 * @returns removing zero form left
 * @example 
 *  input: 0003
 *  output: 3
 */

const removeZeroFromLeft = (value) => {
  if (Object.prototype.toString.call(value) == "[object Array]") {
    while (Number(value[0]) == 0) {
      value.shift();
    }
    return value
  } else if (str && typeof str.valueOf() === "string") {
    value = value.split("")
    return removeZeroFromLeft(value)
  }
}

export default removeZeroFromLeft