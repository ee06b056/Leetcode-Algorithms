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
var reverseKGroup = function(head, k) {
    if (k == 1 || !head || !head.next) {
        return head;
    }
    function containsK (headPre) {
        let node = headPre;
        for (let i = 0; i < k; i++) {
            node = node.next;
            if (!node) {
                return false;
            }
        }
        return true;
    }
    function _reverseKGroup () {
        let head = headPre.next, headNext = head.next, tail = head;
        for (let i = 0; i < k - 1; i++) {
            tail = tail.next;
        }
        headPre.next = tail;
        head.next = tail.next;
        do {
            headPre = head;
            head = headNext;
            headNext = head.next;
            head.next = headPre;
        } while (head != tail);
        headPre = head;
        for (let i = 0; i < k - 1; i++) {
            headPre = headPre.next;
        }
    }
    let ansPre = new ListNode(0);
    ansPre.next = head;
    let headPre = ansPre;
    while (containsK(headPre)) {
        _reverseKGroup(headPre);
    }
    return ansPre.next;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);

console.log(reverseKGroup(a, 2));