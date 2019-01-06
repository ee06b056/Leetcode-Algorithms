/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = (start + end) / 2;
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
            return nums[mid];
        } else if (nums[mid] == nums[mid + 1]) {
            mid % 2 == 0 ? start = mid : end = mid - 1;
            continue;
        } else {
            mid % 2 == 0 ? end = mid : start = mid + 1;
            continue;
        }
    }
    return nums[start];
};

let nums = [1,1,2,2,3];
console.log(singleNonDuplicate(nums));