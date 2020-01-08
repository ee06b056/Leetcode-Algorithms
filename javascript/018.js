/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    while (i < nums.length - 3) {
        let j = i + 1;
        while (j < nums.length - 2) {
            let k = j + 1, l = nums.length - 1;
            do {
                let t = target - (nums[i] + nums[j] + nums[k] + nums[l]);
                if (t === 0) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    do {
                        l--;
                    } while(nums[l] == nums[l + 1]);
                } else if (t > 0) {
                    do {
                        k++;
                    } while (nums[k] == nums[k - 1]);
                } else if (t < 0) {
                    do {
                        l--;
                    } while (nums[l] == nums[l + 1]);
                }
            } while (k < l);
            do {
                j++;
            } while (nums[j] == nums[j - 1]);
        }
        do {
            i++;
        } while (nums[i] == nums[i - 1]);
    }
    return res;
};
let nums = [1, 0, -1, 0, -2, 2], target = 0;
console.log(fourSum(nums, target));