const isDecimal = (value) => {
  if (Object.prototype.toString.call(value) == '[object Array]') {
    for (let i = 0, j = value.length; i < j; i++)
      if (value[i] == ".") {
        return true
        // return [true, i]
      }
  } else if (value && typeof value.valueOf() === 'string') {
    value = value.split("")
    return isDecimal(value)
  }

  return false
  // return [false, -1]
}

export default isDecimal