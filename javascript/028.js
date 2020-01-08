/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == '') {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let match = false, begin = i;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[begin] == needle[j]) {
                begin++;
                match = true;
            } else {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
};

console.log(strStr('hello', 'l'));