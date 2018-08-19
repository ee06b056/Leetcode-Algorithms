/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    ans = 0;
    while (x != 0 || x % 10 != 0 ) {
        ans = ans * 10 + (x % 10);
        x = parseInt(x/10);
    }
    if (ans >(Math.pow(2, 31) - 1) || ans < -1*Math.pow(2, 31)) {
        return 0;
    }
    return ans;
};

console.log(reverse(-123))