/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length == 0) {
        return 0;
    }
    let min_sum = new Array(grid[0].length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i == 0 && j == 0) {
                min_sum[j] = grid[i][j];
            } else if (i == 0) {
                min_sum[j] = min_sum[j - 1] + grid[i][j];
            } else if (j == 0) {
                min_sum[j] = min_sum[j] + grid[i][j];
            } else {
                min_sum[j] = min(min_sum[j - 1], min_sum[j]) + grid[i][j];
            }
        }
    }
    return min_sum[min_sum.length - 1];
};

function min (a, b) {
    return a < b ? a : b;
}