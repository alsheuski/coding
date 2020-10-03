const assert = require('assert');
const { heightCheck } = require('./main');

describe('Height checker', () => {
  it('[1, 2] should return 0', () => {
    const arr = [1, 2];
    const expected = 0;

    assert.strictEqual(heightCheck(arr), expected);
  });

  it('[2, 1] should return 2', () => {
    const arr = [2, 1];
    const expected = 2;

    assert.strictEqual(heightCheck(arr), expected);
  });

  it('[1,1,4,2,1,3] should return 3', () => {
    const arr = [1, 1, 4, 2, 1, 3];
    const expected = 3;

    assert.strictEqual(heightCheck(arr), expected);
  });

  it('[5,1,2,3,4] should return 5', () => {
    const arr = [5, 1, 2, 3, 4];
    const expected = 5;

    assert.strictEqual(heightCheck(arr), expected);
  });

  it('[1,2,3,4,5] should return 0', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = 0;

    assert.strictEqual(heightCheck(arr), expected);
  });

  it('[10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7] should return 22', () => {
    const arr = [
      10,
      6,
      6,
      10,
      10,
      9,
      8,
      8,
      3,
      3,
      8,
      2,
      1,
      5,
      1,
      9,
      5,
      2,
      7,
      4,
      7,
      7,
    ];
    const expected = 22;

    assert.strictEqual(heightCheck(arr), expected);
  });
});
