/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = true;
    const MAX = Math.pow(2, 31) - 1;
    if (dividend < 0) {
        dividend = 0 - dividend;
        sign = !sign;
    }
    if (divisor < 0) {
        divisor = 0 - divisor;
        sign = !sign;
    }
    let quotient = 0;
    while (dividend >= divisor) {
        quotient++;
        dividend -= divisor;
    } 
    if (!sign) {
        quotient = 0 - quotient;
    }
    if (quotient > MAX) {
        return MAX;
    }
    return quotient;
};

var divide = function (dividend, divisor) {
    let quetient = 0;
    // while (dividend )
};

console.log(divide(10, 3));