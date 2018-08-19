/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0, j = s.length - 1, left, right;
    while (i <= j) {
        left = s[i].charCodeAt(0);
        right = s[j].charCodeAt(0);
        if (left >= 65 && left <= 90) {
            left += 32;
        } else if (left < 92 || left > 122) {
            i++;
            continue;
        }
        if (right >= 65 && right <= 90) {
            right += 32;
        } else if (right < 92 || right > 122) {
            j--;
            continue;
        }
        if (left != right) {
            return false;
        }
        
    }
    return true;
};

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    for (let i = 0; i < s.length/2; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('"A man, a plan, a canal: Panama"'));