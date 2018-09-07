/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let l = 0, trimed = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!trimed) {
            if (s[i] == ' ') {
                continue;
            } else {
                trimed = true;
                l++;
            }
        } else {
            if (s[i] == ' ') {
                return l;
            } else {
                l++;
            }
        }
    }
    return l;
};

console.log(lengthOfLastWord('a'));