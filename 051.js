/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let row = [], board = [], ans = [];
    for (let i = 0; i < n; i++) {
        row.push('.');
    }
    for (let i = 0; i < n; i++) {
        board.push(row.slice());
    }
    function dfs (board, rowIndex) {
        if (rowIndex == n) {
            ans.push(board.map((arr) => {
                return arr.join('');
            }));
            return ;
        }
        for (let i = 0; i < n; i++) {
            if (validate(board, rowIndex, i)) {
                board[rowIndex][i] = 'Q';
                dfs(board, rowIndex + 1);
                board[rowIndex][i] = '.';
            }
        }
    }
    dfs(board, 0);
    return ans;
};

function validate (board, row, col) {
    const n = board.length;
    for (let i = 0; i < n; i++) {
        if (board[row][i] == 'Q' || board[i][col] == 'Q') {
            return false;
        }
        let row1 = row + i, row2 = row - i, col1 = col + i, col2 = col - i;
        if ((row1 < n && col1 < n && board[row1][col1] == 'Q') || (row1 < n && col2 >= 0 && board[row1][col2] == 'Q') || (row2 >= 0 && col1 < n && board[row2][col1] == 'Q') || (row2 >= 0 && col2 >= 0 && board[row2][col2] == 'Q')) {
            return false;
        }
    }
    return true;
};
let board = [
    'Q...',
    '....',
    '....',
    '....'
];
// console.log(validate(board, 1, 2));
console.log(solveNQueens(4));
