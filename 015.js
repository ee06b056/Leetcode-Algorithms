/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    sort(nums);
    let i = 0;
    while (i < nums.length - 2) {
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                res.push([nums[i], nums[j], nums[k]]);
                do {
                    k--;
                } while (nums[k] == nums[k + 1]);
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                do {
                    k--;
                } while (nums[k] == nums[k + 1]);
                continue;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                do {
                    j++
                } while (nums[j] == nums[j - 1]);
                continue;
            }
        }
        do {
            i++
        } while (nums[i] == nums[i - 1]);
    }

    return res;
};
// quick sort
function sort (nums) {
    function swap (p, c) {
        let temp = nums[p];
        nums[p] = nums[c];
        nums[c] = temp;
    }
    function _sort(nums, start, end) {
        if (start == end || start + 1 == end) {
            return
        }
        let p = end - 1, c = start;
        do {
            if (c > p) {
                if (nums[c] < nums[p]) {
                    swap(p, c);
                    let temp = p;
                    p = c;
                    c = temp;
                    c++;
                } else {
                    c--;
                }
            } else {
                if (nums[c] > nums[p]) {
                    swap(p,c);
                    let temp = p;
                    p = c;
                    c = temp;
                    c--;
                } else {
                    c++;
                }
            }
        } while (c != p);
        _sort(nums, start, p);
        _sort(nums, p, end);
    }
    _sort(nums, 0, nums.length);
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));