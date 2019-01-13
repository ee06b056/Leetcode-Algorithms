/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length <= 2) return true;
    let modified = false;
    nums.unshift(-Infinity);
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (!modified && nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i - 1];
                modified = true;
                continue;
            } else if (!modified) {
                nums[i + 1] = nums[i];
                modified = true;
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
};

let nums = [4,2,3];