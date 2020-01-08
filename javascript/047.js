/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    function _permuteUnique (nums, start) {
        if (start == nums.length - 1) {
            ans.push(nums.slice());
        }
        let used = new Set();
        for (let i = start; i < nums.length; i++) {
            if (used.has(nums[i])) {
                continue;
            } else {
                used.add(nums[i]);
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

let nums = [1, 1, 2, 2];
console.log(permuteUnique(nums));