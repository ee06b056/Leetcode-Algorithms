/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let row = Array(m).fill(0), matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(row.slice());
    }
    for (let i = 0; i < m; i++) {
        matrix[0][i] = 1;
    }
    for (let i = 0; i < n; i++) {
        matrix[i][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
        }
    }
    return matrix[n - 1][m - 1];
};


var uniquePaths2 = function (m, n) {
    let row = Array(m).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            row[j] = row[j - 1] + row[j];
        }
    }
    return row[row.length - 1];
}



console.log(uniquePaths2(3, 2));