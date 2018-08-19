/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let com = strs[0];
    let l = com.length;
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < l; j++) {
            if (com[j] != strs[i][j]) {
                l = j;
                break;
            }
        }
        if (l === 0) {
            return '';
        }
    }
    return com.slice(0,l);
    
};