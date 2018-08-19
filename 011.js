/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, maxC = (j - i) * min(height[i], height[j]);
    while (i + 1 <= j) {
        if (height[i] > height[j]) {
            j--;
            if (height[j] > height[j + 1]) {
                maxC = max(maxC, (j - i) * min(height[i], height[j]));
            }
        } else {
            i++;
            if (height[i] > height[i - 1]) {
                maxC = max(maxC, (j - i) * min(height[i], height[j]));
            }
        }
        console.log('i: ',i,'j: ',j,'maxC: ',maxC);
    }
    return maxC;
};
function min(n1, n2) {
    return n1 < n2 ? n1 : n2;
}
function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));