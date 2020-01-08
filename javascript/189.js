/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// brute force
var rotate = function(nums, k) {
    let k = k % nums.length;
    for (let i = 0; i < k; i++) {
        let last = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }    
};

// use extra space
var rotate = function (nums, k) {
    k = k % nums.length;
    let temp = nums.slice(-k);
    for (let j = 0; j < nums.length - k; j++) {
        let current = nums.length - 1 - j;
        nums[current] = nums[current - k];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
}

// use O(1) space
var rotate = function (nums, k) {
    let l = nums.length;
    k = k % l;
    let count = 0,start = 0;
    while (count < l) {
        let current = start;
        let current_cache = nums[current];
        do {
            let next = (current + k) % l;
            let next_cache = nums[next];
            nums[next] = current_cache;
            current = (current + k) % l;
            current_cache = next_cache;
            count++;
        } while (start != current);
        start++;
    }
}



let arr = [1];
rotate(arr, 1);
console.log(arr);