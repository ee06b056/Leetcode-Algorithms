/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let long = a.length > b.length ? a : b;
    let short = a.length > b.length ? b : a;
    let ans = [], carry = 0, i = 1;
    for (; i < short.length ; i--) {
        let l = long[i], s = short[i];

    }
};