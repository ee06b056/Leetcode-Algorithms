/**
 * @param {number} n
 * @return {string[]}
 */
// back track
var generateParenthesis = function(n) {
    let res = [];
    function _backtrak (str, open, closure) {
        if (str.length === n * 2) {
            res.push(str);
            return;
        }
        if (open < n) {
            _backtrak(str+'(', open + 1, closure);
        }
        if (open > closure) {
            _backtrak(str+')', open , closure + 1);
        }
    }
    _backtrak('', 0, 0);
    return res;
};



console.log(generateParenthesis(3));