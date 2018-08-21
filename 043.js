/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') {
        return '0';
    }
    let ans = '0', temp = '';
    for (let i = num2.length - 1; i >= 0; i--) {
        ans = addBystr(ans, multiplyByDigit(num1, num2[i]) + temp);
        temp += '0';
    }
    return ans;
};

let addBystr = function (num1, num2) {
    let flag = 0, ans = '';
    let i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let a = i >= 0 ? parseInt(num1[i]) : 0;
        let b = j >= 0 ? parseInt(num2[j]) : 0;
        let subSum = String((a + b + flag) % 10);
        ans = subSum + ans;
        flag = Math.floor((a + b + flag) / 10);
        i--;
        j--;
    }
    if (flag != 0) {
        ans = String(flag) + ans;
    }
    return ans;
}

let multiplyByDigit = function (num1, num2) {
    if (num2 == '0') {
        return '0';
    }
    let flag = 0, ans = '', b = parseInt(num2);
    for (let i = num1.length - 1; i >= 0; i--) {
        let a = parseInt(num1[i]);
        let halfMultiply = String((a * b + flag) % 10);
        ans = halfMultiply + ans;
        flag = Math.floor((a * b + flag) / 10);
    }
    if (flag != 0) {
        ans = String(flag) + ans;
    }
    return ans;
}

// better answer
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') {
        return '0';
    }
    let n1 = num1.split(''), n2 = num2.split('');
    let ans = Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            ans[i + j + 1] += parseInt(num1[i]) * parseInt(num2[j]);
        }
    }
    let res = '', carry = 0;
    for (let i = ans.length - 1; i > 0; i--) {
        let sum = carry + ans[i];
        res = String(sum % 10) + res;
        carry = Math.floor(sum / 10);
    }
    if (carry != 0) {
        res = String(carry) + res;
    }
    return res;
};