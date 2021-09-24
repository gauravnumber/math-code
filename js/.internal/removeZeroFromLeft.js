/**
 * 
 * @param {string} convert into array call itself eg. "001"
 * @param {array} of numbers eg. ["0", "0", "1"]
 * @returns removing zero form left
 * @example 
 *  input: 001
 *  output: "1"
 */

const removeZeroFromLeft = (value) => {
  // console.log('value', value)
  if (Object.prototype.toString.call(value) == "[object Array]") {
    while (Number(value[0]) == 0) {
      value.shift();
    }

    // console.log('value', value)
    // return value.join("")
    return (typeof value[0] === 'undefined') ? "0" : value.join("")
  } else if (value && typeof value.valueOf() === "string") {
    value = value.split("")
    return removeZeroFromLeft(value)
  }
  
  console.log(typeof value);
  return ""
}

export default removeZeroFromLeft