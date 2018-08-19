/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function _validPalindrome (s, left, right) {
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    let left = 0, right = s.length - 1;
    while(left < right) {
        if (s[left] != s[right]) {
            return _validPalindrome(s,left+1, right) || _validPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
};

str = 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga';

console.log(validPalindrome(str));