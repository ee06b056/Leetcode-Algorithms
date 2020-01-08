/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
// solution 1 O(nk)
var getModifiedArray = function(length, updates) {
    let ans = new Array(length);
    for (let i = 0; i < length; i++) {
        let num = 0;
        for (let j = 0; j < updates.length; j++) {
            if (i >= updates[j][0] && i <= updates[j][1]) {
                num += updates[j][2];
            }
        }
        ans[i] = num;
    }
    return ans;
};

// solution 2 O(3k)
var getModifiedArray = function (length, updates) {
    let ans = new Array(length).fill(0);
    for (let i = 0; i < updates.length; i++) {
        for (let index = updates[i][0]; index <= updates[i][1]; index++) {
            ans[index] += updates[i][2];
        }
    }
    return ans;
};

// solution 3 best
var getModifiedArray = function (length, updates) {
    let ans = new Array(length).fill(0);
    for (let i = 0; i < updates.length; i++) {
        const start = updates[i][0], end = updates[i][1], value = updates[i][2];
        ans[start] += value;
        if (end < length - 1) {
            ans[end + 1] -= value;
        }
    }

    for (let i = 1; i < length; i++) {
        ans[i] += ans[i - 1];
    }
    return ans;
};