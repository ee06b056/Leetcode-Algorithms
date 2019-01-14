/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    const ans = [];
    const operators = ['+', '-', '*', '/']
    function backtrack (expression, choosen, count) {
        if (expression.length == 7) {
            // console.log(expression);
            ans.push(calc(expression));
            return ;
        }
        if (count > 1) {
            for (let i = 0; i < 4; i++) {
                expression.push(operators[i]);
                backtrack(expression, choosen, count - 1);
                expression.pop();
            }
        }

        for (let i = 0; i < 4; i++) {
            if (!choosen.has(i)) {
                choosen.add(i);
                expression.push(nums[i]);
                backtrack(expression, choosen, count + 1);
                expression.pop();
                choosen.delete(i);
            }
        }
    }

    backtrack([], new Set(), 0);
    // console.log(ans);
    for (let i of ans) {
        if (i >= 23.9999999999 && i <= 24.0000000001) return true;
    }
    return false;
};

function calc (expression) {
    const stack = [];
    for (let i = 0; i < expression.length; i++) {
        let num1, num2;
        switch (expression[i]) {
            case '+':
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 + num2);
                break;
            case '-':
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num2 - num1);
                break;
            case '*':
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(num1 * num2);
                break;
            case '/':
                num1 = stack.pop();
                num2 = stack.pop();
                if (num1 == 0) return NaN;
                stack.push(num2 / num1);
                break;
            default:
                stack.push(expression[i]);
        }
    }
    return stack.pop();
}

console.log(judgePoint24([3,3,8,8]));