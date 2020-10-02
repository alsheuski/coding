/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 *   Input: [0,1,0,3,12]
 *   Output: [1,3,12,0,0]
 *
 * Note:
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 *
 * @param {*} arr - array of integers
 */

exports.moveZeroes = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[j] != 0) {
      j++;
    }

    if (arr[i + 1] && arr[i + 1] != 0 && arr[j] === 0) {
      arr[j] = arr[i + 1];
      arr[i + 1] = 0;
      j++;
    }
  }
};
