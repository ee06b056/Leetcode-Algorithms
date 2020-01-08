/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let [row, column, square] = [[], [], []];
    for (let i = 0; i < 9; i++) {
        row.push(new Array(9).fill(0));
        column.push(new Array(9).fill(0));
        square.push(new Array(9).fill(0));
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                let num = parseInt(board[i][j]) - 1;
                let s = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i][num] || column[j][num] || square[s][num]) {
                    return false;
                } else {
                    row[i][num] = 1;
                    column[j][num] = 1;
                    square[s][num] = 1;
                }
            }
        }
    }
    return true;
};
