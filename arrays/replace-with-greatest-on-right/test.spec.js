var assert = require('assert')
var { replaceGreatest } = require('./main')

describe('Replace elements with greatest element on right side', () => {
  it('[0] should return [-1]', () => {
    const arr = [0]
    const expected = [-1]

    assert.strictEqual(replaceGreatest(arr).toString(), expected.toString())
  })

  it('[0, 0] should return [-0, 1]', () => {
    const arr = [0, 0]
    const expected = [0, -1]

    assert.strictEqual(replaceGreatest(arr).toString(), expected.toString())
  })

  it('[0, 1] should return [1, -1]', () => {
    const arr = [0, 1]
    const expected = [1, -1]

    assert.strictEqual(replaceGreatest(arr).toString(), expected.toString())
  })

  it('[5, 1] should return [1, -1]', () => {
    const arr = [5, 1]
    const expected = [1, -1]

    assert.strictEqual(replaceGreatest(arr).toString(), expected.toString())
  })

  it('[17,18,5,4,6,1] should return [18,6,6,6,1,-1]', () => {
    const arr = [17, 18, 5, 4, 6, 1]
    const expected = [18, 6, 6, 6, 1, -1]

    assert.strictEqual(replaceGreatest(arr).toString(), expected.toString())
  })
})
