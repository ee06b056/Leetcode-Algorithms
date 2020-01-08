/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 2) return true;
    let i = 1, increase = true;
    while (i < A.length) {
        if (A[i] > A[i - 1]) {
            break;
        } else if (A[i] < A[i - 1]) {
            increase = false;
            break;
        }
        i++;
    }
    if (i == A.length) return true;
    for (let j = i; j < A.length; j++) {
        if ((increase && A[j] < A[j - 1]) || (!increase && A[j] > A[j - 1])) {
            return false;
        }
    }
    return true;
};