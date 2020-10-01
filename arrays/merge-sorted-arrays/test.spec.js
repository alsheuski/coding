var assert = require('assert')
var { merge } = require('./main')

describe('Merge sorted array', () => {
  it('[0] and [1] should be [1]', () => {
    const nums1 = [0]
    const nums2 = [1]
    const expected = [1]

    merge(nums1, 0, nums2, 1)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[1] and [0] should be [1]', () => {
    const nums1 = [1]
    const nums2 = [0]
    const expected = [1]

    merge(nums1, 1, nums2, 0)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[1,3] and [2,5] should be sorted as [1,2,3,5]', () => {
    const nums1 = [1, 3, 0, 0]
    const nums2 = [2, 5]
    const expected = [1, 2, 3, 5]

    merge(nums1, 2, nums2, 2)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[2,3,7] and [2,5,6] should be [2,2,3,5,6,7]', () => {
    const nums1 = [2, 3, 7, 0, 0, 0]
    const nums2 = [2, 5, 6]
    const expected = [2, 2, 3, 5, 6, 7]

    merge(nums1, 3, nums2, 3)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[1,2,3,0,0,0] and [2,5,6] should be [1,2,2,3,5,6]', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    const expected = [1, 2, 2, 3, 5, 6]

    merge(nums1, 3, nums2, 3)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[0,0,0,0,0] and [1,2,3,4,5] should be [1,2,3,4,5]', () => {
    const nums1 = [0, 0, 0, 0, 0]
    const nums2 = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]

    merge(nums1, 0, nums2, 5)

    assert.strictEqual(nums1.toString(), expected.toString())
  })

  it('[-1,0,0,3,3,3,0,0,0] and [1,2,2] should be [-1,0,0,1,2,2,3,3,3]', () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
    const nums2 = [1, 2, 2]
    const expected = [-1, 0, 0, 1, 2, 2, 3, 3, 3]

    merge(nums1, 6, nums2, 3)

    assert.strictEqual(nums1.toString(), expected.toString())
  })
})
