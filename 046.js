/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function _permute (nums, subSet) {
        if (nums.length == 0) {
            ans.push(subSet);
            return ;
        }
        for (let i = 0; i < nums.length; i++) {
            subSet.push(nums[i]);
            _permute(arrWithoutIndex(nums, i),subSet.slice());
            subSet.pop();
        }
    }
    let ans = [];
    _permute(nums, []);
    return ans;
};

let arrWithoutIndex = function (arr, index) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};

let nums = [1, 2, 3, 4];
console.log(permute(nums));