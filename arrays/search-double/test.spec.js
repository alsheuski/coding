var assert = require('assert')
var { checkIfExist } = require('./main')

describe('Check if N and its double exist', () => {
  it('[0,0] should return true', () => {
    const arr = [0, 0]

    assert.strictEqual(checkIfExist(arr), true)
  })

  it('[-2,0,10,-19,4,6,-8] should return false', () => {
    const arr = [-2, 0, 10, -19, 4, 6, -8]

    assert.strictEqual(checkIfExist(arr), false)
  })

  it('[-20,8,-6,-14,0,-19,14,4] should return true', () => {
    const arr = [-20, 8, -6, -14, 0, -19, 14, 4]

    assert.strictEqual(checkIfExist(arr), true)
  })
})
