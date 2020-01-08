/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    let min = S.length;
    for (let s of S) {
        if (s == '1') {
            min--;
        }
    }
    let arr = new Array(S.length + 1);
    arr[0] = min;
    for (let i = 1; i < arr.length; i++) {
        if (S[i - 1] == '0') {
            arr[i] = arr[i - 1] - 1;
            min = Math.min(min, arr[i]);
        } else {
            arr[i] = arr[i - 1] + 1;
            min = Math.min(min, arr[i]);
        }
    }
    return min;
};