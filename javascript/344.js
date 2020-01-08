/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        ans = s[i] + ans;
    }
    return ans;
};