var assert = require('assert');
var { isMountainArray } = require('./main.js');

describe('Valid mountain array', () => {
  it('[2,1] should be false', () => {
    const arr = [2, 1];

    assert.strictEqual(isMountainArray(arr), false);
  });

  it('[3,5,5] should be false', () => {
    const arr = [3, 5, 5];

    assert.strictEqual(isMountainArray(arr), false);
  });

  it('[0,3,2,1] should be true', () => {
    const arr = [0, 3, 2, 1];

    assert.strictEqual(isMountainArray(arr), true);
  });

  it('[2,0,2] should be false', () => {
    const arr = [2, 0, 2];

    assert.strictEqual(isMountainArray(arr), false);
  });

  it('[0,1,2,3,4,5,6,7,8,9] should be false', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    assert.strictEqual(isMountainArray(arr), false);
  });
});
