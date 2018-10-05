/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

//  recursive 
var numDistinct = function(s, t) {
    function _numDistinct (s, t, i, j) {
        if (j == t.length && i <= s.length) {
            ans++;
            return;
        } else if (i == s.length && j < t.length) {
            return;
        }
        for (let k = i; k < s.length; k++) {
            if (s[k] == t[j]) {
                _numDistinct(s, t, k+1, j+1);
            }
        }
    }
    let ans = 0;
    _numDistinct(s, t, 0, 0);
    return ans;
};


var numDistinct = function (s, t) {
    let dp = 
};

let s = 'babgbag', t = 'bag';
console.log(numDistinct(s, t));