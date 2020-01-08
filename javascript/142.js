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
var detectCycle = function(head) {
    let slow = head, fast = head, meet, p1 = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            meet = slow;
            break;
        }
    }
    if (meet == undefined) {
        return null;
    } else {
        while (p1 != meet) {
            p1 = p1.next;
            meet = meet.next;
        }
        return p1;
    }
};