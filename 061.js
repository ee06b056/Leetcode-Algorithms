/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }
    const temp = new ListNode(null);
    temp.next = head;
    let tail = head, pre = head;
    let l = 1;
    while (tail.next) {
        tail = tail.next;
        l++;
    }
    for (let i = 0; i < l - k - 1; i++) {
        pre = pre.next;
    }
    tail.next = temp.next;
    temp.next = pre.next;
    pre.next = null;
    return temp.next;
};

function ListNode (val) {
    this.val = val;
    this.next = null;
}