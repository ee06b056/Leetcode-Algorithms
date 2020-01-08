/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pri = {'{': 3, '[': 2, '(': 1}
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(stack);
        
        if (stack.length == 0) {
            stack.push(s[i]);
            continue;
        } else {
            let last = stack[stack.length - 1];
            console.log('last: ', last);
            switch (s[i]) {
                case '{':
                    if (pri[last] > 2) {
                        stack.push(s[i]);
                        break;
                    }
                case '[':
                    if (pri[last] > 1) {
                        stack.push(s[i]);
                        break;
                    }
                case '(':
                    stack.push(s[i]);
                    break;
                case '}':
                    if (last == '{') {
                        stack.pop();
                        break;
                    } else {
                        return false;
                    }
                case ']':
                    if (last == '[') {
                        stack.pop();
                        break;
                    } else {
                        return false;
                    }
                case ')':
                    if (last == '(') {
                        stack.pop();
                        break;
                    } else {
                        return false;
                    }
            }
        }
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
};

console.log(isValid('(]'));