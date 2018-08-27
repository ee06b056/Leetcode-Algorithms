/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
};

function matchAnagram (str1, str2) {
    if (str1.length != str2) {
        return false;
    }
    let chars = new Map();
    for (let char of str1) {
        if (chars.has(char)) {
            chars.set(char, chars.get(char) + 1);
        } else {
            chars.set(cahr,1);
        }
    }
    for (let char )
}