/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s.length <= 1) {
        return 0;
    }
    let stack = [], last = -1, maxl = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else if (stack.length == 0) {
            last = i;
            continue;
        } else {
            stack.pop();
            if (stack.length == 0) {
                maxl = maxl > (i - last) ? maxl : (i - last);
            } else {
                maxl = maxl > (i - stack[stack.length - 1]) ? maxl : (i - stack[stack.length - 1]);
            }
        }
    }
    return maxl;
};
let s = '(()))))(((()))))'
console.log(longestValidParentheses(s));