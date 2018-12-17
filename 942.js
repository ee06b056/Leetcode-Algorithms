/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let small = 0, big = S.length;
    let ans = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == 'I') {
            ans.push(small++);
        } else if (S[i] == 'D') {
            ans.push(big--);
        }
    }
    ans.push(small);
    return ans;
};