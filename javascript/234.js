/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// array
var isPalindrome = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let l = arr.length;
    for (let i = 0; i <= l/2; i++) {
        if (arr[i] != arr[l-1-i]) {
            return false;
        }
    }
    return true;
};

// reverse linked list
var isPalindrome = function(head) {
    let slow = head, fast = head, reverse_head = null, temp = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        temp = reverse_head;
        reverse_head = slow;
        slow = slow.next;
        reverse_head.next = temp;
    }
    if (fast) {
        slow = slow.next;
    }
    while (slow) {
        if (slow.val != reverse_head.val) {
            return false;
        }
        slow = slow.next;
        reverse_head= reverse_head.next;
    }
    return true;
};
