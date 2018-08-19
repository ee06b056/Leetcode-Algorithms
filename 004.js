/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length == 0) {
        return findMedian(nums2);
    }
    if (nums2.length == 0) {
        return findMedian(nums1);
    }
    if (nums1.length < nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    let m = nums1.length, n = nums2.length;
    let left_bound = Math.floor((m - n) / 2), right_bound = Math.floor((m + n) / 2) + 1;
    let i, j;
    while (true) {
        i = Math.floor((left_bound + right_bound) / 2);
        j = Math.floor((m + n) / 2 - i);
        if (max(nums1[i - 1],nums2[j - 1]) <= min(nums1[i],nums2[j])) {
            
            if ((m + n) % 2 == 1) {
                return min(nums1[i], nums2[j]);
            } else {
                return (max(nums1[i - 1], nums2[j - 1]) + min(nums1[i],nums2[j])) / 2;
            }
        } else if (nums1[i - 1] > nums2[j]) {
            right_bound = i;
        } else if (nums2[j - 1] > nums1[i]) {
            left_bound = i;
        }
    }
};
function max(n1, n2) {
    if (n1 == undefined || n2 == undefined) {
        return n1 == undefined ? n2 : n1;
    }
    return n1 > n2 ? n1 : n2;
}
function min(n1, n2) {
    if (n1 == undefined || n2 == undefined) {
        return n1 == undefined ? n2 : n1;
    }
    return n1 < n2 ? n1 : n2;
}
function findMedian(n) {
    let l = n.length;
    if (l == 0) {
        return null;
    } else if (l % 2 == 1) {
        return n[Math.floor(l / 2)];
    } else {
        return (n[l / 2 - 1] + n[l / 2]) / 2;
    }
}
let nums1 = [1,2], nums2 = [1,2,3];
console.log(findMedianSortedArrays(nums1, nums2));