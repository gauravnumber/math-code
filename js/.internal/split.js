const split = (value) => {
  console.log('value', value)
  if (value && typeof value.valueOf() === 'string') {
    return value.split("")
  }
  return value;
}

export default split
