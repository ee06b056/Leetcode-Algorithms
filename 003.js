/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0, maxL = 0, i = 0, j = 0;
    let map = new Map();
    while ( (i+j) < s.length) {
        if (map.has(s[i+j])) {
            res = res > maxL ? res : maxL;
            i = i + map.get(s[i+j]) + 1;
            maxL = 0; 
            map.clear();
            j = 0;
        } else {
            map.set(s[i+j], j);
            maxL++;
            j++;
        }
    }
    res = res > maxL ? res : maxL;
    return res;
};

console.log(lengthOfLongestSubstring('aaaaa'));