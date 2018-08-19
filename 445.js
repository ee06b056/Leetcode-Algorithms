/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//space overflow
let linked_list_to_int = function (l) {
    let result = 0;
    while (l) {
        result = result * 10 + l.val;
        l = l.next;
    }
    return result;
}
let int_to_linked_list = function (n) {
    let head = new ListNode(n % 10);
    while (n / 10 >= 1) {
        n = parseInt(n/10);
        let node = new ListNode(n % 10);
        node.next = head;
        head = node;
    }
    return head;
}
var addTwoNumbers = function(l1, l2) {
    return int_to_linked_list(linked_list_to_int(l1) + linked_list_to_int(l2));
};

//stack
var addTwoNumbers = function (l1, l2) {
    let stack1 = linked_list_to_stack(l1), stack2 = linked_list_to_stack(l2), stack = [];
    let carry = 0;
    while (stack1.length || stack2.length) {
        let val1 = stack1.length == 0 ? 0 : stack1.pop();
        let val2 = stack2.length == 0 ? 0 : stack2.pop();
        let val = val1+ val2 + carry;
        carry = parseInt(val / 10);
        stack.push(val%10);
    }
    if (carry == 1) {
        stack.push(1);
    }
    return stack_to_linked_list(stack);
}
function linked_list_to_stack (l) {
    let stack = [];
    while(l) {
        stack.push(l.val);
        l = l.next;
    }
    return stack;
}
function stack_to_linked_list (stack) {
    let head = new ListNode(stack.pop());
    let tail = head;
    while (stack.length) {
        tail.next = new ListNode(stack.pop());
        tail = tail.next;
    }
    return head;
}