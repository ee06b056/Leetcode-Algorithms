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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    } 
    let temp = new ListNode(0);
    temp.next = head;
    try {
        let current = temp, first = head, second = first.next;
        while (true) {
            current.next = second;
            first.next = second.next;
            second.next = first;
            let t = second;
            second = first;
            first = t;
            if (!second.next || !second.next.next) {
                return temp.next;
            }
            current = current.next.next;
            first = first.next.next;
            second = second.next.next;
        }
    } catch (err) {
        return temp.next;
    }
};