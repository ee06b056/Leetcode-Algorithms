/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0],temp = 0 + nums[0];
    nums[0] > 0 ? temp = nums[0] : temp = 0;
    for (let i = 1; i < nums.length; i++) {
        if (temp < 0 ) {
            temp = 0;
        }
        temp += nums[i];
        if (temp > result) {
            result = temp;
        }
    }
    return result;
};

console.log(maxSubArray([-10,2,-1]));