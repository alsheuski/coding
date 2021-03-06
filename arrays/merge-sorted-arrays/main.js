/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *   Note:
 *     The number of elements initialized in nums1 and nums2 are m and n respectively.
 *     You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
 *
 * Input:
 *   nums1 = [1,2,3,0,0,0], m = 3
 *   nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 * Constraints:
 *   -10^9 <= nums1[i], nums2[i] <= 10^9
 *   nums1.length == m + n
 *   nums2.length == n
 */

exports.merge = (nums1, m, nums2, n) => {
  if (n === 0) {
    return;
  }

  nums1.splice(m, nums1.length);

  for (let i = 0; i <= nums1.length - 1; i++) {
    const a = nums1[i];
    const b = nums2[0];

    if (a >= b) {
      nums1.splice(i, 0, b);
      nums2.splice(0, 1);
    }
  }

  if (nums2.length > 0) {
    nums1.splice(nums1.length, 0, ...nums2);
  }
};
