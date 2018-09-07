/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n == 0) {
        return [];
    }else if (n == 1) {
        return [[1]];
    }
    let row = new Array(n).fill(0);
    let matrix = [], value = 1;
    for (let i = 0; i < n; i++) {
        matrix.push(row.slice());
    }
    const m = Math.floor((n - 1) / 2);
    for (let i = 0; i <= m; i++) {
        for (let j = i; j <= n - 1 - i; j++) {
            matrix[i][j] = value++;
        }
        for (let j = i + 1; j <= n - 1 - i ; j++) {
            matrix[j][n - 1 - i] = value++;
        }
        if (i < n - 1 - i) {
            for (let j = n - 1 - i - 1; j >= i; j--) {
                matrix[n - 1 - i][j] = value++;
            }
            for (let j = n - 1 - i - 1; j >= i + 1; j--) {
               matrix[j][i] = value++; 
            }
        }
    }
    return matrix;
};

console.log(generateMatrix(2));