/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    function _permuteUnique (nums, start) {
        if (start == nums.length - 1) {
            ans.push(nums.slice());
        }
        for (let i = start; i < nums.length; i++) {
            if (i != start && nums[i] == nums[start]) {
                continue;
            } else {
                swap(nums, start, i);
                _permuteUnique(nums, start + 1);
                swap(nums, start, i);
            }
        }
    }
    let ans = [];
    _permuteUnique(nums, 0);
    return ans;
};

let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

let nums = [1, 1, 2,3];
console.log(permuteUnique(nums));