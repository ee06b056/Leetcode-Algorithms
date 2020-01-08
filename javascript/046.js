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

// swap solution + recursive
var permute2 = function (nums) {
    function _permute (nums, start) {
        if (start == nums.length - 1) {
            ans.push(nums.slice());
        }
        for (let i = start; i < nums.length; i++) {
            swap(nums, start, i);
            _permute(nums, start + 1);
            swap(nums, start, i);
        }
    }
    let ans = [];
    _permute(nums, 0);
    return ans;
};

let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};


let nums = [1, 2, 3, 4];
console.log(permute2(nums));