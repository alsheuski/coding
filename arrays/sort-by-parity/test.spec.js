const assert = require('assert');
const { sortByParity } = require('./main');

describe('Sort array by parity', () => {
  it('[2,3] should return [2,3]', () => {
    const arr = [2, 3];
    const expected = [2, 3];

    assert.strictEqual(sortByParity(arr).toString(), expected.toString());
  });

  it('[3,2] should return [2,3]', () => {
    const arr = [3, 2];
    const expected = [2, 3];

    assert.strictEqual(sortByParity(arr).toString(), expected.toString());
  });

  it('[3,1,2,4] should return [2,4,3,1]', () => {
    const arr = [3, 1, 2, 4];
    const expected = [2, 4, 3, 1];

    assert.strictEqual(sortByParity(arr).toString(), expected.toString());
  });

  it('[3, 1, 2, 4, 5, 7, 8, 10] should return [2, 4, 8, 10, 5, 7, 3, 1]', () => {
    const arr = [3, 1, 2, 4, 5, 7, 8, 10];
    const expected = [2, 4, 8, 10, 5, 7, 3, 1];

    assert.strictEqual(sortByParity(arr).toString(), expected.toString());
  });
});
