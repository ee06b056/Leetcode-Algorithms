/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let  i = 1, j = 1;
    while (i < nums.length && j < nums.length) {
        if (nums[j] != nums[i - 1]) {
            nums[i] = nums[j];
            j++;
            i++;
        } else {
            j++;
        }
    }
    return i;
};

console.log(removeDuplicates([1]));