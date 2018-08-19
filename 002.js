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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode(null), current = head;
    while (l1 || l2) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let v = v1 + v2 + carry;
        if (v > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        current.next = new ListNode(v%10);
        current = current.next;
        l1 = l1 ? l1.next: null;
        l2 = l2 ? l2.next : null;
    }
    if (carry == 1) {
        current.next = new ListNode(1);
    }
    return head.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a = new ListNode(2);
a.next = new ListNode(4);
a.next.next = new ListNode(3);
let b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(4);
console.log(addTwoNumbers(a, b));