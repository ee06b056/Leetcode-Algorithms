/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid.length == 0) {
        return 0;
    }
    let arr = new Array(obstacleGrid[0].length);
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                arr[j] = 0;
            } else if (i == 0 && j == 0) {
                arr[j] = 1;
            } else if (i == 0) {
                arr[j] = arr[j - 1];
            } else if (j == 0) {
                arr[j] = arr[j];
            } else {
                arr[j] = arr[j - 1] + arr[j];
            }
            console.log(arr);
        }
    }
    return arr[arr.length - 1];
};

let arr = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(arr));