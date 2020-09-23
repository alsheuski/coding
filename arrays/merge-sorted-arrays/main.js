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

var assert = require("assert");

function merge(nums1, m, nums2, n) {
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
}

describe("Merge sorted array", () => {
	it("[0] and [1] should be [1]", () => {
		const nums1 = [0];
		const nums2 = [1];
		const expected = [1];

		merge(nums1, 0, nums2, 1);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[1] and [0] should be [1]", () => {
		const nums1 = [1];
		const nums2 = [0];
		const expected = [1];

		merge(nums1, 1, nums2, 0);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[1,3] and [2,5] should be sorted as [1,2,3,5]", () => {
		const nums1 = [1, 3, 0, 0];
		const nums2 = [2, 5];
		const expected = [1, 2, 3, 5];

		merge(nums1, 2, nums2, 2);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[2,3,7] and [2,5,6] should be [2,2,3,5,6,7]", () => {
		const nums1 = [2, 3, 7, 0, 0, 0];
		const nums2 = [2, 5, 6];
		const expected = [2, 2, 3, 5, 6, 7];

		merge(nums1, 3, nums2, 3);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[1,2,3,0,0,0] and [2,5,6] should be [1,2,2,3,5,6]", () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		const nums2 = [2, 5, 6];
		const expected = [1, 2, 2, 3, 5, 6];

		merge(nums1, 3, nums2, 3);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[0,0,0,0,0] and [1,2,3,4,5] should be [1,2,3,4,5]", () => {
		const nums1 = [0, 0, 0, 0, 0];
		const nums2 = [1, 2, 3, 4, 5];
		const expected = [1, 2, 3, 4, 5];

		merge(nums1, 0, nums2, 5);

		assert.equal(nums1.toString(), expected.toString());
	});

	it("[-1,0,0,3,3,3,0,0,0] and [1,2,2] should be [-1,0,0,1,2,2,3,3,3]", () => {
		const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
		const nums2 = [1, 2, 2];
		const expected = [-1, 0, 0, 1, 2, 2, 3, 3, 3];

		merge(nums1, 6, nums2, 3);

		assert.equal(nums1.toString(), expected.toString());
	});
});
