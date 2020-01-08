/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length == 0) {
        return ;
    }
    let n = matrix[0].length;
    if (n == 1) {
        return;
    }
    // swap by row
    for (let i = 0; i <= n / 2 - 1; i++) {
        for (let j = 0; j < n; j++) {
            let x1 = i, y1 = j, x2 = n - i - 1, y2 = j;
            swapMatrix(matrix, x1, y1, x2, y2);
        }
    }
    // swap by diagonal
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swapMatrix(matrix,i, j, j, i);
        }
    }
};

function swapMatrix (matrix, x1, y1, x2, y2) {
    let temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
};