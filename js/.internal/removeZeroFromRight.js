import split from './split.js'

/**
 * 
 * @param {string, array} value 
 * @returns {string}
 */

const removeZeroFromRight = (value) => {
  value = split(value)

  while (value[value.length - 1] === "0")
    value.pop();

  if (value[value.length - 1] === ".")
    value.pop();

  value = value.join("");

  return value;

}

export default removeZeroFromRight