const isNumber = (value) => {
  // const pattern = new RegExp("^-?(\d*)(\.)?(\d*)?$", "g")
  const pattern = /^-?(\d*)(\.)?(\d*)?$/gm
  if (pattern.test(value)) {
    return true
  }
  return false
}

export default isNumber
