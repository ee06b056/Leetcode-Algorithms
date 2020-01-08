/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == '') {
        return [];
    }
    let res = [''];
    let map = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'};
    for (let i = 0; i < digits.length; i++) {
        let chars = map[digits[i]];
        let temp = [];
        for (char of chars) {
            for (str of res) {
                temp.push(str+char);
            }
        }
        res = temp;
    }
    return res;
};

let digits = '234';
console.log(letterCombinations(digits));