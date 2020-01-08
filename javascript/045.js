/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) {
        return 0;
    }
    let i = nums.length - 1, j = i, jump = 0;
    while (j > 0) {
        for (let temp = i - 1; temp >= 0; temp--) {
            if (nums[temp] >= i - temp) {
                j = temp;
            }
        }
        i = j;
        jump++;
    }
    return jump;
};

// linear solution
var jump = function (nums) {
    let start = 0, farest = 0, reach = 0, jumpCount = 0;
    while (reach < nums.length - 1) {
        jumpCount++;
        
        for (let i = start; i <= farest; i++) {
            reach = i + nums[i] > reach ? i + nums[i] : reach;
        }
        start = farest + 1;
        farest = reach;
    }
    return jumpCount;
};
let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));