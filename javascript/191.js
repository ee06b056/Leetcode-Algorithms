/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0, m = 0;
    for (let i = 0; i < 32; i++) {
        m = n & 1;
        n = n >>> 1;
        ans += m;
    }
    return ans;
};