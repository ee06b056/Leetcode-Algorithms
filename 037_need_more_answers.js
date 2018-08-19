/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    _solve(board);
};

function _solve (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (let c = 1; c <= 9; c++) {
                    // console.log(c+'');
                    if (check(board, i, j, c+'')) {
                        board[i][j] = c+'';
                        console.log(board);
                        if (_solve(board)) {
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                    
                }
                return false;
            }
        }
    }
    return true;
}

function check (board, i, j, c) {
    for (let k = 0; k < 9; k++) {
        let s_i = Math.floor(i / 3) * 3 + Math.floor(k / 3), s_j = Math.floor(j / 3) * 3 + (k % 3);
        if (board[i][k] == c || board[k][j] == c || board[s_i][s_j] == c) {
            return false;
        }
    }
    return true;
}

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
solveSudoku(board);
