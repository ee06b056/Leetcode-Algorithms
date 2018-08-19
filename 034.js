/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    if (nums.length == 0) {
        return ans;
    }
    let low = 0, high = nums.length;
    while (high > low) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target && nums[mid - 1] != target) {
            ans[0] = mid;
            break;
        } else if (nums[mid] >= target) {
            high = mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        }
    }
    low = 0, high = nums.length;
    while (high > low) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target && nums[mid + 1] != target) {
            ans[1] = mid;
            break;
        } else if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return ans;
};

let nums = [4,4,4,5], target = 4;
console.log(searchRange(nums, target));