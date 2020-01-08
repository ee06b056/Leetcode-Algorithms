/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans = ans * 2 + (n % 2);
        n = parseInt(n/2);
    }
    return ans;
};

console.log(reverseBits(1));
console.log(Math.pow(2,31));