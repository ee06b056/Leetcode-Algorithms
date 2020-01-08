/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let t of tokens) {
        let num1, num2;
        switch (t) {
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
                stack.push(num2 * num1);
                break;
            case '/':
                num1 = stack.pop();
                num2 = stack.pop();
                stack.push(floor(num2 / num1));
                break;
            default: 
                stack.push(parseInt(t));
        }
        console.log(stack);
    }
    return stack.pop();
};

function floor(num) {
    if (num >= 0) {
        return Math.floor(num);
    } else {
        return Math.floor(num) == num ? num : Math.floor(num) + 1;
    }
}

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));