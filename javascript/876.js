/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  double pointer
var middleNode = function(head) {
    let fast = slow = head;
    while (fast.next) {
        fast = fast.next;
        if (!fast.next) {
            return slow.next;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

// count number
var middleNode = function(head) {
    let count = 0;
    let p = head;
    while (p) {
        p = p.next;
        count++;
    }
    p = head;
    for (let i = 0; i < (count - 1) / 2; i++) {
        p = p.next;
    }
    return p;
};