/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let l = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            l++;
        } else {
            return l;
        }
    }
    return l;
};

console.log(lengthOfLastWord('a'));