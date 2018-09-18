/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const sArr = s.trim().split('e');
    if (sArr.length > 2 || sArr.length < 1) {
        return false;
    }
    
};