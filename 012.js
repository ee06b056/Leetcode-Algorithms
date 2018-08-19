/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = '';
    let symbols = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1, 'I']];
    for (let j = 0; j < symbols.length; j += 2) {
        let digit = parseInt(num/symbols[j][0]);
        switch (digit) {
            case 9:
                res += symbols[j][1] + symbols[j - 2][1];
                num -= digit * symbols[j][0];
                break;
            case 8:
                res += symbols[j - 1][1] + symbols[j][1] + symbols[j][1] + symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 7:
                res += symbols[j - 1][1] + symbols[j][1] + symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 6:
                res += symbols[j - 1][1] + symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 5:
                res += symbols[j - 1][1];
                num -= digit * symbols[j][0];
                break;
            case 4:
                res += symbols[j][1] + symbols[j - 1][1];
                num -= digit * symbols[j][0];
                break;
            case 3:
                res += symbols[j][1] + symbols[j][1] + symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 2:
                res += symbols[j][1] + symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 1:
                res += symbols[j][1];
                num -= digit * symbols[j][0];
                break;
            case 0:
                break;
        }
    }
    return res;
};

console.log(intToRoman(9));