/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let result = 0, count1 = 1,count2 = 1;
    let factor1, factor2;
    for (let i = 0; i < s.length; i++) {
        factor1 = calFac1(s[i]);
        factor2 = calFac2(s[i - 1],s[i]);
        result = factor1 * count1 + factor2 * count2;
        count2 = count1;
        count1 = result;
        console.log(result);
        console.log(result % 1000000007);
    }
    
    return result % 1000000007;
};
function calFac1(char) {
    if (char == '0') {
        return 0;
    } else if (char == '*') {
        return 9;
    } else {
        return 1;
    }
}
function calFac2(char1, char2) {
    if (char1 == undefined || char1 == '0') {
        return 0;
    }
    let nums = [],factor = 0;
    if (char1 == '*') {
        nums.push([1,2,3,4,5,6,7,8,9]);
    } else {
        nums.push([parseInt(char1),]);
    }
    if (char2 == '*') {
        nums.push([1,2,3,4,5,6,7,8,9]);
    } else {
        nums.push([parseInt(char2),]);
    }
    for (let i of nums[0]) {
        for (let j of nums[1]) {
            if ((i*10 + j) >= 10 && (i*10 + j) <= 26) {
                factor += 1;
            }
        }
    }
    return factor;
}
console.log(numDecodings("****************"));
