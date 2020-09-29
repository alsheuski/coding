var assert = require('assert')

var checkIfExist = function (arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    if (arr[i] === 0) {
      continue
    }

    if (arr.indexOf(arr[i] + arr[i]) !== -1 || arr.indexOf(arr[i] / 2) !== -1) {
      return true
    }
  }

  return false
}

checkIfExist([-20, 8, -6, -14, 0, -19, 14, 4])

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
