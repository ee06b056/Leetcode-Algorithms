/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// recursive
var myPow = function(x, n) {
    console.log(x, n);
    if (x == 0) {
        return 0;
    } 
    if (n == 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n == 1) {
        return x;
    }
    if (n == 2) {
        return x * x;
    }
    if (n % 2 == 1) {
        return x * myPow(myPow(x, Math.floor(n / 2)), 2);
    } else {
        return myPow(myPow(x, Math.floor(n / 2)), 2);
    }
};


// iteration

var myPow = function (x, n) {
    if (x == 0) {
        return 0;
    }
    if (n < 0) {
        x = 1/ x;
        n = -n;
    }
    let ans = 1, pow = x;
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if (i % 2 == 1) {
            ans = ans * pow;
        }
        pow = pow * pow;
    }
    return ans;
};
let x = 2, n = 2;
console.log(myPow(x, 10));