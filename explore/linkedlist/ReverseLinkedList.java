package linkedlist;

public class ReverseLinkedList {

    public ListNode reverseList(ListNode head) {
        if (head == null) return head;
        ListNode preN = null, currentN = head, nextN = head.next;
        while (nextN != null) {
            currentN.next = preN;
            preN = currentN;
            currentN = nextN;
            nextN = nextN.next;
        }
        currentN.next = preN;
        return currentN;
    }

    public ListNode reverseListRecursion (ListNode head) {
        if (head == null || head.next == null) return head;
        return helper(null, head);
    }

    public ListNode helper (ListNode pre, ListNode current) {
        ListNode next = current.next;
        current.next = pre;
        if (next == null) return current;
        return helper(current, next);
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode (int val) { 
        this.val = val; 
    }
    ListNode (int val, ListNode next) { 
        this.val = val; this.next = next; 
    }
}
