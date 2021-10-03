import removeZeroFromLeft from '../js/.internal/removeZeroFromLeft.js'

// describe('removeZeroFromLeft', () => {
//   // test('should 002 -> ["2"]', () => {
//   //   expect(removeZeroFromLeft('002')).toStrictEqual(["2"])
//   // })

//   test('should 0003 -> "3"', () => {
//     expect(removeZeroFromLeft('0003')).toBe('3')
//   })
  
// })

describe('removeZeroFromLeft', () => {
  const array = [
    ["00233", "233"],
    ["0", "0"],
    // ["-000000", "0"],
  ]

  it.each(array)('isZero(%s)', (a, expected) => {
    expect(removeZeroFromLeft(a)).toBe(expected)
  })

})
