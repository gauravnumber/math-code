import removeZeroFromLeft from '../js/.internal/removeZeroFromLeft.js'

describe('removeZeroFromLeft', () => {
  test('should 002 -> ["2"]', () => {
    expect(removeZeroFromLeft('002')).toStrictEqual(["2"])
  })

  // test('should 0003 -> "3"', () => {
  //   expect(removeZeroFromLeft('0003')).toBe('3')
  // })
  
})
