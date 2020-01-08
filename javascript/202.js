/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let history = [n],m;
    while (n != 1) {
        m = 0;
        while (n > 9) {
            m += (n%10)**2;
            n = parseInt(n/10);
        }
        m += n**2;
        if (history.includes(m)) {
            return false;
        } else {
            history.push(m);
            n = m;
        }
    }
    return true;
};