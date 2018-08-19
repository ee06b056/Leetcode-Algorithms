/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let i = 0, base = 0, sign = 1;
    const INT_MAX = Math.pow(2, 31) - 1, INT_MIN = Math.pow(2, 31) * -1;
    let numbers = '0123456789';
    while (str[i] == ' ') {
        i++;
    }
    if (str[i] == '+') {
        sign = 1;
        i++;
    } else if (str[i] == '-') {
        sign = -1;
        i++;
    }
    while (numbers.includes(str[i])) {
        base = base * 10 + parseInt(str[i]);
        i++;
    }
    if (base * factor > INT_MAX) {
        return INT_MAX;
    } else if (base * factor < INT_MIN) {
        return INT_MIN;
    } else {
        return base * sign;
    }
}

let str = '4193 with words';
console.log(myAtoi(str));