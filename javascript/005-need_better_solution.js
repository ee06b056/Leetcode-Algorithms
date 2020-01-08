/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxC = null, maxL = 0;
    for (let i = 0.5; i < s.length - 1; i += 0.5) {
        let tempL = 0;
        let left, right;
        if (i % 1 == 0.5) {
            left = i - 0.5;
            right = i + 0.5;
        } else {
            left = i;
            right = i;
        }
        do {
            if (s[left] == s[right]) {
                tempL = right - left + 1;
                left--;
                right++;
            } else {
                break;
            }
        } while (left >= 0 && right < s.length);
        if (tempL >= maxL) {
            maxL = tempL;
            maxC = i;
        }
    }
    left = Math.ceil(maxC - maxL / 2);
    right = Math.floor(maxC + maxL / 2);
    return s.slice(left, right + 1);
};

console.log(longestPalindrome('abbacdfghgfdc'));