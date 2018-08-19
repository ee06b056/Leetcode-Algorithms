/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, j = 0;
    while (i < nums.length && j < nums.length) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i;
};

