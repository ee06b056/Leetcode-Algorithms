/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true;
    }
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > j) {
            return false;
        }
        j = (i + nums[i]) > j ? (i + nums[i]) : j;
        if (j >= nums.length - 1) {
            return true;
        }
        
    }
};

let nums = [3,2,1,0,4];
console.log(canJump(nums));