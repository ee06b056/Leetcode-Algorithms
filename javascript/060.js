/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factors = [1,], candidates = [], ans = [];
    for (let i = 1; i < n - 1; i++) {
        factors.push(factors[i - 1] * (i + 1));
    }
    // console.log(factors);
    for (let i = 1; i <= n; i++) {
        candidates.push(i);
    }
    // console.log(candidates);
    k = k - 1;
    for (let i = factors.length - 1; i >= 0; i--) {
        let ind = Math.floor(k /factors[i]);
        ans.push(candidates.splice(ind, 1));
        k = k % factors[i];
    }
    ans.push(candidates[0]);
    return ans.join('');
};

console.log(getPermutation(5, 3));