/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2) {
        return 0;
    }
    let i = 0, j = height.length - 1, ans = 0, level = 0;
    while (i < j) {
        if (height[i] <= height[j]) {
            if (height[i] >= level) {
                level = height[i];
                i++;
            } else {
                ans += level - height[i];
                i++;
            }
        } else {
            if (height[j] > level) {
                level = height[j];
                j--;
            } else {
                ans += level - height[j];
                j--;
            }
        }
        
    }
    return ans;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));