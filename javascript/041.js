/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    function swapByIndex (i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    let n = nums.length;
    if (n == 0) {
        return 1;
    }
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && (nums[i] - 1) != i && nums[i] != nums[nums[i] - 1]) {
            swapByIndex(nums[i] - 1, i);
        }
    }
    for (let i = 0; i < n; i++) {
        if (i != nums[i] - 1) {
            return i + 1;
        }
    }
    return n + 1;
};

let a = [1, 1];
console.log(firstMissingPositive(a));