/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num < 1) {
        return false
    } else if (num == 1) {
        return true;
    } else {
        while (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
            if (num % 5 == 0 ) {
                num /= 5;
            }
            if (num % 3 == 0) {
                num /= 3;
            }
            if (num % 2 == 0) {
                num /= 2;
            }
            if (num == 1) {
                return true;
            }
        }
        return false;
    }
};