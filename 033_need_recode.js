/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 1) {
        return (nums[0] == target) ? 0 : -1;
    }
    let low = 0, high = nums.length;
    while (high > low) {
        let mid = Math.floor((low + high) / 2);
        if (target == nums[low]) {
            return low;
        }
        if (target > nums[low] && nums[mid] < nums[low]) {
            nums[mid] = Infinity;
        } else if (target < nums[low] && nums[mid] > nums[low]) {
            nums[mid] = -Infinity;
        }
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

let nums = [4,1], target = 4;
console.log(search(nums, target));