/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }
    let result = 1, primes = [2,];
    for (let i = 3; i < n; i++) {
        if (isPrime(i,primes)) {
            result++;
            primes.push(i);
        }
    }
    return result;
};

function isPrime (n, primes) {
    for (let i= 0; i < primes.length; i++) {
        if (n % primes[i] == 0) {
            return false;
        }
    }
    return true;
}

console.log(countPrimes(499979));