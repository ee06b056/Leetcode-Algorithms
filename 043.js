/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
};

let addBystr = function (num1, num2) {
    let flag = 0, ans = '';
    let i = 0;
    while (i < num1.length && i < num2.length) {
        let a = parseInt(num1[i]), b = parseInt(num2[i]);
        let halfSum = (a + b + flag) % 10 + '';
        flag = Math.floor((a + b) / 10);
        ans = halfSum + ans;
    }
}