/**
 * @param {number[]} nums
 * @return {number}
 */
// hashmap
var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
};
//brute force
var majorityElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let ocur = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                ocur++;
            }
            if (ocur > nums.length/2) {
                return nums[i];
            }
        }
    }
    return null;
}
// Sort
var majorityElement = function (nums) {
    let sorted_nums = sort(nums);
    return sorted_nums[Math.floor(sorted_nums.length/2)];
}
function sort (nums) {
    // merge sort
    if (nums.length == 1 || nums.length == 0) {
        return nums;
    } else {
        let mid = Math.floor(nums.length / 2);
        let left = nums.slice(0,mid), right = nums.slice(mid);
        return merge(sort(left), sort(right));
    }
}
function merge (nums1, nums2) {
    let nums = [];
    let i = 0, j = 0;
    while (i != -1 || j != -1) {
        if (i == -1) {
            nums.push(nums2[j++]);
        } else if (j == -1) {
            nums.push(nums1[i++]);
        }else if (nums1[i] < nums2[j]) {
            nums.push(nums1[i++]);
        } else {
            nums.push(nums2[j++]);
        }
        if (i == nums1.length) {
            i = -1;
        }
        if (j == nums2.length) {
            j = -1;
        }
    }
    return nums;
}
// randomization
var majorityElement = function (nums) {
    while (true) {
        let i = randomization(nums.length);
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
            if (count > nums.length / 2) {
                return nums[i];
            }
            if ((count + nums.length - j - 1) <= nums.length / 2) {
                break;
            }
        }
    }
}
function randomization (n) {
    return Math.floor(Math.random() * n);
}
// divide and conquer
var majorityElement = function (nums) {
    let left = 0, right = nums.length;
    return _majorityElement(nums, 0, nums.length);
    function _majorityElement (nums, left, right) {
        if (left + 1 == right) {
            return nums[left];
        } else {
            let mid = Math.floor((left + right)/2);
            let left_major = _majorityElement(nums, left, mid);
            let right_major = _majorityElement(nums, mid, right);
            if (left_major == right_major) {
                return left_major;
            } else {
                let left_major_count = 0, right_major_count = 0;
                for (let i = left; i < right; i++) {
                    if (nums[i] == left_major) {
                        left_major_count++;
                    } else if (nums[i] == right_major) {
                        right_major_count++;
                    }
                }
                return left_major_count > right_major_count ? left_major : right_major;
            }
        }
    }
}
// moore vote
var majorityElement = function (nums) {
    let target = null, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target == null || count === 0) {
            target = nums[i];
            count = 1;
            continue;
        } else if (target == nums[i]) {
            count++;
        } else if (target != nums[i]) {
            count--;
        }
    }
    return target;
}
// 