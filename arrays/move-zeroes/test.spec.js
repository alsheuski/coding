const assert = require('assert');
const { moveZeroes } = require('./main');

describe('Move Zeroes', () => {
  it('[0] should return [0]', () => {
    const arr = [0];
    const expected = [0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });

  it('[1, 0] should return [1, 0]', () => {
    const arr = [1, 0];
    const expected = [1, 0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });

  it('[0, 1, 0] should return [1, 0, 0]', () => {
    const arr = [0, 1, 0];
    const expected = [1, 0, 0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });

  it('[1, 0, 1] should return [1, 1, 0]', () => {
    const arr = [1, 0, 1];
    const expected = [1, 1, 0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });

  it('[0,1,0,3,12] should return [1,3,12,0,0]', () => {
    const arr = [0, 1, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });

  it('[0,-1,0,3,-12] should return [-1,3,-12,0,0]', () => {
    const arr = [0, -1, 0, 3, -12];
    const expected = [-1, 3, -12, 0, 0];

    moveZeroes(arr);

    assert.strictEqual(arr.toString(), expected.toString());
  });
});
