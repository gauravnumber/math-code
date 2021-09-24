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
    while (Number(value[0]) === 0) {
      value.shift();
    }

    // console.log('value', value)
    // return value.join("")
    return (typeof value[0] === 'undefined') ? "0" : value.join("")
  } else if (value && typeof value.valueOf() === "string") {
    //? -000000.00000
    // if (/-?0*\.?\0*/.test(value)) {
    //   // console.log("negative zero");
    //   return "0"
    // }
    value = value.split("")
    return removeZeroFromLeft(value)
  }
  
  // console.log(typeof value, value);
  // return ""
  // if value is number
  return value.toString()
}

export default removeZeroFromLeft