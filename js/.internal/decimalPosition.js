const decimalPosition = (value) => {
  if (Object.prototype.toString.call(value) == '[object Array]') {
    for (let i = 0, j = value.length; i < j; i++)
      if (value[i] == ".") {
        return i
        // return [true, i]
      }
  } else if (value && typeof value.valueOf() === 'string') {
    value = value.split("")
    return decimalPosition(value)
  }

  return -1
}

export default decimalPosition