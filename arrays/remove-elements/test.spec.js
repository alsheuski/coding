var assert = require('assert')
var { removeElements } = require('./main')

describe('Remove elements from array', () => {
  it('[1,2] with val = 2 should return 1', () => {
    const nums = [1, 2]
    const val = 2
    const expected = 1

    const result = removeElements(nums, val)

    assert.strictEqual(result, expected)
  })

  it('[1,2,2,0,-6,3,3,2] with val = 2 should return 5', () => {
    const nums = [1, 2, 2, 0, -6, 3, 3, 2]
    const val = 2
    const expected = 5

    const result = removeElements(nums, val)

    assert.strictEqual(result, expected)
  })
})
