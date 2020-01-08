/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let distance = Infinity, res;
    nums.sort((a, b) => {
        return a - b;
    });
    // console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1, k = nums.length - 1;
        do {
            let t = target - (nums[i] + nums[j] + nums[k]);
            // distance = Math.abs(t) < distance ? Math.abs(t) : distance;
            if (distance > Math.abs(t)) {
                distance = Math.abs(t);
                res = nums[i] + nums[j] + nums[k];
                // console.log('i: ', i, 'j: ', j, 'k: ', k);
                // console.log(nums);
            }
            if (t === 0) {
                return res;
            }else if (t > 0) {
                j++;
            } else if (t < 0) {
                k--;
            }
        } while (j < k);
    }
    return res;
};

let nums = [1,2,4,8,16,32,64,128], target = 82;
console.log(threeSumClosest(nums, target));