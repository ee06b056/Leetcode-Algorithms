/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let step = numRows * 2 - 2, round = Math.ceil(s.length / step);
    let res = '';
    for (let i = 0; i < numRows; i++) {
        if (i == 0) {
            for (let j = 0; j < round; j++) {
                res += s[j * step];
            }
        } else if (i == numRows - 1) {
            for (let j = 0; j < round; j++) {
                let first = s[i + j * step];
                res = first == undefined ? res : res + first;
            }
        } else {
            for (let j = 0; j < round; j++) {
                let first = s[i + j * step], second = s[(j+1) * step - i];
                res = first == undefined ? res : res + first;
                res = second == undefined ? res : res + second;
            }
        }
    }
    return res;
};
console.log(convert('PAYPALISHIRING',3));