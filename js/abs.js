import split from './.internal/split.js'

const abs = (value) => {
  value = split(value)

  if (value[0] === "-") {
    return value.slice(1).join("")
  }

  return value.join("")
}

export default abs