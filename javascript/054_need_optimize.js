/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0) {
        return [];
    }
    if (matrix.length == 1) {
        return matrix[0];
    }
    const m = matrix.length, n = matrix[0].length;
    let ans = [];
    for (let i = 0; i <= Math.floor((Math.min(m, n) - 1) / 2); i++) {
        ans = ans.concat(matrix[i].slice(i, n - 1 - i + 1));
        for (let j = i + 1; j <= m - 1 - i - 1; j++) {
            ans.push(matrix[j][n - 1 - i]);
        }
        if (i != m - 1 - i) {
            ans = ans.concat(matrix[m - 1 - i].slice(i, n - 1 - i + 1).reverse());
        }
        if (i != n - 1 - i) {
            for (let j = m - 1 - i - 1; j >= i + 1; j--) {
                ans.push(matrix[j][i]);
            }
        }
    }
    return ans;
};

let matrix = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];

console.log(spiralOrder(matrix));