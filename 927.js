/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
    let tail = true, total_ones = 0, tail_zeros = 0, i = j = 0;
    const faile = [-1, -1];
    for (let i = A.length - 1; i >= 0; i--) {
        if (tail && A[i] == 0) {
            tail_zeros++;
        }
        if (A[i] == 1) {
            tail = false;
            total_ones++;
        }
    }
    if (total_ones == 0) {
        return [0, A.length - 1];
    }
    if ((total_ones % 3) != 0) {
        return faile;
    }
    const ones = total_ones / 3;
    let ans = [];
    console.log('ones: ' + ones);
    // find i
    let temp = 0;
    while (temp < ones) {
        if (A[i] == 1) {
            temp++
        }
        i++;
    }
    i--;
    temp = 0;
    console.log(i);
    while (temp < tail_zeros) {
        i++;
        if (A[i] == 1) {
            return faile;
        }
        temp++;
    }
    ans.push(i);
    console.log('i: ' + i);
    // find j
    j = i + 1;
    temp = 0;
    while (temp < ones) {
        if (A[j] == 1) {
            temp++
        }
        j++;
    }
    console.log(j);
    temp = 0;
    while (temp < tail_zeros) {
        j++;
        if (A[j] == 1) {
            return faile;
        }
        temp++;
    }
    
    ans.push(j + 1);
    let k = A.length - 1;
    temp = ones;
    while (temp > 0) {
        if (A[i] != A[j] || A[j] != A[k]) {
            return faile;
        }
        if (A[i] == 1) {
            temp--;
        }
        i--;
        j--;
        k--;
    }
    return ans;
    
};

let A = [1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0];
console.log(threeEqualParts(A));
