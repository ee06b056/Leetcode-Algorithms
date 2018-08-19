/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    let i = nums.length - 1;
    while (i > 0) {
           if (nums[i] > nums[i - 1]) {
               break;
           } else {
               i--;
           }
    }
    console.log(i);
    if (i === 0) {
        reverse_array(nums, i);
        return;
    } else {
        let j = i;
        while (j < nums.length - 1) {
            if (nums[j + 1] <= nums[i - 1]) {
                break;
            } else {
                j++;
            }
        }
        let temp = nums[j];
        nums[j] = nums[i - 1];
        nums[i - 1] = temp;
        reverse_array(nums, i);
    }
};
function reverse_array (arr,start) {
    let i = start, j = arr.length - 1;
    while (j > i) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    // return arr;
}

let nums = [1,1];
nextPermutation(nums);
console.log(nums);